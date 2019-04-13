import React, { Component } from 'react'

export class NewUserPharmacist extends Component {
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
            state:'',
            zip:'',
            pharmacistOrderNumber:'',
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
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
                <p>Pharmacist New User Registration</p> 
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
                    <label htmlFor="firstName">Firstname</label>
                    <input onChange={(e)=>this.handleChange(e)} type="text" className="form-control" id="firstName" placeholder="Firstname"/>
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="lastName">Lastname</label>
                    <input onChange={(e)=>this.handleChange(e)} type="text" className="form-control" id="lastName" placeholder="Lastname"/>
                </div>
            </div>
            <div className="form-row">
                <div className="form-group col-md-6">
                    <label htmlFor="email">Email</label>
                    <input onChange={(e)=>this.handleChange(e)} type="email" className="form-control" id="email" placeholder="Email"/>
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="password">Password</label>
                    <input onChange={(e)=>this.handleChange(e)} type="password" className="form-control" id="password" placeholder="Password"/>
                </div>
            </div>
            <div className="form-row">
                <div className="form-group col-md-9">
                    <label htmlFor="adress">Adress</label>
                    <input onChange={(e)=>this.handleChange(e)} type="text" className="form-control" id="adress" placeholder="1234 Main st"/>
                </div>
                <div className="form-group col-md-3">
                    <label htmlFor="phone number">Phone number</label>
                    <input onChange={(e)=>this.handleChange(e)} type="text" className="form-control" id="phoneNumber" placeholder="Phone number"/>
                </div>
            </div>
            <div className="form-row">
                <div className="form-group col-md-6">
                    <label htmlFor="city">City</label>
                    <input onChange={(e)=>this.handleChange(e)} type="text" className="form-control" id="city"/>
                </div>
                <div className="form-group col-md-4">
                    <label htmlFor="state">State</label>
                    <select onChange={(e)=>this.handleChange(e)} id="state" className="form-control">
                        <option selected>Choose...</option>
                        <option>...</option>
                    </select>
                </div>
                <div className="form-group col-md-2">
                    <label htmlFor="zip">Zip</label>
                    <input onChange={(e)=>this.handleChange(e)} type="text" className="form-control" id="zip"/>
                </div>
            </div>
            <div className="form-row">
                <div className="form-group col-md-6">
                    <label htmlFor="pharmacist order number">Order of Pharmacist n°</label>
                    <input onChange={(e)=>this.handleChange(e)} type="text" className="form-control" id="pharmacistOrderNumber" placeholder="Order of Pharmacist number"/>
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
            type="submit" className="btn btn-primary">Sign up</button>
            </form>
        
      </div>
    )
  }
}

export default NewUserPharmacist
