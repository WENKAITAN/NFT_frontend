import React from 'react'
import {useState, useEffect} from 'react'
import '../index.css';
function Dashboard() {

    const[studentData,setStudentData] = useState({
      announcements: '',
      courses:''
    })
    const {announcements,courses} = studentData

   
    

  return (

        <ul>
          <li><h3>Courses</h3></li>
          <li>CMP 464 Software Engineering</li>
          <li>CMP 362 Programming 2</li>
          <li>CMP 405 Data Structures</li>
        </ul>
      </div>
      <div className='Announcements'>
        <ul>
          <li><h3>Announcements</h3></li>
          <li>Announcement 1</li>
          <li>Announcement 2</li>
          <li>Announcement 3</li>
          <li>{announcements}</li>
          <li>{announcements}</li>
          <li>{announcements}</li>
        </ul>
      </div>
      </div>
    </section>
    </>
  )
}

export default Dashboard