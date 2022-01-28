import { Alert, Box, Button, CircularProgress, Grid, Modal, Switch, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import './Settings.css'
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import uniqid from 'uniqid';



const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };


const NewSettings = () => {


    const [checked, setChecked] = React.useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };


    const [getDuechecked, setDueChecked] = React.useState(false);

  const getDuePayment = (event) => {
    setDueChecked(event.target.checked);

    handleOpen()
  };



  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () =>{

    setOpen(false)
    setDueChecked(false)
  };



 










    return (
        <div>

            <div className="all-settings-container">
            <Grid container spacing={5}>
       
        <Grid item md={6} lg={4} xs={12}>
                <div className="setting">
                        <div className="icon-setting">

                            <VpnKeyIcon style={{
                                color:'rgb(0, 157, 230)',
                                fontSize:"40px"
                            }} />
                         

                        </div>

                        <div className="title-setting">
                            <p className='title-type-setting'>
                            <Alert severity="warning">Create a private key for adding  Your Teacher and Student.Don't share with each other</Alert>
                                </p>
                            {checked?<div className='title-type-setting'>
                            <TextField
                         
                            id="filled-required"
                            label="Your private key"
                            value={uniqid()+'-121961'}
                          
                                  />

                                  {/* eiin number add  */}
                                
                            </div>:null}

                            <p className='switch'>  <Switch
      checked={checked}
      onChange={handleChange}
      inputProps={{ 'aria-label': 'controlled' }}
    /></p>
                        </div>



                    </div>
  
            
           
        </Grid>
        <Grid item md={6} lg={4} xs={12}>
                <div className="setting">
                        <div className="icon-setting">

                          
                         

                        </div>

                        <div className="title-setting">
                            <p className='title-type-setting'>
                            <Alert severity="warning">Set All Student Payment As Due Payment. Only Use It For A New Month </Alert>
                                </p>
                          

                            <p className='switch'>  <Switch
      checked={getDuechecked}
      onChange={getDuePayment}
      inputProps={{ 'aria-label': 'controlled' }}
    /></p>
                        </div>



                    </div>
  
            
           
        </Grid>




        {/* <Button onClick={handleOpen}>Open modal</Button> */}
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <Grid container rowSpacing={0} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Grid item xs={12} md={12}>
      <Alert  severity="warning">
      Are you sure? You want to set all payment as  due payment .
      </Alert>
    
      </Grid>
      <Grid item xs={12} md={12}>
      <p  style={{
        backgroundColor:'#FFF4E5',
        marginTop:'-10px',
        textAlign:'left',
        padding:'20px',
        fontSize:'14px'
        
      }} >Unexpected bad things will happen if you don’t read this!</p>
      
     
    
      </Grid>
      <Grid item xs={12} md={12}>
        <p>
        This action cannot be undone. This will permanently set .
        </p>
        <p>
        Please type <b>Your Email, Phone Number and Today Date</b> as to confirm.
        </p>
        <TextField style={{
          width:'100%'
        }}
        
        
          id="demo-helper-text-misaligned"
          label="Please enter your Email"
        />
        <TextField style={{
          width:'100%',
          marginTop:'20px',
          marginBottom:'20px',
        }}
        
        
          id="demo-helper-text-misaligned"
          label="Please enter your Phone Number"
        />

<TextField
       
        name='dateOfBirth' 
        id="date"
        label="Today Date"
        type="date"
       
        style={{
            width:'100%',
            marginBottom:'20px'
              }}
        InputLabelProps={{
          shrink: true,
        }}
      />
     
    
      </Grid>
      <Grid item xs={12} md={12}>
         
      <Button style={{
 width:'100%'
}} variant="contained"
 color='info'>Set Due Payment</Button>
    
      </Grid>
  
      </Grid>
       
        </Box>
      </Modal>
        
       
 
        </Grid>




            </div>



            
        </div>
    );
};

export default NewSettings;