import React, { useState } from 'react'

function Enroll() {

  const [formData, setFormData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    email: '',
    studentId: '',
    chosenClass: ''
  })

  const {firstName, middleName, lastName, email, studentId, chosenClass} = formData
  const handleChange = (e) => {
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
                  <input 
                      type="text" 
                      id="studentId" 
                      name="studentId" 
                      value={studentId} 
                      className="form-control" 
                      placeholder="Enter your student Id"
                      onChange={handleChange}
                  />
              </div>
              <div className="form-group">
                  <input 
                      type="text" 
                      id="chosenClass" 
                      name="chosenClass" 
                      value={chosenClass} 
                      className="form-control" 
                      placeholder="Enter your class name"
                      onChange={handleChange}
                  />
              </div>
              <div className="form-group">
                  <button type="submit" className='btn btn-block'>Submit</button>
              </div>
          </form>
        </section>
    </div>
  )
}

export default Enroll