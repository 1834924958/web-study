(function () {
  let rem;

  function w() {
    console.log('222');
    const r = document.documentElement;
    let a = r.getBoundingClientRect().width;
    // a < 1300 && (a = 1300)
    // a < 1600 && (a = 1600)
    const isWin = (navigator.platform === 'Win32') || (navigator.platform === 'Windows');
    const isMac = (navigator.platform === 'Mac68K') || (navigator.platform === 'MacPPC') || (navigator.platform === 'Macintosh') || (navigator.platform === 'MacIntel');
    // rem = a * 100 / 1920
    if (isWin) {
      a < 1400 && (a = 1400) ? rem = a * 100 / 1700 : rem = a * 100 / 1920;
    }
    if (isMac) {
      a < 1600 && (a = 1600);
      rem = a * 100 / 1920;
    }
    r.style.fontSize = `${rem}px`;
  }
  let t;
  w();
  window.addEventListener('resize', () => {
    t && clearTimeout(t);
    t = setTimeout(w, 300);
    console.log('111');
  }, false);
}());

