import React, { Component } from 'react'
import { connect } from 'react-redux'

export class SelectPatient extends Component {
    constructor(props) {
        super(props)
        this.state={
            patientId:'',
            patientId2:null,
            patientName:null
        }
    }

    handleSubmit=()=>{
        console.log(this.state.patientId2,'      Patient Id :', this.state.patientId)
        if (this.state.patientId2[0]!=null) {
            this.props.history.push('/PrescriptionPage/'+this.props.match.params.doctorName+'/'+this.state.patientId2[0].name+'/'+this.state.patientId2[0].id)
        }
        else { alert('Please select a valid patient Id or Username')}
    }

    handleChange=(e)=>{
        
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    handleSearchPatient=()=>{
        this.state.patientId2=this.props.userList.filter ((l)=>{
            return l.id.match(this.state.patientId)          
        })
        
        console.log(this.state.patientId2)
        if (this.state.patientId2!='') {
        switch (this.state.patientId2[0].id) {
            case null:
            alert('No corresponding username')
            break;
            case this.state.patientId :
            this.setState({
                patientName:this.state.patientId2[0].name
            })
            break;
            default:
            alert('No corresponding username')
            break;
            }}
            else {alert('No corresponding username')}
        }

  render() {
    return (
      <div>
          <div className="jumbotron text-center">
                <h1>SkyHealth</h1>
                <p>Doctor Control Page</p> 
                <hr/>
                <div className='form-inline'>
                    <h5 className='form-control absoluteCenter'>Dr {this.props.match.params.doctorName}</h5>
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
                                <a class="nav-link" href="#">Select Patient</a>
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

            <div className="input-group mb-3" style={{marginLeft:'25%', marginTop:20, width:'50%'}}>
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">Patient id</span>
                </div>
                <input 
                onChange={(e)=>this.handleChange(e)}
                name='patientId'
                value={this.state.patientId}
                type="text" className="form-control" placeholder="Patient id" aria-label="Patientid" aria-describedby="basic-addon1"></input>
                <div className="input-group-append">
                    <button 
                    onClick={()=>this.handleSearchPatient()}
                    className="input-group-text btn btn-primary" id="basic-addon2"> Search </button>
                </div>               
            </div>
            <div className="input-group mb-3" style={{marginLeft:'25%', width:'50%'}}>
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">Patient Name</span>
                </div>
                <input 
                onChange={(e)=>this.handleChange(e)}
                name='patientName'
                value={this.state.patientName}
                type="text" class="form-control" placeholder="Patient firstname or lastname" aria-label="Patientid" aria-describedby="basic-addon1"></input>
                <div className="input-group-append">
                    <button class="input-group-text btn btn-primary" id="basic-addon2"> Search </button>
                </div>               
            </div>
            <div className='absoluteCenter'>
                <button style={{margin:5}}
                onClick={()=>this.props.history.push('/PrescriptionPage')}
                className='btn btn-primary'><i class="fas fa-bed"></i> New Patient </button>
                <button 
                onClick={()=>{this.handleSubmit()}}
                className='btn btn-success'> Confirm Patient </button>
            </div>
        
      </div>
    )
  }
}

const mapStateToProps=(state)=>{
    return {
        userList:state.auth.userList
    }
}

export default connect (mapStateToProps) (SelectPatient)
