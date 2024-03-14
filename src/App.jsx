import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Count from './coundtar'
import Counter from './coundtar'
import Users from './users'
import Friends from './friends'
import Friend from './friend'

function App() {
const Dok = () => {
  alert('button to cliked')
}
  return (
    <>
      <h1>Vite + React</h1>
      <Student></Student>
      <Person></Person>
      <Counter></Counter>
      <Users></Users>
      <Friends></Friends>
      <Friend></Friend>
        <button onClick={Dok}>clake me</button>
    </>
  )
}
function Person(){
  return <h3>i am a parson</h3>
}
function Student() {
  const age = 15;
  const many = 30;
  return <h4>i am a new student</h4>
}


export default App
