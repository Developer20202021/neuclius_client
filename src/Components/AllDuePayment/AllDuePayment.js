import React, { useEffect, useState } from 'react';
import "./AllDuePayment.css";
import { DataGrid } from '@mui/x-data-grid';
import { Alert, Button, CircularProgress, FormControl, Grid, IconButton, InputBase, InputLabel, MenuItem, Paper, Select, Snackbar, TextField } from '@mui/material';
import { useHistory } from 'react-router';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';




import FilterListIcon from '@mui/icons-material/FilterList';
import SearchIcon from '@mui/icons-material/Search';

import MenuIcon from '@mui/icons-material/Menu';
import DirectionsIcon from '@mui/icons-material/Directions';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'white',
  border: '2px solid #fff',
  boxShadow: 24,
  p: 4,
};



 function AllDuePayment() {



     const history = useHistory();
     


     const [looping, setLooping] = useState(false);
const [errMsg, setErrMsg] = useState();

const [deleteData, setDeleteData] = useState();

const [dataArray, setDataArray] = useState([]);

     const [modal, setModal] = useState('');
     const [userModalID, setUserModalId] = useState('')
     const [open, setOpen] = React.useState(false);
     const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);



const getModalEnterId = (e)=>{
  const value = e.target.value;
  
  console.log(value);

  setUserModalId(value)

}






// snack bar 

const [snackOpen, setSnackOpen] = React.useState(false);



const handleSnackClose = (event, reason) => {
  if (reason === 'clickaway') {
    return;
  }

  setSnackOpen(false);
};


// const deleteStudent = ()=>{

//   setSnackOpen(true);

//   setOpen(false)
// }








const deleteStudent = ()=>{

  setLooping(true)

  fetch(`https://guarded-beach-69417.herokuapp.com/student-dashboard/delete-student/?studentId=${userModalID}`,{
    method:"DELETE"
  })
  .then(res=>{




    if (res.status === 200) {
      setErrMsg(200)
  }
  if (res.status === 400) {
      setErrMsg(400)
  }
  if (res.status === 500) {
      setErrMsg(500)
  }
    return res.json();

  })
  .then(data=>{
    console.log(data);
    setDeleteData(data)
    setSnackOpen(true);
    setOpen(false)
    
  })
  .catch(err=>{
    console.log(err);
  })
  .finally(()=>{
    setLooping(false)
  })
  



}



const [tbloading, setTablloading] = useState(true)

