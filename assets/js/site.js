const COD_SITE = {
  pages: {
    atlas: {
      key: 'atlas',
      title: 'Atlas',
      kicker: 'Incoming Intel',
      desc: 'An atlas for all of your Call of Duty information, all in one place',
      hero: 'https://cdn2.steamgriddb.com/hero/0eca12f9569ffde04e01e318ef40cd43.png',
      file: 'md/Atlas.md',
      quote: 'A work in progress atlas for guiding users in search of fun.',
      badge: 'Overview'
    },
    mw: {
      key: 'mw',
      title: 'Modern Warfare',
      kicker: 'Odin Collection',
      desc: 'Version history, menus, visuals, inventories, Warzone triggers, game modes, special events, and WZ camouflages for Modern Warfare.',
      hero: 'https://shared.steamstatic.com/store_item_assets/steam/apps/2000950/library_hero_2x.jpg?t=1677185679',
      file: 'md/MW.md',
      quote: '“We get dirty and the world stays clean. That`s the mission.”',
      badge: 'IW8'
    },
    mwii: {
      key: 'mwii',
      title: 'Modern Warfare II',
      kicker: 'Cortez Collection',
      desc: 'Menus, visuals, private loadouts, exclusive weapons, Warzone 2.0 settings, game modes, Champions Quest values, and DMZ content.',
      hero: 'https://cdn2.steamgriddb.com/hero/8b4bcaeccf864f7508097af0d97429ca.jpg',
      file: 'md/MWII.md',
      quote: '“Be careful who you trust, Sergeant. People you know can hurt you the most.”',
      badge: 'IW9'
    },
    mwiii: {
      key: 'mwiii',
      title: 'Modern Warfare III',
      kicker: 'Jupiter Collection',
      desc: 'Versions, menus, visuals, inventories, zombies story missions, acquisitions, wonder weapons, Warzone 2.0 commands, and more.',
      hero: 'https://cdn2.steamgriddb.com/hero/4971ea42e67e73f2e0dc2546ac114455.jpg',
      file: 'md/MWIII.md',
      quote: '“Take this to hell with you, Captain... Never bury your enemies alive.”',
      badge: 'Jupiter'
    },
    vg: {
      key: 'vg',
      title: 'Vanguard',
      kicker: 'Fore Collection',
      desc: 'Menus, visuals, multiplayer inventories, camouflages, exclusive weapons, zombies inventories, wonder weapons, and zombies camouflages.',
      hero: 'https://cdn2.steamgriddb.com/hero/52ec3baefcf93a558d994e1bcd3b5c3d.jpg',
      file: 'md/VG.md',
      quote: '“Ever heard of Vanguard? I created Vanguard.”',
      badge: 'S4'
    }
  },

  nav: [
    { key: 'home', label: 'News' },
    { key: 'atlas', label: 'Atlas' },
    { key: 'mw', label: 'MW', icon: 'images/ui/MW-icon.png' },
    { key: 'mwii', label: 'MWII', icon: 'images/ui/MWII-icon.png' },
    { key: 'mwiii', label: 'MWIII', icon: 'images/ui/MWIII-icon.png' },
    { key: 'vg', label: 'VG', icon: 'images/ui/VG-icon.png' }
  ]
};

