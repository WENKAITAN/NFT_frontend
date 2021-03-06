import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
function Enroll() {

  const [formData, setFormData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    email: '',
    essay: '',
  })

  const {firstName, middleName, lastName, email, essay} = formData
  const handleChange = (e) => {
    console.log(e.target, )
    setFormData({
        ...formData,
        [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData)

    //send a post request to backend

    setFormData({
        firstName: '',
        middleName: '',
        lastName: '',
        email: '',
        studentId: '',
        chosenClass: ''
    })
  }
  return (
    <div className="heading">
      <h1>Student Enrollment</h1>
      <section className="form">
          <form onSubmit={handleSubmit}>
              <div className="form-group">
              <label for = "firstName">First name</label>
                  <input 
                      type="text" 
                      id="firstName" 
                      name="firstName" 
                      value={firstName} 
                      className="form-control" 
                      placeholder="Enter your first name"
                      onChange={handleChange}
                  />
              </div>
              <div className="form-group">
              <label for = "middleName">Middle name</label>
                  <input 
                      type="text" 
                      id="middleName" 
                      name="middleName" 
                      value={middleName}
                      className="form-control" 
                      placeholder="Enter your middle name(optional)"
                      onChange={handleChange}
                  />
              </div>
              <div className="form-group">
              <label for = "lastName">Last name</label>
                  <input 
                      type="text" 
                      id="lastName" 
                      name="lastName" 
                      value={lastName} 
                      className="form-control" 
                      placeholder="Enter your last name"
                      onChange={handleChange}
                  />
              </div>
              <div className="form-group">
              <label for = "email">Email</label>
                  <input 
                      type="text" 
                      id="email" 
                      name="email" 
                      value={email} 
                      className="form-control" 
                      placeholder="Enter your email"
                      onChange={handleChange}
                  />
              </div>
              <div className="form-group">
                <label for = "essay">Essay</label>
                <textarea 
                    maxlength="1000" 
                    rows="4"                       
                    type="text" 
                    id="essay" 
                    name="essay" 
                    value={essay} 
                    className="form-control" 
                    placeholder="Enter your application essay"
                    onChange={handleChange}>
                </textarea>
              </div>
              <div>
                <label for = "upfile">Upload file:</label><br/>
                <input type="file" id="upfile" name="upfile"></input>
                
             </div>
             <br/> 
              <div className="form-group">
                  <Button type="submit" className='btn btn-block'>Submit</Button>
              </div>
          </form>
        </section>
    </div>
  )
}

export default Enroll