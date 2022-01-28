import React, { useEffect, useState } from 'react';
import "./AddTeacher.css";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import InputAdornment from '@mui/material/InputAdornment';
import Input from '@mui/material/Input';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Alert, Button, CircularProgress, FormControl, IconButton, InputLabel, MenuItem, Select, Snackbar } from '@mui/material';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { styled } from '@mui/material/styles';

import { getAuth, createUserWithEmailAndPassword,updateProfile, signOut } from "firebase/auth";
import { getStorage,getDownloadURL, ref,uploadBytes } from "firebase/storage"
import { FileDrop } from 'react-file-drop';
import UseFirebaseAuth from '../Context/UseContext';





// auth/email-already-in-use
// auth/weak-password

const AddTeacher = () => {

    // const Input = styled('input')({
    //     display: 'none',
    //   });
  
    const [fireError, setFireError] = useState('')
    const [looping, setLooping]= useState(false);
    const [open, setOpen] = React.useState(false);
    const handleClick = () => {
      setOpen(true);
    };


    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpen(false);
    };
    

    const {storage, setUser, user, register} = UseFirebaseAuth()
    const auth = getAuth();
    const [ imgFile, setImgFile] = useState();
    const [getFileName , setFileName] = useState(' ');
  // firebase Ref 
  const storageRef = ref(storage, "students/"+getFileName);






  // speech 




    // useEffect(()=>{

    //   var msg = new SpeechSynthesisUtterance();

   

    //   msg.text = fireError.split('/')[1] + fireError ==='auth/weak-password'?'enter at least 6 character password':'enter a new Email';
    //   let voices = window.speechSynthesis.getVoices();
    //   msg.voice = voices[1]
    //   window.speechSynthesis.speak(msg);
    // },[fireError])
   

    


    






  


    // password field  checker 

    const [values, setValues] = useState({
       password:'',
        showPassword: false,
      });

      const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
      };
      const handleClickShowPassword = () => {
        setValues({
          ...values,
          showPassword: !values.showPassword,
        });
      };
    
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };


const [imgURL, setImgURL] = useState('');


  const [studentInfo, setStudentInfo] = useState({

    firstName:'',
    lastName:'',
    dateOfBirth:'',
    fatherName:'',
    motherName:'',
    motherNID:'',
    fatherNID:'',
    email:'',
    phoneNumber:'',
    rollNumber:'',
    className:'',
    gender:'',
    bloodGroup:'',
    parentPhoneNumber:'',
    permanentAddress:'',
    idNumber:'',
    birthCertificateNumber:'',
    presentAddress:''

  })




