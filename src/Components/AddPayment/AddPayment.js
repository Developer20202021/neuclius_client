import { Box, Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from '@mui/material';

import React from 'react';
import "./AddPayment.css";




const AddPayment = () => {


    return (
       <Box  sx={{ margin:'30px', backgroundColor:'white', padding:'20px',
      
        
        }}>

        <Grid container rowSpacing={7} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

        <Grid item md={12} lg={6} xs={12}>
            <div className="routineAdd">
                 

            <Grid container rowSpacing={7} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                 <Grid item md={12} lg={6} xs={12}>
                    <TextField id="outlined-basic" label="Student Name" variant="outlined" />
                </Grid>
                 <Grid item md={12} lg={6} xs={12}>
                    <TextField id="outlined-basic" label="Student ID" variant="outlined" />
                </Grid>
                 <Grid item md={12} lg={6} xs={12}>
                    <TextField id="outlined-basic" label="Class" variant="outlined" />
                </Grid>
                 <Grid item md={12} lg={6} xs={12}>
                    <TextField id="outlined-basic" label="Email" variant="outlined" />
                </Grid>
                 <Grid item md={12} lg={6} xs={12}>
                    <TextField id="outlined-basic" label="Phone Number" variant="outlined" />
                </Grid>
                 <Grid item md={12} lg={6} xs={12}>
                 <TextField id="outlined-basic" label="Amount" variant="outlined" />
                </Grid>


                 <Grid item md={12} lg={6} xs={12}>
                    <TextField id="outlined-basic" label="Receiver Name" variant="outlined" />
                </Grid>
                 <Grid item md={12} lg={6} xs={12}>
                    <TextField id="outlined-basic" label="Receiver Email" variant="outlined" />
                </Grid>
                 <Grid item md={12} lg={6} xs={12}>
                    <TextField id="outlined-basic" label="Receiver NID" variant="outlined" />
                </Grid>
                 <Grid item md={12} lg={6} xs={12}>
                    <TextField id="outlined-basic" label="Receiver Phone Number" variant="outlined" />
                </Grid>


        




                <Grid item md={12} lg={12} xs={12}>
    <Button variant="contained">Receive</Button>
               
                </Grid>
            

            </Grid>        
                     

                 

                </div>     
    </Grid>

    </Grid>

    </Box>
    );
};

export default AddPayment;