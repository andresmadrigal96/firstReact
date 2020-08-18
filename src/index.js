//const element = document.createElement('h1')//I created a const called element to have an h1, document.create element does it

//element.innerText = 'Hey Juan!!!'//that variable called const has Hey Juan!!! inside, that is thanks to innerText

//const container = document.getElementById('root')//another const called container that gets the id from index.html

//container.appendChild(element)//this container has the element, thanks to it we got the id and now we can see the element 

/*import React from 'react'//Imma use React, so I have to call to react
import ReactDOM from 'react-dom'//the same for ReactDom

const user = {
  firstName: 'Andres',
  lastName: 'Madrigal',
  avatar: 'https://img.icons8.com/color/48/000000/crown-pokemon.png'
}

function getName(user){
  return `${user.firstName} ${user.lastName}`
}

function getGretting(user){
  if(user){
    return <h1>Hey {getName(user)}</h1>
  }
  else{
    return <h1>Hey stranger</h1>
  }
}

const element = (
  <div>
    <h1>{getGretting(user)}</h1>
    <img src={user.avatar}/>
  </div>
)//this is react with jsx... very simple to understand if I know a little bit about js
const container = document.getElementById('root')//I am doing the same but here is with react

/*const name = 'Juan'
const element = <h1>Hey {name}!!!</h1>
this is to call a variable in an element 
*/

/* 
const user = {
  firstName: 'Andres',
  lastName: 'Madrigal',
  avatar: ''
}
an object with some attributes

function getName(user){
  return `${user.firstName} ${user.lastName}`
}
a function to get that objet and to return its attributes

const element = <h1>Hey {getName(user)}</h1>
this is to call that function
*/

//ReactDom.render(__thing__,__where__)*/
import React from 'react'//Imma use React, so I have to call to react
import ReactDOM from 'react-dom'//the same for ReactDom
import App from './components/App.js'

const container = document.getElementById('root')//I am doing the same but here is with react

ReactDOM.render(<App/>,container)//this is to put them in html