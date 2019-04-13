import React, { Component } from 'react'
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Login from './login'

export class Identification extends Component {
constructor(props) {
  super(props);
  this.state={
    choice:'',
    loginType:''
  }
}


handleChoice = (LoginType) => {
  // this.setState({
  //   choice:LoginType
  // })
  // Go to /LoginType
  this.props.history.push("/login/"+LoginType)
}

  render() {
    const { loginType }=this.state
    const values = { loginType }

    /* switch (this.state.choice) {
      case 'Doctor':
      return (
        <Login loginType='Doctor'/>
      )
      break;
      case 'Pharmacist':
      return (
        <Login loginType='Pharmacist'/>
      )
      break;
      case 'Patient':
      return (
        <Login loginType='Patient'/>
      )
    } */


    return (
      <div>

        <div className="jumbotron text-center">
          <h1>SkyHealth</h1>
          <p>Login in as ...</p> 
        </div>

        <div style={{position:'relative', marginLeft:'25%', marginTop:'5%'}}>
          <button 
          onClick={()=>this.handleChoice('Doctor')}
          type="button" className="btn btn-primary btn-lg" style={{margin:'5%'}}><i class="fas fa-user-md"></i> Doctor </button>       
          <button 
          onClick={()=>this.handleChoice('Pharmacist')}
          type="button" className="btn btn-primary btn-lg" style={{margin:'5%'}}><i class="fas fa-capsules"></i> Pharmacist </button>
          <button 
          onClick={()=>this.handleChoice('Patient')}
          type="button" className="btn btn-primary btn-lg" style={{margin:'5%'}}><i class="fas fa-bed"></i> Patient </button>       
        </div>

      </div>
    )
  }
}

export default Identification

