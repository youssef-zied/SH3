import React from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class Example extends React.Component {
  constructor(props) {
    super(props);
  }
  handleChange = (e)=> {
    e.preventDefault();
    this.setState({
      [e.target.name]:e.target.value
    });
  }
  
  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    //this.props.onSubmit(this.state);
    this.props.nextStep();
  }
  onChange=(e)=>{
    let file=e.target.files;
    console.log(file)
    let reader= new FileReader();
    reader.readAsDataURL(file[0]);
    reader.onload=(e)=>{
      console.log(e.target.result)
    }
    
  }
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  }

  render() {
    const {values, handleChange}=this.props;

    return (
      <div className='card' style={{width:800, position:'relative', left:200, right:100}}>
        <div className="jumbotron text-center">
          <h1>My mini CV in two clics</h1>
          <p>Make your CV in 5 minutes and Print!</p> 
        </div>
      <Form className='card-body' style={{width:800}}>
        <div className='card-header bg-info'>Personnal Data</div>
    
          <div className='row'>
            <Col sm={6} className='width-fitbox'>
              <Input 
              name="firstName"
              value={this.props.values.firstName} 
              onChange={handleChange('firstName')} 
              className='width-fitbox' type="text" id="fistName" placeholder="First Name" />
            </Col>
            
            <Col sm={6} className='width-fitbox'>
              <Input 
              onChange={handleChange('lastName')}
              value={this.props.values.lastName} 
              className='width-fitbox' type="text" name="lastName" id="Last Name" placeholder="Last Name" />
            </Col>
          </div>
            <div className="form-check-inline" style={{position:'relative', left:500, width:200}}>
              <label className="form-check-label">
                <input onChange={handleChange('gender')} value='Male' type="radio" className="form-check-input" name="gender"/> Male
              </label>
            </div>
          <div className="form-check-inline" >
            <label className="form-check-label">
              <input onChange={handleChange('gender')} value='Female' type="radio" className="form-check-input" name="gender"/> Female
            </label>
          </div>

          <Col sm={10} className='width-fitbox'>
            <Input onChange={handleChange('adress')}
            value={this.props.values.adress}
            className='block w-100' type="text" name="adress" id="Adress" placeholder="Adress" />
          </Col>

          <div className='row'>
            <Col sm={4} className='width-fitbox'>
              <Input onChange={handleChange('phoneNumber')}
              value={this.props.values.phoneNumber}
              className='width-fitbox' type="text" name="phoneNumber" id="Phone number" placeholder="Phone number" />
            </Col>

            <Col sm={8} className='width-fitbox'>
              <Input onChange={handleChange('email')}
              value={this.props.values.email}
              className='width-fitbox' type="email" name="email" id="email" placeholder="Email" />
            </Col>
          </div>
          <div className="form-group">
          <label htmlFor="sel1">Field of Activity:</label>
          <select onChange={handleChange('activityField')} className="form-control" id="sel1" name='activityField'>
            <option> Medicine </option>
            <option> Healthcare </option>
            <option> Lawyer </option>
            <option> Engineering </option>
            <option> Economics </option>
            <option> Agriculture </option>
            <option> Education </option>
            <option> Technician </option>
            <option> Manual works </option>
          </select>
          </div>
          <Col sm={10} className='form-group absoluteCenter'>
            <Input onChange={handleChange('job')}
            value={this.props.values.job}
            className='form-control' type="text" name="job" id="Job" placeholder="Job" />
          </Col>
          <div className='form-group'>
            <Label for="comment">Summarize your personnality</Label>
            <br/>
          </div>
          <div>
            <textarea onChange={handleChange('personnality')}
            value={this.props.values.personnality} 
            className='form-control width-fitbox' rows='5' id='comment'></textarea>
          </div>

        <FormGroup className='form-group'>
        <div>
          <Label for="exampleFile"> Choose a Picture (Please put the correct URL) </Label>
        </div>
          <Col className='width-fitbox' sm={10}>
            <Input 
            type="text" 
            name="file" 
            id="exampleFile" 
            onChange={handleChange('Picture')}/>
            <FormText color="muted">
            </FormText>
          </Col>
        </FormGroup>
        <FormGroup className='form-group'>
        <div>
          <Label for="exampleFile"> Choose a Picture (Please put the correct URL) </Label>
        </div>
          <Col className='width-fitbox' sm={10}>
            <Input 
            type="file" 
            name="file2" 
            id="exampleFile" 
            onChange={(e)=>this.setState({[values.FileName]:e.target.files[0]})}/>
            <FormText color="muted">
            </FormText>
          </Col>
        </FormGroup>

        <hr color='#CCD4FE'/>
        <FormGroup check row>
          <button 
            type="button" 
            className="btn btn-secondary btn-block"
            style={{position:'relative', left:79, width:600}}
            onClick={(e)=> this.onSubmit(e)} > Next Step 
          </button>
        </FormGroup>
      </Form>
      </div>
    );
  }
}