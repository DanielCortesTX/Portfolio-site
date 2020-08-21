
let activeSites = [
  {
    image: require('../images/mernBlog.png'),
    title: "MERN Blog",
    description: "A Blog built off of the MERN stack. Uses redux, passport and jwt for improved functionality. Mongo Atlas is used for data storage. Styled with bootstrap 4.",
    link: "https://www.cortescorner.com/",
    github: "https://github.com/DanielCortesTX/Cortes-Blog",
    tech: ['react', 'redux', 'mongodb', 'node.js']
  },
  {
    image: require('../images/jsRecipe.png'),
    title: "Javascript Recipe App",
    description: "A recipe making application built off of javascript only. Web pack and babel to optimize functionality. Local storage is used for data. Styled with bootstrap 4 and some custom modifications.",
    link: "https://eager-hermann-f38d2c.netlify.com/",
    github: "https://github.com/DanielCortesTX/recipe-app-challenge",
    tech: ['javascript', 'webpack']
  },
  {
    image: require('../images/udacityRedux.png'),
    title: "React/Redux Udacity project",
    description: "A polling application built off of react. Redux is used to optimize functionality. Starting data was provided and new data is stored in redux. Styled with bootstrap 4 and some custom modifications.",
    link: "https://udacity-would-you.herokuapp.com/",
    github: "https://github.com/DanielCortesTX/udacity-would-you-project",
    tech: ['react', 'redux']
  }
  // {
  //   title: "Quote Me On It",
  //   description: "A MERN app to keep record of your favorite quotes",
  //   link: "https://immense-depths-28700.herokuapp.com/",
  //   tech: ['react', 'redux']
  // }
]


export function getActiveSites (){
  return new Promise ((res, rej) => {
    setTimeout(() => res(activeSites), 1000)
  })
}

// AWAITING DEPLOYMENT



// AWAITING DEPLOYMENT