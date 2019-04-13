import React, { Component } from 'react'
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import DoctorPage from './doctorPage'
import PrescriptionDispensation from './PharmacistPage';
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

export class login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userName:'',
      password:'',
      userName2:''
    }
  }

  loginValidation = (e) => {
    e.preventDefault();
    const type = this.props.match.params.type;
    const userName=this.state.userName;
    var userName2=this.props.userList.filter((l)=> {
      return l.name.match(this.state.userName)
    })
    console.log(userName2)
  
    console.log(this.state,"PROPS", this.props)
    switch (userName2[0].password) {
      case this.state.password:
      this.props.history.push("/" + type+'/'+userName)
      break;
      default:
      alert('Wrong Password !')
      console.log(userName2[0].password)
      break;
    }
  }

  newUser = (e) => {
    e.preventDefault();
    const type=this.props.match.params.type;
    this.props.history.push("/"+'NewUser'+type)
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]:e.target.value
    })
  }

  render() {
    const type = this.props.match.params.type;
    return (
      <div>
        <div className="jumbotron text-center">
          <h1>SkyHealth</h1>
          <p>{type} - Login</p>
        </div>

        <Form className='card-body' style={{ width: 800, position: 'relative', marginLeft: '25%' }}>
          <Label>User Name</Label>
          <input
          onChange={(e)=>this.handleChange(e)}
            type='text'
            name='userName'
            value={this.state.userName}
            className='form-control'>
          </input>
          <br />
          <Label>Password</Label>
          <input
            onChange={(e)=>this.handleChange(e)}
            type='password'
            name='password'
            className='form-control'
            placeholder='Password'>
          </input>
          <br />
          <div className="checkbox">
            <input type="checkbox"></input><Label>Remember me</Label>
          </div>
          <div style={{ width: 800, position: 'relative', marginLeft: '30%' }}>
            <button
              onClick={(e) => this.loginValidation(e)} className="btn btn-primary" style={{ margin: '5%' }}>Submit</button>
            <button 
            onClick={(e)=>this.newUser(e)}
            className="btn btn-primary" style={{ margin: '5%' }}>New User</button>
          </div>
        </Form>

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    userList:state.auth.userList
  }
}


export default connect (mapStateToProps)(login)
