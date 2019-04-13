import React, { Component } from 'react'
//import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField'
//import RaisedButton from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import classNames from 'classnames';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/core/Menu/Menu'
import Typography from '@material-ui/core/Typography';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import indigo from '@material-ui/core/colors/indigo';
import green from '@material-ui/core/colors/green';
import blueGrey from '@material-ui/core/colors/blueGrey'
import { makeStyles } from '@material-ui/core/styles';
import { palette } from '@material-ui/system';
import { Box } from '@material-ui/core/Box';

    


export class FormUserDetails extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    FirstName=(e)=>{
        console.log(e)
    }

    render() {
        const theme = createMuiTheme({
                palette: {
                    primary: {main:'#1a237e'},
                    secondary: green,
                },
                status: {
                    danger: 'orange',
                },
                });
        const {values, handleChange}=this.props;


        return (
            <div className='absoluteCenter'>
                <React.Fragment>
                    <AppBar className='AbsoluteCenter width500'>
                        <IconButton  color="inherit" aria-label="Menu"></IconButton>
                        <Button color="inherit" >Enter User Details</Button>
                    </AppBar>

                    <TextField 
                    className='absoluteCenter'
                    type='text'
                    name='First Name 1'
                    placeholder="First Name"
                    margin='normal'
                    onChange={handleChange('firstName')}
                    ></TextField>

                    <br/>
                    <TextField 
                    className='absoluteCenter'
                    inputRef={this.FirstName()}
                    type='text'
                    name='Last Name'
                    placeholder="Last Name"
                    margin='normal'
                    onChange={handleChange('lastName')}
                    ></TextField>

                    <br/>
                    <TextField 
                    className='absoluteCenter'
                    inputRef={this.FirstName()}
                    type='text'
                    name='occupation'
                    placeholder="Occupation"
                    margin='normal'
                    onChange={handleChange('occupation')}
                    ></TextField>

                    <br/>
                    <TextField 
                    className='absoluteCenter'
                    inputRef={this.FirstName()}
                    type='text'
                    name='email'
                    placeholder="email"
                    margin='normal'
                    onChange={handleChange('normal')}
                    ></TextField>

                    <br/>
                    <Button 
                    className='absoluteCenter'
                    size="large"
                    color='primary'
                    variant='raised'
                    > Porceed </Button>
                    <Box color="text.primary">

                    </Box>
                </React.Fragment>
            </div>

        )
    }
}

export default FormUserDetails
