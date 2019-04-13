import React, { Component } from 'react'
import { connect } from 'react-redux'

export class PharmacistPage extends Component {
    constructor() {
        super();
        this.state = {
            term: '',
            drugs:'',
            selectPrescription:null,
            matchedPrescription:{},
            patientIdList:null,
            patientId:null
        }
    }

//FUNCTIONS
    handleChange = (e) => {
        this.setState({
            term: e.target.value,
        })
        console.log(this.state.term)
    }

    handleSubmit = (e) => {
        console.log(e)
        this.setState({
            selectPrescription:true,
            patientIdList:null,
            patientId:null
        })
    }

    selectPrescription = (e) => {
        e.preventDefault();
        this.setState({ 
            term: e.target.name,
            selectPrescription:true,
            patientIdList:[],
            patientId:[]
        });
        console.log(this.state.patientId, '//' , 'STATE : ' , this.state);
        console.log('PRESCRIPTIONS : ',this.props.prescriptions)
    }
//RENDER
    render() {
        console.log(this.state.term)
        this.state.patientId = this.props.prescriptions.map (x=> {return ({patient:x.patientId})})
        if(this.props.prescriptions.patientId==term) {
        var Press = this.props.prescriptions.filter(x=>x.patientId===this.state.term).map (x=> {
            return(
            {patient:x.patientId,
            drugName:x.drugName,
            duration:x.duration,
            doctorName:x.doctorName,
            patientName:x.patientName
            })          
    })}
//        console.log(this.props.prescriptions)
//      console.log(patientId)
//        let patientId = this.state.patientId,
        let term = this.state.term.trim().toLowerCase();

        if (term.length > 0) {
            this.state.patientId = this.state.patientId.filter((l) => {
                return l.patient.toLowerCase().match(term);
            });
        }
        if (term.length > 3 & this.state.selectPrescription===false) {
            this.state.patientIdList = this.state.patientId.map((l) => {
                return <button style={{ fontSize: 14, width:"90%", margin:'auto 5%' }}
                    onClick={(e) => { this.selectPrescription(e, l.patient)}} name={l.patient} className="list-group-item" key={l.patient}>{l.patient}</button>
            })
        }
        if (this.state.selectPrescription==true) {
            var PrescriptionList = Press.map((l)=> {
                return (
                <div>
                    <li className='form-control'>{l.patient} - {l.drugName} - {l.duration}</li>

                </div>)
            })
        }

        return (
            <div>
                <div className="jumbotron text-center">
                    <h1>SkyHealth</h1>
                    <p>Pharmacist Page</p>
                    <hr />
                    <div className='form-inline'>
                        <h5 className='form-control absoluteCenter'>{this.props.match.params.userName}</h5>
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
                                <a class="nav-link" href="#">New Prescription</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Stock Management</a>
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
{/*SEARH PATIENT ID AND PRESCRIPTIOON ID BAR*/}
                <form className='form-inline'>
                    <div style={{ minWidth: '40%', marginLeft: '5%', marginRight: '5%' }}>
                        <div className="input-group mb-3" >
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon1">Patient id </span>
                            </div>
                            <input
                                onChange={(e) => this.handleChange(e)}
                                onClick={()=>this.setState({selectPrescription:false, term:''})}
                                value={this.state.term}
                                type="text" className="form-control" placeholder="Patient Id" aria-label="PatientId" aria-describedby="basic-addon1" />
                            <div class="input-group-append">
                                <button 
                                onClick={(e)=>this.handleSubmit(e)}
                                class="btn btn-outline-secondary" type="button" id="button-addon2">Submit</button>
                            </div>
                        </div>
                        
                    </div>

                    <div className="input-group mb-3" style={{ minWidth: '40%', marginLeft: '5%', marginRight: '5%' }}>
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1">Prescripton id </span>
                        </div>
                        <input type="text" className="form-control" placeholder="Prescription Id" aria-label="PrescriptionId" aria-describedby="basic-addon1" />
                        <div class="input-group-append">
                            <button class="btn btn-outline-secondary" type="button" id="button-addon2">Search</button>
                        </div>
                    </div>

                </form>

                <div>{this.state.patientIdList}</div>

                <div className="card" style={{ width: '80%', marginLeft: '7%', marginBottom: '10%' }}>
                    <div className='card-header' style={{ backgroundColor: 'rgb(120, 30, 30)', color: 'white' }}>
                        M e d i c a l - P r e s c r i p t i o n
                    </div>

                    <form className='form-inline'>
                    
                        <div className="card-body">
                            <div className='card text-center' style={{ minWidth: '30%', marginRight:'5%', marginLeft:'5%' }}>
                                <h5 className="card-header">Dr. {(this.state.selectPrescription)&&  Press[0].doctorName}</h5>
                                <p className="card-text">Doctor Professional Id</p>
                                <a href="#" class="btn btn-primary">Doctor Profile</a>
                            </div>
                        </div>
                        <h5 className='form-control'>Date and Time</h5>

                        <div className="card-body">
                            <div className='card text-center' style={{ minWidth: '30%', marginLeft: '5%', marginRight:'5%' }}>
                                <h5 className="card-header">Patient {(this.state.selectPrescription)&& Press[0].patientName}</h5>
                                <p className="card-text">Adress</p>
                                <a href="#" className="btn btn-primary">Patient Profile</a>
                            </div>
                        </div>
                    </form>
                    <ul style={{ width: '50%', marginLeft: '23.5%', marginRight:'20%' }}>
                        {PrescriptionList}
                    </ul>
                    <div class="card text-center" style={{ width: '40%', marginLeft: '30%', marginBottom: 20 }}>
                        <div class="card-body">
                            <h5 class="card-title">Electronic Signature</h5>
                            <p class="card-text">QR CODE RIGHT HEER</p>
                            <a href="#" class="btn btn-primary">Link to Doctor Profile</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        prescriptions:state.prescription.prescriptions
    }
}

export default connect(mapStateToProps)(PharmacistPage)
