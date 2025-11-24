document.addEventListener("DOMContentLoaded", () => {
  const navbarHTML = `
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top shadow-sm">
    <div class="container-fluid justify-content-center">
      <ul class="navbar-nav">
        <li class="nav-item"><a class="nav-link" href="/Atlas.html">Atlas</a></li>
        <li class="nav-item"><span class="text-secondary d-none d-md-inline">|</span></li>
        <li class="nav-item"><a class="nav-link" href="/Atlas/MW.html">MW</a></li>
        <li class="nav-item"><a class="nav-link" href="/Atlas/MWII.html">MWII</a></li>
        <li class="nav-item"><a class="nav-link" href="/Atlas/MWIII.html">MWIII</a></li>
        <li class="nav-item"><a class="nav-link" href="/Atlas/VG.html">VG</a></li>
      </ul>
    </div>
  </nav>
  <br class="d-block d-md-none" />
  <br class="d-block d-md-none" />
  <br class="d-block d-md-none" />
  <br class="d-block d-md-none" />
  <br class="d-block d-md-none" />
  `;

  document.body.insertAdjacentHTML("afterbegin", navbarHTML);
});