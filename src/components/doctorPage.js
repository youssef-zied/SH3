import React, { Component } from 'react'
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


export class doctorPage extends Component {

    handleClick=(e)=>{
        this.props.history.push(e.target.name+this.props.match.params.userName)
    }

  render() {
    return (
      <div>
            <div className="jumbotron text-center">
                <h1>SkyHealth</h1>
                <p>Doctor Control Page</p> 
                <hr/>
                <div className='form-inline'>
                    <h5 className='form-control absoluteCenter'>Dr {this.props.match.params.userName}</h5>
                    <h5 className='form-control absoluteCenter'>Date and Time</h5>
                    
                </div>
            </div>

{/* NAVBAR */}
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a class="navbar-brand" href="#">SkyHealth</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item">
                                <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item active">
                                <a 
                                onClick={(e)=>this.handleClick(e)}
                                name='/SelectPatient/'
                                class="nav-link" href="">Select Patient</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">New Prescription</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Drug Database</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Reports</a>
                            </li>
                        </ul>
                            <form class="form-inline my-2 my-lg-0">
                                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                            </form>
                        </div>
                    </nav>

      </div>
    )
  }
}

export default doctorPage
