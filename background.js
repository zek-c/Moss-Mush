chrome.tabs.executeScript({
  code: `
    const allElements = document.querySelectorAll('*');
    allElements.forEach(el => {
      const style = window.getComputedStyle(el);
      if (style.color !== 'rgb(255, 255, 255)' && style.color !== 'rgb(0, 0, 0)') {
        el.style.color = '#474b3a';
      }
      if (style.backgroundColor !== 'rgb(255, 255, 255)' && style.backgroundColor !== 'rgb(0, 0, 0)') {
        el.style.backgroundColor = '#474b3a';
      }
      if (style.color === 'rgb(255, 255, 255)') {
        el.style.color = '#b1b4ad';
      }
      if (style.backgroundColor === 'rgb(255, 255, 255)') {
        el.style.backgroundColor = '#b1b4ad';
      }
      if (style.color === 'rgb(0, 0, 0)') {
        el.style.color = '#282b18';
      }
      if (style.backgroundColor === 'rgb(0, 0, 0)') {
        el.style.backgroundColor = '#282b18';
      }
    });
  `
});
