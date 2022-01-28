import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AddIcon from '@mui/icons-material/Add';
import LoginIcon from '@mui/icons-material/Login';
import { useHistory } from 'react-router-dom';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';

const theme = createTheme();

export default function Login() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };




  const [value, setValue] = React.useState(0);

  const history = useHistory();




  const[getNewTab, setNewTab] = React.useState(1);


  const goToAnother = (num)=>{

    setNewTab(num)
    

  }




  const gotoTeacher = (num)=>{

      setNewTab(num)

  }


  const gotoAnotherPage = (path)=>{

      history.push(path)


  }















  return (
    <ThemeProvider theme={theme}>
    
      {getNewTab===1?<Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
           Log in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
         
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
             Log In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              
            </Grid>
          </Box>
        </Box>
    
      </Container>:null}





      {getNewTab===2?<Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          
          </Avatar>
         
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Enter Private Key"
              name="privatekey"
              autoComplete="email"
              autoFocus
            />
           
         
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={()=>gotoTeacher(3)}
            >
             Go Now
            </Button>
            <Grid container>
              
              
            </Grid>
          </Box>
        </Box>
    
      </Container>:null}

      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction onClick={()=>goToAnother(1)} label="Login" icon={<LoginIcon />} />
        <BottomNavigationAction onClick={()=>goToAnother(2)} label="Private Key Login" icon={<AddIcon />} />
        
        <BottomNavigationAction onClick={()=>goToAnother(1)} label="Location" icon={<LocationOnIcon />} />
       
       {getNewTab === 3? <BottomNavigationAction onClick={()=>gotoAnotherPage("/add-teacher")} label="Add Teacher" icon={<PersonAddAltIcon />} />:null}
      {getNewTab === 3?   <BottomNavigationAction onClick={()=>gotoAnotherPage('/add-student')} label="Add Student" icon={<PersonAddAltIcon />} />:null}
      </BottomNavigation>
      </Paper>
    </ThemeProvider>
  );
}