document.addEventListener("DOMContentLoaded", () => {
  const navbarHTML = `
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <div class="container-fluid justify-content-center">
      <ul class="navbar-nav">
        <li class="nav-item"><a class="nav-link" href="/Atlas.html">Atlas</a></li>
        <li class="nav-item"><span class="text-secondary d-none d-lg-inline">|</span></li>
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
`;

const mwImageLink = '<li class="nav-item justify-content-center align-items-center d-flex"><a class="nav-link" href="/Atlas/MW.html"><img src="https://blz-contentstack-images.akamaized.net/v3/assets/bltf408a0557f4e4998/blt492af3d8b35e50b5/60db86bb2d26525ef67ac5a4/call-of-duty-mw.svg" alt="MW"></a></li>';
const mwIiImageLink = '<li class="nav-item justify-content-center align-items-center d-flex"><a class="nav-link" href="/Atlas/MWII.html"><img src="https://blz-contentstack-images.akamaized.net/v3/assets/bltf408a0557f4e4998/blt8f53b3687511367c/62abb5b3e5f7e7444f49f012/MWII_LOGO_SQUARE_SVG.svg" alt="MWII"></a></li>';
const mwIiiImageLink = '<li class="nav-item justify-content-center align-items-center d-flex"><a class="nav-link" href="/Atlas/MWIII.html"><img src="https://blz-contentstack-images.akamaized.net/v3/assets/bltf408a0557f4e4998/blt8168cbdbbc05770d/64cc38e2c45759d767a1f84f/Jupiter_Coming_Soon-Bnet_Game-Icon_Shop-EN-Vector-01.svg" alt="MWIII"></a></li>';

const updatedHTML = navbarHTML.replace('</ul>', mwIiiImageLink + mwIiImageLink + mwImageLink + '</ul>');
document.body.insertAdjacentHTML("afterbegin", updatedHTML);
});
