import { Badge, Box, Grid, TextField, Paper, InputBase, Divider, IconButton, FormControl, InputLabel, Select, MenuItem} from '@mui/material';
import React, { useState } from 'react';
import './Routine.css';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import SearchIcon from '@mui/icons-material/Search';

import MenuIcon from '@mui/icons-material/Menu';
import DirectionsIcon from '@mui/icons-material/Directions';





const Routine = () => {




    const [badge, setBadge] = useState(false)


    const getBadge = ()=>{

        setBadge(!badge)

    }



    const [getSearch, setSearch] = useState(false)












    return (
        <Box  sx={{ margin:'40px', backgroundColor:'white', padding:'20px' }}>



    

    <Grid container rowSpacing={7} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>


            
    <Grid item md={12} lg={12} xs={12}>

          
            
<Paper
component="form"
sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
>
<IconButton onClick={()=>setSearch(!getSearch)} sx={{ p: '10px' }} aria-label="menu">
<MenuIcon />
</IconButton>
<InputBase
sx={{ ml: 1, flex: 1 }}
placeholder="Search by Teacher Phone Number"
inputProps={{ 'aria-label': 'search google maps' }}
/>
<IconButton  sx={{ p: '10px' }} aria-label="search">
<SearchIcon />
</IconButton>


</Paper>
  
</Grid>









         {getSearch?   <Grid item md={12} lg={12} xs={12}>

<div className="filter-routine">
<Grid container rowSpacing={7} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
<Grid item md={12} lg={3} xs={12}>
        <TextField id="outlined-basic" label="Subject" variant="outlined" />
        <IconButton  sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Grid>
<Grid item md={12} lg={3} xs={12}>
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
        <IconButton  sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Grid>


<Grid item md={12} lg={3} xs={12}>
        <TextField id="outlined-basic" label="Class" variant="outlined" />
        <IconButton  sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Grid>



<Grid item md={12} lg={3} xs={12}>
          
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
               
              
        <IconButton  sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Grid>



    </Grid>

</div>
   
   
</Grid>:null}













            <Grid item md={6} lg={4} xs={12}>
                <div className="setting">
                     

                        <div className="title-d">
                          <div className='routine-des'>  <p className='title-type-d'>Teacher Name:</p>   <span class="badge badge-soft-info font-size-12">Mahadi Hasan</span>  </div>

                          <div className='routine-des'>  <p className='title-type-d'>Subject:</p>  <p className='title-n'>Biology</p>  </div>
                          <div className='routine-des'>  <p className='title-type-d'>Time:</p>  <p className='title-n'>2:00-3:00</p>  </div>
                          <div className='routine-des'>  <p className='title-type-d'>Day:</p>  <p className='title-n'>Sat, Sun, Wed</p>  </div>
                          <div className='routine-des'>  <p className='title-type-d'>Phone:</p>  <p className='title-n'>+0880172191550</p>  </div>
                          <div className='routine-des'>  <p className='title-type-d'>Topics:</p>  <p className='title-n'>chap 2 - 3</p>  </div>
                          <div className='routine-des'>  <p className='title-type-d'>Class:</p>  <p className='title-n'>3</p>  </div>
                          <div className='routine-des'>  <p className='title-type-d'>Type:</p>  <span class="badge  badge-soft-danger font-size-12">Exam</span>   </div>
                         

                        </div>

                    </div>     
        </Grid>


        <Grid item md={6} lg={4} xs={12}>
                <div className="setting">
                     

                        <div className="title-d">
                          <div className='routine-des'>  <p className='title-type-d'>Teacher Name:</p>   <span class="badge badge-soft-info font-size-12">Mahadi Hasan</span>  </div>

                          <div className='routine-des'>  <p className='title-type-d'>Subject:</p>  <p className='title-n'>Biology</p>  </div>
                          <div className='routine-des'>  <p className='title-type-d'>Time:</p>  <p className='title-n'>2:00-3:00</p>  </div>
                          <div className='routine-des'>  <p className='title-type-d'>Day:</p>  <p className='title-n'>Sat, Sun, Wed</p>  </div>
                          <div className='routine-des'>  <p className='title-type-d'>Phone:</p>  <p className='title-n'>+0880172191550</p>  </div>
                          <div className='routine-des'>  <p className='title-type-d'>Topics:</p>  <p className='title-n'>chap 2 - 3</p>  </div>
                          <div className='routine-des'>  <p className='title-type-d'>Class:</p>  <p className='title-n'>3</p>  </div>
                          <div className='routine-des'>  <p className='title-type-d'>Type:</p>  <span class="badge  badge-soft-danger font-size-12">Exam</span>   </div>
                         

                        </div>

                    </div>     
        </Grid>
            <Grid item md={6} lg={4} xs={12}>
                <div className="setting">
                     

                        <div className="title-d">
                          <div className='routine-des'>  <p className='title-type-d'>Teacher Name:</p>   <span class="badge badge-soft-info font-size-12">Mahadi Hasan</span>  </div>

                          <div className='routine-des'>  <p className='title-type-d'>Subject:</p>  <p className='title-n'>Biology</p>  </div>
                          <div className='routine-des'>  <p className='title-type-d'>Time:</p>  <p className='title-n'>2:00-3:00</p>  </div>
                          <div className='routine-des'>  <p className='title-type-d'>Day:</p>  <p className='title-n'>Sat, Sun, Wed</p>  </div>
                          <div className='routine-des'>  <p className='title-type-d'>Phone:</p>  <p className='title-n'>+0880172191550</p>  </div>
                          <div className='routine-des'>  <p className='title-type-d'>Topics:</p>  <p className='title-n'>chap 2 - 3</p>  </div>
                          <div className='routine-des'>  <p className='title-type-d'>Class:</p>  <p className='title-n'>3</p>  </div>
                          <div className='routine-des'>  <p className='title-type-d'>Type:</p>  <span class="badge  badge-soft-danger font-size-12">Exam</span>   </div>
                         

                        </div>

                    </div>     
        </Grid>
            <Grid item md={6} lg={4} xs={12}>
                <div className="setting">
                     

                        <div className="title-d">
                          <div className='routine-des'>  <p className='title-type-d'>Teacher Name:</p>   <span class="badge badge-soft-info font-size-12">Mahadi Hasan</span>  </div>

                          <div className='routine-des'>  <p className='title-type-d'>Subject:</p>  <p className='title-n'>Biology</p>  </div>
                          <div className='routine-des'>  <p className='title-type-d'>Time:</p>  <p className='title-n'>2:00-3:00</p>  </div>
                          <div className='routine-des'>  <p className='title-type-d'>Day:</p>  <p className='title-n'>Sat, Sun, Wed</p>  </div>
                          <div className='routine-des'>  <p className='title-type-d'>Topics:</p>  <p className='title-n'>chap 2 - 3</p>  </div>
                          <div className='routine-des'>  <p className='title-type-d'>Class:</p>  <p className='title-n'>3</p>  </div>
                          <div className='routine-des'>  <p className='title-type-d'>Type:</p>  <span class="badge  badge-soft-danger font-size-12">Exam</span>   </div>
                         

                        </div>

                    </div>     
        </Grid>

     

    

            <Grid item md={6} lg={4} xs={12}>
                <div className={badge?"remSetting":"setting"} onClick={()=>getBadge()}>
                     

                        <div className="title-d">
                          <div className='routine-des'>  <p className='title-type-d'>Teacher Name:</p>  <span class="badge badge-soft-info font-size-12">Mahadi Hasan</span> </div>

                          <div className='routine-des'>  <p className='title-type-d'>Subject:</p>  <p className='title-n'>Biology</p>  </div>
                          <div className='routine-des'>  <p className='title-type-d'>Time:</p>  <p className='title-n'>2:00-3:00</p>  </div>
                          <div className='routine-des'>  <p className='title-type-d'>Type:</p>  <span class="badge badge-soft-success font-size-12">Class</span>  </div>
                         

                        </div>

                        {badge?    <div className='deleteTeacher'>
                        <Badge badgeContent={1} color="primary">
                    
                    <DeleteIcon color="action"/>
      
                    </Badge >  
                        </div>:null} 

                    </div>

                      

                    
        </Grid>

           
            
           





            </Grid>

        
        
        
        </Box>
    );
};

export default Routine;