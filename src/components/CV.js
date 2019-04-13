import React, { Component } from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import axios, {post} from 'axios';

export class CV extends Component {
    /*state={
        experiences:{}
    }*/
  render() {
        const {values}=this.props
        console.log(values)
        console.log(values.experience.length)
        let experiences = values.experience.map(x=>
            <div>
                <h6>
                    Job : {x.job}    
                </h6>
                <h6>
                    Enterprise : {x.enterprise}    
                </h6>
                <h6>
                    Commentary : {x.commentary}    
                </h6>
                <hr/>
            </div>
        )


    return (
      <div>
        <div className="flex-column h-100" style={{padding:10,  width:400, backgroundColor:'rgb(44, 60, 114, 0.85)', boxShadow:'4px 0px 10px black'}}>
            <h1 className='display-3 center' style={{color:'white'}}>{values.firstName}</h1> 
            <h1 className='display-3 center' style={{color:'white'}}>{values.lastName}</h1> 
            <h2 className='center' style={{color:'white'}}>{values.job}</h2>
            <img src={values.Picture} className='absoluteCenter' style={{width:200}}/> 
            <hr/>
            <div className='center' style={{color:'white', backgroundColor:'rgb(44, 60, 114, 1)'}}>Personnal Info</div>
            <div style={{color:'white', marginLeft:10}}>
                <h5>A d r e s s</h5>
                <h6 style={{letterSpacing:3, fontWeight:'normal', color:'rgb(250, 254, 135, 1)'}}>{values.adress}</h6>
                <h5>P h o n e</h5>
                <h6 style={{letterSpacing:3, fontWeight:'normal', color:'rgb(250, 254, 135, 1)'}}>{values.phoneNumber}</h6>
                <h5>E m a i l</h5>
                <h6 style={{letterSpacing:3, fontWeight:'normal', color:'rgb(250, 254, 135, 1)'}}>{values.email}</h6>
            </div>
            <hr/>
            <div className='center' style={{color:'white', backgroundColor:'rgb(44, 60, 114, 1)'}}>Skills</div>
            
            <div style={{color:'white', marginLeft:10, marginRight:10}}>
                <h5>C C + +</h5>
                <div className='progress'>   
                    <div className="progress-bar" style={{width:values.CC*3.8}}>{values.CC}%</div>
                </div>
                <h5>J A V A</h5>
                <div className='progress'>   
                    <div className="progress-bar" style={{width:values.Java*3.8}}>{values.Java}%</div>
                </div>
                <h5>J 2 E E</h5>
                <div className='progress'>   
                    <div className="progress-bar" style={{width:values.J2EE*3.8}}>{values.J2EE}%</div>
                </div>
                <h5>H T M L 5</h5>
                <div className='progress'>   
                    <div className="progress-bar" style={{width:values.HTML5*3.8}}>{values.HTML5}%</div>
                </div>
                <h5>C S S 3</h5>
                <div className='progress'>   
                    <div className="progress-bar" style={{width:values.CSS3*3.8}}>{values.CSS3}%</div>
                </div>
                <h5>J a v a s c r i p t</h5>
                <div className='progress'>   
                    <div className="progress-bar" style={{width:values.Javascript*3.8}}>{values.Javascript}%</div>
                </div>
                <h5>P H P 5</h5>
                <div className='progress'>   
                    <div className="progress-bar" style={{width:values.PHP5*3.8}}>{values.PHP5}%</div>
                </div>
                <h5>S Q L</h5>
                <div className='progress'>   
                    <div className="progress-bar" style={{width:values.SQL*3.8}}>{values.SQL}%</div>
                </div>
                <h5>S y m f o n y</h5>
                <div className='progress'>   
                    <div className="progress-bar" style={{width:values.Symfony*3.8}}>{values.Symfony}%</div>
                </div>
                <h5>H i b e r n a t e</h5>
                <div className='progress'>   
                    <div className="progress-bar" style={{width:values.Hibernate*3.8}}>{values.Hibernate}%</div>
                </div>
                <h5>L D A</h5>
                <div className='progress'>   
                    <div className="progress-bar" style={{width:values.LDA*3.8}}>{values.LDA}%</div>
                </div>
            </div>
        </div>
        <div style={{position:'absolute', top:20, left:400, margin:20, padding:20, width:860}}>
            <h1>P e r s o n a l i t y</h1> 
            <p>{values.personnality}</p> 
            <hr/>
            <h5 style={{borderLeft:'5px solid red', backgroundColor:'rgb(196, 196, 196,1)'}}>E x p e r i e n c e s</h5>
            {experiences}
            <hr/>
            <h5 style={{borderLeft:'5px solid red', backgroundColor:'rgb(196, 196, 196,1)'}}>E d u c a t i o n</h5>
        </div>
      
      </div>
    )
  }
}

export default CV






