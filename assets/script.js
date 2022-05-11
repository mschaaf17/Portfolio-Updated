const hero = document.querySelector('.hero')
const slider = document.querySelector('.slider')
const headline = document.querySelector('.headline')



const tl = new TimelineMax()

tl.fromTo(hero, 1, {height: "0%"}, {height: '80%', ease: Power2.easeInOut})
.fromTo(hero, 1.2, {width: '100%'}, {width: '80%', ease: Power2.easeInOut})


.fromTo(slider, 1.2, {x: "-100%"}, {x: "0%", ease: Power2.easeInOut})



//fun fact button information
var funFactBtn = document.getElementById('funFactBtn')
//use api to gather infomation or use api for albums
var randomFacts = ["I love to play tennis.",
"I enjoy driving around on my moped.",
"I have lived in Utah my entire life.", 
"I have two dogs."
]
//change fun fact after each click
function changeFacts(e) {
    funFactBtn= e.target
    console.log('clicked')
    var funFact = document.getElementById('funFact');
    var randomTrivia= Math.floor(Math.random() * (randomFacts.length));
    //you can do text.content or innerHTML
    funFact.textContent= randomFacts[randomTrivia]     
}  
funFactBtn.addEventListener("click", changeFacts);