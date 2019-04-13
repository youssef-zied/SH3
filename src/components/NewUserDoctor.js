import React, { Component } from 'react'
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { connect } from 'react-redux'
import { createUser } from '../store/actions/projectActions'


export class NewUserDoctor extends Component {
    constructor(){
        super()
        this.state={
            firstName:'',
            lastName:'',
            email:'',
            password:'',
            adress:'',
            phoneNumber:'',
            city:'',
            ctate:'',
            zip:'',
            specialty:'',
            physiciansOrderNumber:'',
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.createUser(this.state)
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]:e.target.value
        })       
    }

  render() {
    return (
        <div>

            <div className="jumbotron text-center">
                <h1>SkyHealth</h1>
                <p>Doctor New User Registration</p> 
                <hr/>
            </div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="#">SkyHealth</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>

            <form style={{minWidth:'60%', margin:'auto 20%', marginBottom:20, marginTop:20}}>
            <div className="form-row">
                <div className="form-group col-md-6">
                    <label htmlFor="inputEmail4">Firstname</label>
                    <input onChange={(e)=>this.handleChange(e)}  type="text" className="form-control" id="firstName" placeholder="Firstname"/>
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="inputPassword4">Lastname</label>
                    <input onChange={(e)=>this.handleChange(e)} type="text" className="form-control" id="lastName" placeholder="Lastname"/>
                </div>
            </div>
            <div className="form-row">
                <div className="form-group col-md-6">
                    <label htmlFor="inputEmail4">Email</label>
                    <input onChange={(e)=>this.handleChange(e)} type="email" className="form-control" id="email" placeholder="Email"/>
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="inputPassword4">Password</label>
                    <input onChange={(e)=>this.handleChange(e)} type="password" className="form-control" id="password" placeholder="Password"/>
                </div>
            </div>
            <div className="form-row">
                <div className="form-group col-md-9">
                    <label htmlFor="inputEmail4">Adress</label>
                    <input onChange={(e)=>this.handleChange(e)} type="text" className="form-control" id="adress" placeholder="1234 Main st"/>
                </div>
                <div className="form-group col-md-3">
                    <label htmlFor="inputPassword4">Phone number</label>
                    <input onChange={(e)=>this.handleChange(e)} type="text" className="form-control" id="phoneNumber" placeholder="Phone number"/>
                </div>
            </div>
            <div className="form-row">
                <div className="form-group col-md-6">
                    <label htmlFor="inputCity">City</label>
                    <input onChange={(e)=>this.handleChange(e)} type="text" className="form-control" id="city"/>
                </div>
                <div className="form-group col-md-4">
                    <label htmlFor="inputState">State</label>
                    <select onChange={(e)=>this.handleChange(e)} id="state" className="form-control">
                        <option selected>Choose...</option>
                        <option>...</option>
                    </select>
                </div>
                <div className="form-group col-md-2">
                    <label htmlFor="inputZip">Zip</label>
                    <input onChange={(e)=>this.handleChange(e)} type="text" className="form-control" id="zip"/>
                </div>
            </div>
            <div className="form-row">
                <div className="form-group col-md-6">
                    <label htmlFor="Specialty">Specialty</label>
                    <input onChange={(e)=>this.handleChange(e)} type="text" className="form-control" id="specialty" placeholder="Specialty"/>
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="inputPassword4">Order of Physician n°</label>
                    <input onChange={(e)=>this.handleChange(e)} type="text" className="form-control" id="physicansOrderNumber" placeholder="Order of physicians number"/>
                </div>
            </div>
            <div className="form-group">
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="gridCheck"/>
                    <label className="form-check-label" htmlFor="gridCheck">
                        Remember me
                    </label>
                </div>
            </div>
            <button 
            onClick={(e)=>this.handleSubmit(e)}
            type="submit" className="btn btn-primary">Sign in</button>
            </form>

        </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createUser:(user)=>dispatch(createUser(user))
    }
}

export default connect (null, mapDispatchToProps)(NewUserDoctor)
