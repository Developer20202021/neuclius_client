import React, { useEffect, useState } from 'react';
import './AttendanceCalender.css';
// import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';
import moment from 'moment'
import { Alert, Box, Button, CircularProgress, Grid, Modal, TextField } from '@mui/material';
import { useHistory } from 'react-router-dom';
import { DataGrid } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';


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
  









const AttendanceCalender = () => {



    const mark = [
        '04-11-2021',
        '03-11-2021',
        '07-11-2021'
    ]




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
       
        
        { field: 'firstName', headerName: 'First name', width: 230 },
        { field: 'lastName', headerName: 'Last name', width: 230 },
     
      
        {
          field: 'className',
          headerName: 'Class',
      
          width: 100,
        },
      
        {
          field: 'subject',
          headerName: 'Subject',
      
          width: 200,
        },
        {
          field: 'marks',
          headerName: 'Marks',
          
          width: 100,
        },
        {
          field: 'date',
          headerName: 'Date',
   
          width: 300,
        },


        {
            field: "delete",
            headerName: "Delete",
            sortable: false,
            width: 130,
            disableClickEventBubbling: true,
            renderCell: (params) => {
                const getItem = (id)=>{
                  handleOpen() 
                  setModal(id)
                 
               console.log(id);
                }
                // console.log(params);
              return (
                <Button onClick={()=>getItem(params?.row?._id)} style={{
                  width:'90px',
                  fontSize:'12px'
                }} color="error" variant="contained" startIcon={<DeleteIcon  style={{
                  color:'white'
                }}/>}>
                Delete
              </Button>
              );
            }
          },
      



 


        
    


        
      ];









      
      
      const rows = dataArray;



      const [getSearch, setSearch] = useState(false)















    return (
        <div>

         
            <h2>Marks</h2>
       

<div className='student-table-container' style={{ height: '100vh', width: '100%' }}>
<DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        loading={tbloading}
        onSelectionModelChange={itm => console.log(itm)}
        
       
      />

</div>



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






            <div className="calender-container">
            <Calendar
            
       
            style={{
               
            }}
            className="react-calendar"
            tileClassName={({ date, view }) => {
                if(mark.find(x=>x===moment(date).format("DD-MM-YYYY"))){
                 return  'highlight'
                }
              }}
            
            >

            </Calendar>
            </div>
            
        </div>
    );
};

export default AttendanceCalender;