document.addEventListener("DOMContentLoaded", () => {
  const mwImageLink = '<li class="nav-item justify-content-center align-items-center d-flex"><a class="nav-link" href="/Atlas/MW.html"><img src="https://blz-contentstack-images.akamaized.net/v3/assets/bltf408a0557f4e4998/blt492af3d8b35e50b5/60db86bb2d26525ef67ac5a4/call-of-duty-mw.svg" alt="MW"></a></li>';
  const mwIiImageLink = '<li class="nav-item justify-content-center align-items-center d-flex"><a class="nav-link" href="/Atlas/MWII.html"><img src="https://blz-contentstack-images.akamaized.net/v3/assets/bltf408a0557f4e4998/blt8f53b3687511367c/62abb5b3e5f7e7444f49f012/MWII_LOGO_SQUARE_SVG.svg" alt="MWII"></a></li>';
  const mwIiiImageLink = '<li class="nav-item justify-content-center align-items-center d-flex"><a class="nav-link" href="/Atlas/MWIII.html"><img src="https://blz-contentstack-images.akamaized.net/v3/assets/bltf408a0557f4e4998/blt8168cbdbbc05770d/64cc38e2c45759d767a1f84f/Jupiter_Coming_Soon-Bnet_Game-Icon_Shop-EN-Vector-01.svg" alt="MWIII"></a></li>';
  const vgImageLink = '<li class="nav-item justify-content-center align-items-center d-flex"><a class="nav-link" href="/Atlas/VG.html"><img src="https://blz-contentstack-images.akamaized.net/v3/assets/bltf408a0557f4e4998/bltdbe988a11f72d788/6179f1c61bb8c23cf8bbe9c4/VanguardGold.svg" alt="VG"></a></li>';

  const navbarHTML = `
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div class="container-fluid justify-content-center">
        <ul class="navbar-nav">
          ${mwImageLink}
          ${mwIiImageLink}
          ${mwIiiImageLink}
          ${vgImageLink}
          <li class="nav-item"><a class="nav-link" href="/Atlas.html">Atlas</a></li>
        </ul>
      </div>
    </nav>
  `;
  document.body.insertAdjacentHTML("afterbegin", navbarHTML);
});
