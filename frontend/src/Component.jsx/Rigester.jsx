import React from 'react'
import '../stlye/Rigester.css'
export default function Rigester() {
  return (
    <div>
       <div class="container">
    <form class="form">
      <h2>Join the Gym Team 💪</h2>

      <label for="name">Full Name</label>
      <input type="text" id="name" name="name" required/>

      <label for="email">Email Address</label>
      <input type="email" id="email" name="email" required/>

      <label for="password">Password</label>
      <input type="password" id="password" name="password" required/>

      <label>Gender</label>
      <div class="gender-options">
        <label><input type="radio" name="gender" value="male" required/> Male</label>
        <label><input type="radio" name="gender" value="female"/> Female</label>
        <label><input type="radio" name="gender" value="other"/> Other</label>
      </div>

      <label for="age">Age</label>
      <input type="number" id="age" name="age" required min="13"/>

      <button type="submit">Register Now</button>
    </form>
  </div>
  </div>
  )
}
