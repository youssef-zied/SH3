import React, { Component } from 'react'

export class NewPatient extends Component {
  render() {
    return (
        <div>
            <div className="jumbotron text-center">
                <h1>SkyHealth</h1>
                <p>New Patient</p> 
                <hr/>              
                <h5 className='form-control absoluteCenter' style={{width:'25%'}}>Date and Time</h5>
            </div>
            <div className="input-group mb-3" style={{marginLeft:'25%', width:'50%'}}>
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1" style={{paddingRight:44}}>Firstname</span>
                </div>
                <input type="text" className="form-control" placeholder="Firstname" aria-label="Patientid" aria-describedby="basic-addon1"></input>
            </div>
            <div className="input-group mb-3" style={{marginLeft:'25%', width:'50%'}}>
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1" style={{paddingRight:45}}>Lastname</span>
                </div>
                <input type="text" className="form-control" placeholder="Lastname" aria-label="Patientid" aria-describedby="basic-addon1"></input>
            </div>
            <div className="input-group mb-3" style={{marginLeft:'25%', width:'50%'}}>    
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1" style={{paddingRight:54}}>Birthday</span>
                </div>
                <input type="text" className="form-control" placeholder="Birthday" aria-label="Patientid" aria-describedby="basic-addon1"></input>
            </div>
            <div className="input-group mb-3" style={{marginLeft:'25%', width:'50%'}}>    
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1" style={{paddingRight:75}}>Email</span>
                </div>
                <input type="text" className="form-control" placeholder="Email" aria-label="Patientid" aria-describedby="basic-addon1"></input>
            </div>
            <div className="input-group mb-3" style={{marginLeft:'25%', width:'50%'}}>    
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1" style={{paddingRight:9}}>Phone number</span>
                </div>
                <input type="text" className="form-control" placeholder="Phonenumber" aria-label="Patientid" aria-describedby="basic-addon1"></input>
            </div>
            <div className="input-group mb-3" style={{marginLeft:'25%', width:'50%'}}>    
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1" style={{paddingRight:36}}>Nationality</span>
                </div>
                <input type="text" className="form-control" placeholder="Nationality" aria-label="Patientid" aria-describedby="basic-addon1"></input>
            </div>
            <button type='submit' className='btn btn-primary' style={{marginLeft:'25%', width:'50%'}}> Submit </button>
        </div>
    )
  }
}

export default NewPatient
