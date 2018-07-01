// SELECTORS
const bookTitleSelector = 'h1#bookTitle';
const btnContainerSelector = 'div#imagecol > div.wtrButtonContainer';

// STYLING
const btnStyle = `width:100%;height:28px;background:darkmagenta;font-family:inherit;font-size:small;border:none;margin-bottom:10px;border-radius:2px;color:white;cursor:pointer`;
const btnTitle = 'Search on Libgen';

// SEARCH URL
const searchURL = bookTitle => `http://gen.lib.rus.ec/search.php?req=${escape(bookTitle)}&column=title`;

// BOOK INFORMATION
const bookTitle = document.querySelector(bookTitleSelector).childNodes[0].textContent.trim();
const bookBtnContainer = document.querySelector(btnContainerSelector);

// BUTTON
const libgenBtn = new Element('button');
libgenBtn.textContent = btnTitle;
libgenBtn.setAttribute('style', btnStyle);
libgenBtn.addEventListener('click', () => window.open(searchURL(bookTitle), '_blank'));

// INIT
bookBtnContainer.parentNode.insertBefore(libgenBtn, bookBtnContainer);