function renderNav(activeKey = 'home') {
  const nav = document.getElementById('site-nav');
  if (!nav) return;

  const renderLink = (item) => `
    <a class="nav-link-item nav-link-${item.key} ${item.key === activeKey ? 'active' : ''}" href="${pageUrl(item.key)}">
      ${
        item.icon
          ? `<img class="nav-game-icon" src="${assetUrl(item.icon)}" alt="${item.label}">`
          : `<span>${item.label}</span>`
      }
    </a>
  `;
  const links = COD_SITE.nav.map(renderLink).join('');

  nav.innerHTML = `
    <div class="cod-nav-inner">
      <div class="brand">
        <div>
          <div class="brand-mark">Call of Duty</div>
          <div class="brand-title">Atlas</div>
        </div>
        <div class="brand-sub">COD Intel</div>
      </div>

      <div class="nav-links">${links}</div>

      <div class="nav-actions">
        <a class="nav-link-item" href="#main-content">Skip to Intel</a>
        <a class="nav-cta" href="${pageUrl('atlas')}">Atlas Home</a>
      </div>

      <button class="mobile-toggle" id="mobile-toggle" aria-label="Open navigation">☰</button>
    </div>

    <div class="mobile-menu" id="mobile-menu">
      <div class="mobile-stack">
        ${links}
        <a class="nav-cta" href="atlas.html">Atlas Home</a>
      </div>
    </div>
  `;

  const toggle = document.getElementById('mobile-toggle');
  const menu = document.getElementById('mobile-menu');
  if (toggle && menu) {
    toggle.addEventListener('click', () => menu.classList.toggle('open'));
  }
}

function isHomePage() {
  return document.getElementById('home-root') !== null;
}

function rootPrefix() {
  return isHomePage() ? './' : '../';
}

function pageUrl(key) {
  const map = {
    home: '',
    atlas: 'Atlas/',
    mw: 'MW/',
    mwii: 'MWII/',
    mwiii: 'MWIII/',
    vg: 'VG/'
  };
  return rootPrefix() + map[key];
}

