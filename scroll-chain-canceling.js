/*--------------------------------------
*
* 参考 : https://www.it-swarm-ja.com/ja/javascript/%E3%83%89%E3%82%AD%E3%83%A5%E3%83%A1%E3%83%B3%E3%83%88%E3%81%AE%E3%82%B9%E3%82%AF%E3%83%AD%E3%83%BC%E3%83%AB%E3%82%92%E9%98%B2%E6%AD%A2%E3%81%99%E3%82%8B%E3%81%8C%E3%80%81ios%E3%81%8A%E3%82%88%E3%81%B3android%E3%81%AEweb%E3%82%B5%E3%82%A4%E3%83%88%E3%81%A7div%E8%A6%81%E7%B4%A0%E5%86%85%E3%81%AE%E3%82%B9%E3%82%AF%E3%83%AD%E3%83%BC%E3%83%AB%E3%82%92%E8%A8%B1%E5%8F%AF%E3%81%99%E3%82%8B%E6%96%B9%E6%B3%95/1070766806/
* スクロールしたくない要素.backdrop このうえにある要素はスクロールできるように
*
-------------------------------------*/


function handleTouchMove(event) {
  const [backdrop] = document.getElementsByClassName('backdrop');
  const isScrollingBackdrop = backdrop === event.target;

  isScrollingBackdrop ? event.preventDefault() : event.stopPropagation();
}

window.addEventListener('touchmove', handleTouchMove, { passive: false });