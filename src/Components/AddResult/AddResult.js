import { Button, Grid, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import "./AddResult.css";




const AddResult = () => {






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
                 <TextField id="outlined-basic" label="Subject" variant="outlined" />
                </Grid>


                 <Grid item md={12} lg={6} xs={12}>
                    <TextField id="outlined-basic" label="Marks" variant="outlined" />
                </Grid>
                 <Grid item md={12} lg={6} xs={12}>
                 <TextField
        id="date"
        label="Exam Date"
        type="date"
        defaultValue="2017-05-24"
        sx={{ width: 220 }}
        InputLabelProps={{
          shrink: true,
        }}
      />
                </Grid>
                
               


        




                <Grid item md={12} lg={12} xs={12}>
    <Button variant="contained">Add Result</Button>
               
                </Grid>
            

            </Grid>        
                     

                 

                </div>     
    </Grid>

    </Grid>

    </Box>
    );
};

export default AddResult;