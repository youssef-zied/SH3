import React, { Component } from 'react'
import Example from './Example'
import Experience from './Experience';
import ITExp from './ITexp';
import CV from './CV';
import Identification from './Identification';
import Login from './login'
import DoctorPage from './doctorPage'
import NewPatient from './NewPatient'
import PrescriptionPage from './PrescriptionPage'
import PharmacistPage from './PharmacistPage'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import NewUserDoctor from './NewUserDoctor';
import NewUserPharmacist from './NewUserPharmacist'
import NewUserPatient from './NewUserPatient'
import SelectPatient from './SelectPatient'


export class UserForm extends Component {

  render() {
    return (
      <Router>
        <switch>
          <Route exact path="/" component={Identification}/>
          <Route path="/login/:type" component={Login}/>
          <Route path="/Doctor/:userName" component={DoctorPage}/>
          <Route path="/Pharmacist/:userName" component={PharmacistPage}/>
          <Route path="/PrescriptionPage/:doctorName/:user/:id" component={PrescriptionPage}/>
          <Route path='/NewUserDoctor' component={NewUserDoctor}/>
          <Route path='/NewUserPharmacist' component={NewUserPharmacist}/>
          <Route path='/NewUserPatient' component={NewUserPatient}/>
          <Route path='/SelectPatient/:doctorName' component={SelectPatient}/>


        </switch>
    </Router>

    )
  }
}

export default UserForm
