import React, { Component } from 'react'
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export class ITExp extends Component {

    prevStep=e=>{
        this.props.prevStep();
    }
    nextStep=e=>{
        this.props.nextStep();
    }

  render() {
      const {values, handleChange}=this.props;
      let itType = ['CC', 'Java', 'J2EE', 'HTML5', 'CSS3', 'Javascript', 'PHP5', 'SQL', 'Symfony', 'Hibernate', 'LDA'];
      let itForm = itType.map(x=>
            <Form style={{width:600, position:'relative', left:100}}>
                <label htmlfor="customRange"> {x} </label>
                <input type="range" 
                className="custom-range" 
                id="customRange" 
                name="pointCC"
                value={this.props.values[x]}
                onChange={handleChange(x)}/>
                <hr/>
            </Form>
        );

    return (
      <div className='card'  style={{width:800, position:'relative', left:200, right:100}}>
            <div className='card-body'>
                <div className="jumbotron text-center">
                <h1>IT Experiences</h1>
                <p>Autoevaluate yourself!</p> 
                </div>
            </div>
            {itForm}

            <FormGroup check row className='form btn-group' style={{width:622, position: 'relative', left:30, margin:50}}>
                <button 
                    type="button" 
                    className="btn btn-secondary"
                    onClick={(e)=> this.nextStep(e)} > Continue 
                </button>
                <button 
                    type="button" 
                    className="btn btn-danger"
                    onClick={(e)=>this.prevStep(e)} > Back 
                </button>
            </FormGroup>
      </div>
    )
  }
}

export default ITExp
