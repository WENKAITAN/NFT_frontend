import React, { useState } from 'react'
import profileLogo from '../profile_pic.png'
import Popup from '../components/Popup'
import '../index.css'


function Profile() {
  
  const {buttonPopup, setButtonPopup} = useState(false);

  let firstName = "Jhon"
  let lastName = "Doe"
  let email="jhondoe@gmail.com"
  let contact ="(929)123-4567"
  let emplId = "12345678"
  let major="Computer Science BS"
  return (
    <div>
      
      <img src={profileLogo} alt="profile picture" width="180" height="180"/>
     
      <hr class='line'/>
      <div className='profile'>
      <br/>
      <div class='profileName'>
        
      <h2 className='pName'>Name: </h2>
      <h1 className='pName' >{firstName}</h1>
      <h1 className='pName'>{lastName}</h1>
      </div>

      <div className='contactInfo'>
      <h2 className='contact'>Major: </h2>
      <h1 className='contact'>{major}</h1>
      </div>

      <div className='contactInfo'>
      <h2 className='contact'>Email: </h2>
      <h1 className='contact'>{email}</h1>
      </div>
    
      <div className='contactInfo'>
      <h2 className='contact'>Phone number: </h2>
      <h1 className='contact'>{contact}</h1>
      </div>

      <div className='contactInfo'>
      <h2 className='contact'>Emplid: </h2>
      <h1 className='contact'>{emplId}</h1>
      </div>
      
      </div>
      <br/>
      <button  onClick={() => setButtonPopup(true)} class='changeProfileButton'>Change profile information</button>

      <Popup trigger={buttonPopup} setTrigger = {setButtonPopup}>
        <p>popup opened</p>
      </Popup>
      </div>
   
  )
}

export default Profile