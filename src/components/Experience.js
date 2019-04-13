import React, { Component } from 'react'
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


export default class Experience extends React.Component {
constructor (props) {
    super(props)
    this.state={
    }
}
    
    
/*addNewExperience = (e) => {
    this.setState ({
        experience:[...this.state.experience,
            {
                job:this.state.job,
                enterprise:this.state.enterprise,
                commentary:this.state.commentary,
            }]      
    },()=>{       
        this.props.handleChange('experience')
    });
        console.log(this.state)
        this.setState({
            job:'',
            enterprise:'',
            commentary:'',
        })
}*/

addNewExperience = e => {
    this.props.handleChangeExp([this.state]);
}

handleChange = (e) => {
    let value = e.target.value;
    this.setState ({
        [e.target.name] : value,
    },()=>{
        console.log(value);
        console.log(this.state);
    })

}

prevStep = (e)=>{
    this.props.prevStep();
}

onSubmit =(e)=>{
    this.props.nextStep();
}

  render() {
      const {values, handleChange, prevStep}=this.props;
    return (
        <div className='card' style={{width:800, position:'relative', left:200, right:100}}>
            <div className="jumbotron text-center">
                <h1>My experiences</h1>
                <p>Mention your experiences</p> 
            </div>
            <Form className='card-body' style={{width:800}}>
                <div className='card-header bg-info'>Experience</div>
                
                    <Col sm={10} className='width-fitbox'>
                        <Input 
                        name="job"
                        value={this.state.job}
                        onChange={(e)=>this.handleChange(e)} 
                        className='width-fitbox' type="text" id="Job" placeholder="Job" />
                    </Col>
                    <Col sm={10} className='width-fitbox'>
                        <Input 
                        name="enterprise"
                        value={this.state.enterprise}
                        onChange={(e)=>this.handleChange(e)} 
                        className='width-fitbox' type="text" id="Enterprise" placeholder="Enterprise" />
                    </Col>
                    <Col sm={10} className='width-fitbox'>
                        <Input 
                        name="commentary"
                        value={this.state.commentary}
                        onChange={(e)=>this.handleChange(e)} 
                        className='width-fitbox' type="text" id="Commentary" placeholder="Year and Commentary" />
                    </Col>
                    <FormGroup check row className='btn-group' style={{width:622, position: 'relative', left:73}}>
                        <button 
                            type="button" 
                            className="btn btn-success"
                            onClick={(e)=> this.addNewExperience(e)} > Add New Experience 
                        </button>
                        <button 
                            type="button" 
                            className="btn btn-secondary"
                            onClick={(e)=> this.onSubmit(e)} > Continue 
                        </button>
                        <button 
                            type="button" 
                            className="btn btn-danger"
                            onClick={(e)=>this.prevStep(e)} > Back 
                        </button>
                    </FormGroup>
            </Form>
        </div> 
    )
  }
}

