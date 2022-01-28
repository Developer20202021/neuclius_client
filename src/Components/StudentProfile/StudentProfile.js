import { Button, Grid, Modal, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import "./StudentProfile.css";


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














const StudentProfile = () => {




  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);




    return (
         <Box  sx={{ margin:'40px', backgroundColor:'white', padding:'20px' }}>



<div className='add-section'>
      <Button variant='contained' onClick={handleOpen}>Add Education</Button>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
        <Grid container rowSpacing={7} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                 <Grid item md={12} lg={6} xs={12}>
                    <TextField id="outlined-basic" label="Institution Name" variant="outlined" multiline />
                </Grid>
                 <Grid item md={12} lg={6} xs={12}>
                    <TextField id="outlined-basic" label="Degree" variant="outlined" />
                </Grid>
                 <Grid item md={12} lg={6} xs={12}>
                    <TextField id="outlined-basic" label="GPA or CGPA" variant="outlined" />
                </Grid>
                 <Grid item md={12} lg={6} xs={12}>
                    <TextField id="outlined-basic" label="Board" variant="outlined" />
                </Grid>
                 <Grid item md={12} lg={6} xs={12}>
                    <TextField id="outlined-basic" label="Session" variant="outlined" />
                </Grid>
                 <Grid item md={12} lg={6} xs={12}>
                 <Button variant='contained' sx={{
                   minWidth:120
                 }}>Save</Button>
                </Grid>
                </Grid>
                
        </Box>
      </Modal>
    </div>

    

    <Grid container rowSpacing={7} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>


            
    <Grid item md={12} lg={4} xs={12}>
        <Grid container rowSpacing={7} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item md={12} lg={12} xs={12}>

        <div className="setting">

        <div className="img-container">
             <div className="img">
             <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
             </div>
             <div className="name">
             <div className="title-d">
                          <div className='routine-des'>  <p className='title-type-d'>Student Name:</p>   <span class="badge badge-soft-info font-size-12">Mahadi Hasan</span>  </div>
                          <div className='routine-des'>  <p className='title-type-d'>Student ID:</p>   <span class="badge badge-soft-info font-size-12">A3244</span>  </div>
                          <div className='routine-des'>  <p className='title-type-d'>Class Time:</p>  <p className='title-n'>2:00-3:00</p>  </div>
                          <div className='routine-des'>  <p className='title-type-d'>Phone:</p>  <p className='title-n'>+0880172191550</p>  </div>
                          <div className='routine-des'>  <p className='title-type-d'>Parents Phone:</p>  <p className='title-n'>+0880172191550</p>  </div>
                          
                          <div className='routine-des'>  <p className='title-type-d'>Class:</p>  <p className='title-n'>3</p>  </div>
                          <div className='routine-des'>  <p className='title-type-d'>Type:</p>  <span class="badge  badge-soft-danger font-size-12">Irregular</span>   </div>
                         

                        </div>
             </div>
            </div>

            </div>

        </Grid>
        <Grid item md={12} lg={12} xs={12}>

        <div className="setting">

        <div className="title-d">
                         
        <div className='routine-des'>  <p>
        <span class="badge  badge-soft-danger font-size-12">M Abdur Rahim Medical College, Dinajpur</span>
                          </p>
                          
                         
                          
                          
                           </div>
                          <div className='routine-des'>  <p className='title-type-d'>Degree:</p>  <p>
                          <span class="badge badge-soft-info font-size-12">MBBS</span>
                          </p>
                        
                          
                          
                           </div>
                          <div className='routine-des'>  <p className='title-type-d'>GPA or CGPA:</p>  <p>
                          <span class="badge badge-soft-info font-size-12">GPA 5</span>
                          </p>
                          
                       
                          
                          
                           </div>
                          <div className='routine-des'>  <p className='title-type-d'>Board:</p>  <p>
                          <span class="badge badge-soft-info font-size-12">Rajshahi</span>
                          </p>
                          
                           </div>
                          <div className='routine-des'>  <p className='title-type-d'>Session:</p>  <p>
                          <span class="badge badge-soft-info font-size-12">2020-21</span>
                          </p>
                          
                       
                          
                          
                           </div>
                         
                         

                        </div>

          

            
        </div>

        </Grid>


        <Grid item md={12} lg={12} xs={12}>

        <div className="setting">

        <div className="title-d">
                         
        <div className='routine-des'>  <p>
        <span class="badge  badge-soft-danger font-size-12">M Abdur Rahim Medical College, Dinajpur</span>
                          </p>
                          
                         
                          
                          
                           </div>
                          <div className='routine-des'>  <p className='title-type-d'>Degree:</p>  <p>
                          <span class="badge badge-soft-info font-size-12">MBBS</span>
                          </p>
                        
                          
                          
                           </div>
                          <div className='routine-des'>  <p className='title-type-d'>GPA or CGPA:</p>  <p>
                          <span class="badge badge-soft-info font-size-12">GPA 5</span>
                          </p>
                          
                       
                          
                          
                           </div>
                          <div className='routine-des'>  <p className='title-type-d'>Board:</p>  <p>
                          <span class="badge badge-soft-info font-size-12">Rajshahi</span>
                          </p>
                          
                           </div>
                          <div className='routine-des'>  <p className='title-type-d'>Session:</p>  <p>
                          <span class="badge badge-soft-info font-size-12">2020-21</span>
                          </p>
                          
                       
                          
                          
                           </div>
                         
                         

                        </div>

          

            
        </div>

        </Grid>



        <Grid item md={12} lg={12} xs={12}>

        <div className="setting">

        <div className="title-d">
                         
        <div className='routine-des'>  <p>
        <span class="badge  badge-soft-danger font-size-12">M Abdur Rahim Medical College, Dinajpur</span>
                          </p>
                          
                         
                          
                          
                           </div>
                          <div className='routine-des'>  <p className='title-type-d'>Degree:</p>  <p>
                          <span class="badge badge-soft-info font-size-12">MBBS</span>
                          </p>
                        
                          
                          
                           </div>
                          <div className='routine-des'>  <p className='title-type-d'>GPA or CGPA:</p>  <p>
                          <span class="badge badge-soft-info font-size-12">GPA 5</span>
                          </p>
                          
                       
                          
                          
                           </div>
                          <div className='routine-des'>  <p className='title-type-d'>Board:</p>  <p>
                          <span class="badge badge-soft-info font-size-12">Rajshahi</span>
                          </p>
                          
                           </div>
                          <div className='routine-des'>  <p className='title-type-d'>Session:</p>  <p>
                          <span class="badge badge-soft-info font-size-12">2020-21</span>
                          </p>
                          
                       
                          
                          
                           </div>
                         
                         

                        </div>

          

            
        </div>

        </Grid>





        
        </Grid>

    </Grid>



    <Grid item md={12} lg={8} xs={12}>

    <div className="setting">


    
     <div className="title-d">
                  <div className='routine-des'>  <p className='title-type-d'>First Name:</p>   <span class="badge badge-soft-info font-size-12">Mahadi </span>  </div>
                  <div className='routine-des'>  <p className='title-type-d'>Last Name:</p>   <span class="badge badge-soft-info font-size-12">Hasan </span>  </div>
                  <div className='routine-des'>  <p className='title-type-d'>Student ID:</p>   <span class="badge badge-soft-info font-size-12">A3244</span>  </div>
                  <div className='routine-des'>  <p className='title-type-d'>Father's Name:</p>  <p className='title-n'>Mosta Hasan</p>  </div>
                  <div className='routine-des'>  <p className='title-type-d'>Mother's Name:</p>  <p className='title-n'>Amena Khanam</p>  </div>
                  <div className='routine-des'>  <p className='title-type-d'>Institution Name:</p>  <span class="badge  badge-soft-danger font-size-12">M Abdur Rahim Medical College, Dinajpur</span> </div>
                  
                  <div className='routine-des'>  <p className='title-type-d'>Email:</p>  <p className='title-n'>mahadikaushik8888@gmail.com</p>  </div>
                  <div className='routine-des'>  <p className='title-type-d'>Blood Group:</p>  <span class="badge  badge-soft-danger font-size-12">AB+</span>   </div>
                  <div className='routine-des'>  <p className='title-type-d'>Date Of Birth:</p>  <p className='title-n'>3/12/2000</p>  </div>
                  <div className='routine-des'>  <p className='title-type-d'>Religion:</p>  <p className='title-n'>Islam</p>  </div>
                  <div className='routine-des'>  <p className='title-type-d'>Gender:</p>  <p className='title-n'>Male</p>  </div>
                  <div className='routine-des'>  <p className='title-type-d'>Father's Occupation:</p>  <p className='title-n'>Teacher</p>  </div>
                  <div className='routine-des'>  <p className='title-type-d'>Institution Class Roll:</p>  <p className='title-n'>01</p>  </div>
                  <div className='routine-des'>  <p className='title-type-d'>Present Address:</p>  <p className='title-n'>Bangladesh</p>  </div>
                  <div className='routine-des'>  <p className='title-type-d'>Permanent Address:</p>  <p className='title-n'>Bangladesh</p>  </div>
                 
                 

                </div>
     </div>
    

    </Grid>





    </Grid>
    </Box>
    );
};

export default StudentProfile;