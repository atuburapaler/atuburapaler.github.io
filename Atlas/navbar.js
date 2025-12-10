document.addEventListener("DOMContentLoaded", () => {
  const navbarHTML = `
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <div class="container-fluid justify-content-center">
      <ul class="navbar-nav">
        <li class="nav-item"><a class="nav-link" href="/Atlas.html">Atlas</a></li>
        <li class="nav-item"><span class="text-secondary d-none d-lg-inline">|</span></li>
        <li class="nav-item"><a class="nav-link" href="/Atlas/MW.html">MW</a></li>
        <li class="nav-item"><a class="nav-link" href="/Atlas/MWII.html">MWII</a></li>
        <li class="nav-item"><a class="nav-link" href="/Atlas/MWIII.html">MWIII</a></li>
        {{ 
          '<li class="nav-item"><a class="nav-link" href="/Atlas/VG.html"><img src="https://blz-contentstack-images.akamaized.net/v3/assets/bltf408a0557f4e4998/bltdbe988a11f72d788/6179f1c61bb8c23cf8bbe9c4/VanguardGold.svg" alt="VG"></a></li>'
        }}
      </ul>
    </div>
  </nav>
  <br class="d-block d-lg-none" />
  <br class="d-block d-lg-none" />
  <br class="d-block d-lg-none" />
  <br class="d-block d-lg-none" />
  <br class="d-block d-lg-none" />
  <br class="d-block d-lg-none" />
  <br class="d-block d-lg-none" />
  </div>
  </nav>
`;
document.body.insertAdjacentHTML("afterbegin", navbarHTML);
});
