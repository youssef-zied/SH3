import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createPrescription } from '../store/actions/prescriptionAction'

export class PrescriptionPage extends Component {
    constructor(){
        super();
        this.state = {
            posology:'',
            hour:'',
            Intake:[],
            PosologyNumber:0,
            term: "",
            validatedDrugs:[],
            drugName : [
                { name: 'Inibrex200'},
                { name: 'Hypoten100'},
                { name: 'Avlocardyl40'},
                { name: 'Aspirine500'},
                { name: 'Levofloxacine500'},
                { name: 'Augmentin500'},
                { name: 'Amoxicilline500'},
                { name: 'Efferalgan1000'},
                { name: 'VitamineC500'},
                { name: 'Levothyrox100'},
                { name: 'Piroxen20'}
            ],
        };
    }

    handleChange = (e) => {
        this.setState({
            term:e.target.name,
        })
    }

    AddPosology = (e)=>{
        switch (e) {
            case 'Add':
            this.setState({
                Intake:[...this.state.Intake, {ind:this.state.PosologyNumber, posology:this.state.posology, hour:this.state.hour}],
                PosologyNumber: this.state.PosologyNumber+1,
                hour:''               
            })
            break;

            case 'Del':
            this.setState({
                PosologyNumber: this.state.PosologyNumber-1
            })
            break;
        }
        
        console.log(e, this.state, this.state.Intake.posology)
    }

    handleChange1 = e => {
        this.setState({
            [e.target.name]:e.target.value,
        })
        console.log(this.state.posology, e.target.value)}

    removePosology = ind => {
        this.state.Intake.splice(ind,1)
        this.forceUpdate();
    }

    addDrug = ()=>{
        this.setState({
            validatedDrugs:[...this.state.validatedDrugs, {drug:this.state.term, posology:[this.state.Intake.map(x=>x.posology)]}],
            term:'',
            
        })
        console.log(this.state.validatedDrugs);
        this.state.Intake.splice(0,this.state.Intake.length)
    }

    handleSubmit =()=>{
        this.props.createPrescription(this.state)
    }

    render() {
        console.log(this.props)
        let drugName = this.state.drugName,
        term = this.state.term.trim().toLowerCase();

        if(term.length > 0){
            drugName = drugName.filter( (l)=>{
            return l.name.toLowerCase().match( term );
        });
    }
    if(term.length>3){
        var listGroup=drugName.map( (l) => {
            return <button onClick={this.handleChange} name={l.name} className="list-group-item" key={l.name}>{l.name}</button>
        })
    }

    return (
      <div>
          <div className="jumbotron text-center">
                <h1>SkyHealth</h1>
                <p>Prescription Page</p> 
                <hr/>
                <div className='form-inline'>
                    <h5 className='form-control absoluteCenter'>Dr {this.props.match.params.doctorName}</h5>
                    <h5 className='form-control absoluteCenter'>{this.props.match.params.user} - {this.props.match.params.id}</h5>
                    <h5 className='form-control absoluteCenter'>Date and Time</h5>
                    
                </div>
            </div>
            <div class="container-fluid">
                <div className='row content'>
                    <div className="col-sm-3 sidenav" style={{backgroundColor:'rgb(20, 91, 168)', height:'100%'}}>
                        <div className="form-group">
                            <label for="sel1" style={{color:'white'}}> History of prescriptions </label>
                            <select className="form-control" id="sel1">
                                <option>1-March-2019</option>
                                <option>29-January-2019</option>
                                <option>16-August-2018</option>
                                <option>4-April-2017</option>
                            </select>
                        </div>
                    </div>
                
                    <div className="col-sm-9">
                        <h4><small>NEW PRESCRIPTION</small></h4>
                        <hr/>

                        <div className="col-md-9 col-md-offset-4">
                            <div className='input-group md-2'>
                                <h4 style={{marginRight:10}}>Search new drug</h4>
                                <input style={{minWidth:350}} 
                                    className="input-group form-control" 
                                    value={this.state.term} 
                                    onChange={e => this.setState({term: e.target.value})} 
                                    placeholder="Drug Name"/>

                                <hr/>
                            </div>
                            <br/>
                            <div className="input-group md-2">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="basic-addon1">Posology</span>
                                </div>
                                <input
                                name='posology'
                                value={this.state.posology}
                                onChange={(e)=>this.handleChange1(e)}                              
                                type="text" className="form-control" placeholder="Posology" aria-label="Posology" aria-describedby="basic-addon1"/>
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="basic-addon1">Hour</span>
                                </div>
                                <input
                                name='hour'
                                value={this.state.hour}
                                onChange={(e)=>this.handleChange1(e)} 
                                type="text" className="form-control" placeholder="Hour" aria-label="Hour" aria-describedby="basic-addon1"/>
                                <div className="input-group-append">
                                    <button onClick={()=>this.AddPosology('Add')} className="btn btn-primary" type="button" id="button-addon2">Add</button>
                                    <button onClick={()=>this.AddPosology('Del')}  className="btn btn-danger" type="button" id="button-addon2">Del</button>
                                </div>
                            </div>

                            <ul className="list-group" style={{fontWeight:"bold", fontSize:40}}>
                            {listGroup}
                            <div style={{fontWeight:'normal', fontSize:15}}>
                                {this.state.Intake.map(x=>
                                    <div className='input-group'>
                                        <h5 className="form-control">{x.posology} at {x.hour} </h5>
                                        <div className="input-group-append">
                                            <button                                         
                                            onClick={()=>this.removePosology(x.ind)}
                                            className='btn btn-outline-danger'><i className="far fa-times-circle"></i></button>
                                        </div>
                                        
                                    </div>
                                        )}
                            </div>
                            <div class="btn-group btn-group-justified">
                                <a onClick={()=>this.addDrug()}  href="#" class="btn btn-primary">Validate Drug</a>
                                <a href="#" class="btn btn-danger">Delete Drug</a>
                            </div>
                            </ul>
                            {this.state.validatedDrugs.map(x=>
                                <div>
                                    {x.drug}
                                    
                                </div>
                                )}
                            
                            
				        </div>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}
const mapStateToProps = (state) => {
    return {
    drugList:state.drugs.drugList
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        createPrescription:(prescription)=>dispatch(createPrescription(prescription))
    }
}


export default connect (mapStateToProps, mapDispatchToProps)  (PrescriptionPage)
