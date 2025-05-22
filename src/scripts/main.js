'use strict';

document.addEventListener('click', () => {
  const titles = [...document.querySelectorAll('.title')];

  titles.forEach((title) => {
    const childElement = title.nextElementSibling;

    title.style.cursor = 'pointer';

    if (childElement && childElement.tagName === 'ul') {
      title.style.display = 'none';
    }

    title.addEventListener('click', (e) => {
      // eslint-disable-next-line no-constant-condition
      childElement.style.display =
        childElement.style.display === 'none' ? 'block' : 'none';

      e.stopPropagation();
    });
  });
});