function assetUrl(path) {
  return rootPrefix() + path.replace(/^\.?\//, '');
}

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/<[^>]+>/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function escapeHtml(text) {
  return text.replace(/[&<>"']/g, ch => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  })[ch]);
}

function preprocessMarkdown(md) {
  const prefix = rootPrefix();

  return md
    .replace(/^!!! note\s+(.+)$/gm, () => `\n### Note\n`)
    .replace(/^!!! info\s+(.+)$/gm, () => `\n### Info\n`)
    .replace(/\{\d+%:\d+%\}/g, '')
    .replace(/\{\d+px:\d+px\}/g, '')
    .replace(/!\[\]\(\.\/images\//g, `![](${prefix}images/`)
    .replace(/\]\(\.\/images\//g, `](${prefix}images/`);
}

function transformRenderedContent(container) {
  const headings = [...container.querySelectorAll('h2, h3')];
  headings.forEach(h => {
    const id = slugify(h.textContent);
    if (id) h.id = id;
  });

  [...container.querySelectorAll('li')].forEach((li, index) => {
    const code = li.querySelector('code');
    if (!code) return;

    const command = code.textContent.trim();
    if (command.length < 4) return;

    const clone = li.cloneNode(true);

    const codeInClone = clone.querySelector('code');
    if (codeInClone) codeInClone.remove();

    const description = clone.textContent.trim();

    const infoId = `command-info-${index}`;
    const hasDescription = !!description;

    const card = document.createElement('div');
    card.className = 'command-card';
    card.innerHTML = `
      <div class="command-main">
        <div class="command-label-row">
          <div class="command-label">Command</div>
          ${
            hasDescription
              ? `<button class="command-info-btn" type="button" aria-expanded="false" data-info-target="${infoId}">i</button>`
              : ''
          }
        </div>

        <div class="command-text-wrap">
          <div class="command-text">${escapeHtml(command)}</div>
          <button class="expand-btn" type="button" aria-expanded="false">Show more</button>
        </div>

        ${
          hasDescription
            ? `<div class="command-info-pop" id="${infoId}" hidden>
                <div class="command-info-title">Info</div>
                <div class="command-info-body">${escapeHtml(description)}</div>
              </div>`
            : ''
        }
      </div>

      <button class="copy-btn command-copy" data-copy="${escapeHtml(command)}" aria-label="Copy command">
        <span class="copy-btn-text">Copy</span>
      </button>
    `;

    li.replaceWith(card);
  });

  [...container.querySelectorAll('.command-copy')].forEach(btn => {
    btn.addEventListener('click', async () => {
      const value = btn.getAttribute('data-copy');
      try {
        await navigator.clipboard.writeText(value);
        const old = btn.innerHTML;
        btn.innerHTML = '<span class="copy-btn-text">Copied</span>';
        btn.classList.add('copied');
        setTimeout(() => {
          btn.innerHTML = old;
          btn.classList.remove('copied');
        }, 1200);
      } catch (err) {
        console.error(err);
      }
    });
  });

  [...container.querySelectorAll('.command-info-btn')].forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-info-target');
      const pop = document.getElementById(targetId);
      if (!pop) return;

      const isOpen = !pop.hasAttribute('hidden');

      [...container.querySelectorAll('.command-info-pop')].forEach(el => {
        el.setAttribute('hidden', '');
      });
      [...container.querySelectorAll('.command-info-btn')].forEach(el => {
        el.setAttribute('aria-expanded', 'false');
      });

      [...container.querySelectorAll('.expand-btn')].forEach(btn => {
      btn.addEventListener('click', () => {
        const wrap = btn.closest('.command-text-wrap');
        if (!wrap) return;

        wrap.classList.toggle('expanded');
        const expanded = wrap.classList.contains('expanded');
        btn.setAttribute('aria-expanded', expanded ? 'true' : 'false');
        btn.textContent = expanded ? 'Show less' : 'Show more';
      });
    });

      if (!isOpen) {
        pop.removeAttribute('hidden');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });

  document.addEventListener('click', e => {
    if (e.target.closest('.command-card')) return;

    [...container.querySelectorAll('.command-info-pop')].forEach(el => {
      el.setAttribute('hidden', '');
    });
    [...container.querySelectorAll('.command-info-btn')].forEach(el => {
      el.setAttribute('aria-expanded', 'false');
    });
  });

  [...container.querySelectorAll('p code')].forEach(code => {
    const text = code.textContent.trim();
    if (text.length < 10 || text.includes(' ')) return;
    code.classList.add('inline-command');
  });

  [...container.querySelectorAll('a[href^="#"]')].forEach(link => {
    link.addEventListener('click', e => {
      const target = container.querySelector(link.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}

function convertEventTables(container) {
  const tables = [...container.querySelectorAll("table")];

  tables.forEach(table => {
    const headerRow = table.querySelector("tr");
    if (!headerRow) return;

    const headers = [...headerRow.querySelectorAll("th, td")].map(cell =>
      cell.textContent.trim()
    );

    const isEventTable =
      headers.includes("Name") &&
      headers.includes("Version") &&
      headers.includes("Icon") &&
      headers.includes("Full command");

    if (!isEventTable) return;

    const rows = [...table.querySelectorAll("tr")].filter(row =>
      row.querySelectorAll("td").length > 0
    );

    const grid = document.createElement("div");
    grid.className = "event-grid";

    rows.forEach(row => {
      const cells = [...row.querySelectorAll("td")];
      if (cells.length < 4) return;

      const name = cells[0]?.textContent?.trim() || "";
      const version = cells[1]?.textContent?.trim() || "";
      const iconImg = cells[2]?.querySelector("img");
      const commandCode = cells[3]?.querySelector("code");

      const icon = iconImg ? iconImg.src : "";
      const command = commandCode
        ? commandCode.textContent.trim()
        : (cells[3]?.textContent?.trim() || "");

      if (!name || !command) return;

      const card = document.createElement("div");
      card.className = "event-card";
      card.innerHTML = `
        <div class="event-header">
          ${
            icon
              ? `<img class="event-icon" src="${escapeHtml(icon)}" alt="${escapeHtml(name)} icon">`
              : `<div class="event-icon event-icon-placeholder"></div>`
          }
          <div>
            <div class="event-title">${escapeHtml(name)}</div>
            <div class="event-version">Version ${escapeHtml(version)}</div>
          </div>
        </div>

        <div class="event-command-wrap">
          <div class="event-command collapsed">${escapeHtml(command)}</div>
          <button class="expand-btn" type="button" aria-expanded="false">Show more</button>
        </div>

        <div class="event-footer">
          <button class="copy-btn command-copy" data-copy="${escapeHtml(command)}" aria-label="Copy command">
            <span class="copy-btn-text">Copy</span>
          </button>
        </div>
      `;
      grid.appendChild(card);
    });

    if (grid.children.length > 0) {
      table.replaceWith(grid);
    }
  });
}

function setupExpandableCommands(container) {
  const blocks = [
    ...container.querySelectorAll('.command-text'),
    ...container.querySelectorAll('.event-command')
  ];

  blocks.forEach(block => {
    const wrap = block.parentElement;
    if (!wrap) return;

    const btn = wrap.querySelector('.expand-btn');
    if (!btn) return;

    const lineHeight = parseFloat(getComputedStyle(block).lineHeight) || 24;
    const collapsedHeight = lineHeight * 3;

    
    block.classList.remove('expanded', 'is-truncated');
    block.classList.add('collapsed');
    btn.classList.remove('hidden');
    btn.textContent = 'Show more';
    btn.setAttribute('aria-expanded', 'false');

    requestAnimationFrame(() => {
      const fullHeight = block.scrollHeight;

      if (fullHeight <= collapsedHeight + 4) {
        block.classList.remove('collapsed');
        btn.classList.add('hidden');
        return;
      }

      block.classList.add('is-truncated');

      btn.addEventListener('click', () => {
        const expanded = block.classList.contains('expanded');

        if (expanded) {
          block.classList.remove('expanded');
          block.classList.add('collapsed');
          btn.textContent = 'Show more';
          btn.setAttribute('aria-expanded', 'false');
        } else {
          block.classList.remove('collapsed');
          block.classList.add('expanded');
          btn.textContent = 'Show less';
          btn.setAttribute('aria-expanded', 'true');
        }
      });
    });
  });
}


function buildTOC(container) {
  const toc = document.getElementById('toc');
  if (!toc) return;
  const headings = [...container.querySelectorAll('h2, h3')].filter(h => h.id);
  if (!headings.length) {
    toc.innerHTML = '<div class="quick-list"><span>No sections detected.</span></div>';
    return;
  }
  toc.innerHTML = `<div class="toc-list">${headings.map(h => `
    <a href="#${h.id}">${h.textContent.replace(/\s+/g, ' ').trim()}</a>
  `).join('')}</div>`;
}

function extractPreview(html) {
  const temp = document.createElement('div');
  temp.innerHTML = html;
  const paras = [...temp.querySelectorAll('p')].map(p => p.textContent.trim()).filter(Boolean);
  return paras[0] || '';
}

async function renderPage(pageKey) {
    showLoader();
    document.body.classList.remove(
    'theme-mw',
    'theme-mwii',
    'theme-mwiii',
    'theme-vg'
  );

  if (pageKey === 'mw') document.body.classList.add('theme-mw');
  else if (pageKey === 'mwii') document.body.classList.add('theme-mwii');
  else if (pageKey === 'mwiii') document.body.classList.add('theme-mwiii');
  else if (pageKey === 'vg') document.body.classList.add('theme-vg');
  const page = COD_SITE.pages[pageKey];
  renderNav(pageKey);
  const shell = document.getElementById('page-root');
  if (!shell || !page) return;

  const jumpLinks = ['overview', 'toc', 'main-content'];
  shell.innerHTML = `
    <section class="hero" style="--hero-image:url('${page.hero}')">
      <div class="hero-grid">
        <aside class="hero-rail">
          <div class="eyebrow">${page.kicker}</div>
          <div class="hero-jumps">
            <a href="#overview-cards">Content Summary</a>
            <a href="#main-content">Incoming Intel</a>
            <a href="#toc-panel">Jump to Sections</a>
          </div>
        </aside>
        <div class="hero-copy">
          <div class="hero-kicker">${page.badge}</div>
          <h1 class="hero-title">${page.title}</h1>
          <p class="hero-desc">${page.desc}</p>
          <div class="hero-quote">${page.quote}</div>
          <div class="hero-actions">
            <a href="#main-content" class="btn-cod">Read Intel</a>
            <a href="#toc-panel" class="btn-cod-alt">View Sections</a>
          </div>
        </div>
      </div>
    </section>

    <div class="page-shell">
      <div class="intel-bar">
        <div>
          <strong>${page.title}</strong> redesign text blah blah blah
        </div>
        <div class="intel-badges">
          <span class="badge-chip">meow</span>
          <span class="badge-chip">meow</span>
          <span class="badge-chip">meow</span>
        </div>
      </div>

      <div class="section-grid">
        <aside class="side-panel" id="toc-panel">
          <h2 class="panel-title">Section Navigation</h2>
          <div id="toc" class="toc-list"><span>Loading…</span></div>
          <div class="promo-panel">
            <div class="note-title">Quick Actions</div>
            <div class="quick-list">
              <a href="${pageUrl('home')}">Back to Home</a>
              <a href="${pageUrl('atlas')}">Open Atlas Hub</a>
              <a href="#main-content">Scroll to Intel</a>
            </div>
          </div>
        </aside>

        <main class="content-panel" id="main-content">
          <div id="overview-cards" class="overview-grid"></div>
          <div id="content" class="article-content">
            <div class="loading-state"><div class="spinner"></div><div>Loading...</div></div>
          </div>
        </main>
      </div>
    </div>
  `;

  try {
    let raw = '';
    try {
      const candidates = [page.file, `./${page.file}`, `${window.location.pathname.replace(/[^/]*$/, '')}${page.file}`];
      let loaded = false;
      for (const candidate of candidates) {
        try {
          const res = await fetch(candidate);
          if (res.ok) {
            raw = await res.text();
            loaded = true;
            break;
          }
        } catch (_) {}
      }
      if (!loaded) throw new Error('Fetch failed');
    } catch (_) {
      const inline = document.getElementById(`md-inline-${page.key}`);
      if (!inline) throw _;
      raw = inline.textContent || inline.innerText || '';
    }
    const processed = preprocessMarkdown(raw);
    const html = marked.parse(processed, { breaks: true, gfm: true });
    const content = document.getElementById('content');
    content.innerHTML = html;

    transformRenderedContent(content);
    convertEventTables(content);
    setupExpandableCommands(content);
    buildTOC(content);
    hideLoader();

    const cards = document.getElementById('overview-cards');
    const h2s = [...content.querySelectorAll('h2')].slice(0, 3);
    const featureImages = [
      'https://static.wikia.nocookie.net/callofduty/images/0/0d/Multiplayer_Reveal_Promo36_MWII.jpg',
      'https://static.wikia.nocookie.net/callofduty/images/2/27/Multiplayer_Promo2_MWIII.jpg',
      'https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/blog/body/vgd/VGD-S2-ANNOUNCEMENT-016.jpg'
      'https://blog.activision.com/content/dam/atvi/activision/atvi-touchui/blog/callofduty/body/MW-S6-Announce-New-Marksman.jpg'
      'https://blog.activision.com/content/dam/atvi/sledgehammer/shg-touchui/blog/feature/2021/screeeen.jpg'
    ];

    cards.innerHTML = h2s.map((h, i) => {
      const p = h.nextElementSibling ? extractPreview(h.nextElementSibling.outerHTML) : page.desc;
      const image = featureImages[i % featureImages.length];

      return `
        <article class="feature-card" style="--card-image:url('${image}')">
          <div class="feature-inner">
            <div class="feature-kicker">${page.badge}</div>
            <div class="feature-title">${h.textContent}</div>
            <p class="feature-text">${escapeHtml((p || page.desc).slice(0, 140))}</p>
          </div>
        </article>
      `;
    }).join('');
  } catch (err) {
    document.getElementById('content').innerHTML = `<div class="error-state">Failed to load page content.</div>`;
    console.error(err);
  }
}

function showLoader() {
  const loader = document.getElementById("site-loader");
  if (loader) loader.classList.remove("hidden");
}

function hideLoader() {
  const loader = document.getElementById("site-loader");
  if (!loader) return;

  setTimeout(() => {
    loader.classList.add("hidden");
  }, 150);
}

function renderHome() {
    document.body.classList.remove(
    'theme-mw',
    'theme-mwii',
    'theme-mwiii',
    'theme-vg'
  );
  renderNav('home');
  const root = document.getElementById('home-root');
  if (!root) return;

  const gameCards = Object.values(COD_SITE.pages).map(page => `
    <a class="game-card" href="${pageUrl(page.key)}" style="display:block;">
      <div class="game-thumb" style="--card-image:url('${page.hero}')">
        <div class="game-tag">${page.title}</div>
      </div>
      <div class="game-body">
        <p>${page.desc}</p>
        <span class="btn-cod-alt">Open ${page.badge}</span>
      </div>
    </a>
  `).join('');

  root.innerHTML = `
    <section class="hero home-hero" style="--hero-image:url('https://cdn2.steamgriddb.com/hero/0eca12f9569ffde04e01e318ef40cd43.png')">
      <div class="hero-grid">
        <aside class="hero-rail">
          <div class="eyebrow">Call of Duty Intel</div>
          <div class="hero-jumps">
            <a href="#games">Game Archives</a>
            <a href="#features">Site Features</a>
            <a href="${pageUrl('atlas')}">Open Atlas</a>
          </div>
        </aside>
        <div class="hero-copy">
          <div class="hero-kicker">Rebuilt</div>
          <h1 class="hero-title">Call of Duty Atlas</h1>
          <p class="hero-desc">A new blog styled redesign of the original Atu Atlas</p>
          <div class="hero-actions">
            <a href="#games" class="btn-cod">Browse Games</a>
            <a href="${pageUrl('atlas')}" class="btn-cod-alt">Open Intel Hub</a>
          </div>
        </div>
      </div>
    </section>

    <div class="home-shell">
      <div class="intel-bar">
        <div><strong>Redesign -</strong> redesigned the entire site to feel a lot like an official COD page</div>
        <div class="intel-badges">
          <span class="badge-chip">Inspired by official COD blogs</span>
          <span class="badge-chip">Markdown based</span>
          <span class="badge-chip">Improved Responsiveness</span>
        </div>
      </div>

      <section class="home-panel" id="games">
        <div class="section-heading">
          <div>
            <h2>Page Info</h2>
            <p>Jump into COD game info with commands, events, camos, and other stuff all redesigned for Atlas</p>
          </div>
        </div>
        <div class="card-grid">${gameCards}</div>
      </section>

      <section class="home-panel" id="features">
        <div class="section-heading">
          <div>
            <h2>What Changed</h2>
            <p>The site now looks kinda like a COD News/Blog</p>
          </div>
        </div>
        <div class="overview-grid">
          <article class="feature-card" style="--card-image:url('https://blog.activision.com/content/dam/atvi/activision/atvi-touchui/blog/callofduty/feature/mw-launch-touts/MW-FIELDUPGRADES-TOUT.jpg')">
            <div class="feature-inner">
              <div class="feature-kicker">Visual Upgrade</div>
              <div class="feature-title">Blog style layout</div>
              <p class="feature-text">Full-width banners, darker overlays, and overall better design inspired by the official COD site</p>
            </div>
          </article>
          <article class="feature-card" style="--card-image:url('https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/blog/body/MWIII-REVEAL-CARRYFORWARD-010.jpg')">
            <div class="feature-inner">
              <div class="feature-kicker">Utility Upgrade</div>
              <div class="feature-title">Copyable Commands</div>
              <p class="feature-text">The ability to copy commands with a single button lol</p>
            </div>
          </article>
          <article class="feature-card" style="--card-image:url('https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/blog/hero/mwiii/MWIII-PRESEASON-01-TOUT.jpg')">
            <div class="feature-inner">
              <div class="feature-kicker">Structure Upgrade</div>
              <div class="feature-title">Information Side navbar</div>
              <p class="feature-text">Each page now gets a left side section rail so larger pages are much easier to see</p>
            </div>
          </article>
        </div>
      </section>
    </div>
  `;
  hideLoader();
}
