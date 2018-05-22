// dropdown init
const drd = document.querySelector('.dropdown-trigger');
M.Dropdown.init(drd, {});

// collapsible init
const collap = document.querySelector('.collapsible');
M.Collapsible.init(collap, {});

// slider init
const showcase = document.querySelector('.slider');
M.Slider.init(showcase, {
  indicators: false,
  height: 500,
  interval: 6000,
  duration: 720
});

// sidenav menu init
const sidenav = document.querySelector('.sidenav');
M.Sidenav.init(sidenav, {});
