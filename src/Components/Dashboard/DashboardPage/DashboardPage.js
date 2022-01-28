import { Grid } from '@mui/material';
import React from 'react';
import "./DashboardPage.css";



const DashboardPage = () => {



    return (
       
             <div>
           <div className="dashboard-page-box">

           <Grid container spacing={5}>
                <Grid item md={6} lg={3} xs={12}>
                    <div className="item-1">
                        <div className="icon-d">
                            

                        </div>

                        <div className="title-d">
                            <p className='title-type-d'>Total Students</p>

                            <p className='d-number'>1200</p>
                        </div>



                    </div>
                 
  
                </Grid>
                <Grid item md={6} lg={3} xs={12}>
                <div className="item-2">
                        <div className="icon-d">
                           

                        </div>

                        <div className="title-d">
                            <p className='title-type-d'>Total Old Student</p>

                            <p className='d-number'>100</p>
                        </div>



                    </div>
  
                </Grid>
                <Grid item md={6} lg={3} xs={12}>
                <div className="item-3">
                        <div className="icon-d">
                          <p className='dolar-icon-d'> </p>

                        </div>

                        <div className="title-d">
                            <p className='title-type-d'>Total Teachers</p>

                            <p className='d-number'>10</p>
                        </div>



                    </div>
  
                </Grid>
                <Grid item  md={6} lg={3}xs={12}>
                <div className="item-4">
                        <div className="icon-d">
                        <p className='dolar-icon-d'>$</p>

                        </div>

                        <div className="title-d">
                            <p className='title-type-d'>Class 9 Students</p>

                            <p className='d-number'>100</p>
                        </div>



                    </div>
  
                </Grid>
                <Grid item  md={6} lg={3}xs={12}>
                <div className="item-4">
                        <div className="icon-d">
                        <p className='dolar-icon-d'>$</p>

                        </div>

                        <div className="title-d">
                            <p className='title-type-d'>Class new 10 Students</p>

                            <p className='d-number'>100</p>
                        </div>



                    </div>
  
                </Grid>
                <Grid item  md={6} lg={3}xs={12}>
                <div className="item-4">
                        <div className="icon-d">
                        <p className='dolar-icon-d'>$</p>

                        </div>

                        <div className="title-d">
                            <p className='title-type-d'>Class Ex 10 Students</p>

                            <p className='d-number'>100</p>
                        </div>



                    </div>
  
                </Grid>
                <Grid item  md={6} lg={3}xs={12}>
                <div className="item-4">
                        <div className="icon-d">
                        <p className='dolar-icon-d'>$</p>

                        </div>

                        <div className="title-d">
                            <p className='title-type-d'>Class  11 Students</p>

                            <p className='d-number'>100</p>
                        </div>



                    </div>
  
                </Grid>
                <Grid item  md={6} lg={3}xs={12}>
                <div className="item-4">
                        <div className="icon-d">
                        <p className='dolar-icon-d'>$</p>

                        </div>

                        <div className="title-d">
                            <p className='title-type-d'>Class  12 Students</p>

                            <p className='d-number'>100</p>
                        </div>



                    </div>
  
                </Grid>
                <Grid item  md={6} lg={3}xs={12}>
                <div className="item-4">
                        <div className="icon-d">
                        <p className='dolar-icon-d'>$</p>

                        </div>

                        <div className="title-d">
                            <p className='title-type-d'>Class  Nursing Admission Students</p>

                            <p className='d-number'>100</p>
                        </div>



                    </div>
  
                </Grid>

                </Grid>
            
        </div>
        </div>
    );
};

export default DashboardPage;