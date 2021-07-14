import React from 'react'
import { Link } from 'react-router-dom'
import { Descriptions, Button } from 'antd'

export default function Profile({user}) {
  return (
    <div className='border'>
      <Descriptions  title="Profile" column={1} >
        <Descriptions.Item label="UserName">{user.username}</Descriptions.Item>
        <Descriptions.Item label="Bio">{user.bio}</Descriptions.Item>
        <Descriptions.Item label="Experience">{user.experience}</Descriptions.Item>
        <Descriptions.Item label="Location">{user.location}</Descriptions.Item>
        <Descriptions.Item label="Asking Salary">{user.ask_salary}</Descriptions.Item>
        <Descriptions.Item label="Current Position">{user.current_position}</Descriptions.Item>
        <Descriptions.Item label="Desired job title">{user.desired_job_title}</Descriptions.Item>
      </Descriptions>
      <Link to='/editprofile'><Button type='primary'>Edit Profile</Button></Link>
    </div>
  )
}
