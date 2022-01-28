import { Box, Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import React from 'react';

import "./SetRoutine.css";



const SetRoutine = () => {
    return (
        <Box  sx={{ margin:'30px', backgroundColor:'white', padding:'20px',
      
        
        }}>

        <Grid container rowSpacing={7} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

        <Grid item md={12} lg={6} xs={12}>
            <div className="routineAdd">
                 

            <Grid container rowSpacing={7} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                 <Grid item md={12} lg={6} xs={12}>
                    <TextField id="outlined-basic" label="Teacher Name" variant="outlined" />
                </Grid>
                 <Grid item md={12} lg={6} xs={12}>
                    <TextField id="outlined-basic" label="Subject" variant="outlined" />
                </Grid>
                 <Grid item md={12} lg={6} xs={12}>
                    <TextField id="outlined-basic" label="Email" variant="outlined" />
                </Grid>
                 <Grid item md={12} lg={6} xs={12}>
                    <TextField id="outlined-basic" label="Phone Number" variant="outlined" />
                </Grid>
                 <Grid item md={12} lg={6} xs={12}>
                 <FormControl  sx={{ m: 1, minWidth: 220 }}>
        <InputLabel id="demo-simple-select-label">Type</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          
          label="Age"
     
        >
          <MenuItem value={"Exam"}>Exam</MenuItem>
          <MenuItem value={"Class"}>Class</MenuItem>
         
        </Select>
      </FormControl>
                </Grid>


                 <Grid item md={12} lg={6} xs={12}>
                    <TextField id="outlined-basic" label="Day" variant="outlined" />
                </Grid>
                 <Grid item md={12} lg={6} xs={12}>
                    <TextField id="outlined-basic" label="Class" variant="outlined" />
                </Grid>
                 <Grid item md={12} lg={6} xs={12}>
                    <TextField id="outlined-basic" label="Topics" variant="outlined" />
                </Grid>


                 <Grid item md={12} lg={6} xs={12}>
                 <TextField
        id="time"
        label="Time From"
        type="time"
        defaultValue="07:30"
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          step: 300, // 5 min
        }}
        sx={{ minWidth: 220 }}
      />
               
                </Grid>


                <Grid item md={12} lg={6} xs={12}>
                 <TextField
        id="time"
        label="Time To"
        type="time"
        defaultValue="02:30"
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          step: 300, // 5 min
        }}
        sx={{ minWidth: 220 }}
      />
               
                </Grid>


                <Grid item md={12} lg={12} xs={12}>
    <Button variant="contained">Save</Button>
               
                </Grid>
            

            </Grid>        
                     

                 

                </div>     
    </Grid>

    </Grid>

    </Box>
    );
};

export default SetRoutine;