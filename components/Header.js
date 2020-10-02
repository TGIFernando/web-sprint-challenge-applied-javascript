// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {
    //delcaring all vars
    const mainDiv = document.createElement('div')
    const date = document.createElement('span')
    const title = document.createElement('h1')
    const temp = document.createElement('span')

    //mapping all vars
    mainDiv.appendChild(date)
    mainDiv.appendChild(title)
    mainDiv.appendChild(temp)

    //applying classes
    mainDiv.classList.add('header')
    date.classList.add('date')
    temp.classList.add('temp')

    //adding text content
    date.textContent = 'MARCH 28, 2020'
    title.textContent = 'Lambda Times'
    temp.textContent = '98°'

    //returning mainDiv
    return mainDiv
}
//appending it to the page
const makeHead = Header()
const header1 = document.querySelector('.header-container')
header1.appendChild(makeHead)