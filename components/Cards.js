// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.
import axios from 'axios'
const cardContain = document.querySelector('.cards-container')

//crating article function
function articleMaker(object) {
    //initalizing vars
    const mainDiv = document.createElement('div')
    const headline = document.createElement('div')
    const authDiv = document.createElement('div')
    const imgDiv = document.createElement('div')
    const img = document.createElement('img')
    const author = document.createElement('span')

    //mapping out vars
    mainDiv.appendChild(headline)
    mainDiv.appendChild(authDiv)
    authDiv.appendChild(imgDiv)
    imgDiv.appendChild(img)
    authDiv.appendChild(author)

    //giving vars classes
    mainDiv.classList.add("card")
    headline.classList.add('headline')
    authDiv.classList.add('author')
    imgDiv.classList.add('img-container')

    //adding text contetnt
    headline.textContent = object.headline
    img.src = object.authorPhoto
    author.textContent = `By: ${object.authorName}`

    //returning MainDiv
    return mainDiv
}

axios.get('https://lambda-times-api.herokuapp.com/articles')
    .then(res => {
        for (let i in res.data.articles) {
            res.data.articles[i].forEach(elm => {
                cardContain.appendChild(articleMaker(elm))
            })
        }
    }).catch(err => {
        console.log(`Error: ` + err)
    })