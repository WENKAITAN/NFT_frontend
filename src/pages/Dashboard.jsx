import React from 'react'
import Header from '../components/Header'
import Profile from './Profile'
function Dashboard() {
  return (
    <div>Dashboard
      <div id='MyCourses'>
        <ul>
          <li>List of courses enrolled</li>
          <li></li>
        </ul>
      </div>
      <div id='Announcements'>
        <ul>
          <li>List of announcements</li>
          <li></li>
        </ul>
      </div>

    </div>
  )
}

export default Dashboard