const [iurl, setiurl] = useState('')
const [imshow, setimshow] = useState(false)

  const getImageFile = (e)=>{
    const fileValue = e.target.files[0];
    const fileName = fileValue?.name;
    const fileNameSplit = Date.now() + fileName.split(' ').join('-')  ;
    console.log(fileNameSplit);
    setFileName(fileNameSplit)
  
    setImgFile(fileValue);

    setiurl(URL.createObjectURL(fileValue))
    setimshow(true)
    console.log(URL.createObjectURL(fileValue));
  }



  const getdropFile =(files, e)=>{

    const fileValue = files[0];
    const fileName = fileValue?.name;
    const fileNameSplit = Date.now() + fileName.split(' ').join('-')  ;
    console.log(fileNameSplit);
    setFileName(fileNameSplit)
  
    setImgFile(fileValue);
    setiurl(URL.createObjectURL(fileValue))
    setimshow(true)
    console.log(URL.createObjectURL(fileValue));


  }










  const getInputValue = (e)=>{
    const inputValue = e.target.value;
    const inputName = e.target.name;
   
    setStudentInfo({...studentInfo, [inputName]:inputValue})

  }

  console.log(studentInfo);


  const submitStudentInfo = ()=>{
    const date = new Date(Date.now());
    const localString = date.toLocaleString();
    studentInfo.date = localString;

   setLooping(true)


    uploadBytes(storageRef, imgFile)
    .then(snapshot=>{

      console.log('Uploaded a blob or file!');

      console.log(snapshot);

      getDownloadURL(storageRef)
      .then(url=>{

        console.log(url);


        if (url) {
          studentInfo.profileImage = url;

      createUserWithEmailAndPassword(auth,studentInfo?.email, values?.password )
       .then(result=>{

        updateProfile(auth.currentUser,{
          displayName:studentInfo?.firstName + studentInfo?.lastName,
          phoneNumber:studentInfo?.phoneNumber,
          photoURL:url
        })


        fetch("https://guarded-beach-69417.herokuapp.com/student-dashboard/student-info",{
          method:"POST",
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify(studentInfo)
        })
        .then(res=>{
          
          return res.json()
        })
        .then(data=>{

          setOpen(true)
          console.log(data?.msg);
          setFireError(data?.msg)
        })
        .catch(err=>{
          setOpen(true)
          setFireError('auth/weak-password')
          console.log(err);
          console.log(err);
        })

         const user = result.user;
         setUser(user)
         console.log(user);
        
       })
       .catch(err=>{

        const errorCode = err.code;
        console.log(errorCode);
        setOpen(true)
        setFireError(errorCode)
        // console.log(errorMessage);
        //  console.log(err);
       })
       .finally(()=>{


        signOut(auth)
        .then(()=>{


          console.log("user sing out successfully");
          setiurl('')
          setimshow(false)



        })
        .catch(err=>{

          console.log(err);
        })









        setiurl('')
        setimshow(false)
         setLooping(false)




       })

          

        }


      })



    })


  }
















    return (
        

<Box  sx={{ margin:'30px', backgroundColor:'white', padding:'20px' }}>
      <Grid container rowSpacing={7} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>


      <Grid item xs={12} md={12}  >
      <Alert style={{
        fontWeight:'800',
        
            display:"flex",
            justifyContent:"center"
      
      }} severity="warning">দয়া করে আপনার শিক্ষকের সঠিক তথ্য দিন। ভুল তথ্য প্রদান থেকে বিরত থাকুন।</Alert>
      </Grid>



        <Grid item xs={12} md={6} >
      
        <TextField
        onChange={getInputValue}
        style={{
            width:'100%'
        }}
          id="standard-textarea"
          label="First Name"
          placeholder="First Name"
          name="firstName"
          multiline
          
        />
   
        </Grid>


        <Grid item xs={12} md={6}>
     
        <TextField 
        onChange={getInputValue}
        name='lastName' 
        style={{
            width:'100%'
        }}
          id="standard-textarea"
          label="Last Name"
          placeholder="Last Name"
          multiline
         
        />
         
        </Grid>
        <Grid item xs={12} md={6}>
     
        <TextField
        onChange={getInputValue}
        name='subject' 
         style={{
            width:'100%'
        }}
          id="standard-textarea"
          label="Subject"
          placeholder="Subject"
          multiline
        
        />
         
        </Grid>
        <Grid item xs={12} md={6}>
     
        <TextField 
        onChange={getInputValue}
        name='TeacherID' 
         style={{
            width:'100%'
        }}
          id="standard-textarea"
          label="Teacher ID"
          placeholder="Teacher ID"
          multiline
     
        />
         
        </Grid>
        <Grid item xs={12} md={6}>

        <TextField
        onChange={getInputValue} 
         name='InstitutionName' 
         style={{
             width:'100%'
        }}
          id="standard-textarea"
          label="institution Name"
          placeholder="Institution Name"
          multiline
      
        />

        </Grid>

        <Grid item xs={12} md={6}>

        <TextField 
        onChange={getInputValue}
        style={{
         width:'100%'
           }}
        id="standard-textarea"
        label="Email Address"
        placeholder="Email Address"
        multiline
        name='email' 
      
        />

        </Grid>

        <Grid item xs={12} md={6}>

        <TextField
        onChange={getInputValue}
        name='Session' 
        style={{
         width:'100%'
           }}
        id="standard-textarea"
        label="Session"
        placeholder="Session"
        multiline
      
        />
    
        </Grid>

        <Grid item xs={12} md={6}>

        <TextField 
        onChange={getInputValue}
        name='gender' 
        style={{
         width:'100%'
           }}
        id="standard-textarea"
        label="Gender"
        placeholder="Gender"
        multiline
      
        />
    
        </Grid>


        <Grid item xs={12} md={6}>

        <TextField
        onChange={getInputValue}
         name='phoneNumber' 
        style={{
         width:'100%'
           }}
        id="standard-textarea"
        label="Phone Number"
        placeholder="Phone Number"
        type="number"
      
        />
    
        </Grid>


      


        <Grid item xs={12} md={6}>

        <TextField
        onChange={getInputValue}
        name='dateOfBirth' 
        id="date"
        label="Birthday"
        type="date"
       
        style={{
            width:'100%'
              }}
        InputLabelProps={{
          shrink: true,
        }}
      />
    
        </Grid>


        <Grid item xs={12} md={6}>

        <TextField
        onChange={getInputValue}
        name='bloodGroup' 
        style={{
         width:'100%'
           }}
        id="standard-textarea"
        label="Blood Group"
        placeholder="Blood Group"
        multiline
   
        />
    
        </Grid>


        <Grid item xs={12} md={6}>

        <FormControl style={{
         width:'100%'
           }}  sx={{ m: 1, minWidth: 220 }}>
        <InputLabel id="demo-simple-select-label">Role</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          
          label="Payment Status"
     
        >
          <MenuItem value={"Teacher"}>Teacher</MenuItem>
          <MenuItem value={"Staff"}>Staff</MenuItem>
         
        </Select>
      </FormControl>
    
        </Grid>
   

        


        <Grid item xs={12} md={12}>

        <TextareaAutosize
        onChange={getInputValue}
        name='permanentAddress'
        className='text-area'
      aria-label="minimum height"
      minRows={7}
      placeholder="Permanent Address"
      style={{ width: '100%' , border:'none', borderBottom:'2px solid blue', oultline:'none' }}
    />
    
        </Grid>
        <Grid item xs={12} md={12}>

        <TextareaAutosize 
         onChange={getInputValue}
        name='presentAddress'
        className='text-area'
      aria-label="minimum height"
      minRows={7}
      placeholder="Present Address"
      style={{ width: '100%' , border:'none', borderBottom:'2px solid blue', oultline:'none' }}
    />
    
        </Grid>
        <Grid  item xs={12} md={12}>

            <div className='upload-file'> 
            {/* <label htmlFor="icon-button-file"> Upload Photo
        <Input
        onChange={getImageFile} 
        className='photo-upload' accept="image/*" id="icon-button-file" type="file" />
        <IconButton color="primary" aria-label="upload picture" component="span">
          <PhotoCamera />
        </IconButton>
      </label> */}


{!imshow?   <FileDrop
        
        onDrop={(files, event) => getdropFile(files, event)}
      >
        Drop image here!
         <label htmlFor="icon-button-file">
      <Input
      
      onChange={getImageFile}
      accept="image/*" id="icon-button-file" type="file" />
      <IconButton color="primary" aria-label="upload picture" component="span">
        <PhotoCamera />
      </IconButton>
    </label>

      </FileDrop>:<img src={iurl} alt="" width={100}/>}











            </div>


     
    
        </Grid>

        
        <Grid item xs={12} md={12}>

          {looping?    <Button 
        
        disabled
        style={{
            width:'300px',
            height:'45px',
            marginBottom:'30px'
        }} variant="contained" size="large">
         <CircularProgress />
        </Button>: <div>


          {
            iurl?  <Button
            onClick={submitStudentInfo}

            style={{
                width:'300px',
                height:'45px',
                marginBottom:'30px'
            }} variant="contained" size="large">
              Submit
            </Button>:<Button
            onClick={submitStudentInfo}
            disabled
            style={{
                width:'300px',
                height:'45px',
                marginBottom:'30px'
            }} variant="contained" size="large">
              Submit
            </Button>
          }




        </div>    }

    

    
        </Grid>



      </Grid>


      <div>

      {fireError ==="auth/weak-password"?<Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert variant="filled" onClose={handleClose} severity="error" sx={{ width: '100%' }}>
       Password will be at least 6 character
        </Alert>
      </Snackbar> :null}
        {fireError ==="auth/missing-email"?<Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert variant="filled" onClose={handleClose} severity="error" sx={{ width: '100%' }}>
       Please Enter Your Email
        </Alert>
      </Snackbar> :null}
        {fireError ==="auth/internal-error"?<Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert variant="filled" onClose={handleClose} severity="error" sx={{ width: '100%' }}>
       Please Enter Your Password
        </Alert>
      </Snackbar> :null}

        {fireError ==="auth/email-already-in-use"?<Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert variant="filled" onClose={handleClose} severity="error" sx={{ width: '100%' }}>
        Email already in use
        </Alert>
      </Snackbar> :null}
        {fireError ==="auth/invalid-email"?<Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert variant="filled" onClose={handleClose} severity="error" sx={{ width: '100%' }}>
        Please Enter Your Email
        </Alert>
      </Snackbar> :null}
        {fireError ==="server side error!!!"?<Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert variant="filled" onClose={handleClose} severity="error" sx={{ width: '100%' }}>
        Please Fill up the Full Form!!!
        </Alert>
      </Snackbar> :null}
        {!fireError?<Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert variant="filled" onClose={handleClose} severity="success" sx={{ width: '100%' }}>
        New Student adds successfully!
        </Alert>
      </Snackbar> :null}

     
      </div>


    </Box>
            
       
    );
};

export default AddTeacher;