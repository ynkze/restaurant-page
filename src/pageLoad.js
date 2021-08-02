import gordonRamsay from './images/gordon.png'

const pageLoad = (() => {
    let content = document.querySelector('#content')
    content.innerHTML = 
    `<img id="gordon" src=${gordonRamsay} />
    <div id="main"></div>`

})();
