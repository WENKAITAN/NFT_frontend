import React from 'react'

function Popup(props){
   
    let fName = "Jhon"
    let lName ="Doe"
    let mName = ""
    let email = "jhondoe@gmail.com"
    let emplid = "12345678"
    const handleChange = (e) => {
        console.log(e.target, )
        
      }
    return(props.trigger) ?(
        <div className='popup'>
            <div className='popup-inner'>
            <form>
              <div className= "form-group">
              <label for = "firstName">First name</label>
                  <input 
                      type="text" 
                      id="firstName" 
                      name="firstName" 
                      value={fName} 
                      className="form-control" 
                      placeholder="Enter your first name"
                      
                  />
              </div>
              <div className="form-group">
              <label for = "middleName">Middle name</label>
                  <input 
                      type="text" 
                      id="middleName" 
                      name="middleName" 
                      value={mName}
                      className="form-control" 
                      placeholder="Enter your middle name(optional)"
                      
                  />
              </div>
              <div className="form-group">
              <label for = "lastName">Last name</label>
                  <input 
                      type="text" 
                      id="lastName" 
                      name="lastName" 
                      value={lName} 
                      className="form-control" 
                      placeholder="Enter your last name"
                     
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
                     
                  />
              </div>
              <div className="form-group">
              <label for = "studentId">Emplid</label>
                  <input 
                      type="text" 
                      id="studentId" 
                      name="studentId" 
                      value={emplid} 
                      className="form-control" 
                      placeholder="Enter your student Id"
                     
                  />
              </div>
                <br/>
                <button className='changeProfileButton' onClick={() => props.setTrigger(false)}>Save</button>
                {props.children}
            </form>
               
            </div>
        </div>
    ): "";
}
export default Popup