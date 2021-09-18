// import logo from './logo.svg';
// import './App.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// function App() {
//   return (
//     <div>hello world</div>
//   );
// }

// class App extends Component {
//   render() {
//     // const greeting = "Hi! abc"
//     // const dom = <h1 className="foo">{greeting}</h1>;
//     // return dom;
//     return (
//       // <div>
//       <React.Fragment>
//         <label htmlFor="bar">bar</label>
//         <input type="text" onChange={() => { console.log("I am clicked .") }} ></input>
//       </React.Fragment>
//       // </div>
//     )

//   }

// }

// const App =()=>{

//   return (
//     <div>
//       <Cat/>
//       <Cat/>
//       <Cat/>
//       <Cat/>




//     </div>
//   )
    
// }
// const Cat =()=>{
//   return <div>Meow</div>
// }

// const App =()=>{
//   return (
//     <div>
//       <User name = {"Taro"} age={10}/>
//       <User name = {"hanako"} age={6}/>
//     </div>
//   )
// }
// const User =(props)=>{
//   return <div>Hi!, I am {props.name}!, and {props.age}years old</div>
// }

const App =()=>{
  const profiles = [
    {name:"Taro",age:10},
    {name:"hanako",age:5},
    {name:"aaaaa",afe:5}
  ]
  return (
    <div>
      {
        profiles.map((profile, index)=>{
          return <User name={profile.name} age = {profile.age} key={index}/>
        
        })
      }
    </div>
  )
    
}
const User =(props)=>{
  return <div>Hi!, I am {props.name}!, and {props.age}years old</div>
}

User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired
}

// User.defaultProps = {
//   age:1
// }


export default App;
