import React from 'react'
import {useState, useEffect} from 'react'
import '../index.css';
function Dashboard() {

    const[announcements, setAnnouncements] = useState({
      announcements: '',
      courses:''
    })

 /*  const changeAnnouncement = (e) =>
   { e.preventDefault;
     const {announcements} = this.useState;
     const newAnnouncement = 'test';
     setAnnouncements({
       announcements:[...this.useState.announcements, newAnnouncement]
     })
    }*/

  return (
    <>
      <section className="heading">
        <ul>
          <li><h3>Courses</h3></li>
          <li>CMP 464 Software Engineering</li>
          <li>CMP 362 Programming 2</li>
          <li>CMP 405 Data Structures</li>
        </ul>
      <div className='Announcements'>
        <ul>
          <li><h3>Announcements</h3></li>
          <li>Announcement 2</li>
          <li>Announcement 3</li>
          <li></li>
        </ul>
      </div>
    </section>
    </>
  )
}

export default Dashboard