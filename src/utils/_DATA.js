let activeSites = [
  {
    image: url('../images/mernBlog.png'),
    title: "MERN Blog",
    description: "A Blog built off of the MERN stack. Uses redux, passport and jwt for improved functionality. Mongo Atlas is used for data storage. Styled with bootstrap 4.",
    link: "https://www.cortescorner.com",
    tech: ['react', 'redux', 'mongodb', 'node.js']
  },
  {
    image: url('../images/jsRecipe.png'),
    title: "Javascript Recipe App",
    description: "A recipe making application built off of javascript only. Web pack and babel to optimize functionality. Local storage is used for data. Styled with bootstrap 4 and some custom modifications.",
    link: "https://eager-hermann-f38d2c.netlify.com/",
    tech: ['javascript', 'webpack']
  }
]


export function _getActiveSites (){
  return new Promise ((res, rej) => {
    res({...activeSites})
  })
}

// AWAITING DEPLOYMENT

// {
//   image: "",
//   title: "React/Redux Udacity nanodegree project",
//   description: "A polling application built off of react. Redux is used to optimize functionality. Starting data was provided and new data is stored in redux. Styled with bootstrap 4 and some custom modifications.",
//   link: "",
//   tech: ['react', 'redux']
// }

// AWAITING DEPLOYMENT