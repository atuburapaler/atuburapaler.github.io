marked.setOptions({
    gfm: true,
    breaks: true,
    headerIds: true,
    mangle: false
});

function preprocessRnty(md) {
    let out = md;

    // Comentarios [//]: ()
    out = out.replace(/^ *\[\/\/\]: *\([^)]*\).*$/gm, '');

    // ==mark==
    out = out.replace(/==([^=]+?)==/g, '<mark>$1</mark>');

    // Colores %red% texto %%
    out = out.replace(/%([a-zA-Z#0-9]+)%([\s\S]*?)%%/g, '<span style="color:$1;">$2</span>');

    // Subrayado avanzado !~color;style;type;thickness; texto ~!
    out = out.replace(/!~([\s\S]*?)~!/g, (match, inner) => {
        const parts = inner.split(';');
        const [color, style, type, thickness, ...rest] = parts.map(s => s.trim());
        const text = rest.length ? rest.join(';') : parts[parts.length - 1];
        let css = 'text-decoration-line:underline;';
        if (type === 'both') css = 'text-decoration-line:underline overline;';
        if (type && type !== 'default') css = 'text-decoration-line:' + type + ';';
        if (style && style !== 'default') css += 'text-decoration-style:' + style + ';';
        if (color && color !== 'default') css += 'text-decoration-color:' + color + ';';
        if (thickness && !isNaN(parseInt(thickness))) css += 'text-decoration-thickness:' + thickness + 'px;';
        return `<span style="${css}">${text.trim()}</span>`;
    });

    // Spoilers !> texto
    out = out.replace(/^!>(.*)$/gm, (_, txt) => `<span class="spoiler">${txt.trim()}</span>`);

    // Alineación centrada y derecha
    out = out.replace(/^-> *(.*?) *<-\s*$/gm, '<div class="align-center">$1</div>');
    out = out.replace(/^-> *(.*?) *->\s*$/gm, '<div class="align-right">$1</div>');

    // Admiraciones !! y !!!
    out = out.replace(
        /^!{2,3}\s*(note|info|warning|danger|greentext)?\s*(.*)\n((?:[ \t]{4}.*\n?)*)/gm,
        (_, type, title, body) => {
            const t = (type || 'warning').trim();
            const ttl = (title || '').trim();
            const lines = body.split('\n').filter(l => l.trim()).map(l => l.replace(/^[ \t]{4}/, ''));
            const content = lines.join('<br>');
            const titleHtml = ttl ? `<strong>${ttl}</strong><br>` : '';
            return `<div class="admonition ${t}">${titleHtml}${content}</div>`;
        }
    );

    return out;
}

function buildTOC(container) {
    const headings = Array.from(container.querySelectorAll('h1,h2,h3,h4,h5,h6'));
    if (!headings.length) return;

    const ps = Array.from(container.querySelectorAll('p'));
    ps.forEach(p => {
        const txt = p.textContent.trim();
        const m = txt.match(/^\[TOC([1-6])?\]$/);
        if (!m) return;

        const minLevel = m[1] ? parseInt(m[1], 10) : 1;
        const filtered = headings.filter(h => parseInt(h.tagName[1]) >= minLevel);
        if (!filtered.length) { p.remove(); return; }

        const nav = document.createElement('nav');
        nav.className = 'toc';
        const title = document.createElement('h2');
        title.textContent = 'Table of Contents';
        nav.appendChild(title);

        const rootUl = document.createElement('ul');
        nav.appendChild(rootUl);
        const ulStack = [rootUl];
        let lastLevel = parseInt(filtered[0].tagName[1]);

        filtered.forEach(h => {
            const lvl = parseInt(h.tagName[1]);
            const li = document.createElement('li');
            const a = document.createElement('a');
            if (!h.id) h.id = h.textContent.trim().toLowerCase().replace(/\s+/g, '-');
            a.href = '#' + h.id;
            a.textContent = h.textContent;
            li.appendChild(a);

            if (lvl > lastLevel) {
                const newUl = document.createElement('ul');
                ulStack[ulStack.length - 1].lastElementChild.appendChild(newUl);
                ulStack.push(newUl);
            } else if (lvl < lastLevel) {
                while (ulStack.length > 1 && lvl < lastLevel) { ulStack.pop(); lastLevel--; }
            }
            ulStack[ulStack.length - 1].appendChild(li);
            lastLevel = lvl;
        });

        p.replaceWith(nav);
    });
}

function postProcessImages(container) {
    const imgs = Array.from(container.querySelectorAll('img'));
    imgs.forEach(img => {
        let src = img.getAttribute('src');
        if (!src) return;
        const hashIndex = src.indexOf('#');
        if (hashIndex !== -1) {
            const base = src.slice(0, hashIndex);
            const flag = src.slice(hashIndex + 1);
            img.src = base;
            if (flag === 'left' || flag === 'right') {
                img.style.float = flag;
                img.style.margin = flag === 'left' ? '0 1rem 1rem 0' : '0 0 1rem 1rem';
            }
        }
    });

    // Limpieza de flotantes !;
    container.querySelectorAll('p').forEach(p => {
        if (p.textContent.trim() === '!;') {
            const clearDiv = document.createElement('div');
            clearDiv.style.clear = 'both';
            p.replaceWith(clearDiv);
        }
    });
}

function setupSpoilers(container) {
    container.querySelectorAll('.spoiler').forEach(el => {
        el.addEventListener('click', () => el.classList.toggle('revealed'));
    });
}

// Cargar Markdown
fetch(mdFile)
    .then(r => {
        if (!r.ok) throw new Error("No se pudo cargar el archivo Markdown.");
        return r.text();
    })
    .then(md => {
        const enhanced = preprocessRnty(md);
        const html = marked.parse(enhanced);
        const container = document.getElementById("contenido");
        container.innerHTML = html;

        buildTOC(container);
        postProcessImages(container);
        setupSpoilers(container);
    })
    .catch(e => {
        document.getElementById("contenido").textContent = e.message;
    });
