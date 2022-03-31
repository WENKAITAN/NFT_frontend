import React, {useState} from 'react'

function ClassForm() {
    const [formData, setFormData] = useState({
        firstName: '',
        middleName: '',
        lastName: '',
        email: '',
        departmentName: '',
        className: ''
      })
    
      const {firstName, middleName, lastName, email, departmentName, className} = formData
      const handleChange = (e) => {
        console.log(e.target)
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
            departmentName: '',
            className: ''
        })
      }
  return (
    <section className="heading">
        <h1>Register Class Form</h1>
        <section className="form">
          <form onSubmit={handleSubmit}>
              <div className="form-group">
                  <label >Instructor's first name</label>
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
                  <label >Instructor's middle name</label>
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
                  <label >Instructor's last name</label>
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
                  <label >Instructor's email address</label>
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
                  <label >Department's name</label>
                  <input 
                      type="text" 
                      id="deptName" 
                      name="departmentName" 
                      value={departmentName} 
                      className="form-control" 
                      placeholder="Enter department name"
                      onChange={handleChange}
                  />
              </div>
              <div className="form-group">
                  <label >Class's name</label>
                  <input 
                      type="text" 
                      id="className" 
                      name="className" 
                      value={className} 
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
    </section>
  )
}

export default ClassForm