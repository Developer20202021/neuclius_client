import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { Alert, Button, CircularProgress, Grid, IconButton, Input, TextField } from '@mui/material';
import React, { useState } from 'react';
import UseFirebaseAuth from '../Context/UseContext';
import { getStorage,getDownloadURL, ref,uploadBytes } from "firebase/storage"
import { FileDrop } from 'react-file-drop'
import "./AddStaffReceiver.css"




const AddStaffReceiver = () => {
    const {storage} = UseFirebaseAuth();



    const [errMsg, setErrMsg] = useState();
    const [looping, setLooping] = useState(false);

    const [getFileName , setFileName] = useState(' ');





    const [gallery, setGallery] = useState({
        description:''
        
    })


     // firebase Ref 
     const storageRef = ref(storage, "gallery/"+getFileName);

    const [galleryFile, setGalleryFile] = useState();


    const getgallery = (e)=>{
        const inputValue = e.target.value;
        const inputName = e.target.name;
        setGallery({...gallery, [inputName]:inputValue})
    }




    const [iurl, setiurl] = useState('')
    const [imshow, setimshow] = useState(false)

    const getGalleryFile = (files,e)=>{
        
        const imagefile = files[0];
        const fileName = imagefile?.name;
        const fileNameSplit = Date.now() + fileName.split(' ').join('-')  ;
        console.log(fileNameSplit);
        setFileName(fileNameSplit)   
        setGalleryFile(imagefile);
        console.log(fileName, imagefile);

        setiurl(URL.createObjectURL(imagefile))
        setimshow(true)
        console.log(URL.createObjectURL(imagefile));
    }


  
    
    const getGalleryFileInput =(e)=>{

        const imagefile = e.target.files[0];
        const fileName = imagefile?.name;
        const fileNameSplit = Date.now() + fileName.split(' ').join('-')  ;
        console.log(fileNameSplit);
        setFileName(fileNameSplit)   
        setGalleryFile(imagefile);
        // console.log(fileName, imagefile);
        setiurl(URL.createObjectURL(imagefile))
        setimshow(true)
        console.log(URL.createObjectURL(imagefile));
    }





    const uploadGallery = ()=>{


        setLooping(true);
        const date =  new Date(Date.now());
      
        gallery.date = date.toLocaleString();

        uploadBytes(storageRef, galleryFile).then((snapshot) => {
            console.log(snapshot);
            console.log('Uploaded a blob or file!');
            getDownloadURL(storageRef)
            .then(url=>{
                console.log(url);
                if (url) {
                    gallery.galleryImage = url;
                    fetch(`https://guarded-beach-69417.herokuapp.com/gallery-dashboard/gallery-info`,{
                        method:"POST",
                        headers:{
                            "Content-Type":"application/json"
                        },
                        body:JSON.stringify(gallery)

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
                        return res.json()
                    })
                    .then(data=>{
                        console.log(data);
                    })
                    .catch(err=>{
                        console.log(err);
                    })
                    setLooping(false);
                    setiurl('')
                    setimshow(false)
                    setGallery({description:''})
                }
            })
          });
          
    }




    return (
        <div>


            <div className="filter-routine">
                <div className="notice-dash-container">
                    <h3 className='upload-notice-title'>Add New Payment Receiver </h3>

                    {errMsg === 200?<Alert severity="success">Your File Upload Successfull</Alert>:null}
                    {errMsg === 400?<Alert severity="error">Please Fill Up the Full Form !!!</Alert>:null}
                    {errMsg === 500?<Alert severity="error">Please Fill Up the Full Form !!!</Alert>:null}

               <div className="notice-des">
               <TextField
               onChange={getgallery}
               name='description'
               value={gallery?.description}
               style={{
                   width:'300px'
               }}
                multiline id="outlined-basic" label="Enter payment receiver email" variant="outlined" />
               </div>

               <div className="notice-file-upload">

               {/* <label htmlFor="icon-button-file">
        <Input
        draggable={true}
        onChange={getGalleryFile}
        accept="image/*" id="icon-button-file" type="file" />
        <IconButton color="primary" aria-label="upload picture" component="span">
          <PhotoCamera />
        </IconButton>
      </label> */}
        {/* onFrameDragEnter={(event) => console.log('onFrameDragEnter', event)}
          onFrameDragLeave={(event) => console.log('onFrameDragLeave', event)}
          onFrameDrop={(event) => console.log('onFrameDrop', event)}
          onDragOver={(event) => console.log('onDragOver', event)}
          onDragLeave={(event) => console.log('onDragLeave', event)} */}

          

        




               </div>

               <div className='staff-receive'>
                 <Grid item xs={12} md={12}>
              
       <Button
              onClick={uploadGallery}

              style={{
                  width:'300px',
                  height:'45px',
                  marginTop:'30px'
              }} variant="contained" size="large">
                Send
              </Button>


              </Grid>
            
               </div>



                










                </div>


            </div>





            
        </div>
    );
};

export default AddStaffReceiver;