useEffect(()=>{


  fetch("https://guarded-beach-69417.herokuapp.com/student-dashboard/all-student-info")
  .then(res=>res.json())
  .then(data=>{

    let i = 1;
    let array = []
    data?.info.map(student =>{

   
      student.id = i;
      console.log(student);
     
      i++;
      array.push(student)
     
     
      


    })
    setDataArray(array);
    console.log(data.info);


  })
  .catch(err=>{
    console.log(err);
  })
  .finally(()=>{

    setTablloading(false)
  })





},[deleteData])


























    const columns = [
        { field: 'id', headerName: 'Index', width: 70 },
        { field: 'studentID', headerName: 'ID', width: 200 },
        {
          field: "url",
          headerName: "image",
          sortable: false,
          width: 130,
          disableClickEventBubbling: true,
          renderCell: (params) => {
              // console.log(params?.row?.profileImage);
            return (
              <img className='studentImage' src={params?.row?.profileImage} alt='data' style={{
               
                
              }} />
              
             
            );
          }
        },
        { field: 'firstName', headerName: 'First name', width: 130 },
        { field: 'lastName', headerName: 'Last name', width: 130 },
     
     
        {
          field: 'phoneNumber',
          headerName: 'Phone Number',
          width: 200,
        },
      
        {
          field: 'className',
          headerName: 'Class',
          type:'number',
          width: 100,
        },

      



          {
            field: 'paymentStatus',
            headerName: 'Payment Status',
            width: 200,
            renderCell: (params) => {
                const getItem = (id)=>{
                    
               console.log(id);
                }
                // console.log(params);
              return (
                <p className='due'>
                 <span class="badge badge-soft-danger font-size-12">Due</span>
                </p>
              );
            }
          },

          {
            field: 'AddPayment',
            headerName: 'Add Payment',
            width: 200,
            renderCell: (params) => {
                const getItem = (id)=>{
                    history.push(`/dashboard/add-payment/${id}`)
               console.log(id);
                }
                // console.log(params);
              return (
                <Button
                onClick={()=>getItem()}
                style={{
                  fontSize:12
                }} variant="contained">Add Payment</Button>
              );
            }
          },

        
    


        
      ];









      
      
      const rows = dataArray;



      const [getSearch, setSearch] = useState(false)





   
  return (
      <div>
    <div className='student-table-container' style={{ height: '100vh', width: '100%' }}>





    <Paper
component="form"
sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
>
<IconButton onClick={()=>setSearch(!getSearch)} sx={{ p: '10px' }} aria-label="menu">
<MenuIcon />
</IconButton>
<InputBase
sx={{ ml: 1, flex: 1 }}
placeholder="Search Student ID"
inputProps={{ 'aria-label': 'search google maps' }}
/>
<IconButton  sx={{ p: '10px' }} aria-label="search">
<SearchIcon />
</IconButton>


</Paper>



{getSearch?   <Grid item md={12} lg={12} xs={12}>

<div className="filter-routine">
<Grid container rowSpacing={7} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
<Grid item md={12} lg={3} xs={12}>
        <TextField id="outlined-basic" label="Student ID" variant="outlined" />
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
<FormControl  sx={{ m: 1, minWidth: 220 }}>
        <InputLabel id="demo-simple-select-label">Payment Status</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          
          label="Payment Status"
     
        >
          <MenuItem value={"Due"}>Due</MenuItem>
          <MenuItem value={"Paid"}>Paid</MenuItem>
         
        </Select>
      </FormControl>
        <IconButton  sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
               
              
        
    </Grid>
<Grid item md={12} lg={3} xs={12}>
<TextField id="outlined-basic" label="Email" variant="outlined" />
        <IconButton  sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
               
              
        
    </Grid>



    </Grid>

</div>
   
   
</Grid>:null}

















      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        loading={tbloading}
        onSelectionModelChange={itm => console.log(itm)}
        
       
      />

<div>
      {/* <Button onClick={()=>handleOpen()}>Open modal</Button> */}
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
      Are you sure? You want to Delete This Account.
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
        This action cannot be undone. This will permanently delete the <b>{modal}</b> acoount.
        </p>
        <p>
        Please type <b>{modal}</b> as to confirm.
        </p>
        <TextField style={{
          width:'100%'
        }}
        onChange={getModalEnterId}
          helperText="Please enter your Profile ID"
          id="demo-helper-text-misaligned"
          label="Profile ID"
        />
     
    
      </Grid>
      <Grid item xs={12} md={12}>
         
      {modal===userModalID? looping? <Button 


disabled
style={{
 width:'100%'
}} variant="contained" color='info'>  <CircularProgress sx={{
 size:'10'
}} /></Button>:<Button 


onClick={()=>deleteStudent()}
style={{
width:'100%'
}} variant="contained" color='info'>Delete</Button>:<Button style={{
 width:'100%'
}} variant="contained"
disabled color='info'>Delete</Button>}
    
      </Grid>
  
      </Grid>
       
        </Box>
      </Modal>
    </div>



    <div>
      
      {errMsg===200?  <Snackbar
          open={snackOpen}
          autoHideDuration={6000}
          onClose={handleSnackClose}
          message="Note archived"
          
        >
  <Alert onClick={handleSnackClose} severity="success">Deleted Successful</Alert>
  
  {/* action={action} */}
        </Snackbar>:null}
        {errMsg===400?  <Snackbar
          open={snackOpen}
          autoHideDuration={6000}
          onClose={handleSnackClose}
          message="Note archived"
          
        >
  <Alert onClick={handleSnackClose} severity="warning">Something wrong!!! Refresh Your page</Alert>
  
  {/* action={action} */}
        </Snackbar>:null}
        {errMsg===500?  <Snackbar
          open={snackOpen}
          autoHideDuration={6000}
          onClose={handleSnackClose}
          message="Note archived"
          
        >
  <Alert onClick={handleSnackClose} severity="error">Server Side Error!!!</Alert>
  
  {/* action={action} */}
        </Snackbar>:null}
        
      </div>


    </div>
    </div>
  );
}


export default AllDuePayment;