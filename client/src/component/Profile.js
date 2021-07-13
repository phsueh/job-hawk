import React from 'react'
import { Link } from 'react-router-dom'

export default function Profile({user}) {
  return (
    <div>
      <h2>Profile</h2>
      <p><strong>Username:</strong> {user.username}</p>
       {/* <p>Password: user.password</p> */}
      <p><strong>Bio:</strong> {user.bio}</p>
      <p><strong>Experience:</strong> {user.experience}</p>
      <p><strong>Location:</strong> {user.location}</p>
      <p><strong>Asking Salary:</strong> {user.ask_salary}</p>
      <p><strong>Current position:</strong> {user.current_position}</p>
      <p><strong>Desired job title:</strong> {user.desired_job_title}</p>
      <Link to='/editprofile'>Edit Profile</Link>
    </div>
  )
}
