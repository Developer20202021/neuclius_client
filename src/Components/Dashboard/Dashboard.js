import * as React from 'react';
import "./Dashboard.css";
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import GroupIcon from '@mui/icons-material/Group';
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';
import { Badge } from '@mui/material';
import { Route, Switch, useHistory, useRouteMatch } from 'react-router-dom';
import Home from '../Home/Home';
import AllStudent from '../AllStudent/AllStudent';
import AddStudent from '../AddStudent/AddStudent';
import PaymentHistory from '../PaymentHistory/PaymentHistory';
import AllDuePayment from '../AllDuePayment/AllDuePayment';
import PaymentIcon from '@mui/icons-material/Payment';
import AttendanceCalender from '../AttendanceCalender/AttendanceCalender';
import NoteIcon from '@mui/icons-material/Note';
import Routine from '../Routine/Routine';
import SetRoutine from '../SetRoutine/SetRoutine';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import AddPayment from '../AddPayment/AddPayment';
import AddResult from '../AddResult/AddResult';
import StudentProfile from '../StudentProfile/StudentProfile';
import AddTeacher from '../AddTeacher/AddTeacher';
import AllTeacher from '../AllTeacher/AllTeacher';
import DashboardPage from './DashboardPage/DashboardPage';
import TeacherProfile from '../TeacherProfile/TeacherProfile';
import EditTeacher from '../EditTeacher/EditTeacher';
import EditStudent from '../EditStudent/EditStudent';
import AddStaffReceiver from '../AddStaffReceiver/AddStaffReceiver';
import NewSettings from '../Settings/Settings';
import GroupsIcon from '@mui/icons-material/Groups';
import DashboardIcon from '@mui/icons-material/Dashboard';



const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function Dashboard() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };




  const [notify, setNotify] = React.useState(false);
  const [emailItem, setEmailItem] = React.useState(false)

const [setting,setSetting] = React.useState(false)
  const getUserSettings = ()=>{

    setSetting(!setting);
    setEmailItem(false)
    setNotify(false)

  }

 

  
  const notification = ()=>{
    setNotify(!notify);
    setSetting(false);
    setEmailItem(false)
  }

  const getContactEmail = ()=>{
    setEmailItem(!emailItem);
    setSetting(false);
    setNotify(false)
  }

  const history = useHistory();
  const {path, url} = useRouteMatch();

  const goLocation = (getUrl)=>{

    history.push(getUrl);

  }










  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar 
      style={{
        backgroundColor:'#2A3042',
        display: 'flex',
        justifyContent:"space-between",
        alignItems:"center",
        flexDirection:"row"
        
    }}
      position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: '36px',
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          
           <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
        
        </Toolbar>


        <div className="header-additional">
        <div onClick={notification} className='user-image-h'>
         <Badge badgeContent={4} color="error">
        <NotificationsActiveIcon style={{
          color:"#6673FC"
        }} />
      </Badge>
         </div>

     
         <div className='user-image-h' onClick={getUserSettings}>
         <img src='https://image.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg'alt='' />
         </div>
        
      
        </div>
        {setting?<div className="toogle-div">
         <div className="user-setting-h-toogle">
             <div>  <img src="https://image.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg" alt="" width='100px' height='100px'/></div>
             <div className="user-name">
               <h3>Mahadi Hasan</h3>
             </div>
             <div className="user-name">
               <p><SettingsIcon /> Setting</p>
             </div>
             <div className="user-name">
               <p><LogoutIcon/> Log Out</p>
             </div>
             
         </div>
        </div>:null}
      
      





      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>

        <div className='drawer-header'>Nucleus Dashboard</div>



          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
      
        <List>
        

            <ListItem button onClick={()=>goLocation("/dashboard")}>
              <ListItemIcon>
              <DashboardIcon/>
              </ListItemIcon>
              <ListItemText>

                 Dashboard
                  </ListItemText>
            </ListItem>
            <ListItem button onClick={()=>goLocation(url+"/all-students")}>
              <ListItemIcon>
              <GroupIcon/>
              </ListItemIcon>
              <ListItemText>

                  All Student
                  </ListItemText>
            </ListItem>
            <ListItem button onClick={()=>goLocation(url+"/all-due-payment-student")}>
              <ListItemIcon>
              < PaymentIcon/> 
              </ListItemIcon>
              <ListItemText>

                  Due Payment
                  </ListItemText>
            </ListItem>

            <ListItem button onClick={()=>goLocation(url+"/routine")}>
              <ListItemIcon>
              < NoteIcon/> 
              </ListItemIcon>
              <ListItemText>

                Routine

                
              </ListItemText>
            </ListItem>

            <ListItem button onClick={()=>goLocation(url+"/add-routine")}>
              <ListItemIcon>
              < NoteAddIcon/> 
              </ListItemIcon>
              <ListItemText>

                Add Routine

                
              </ListItemText>
            </ListItem>
         
            <ListItem button onClick={()=>goLocation(url+"/all-teachers")}>
              <ListItemIcon>
              < GroupsIcon/> 
              </ListItemIcon>
              <ListItemText>

                All Teachers

                
              </ListItemText>
            </ListItem>
            <ListItem button onClick={()=>goLocation(url+"/add-staff-receiver")}>
              <ListItemIcon>
              < PersonAddAltIcon/> 
              </ListItemIcon>
              <ListItemText>

               Add Receiver

                
              </ListItemText>
            </ListItem>
            <ListItem button onClick={()=>goLocation(url+"/setting")}>
              <ListItemIcon>
              < SettingsIcon/> 
              </ListItemIcon>
              <ListItemText>

               Settings

                
              </ListItemText>
            </ListItem>
       
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />

        <Switch>

            <Route path={`${path}/add-student`}>
                <AddStudent></AddStudent>
            </Route>

            <Route path={`${path}/all-students`}>
                <AllStudent></AllStudent>
            </Route>

            <Route path={`${path}/per-student-payment-history/:id`}>
                <PaymentHistory></PaymentHistory>
            </Route>

            <Route path={`${path}/all-due-payment-student`}>
                <AllDuePayment></AllDuePayment>
            </Route>
            <Route path={`${path}/student-health/:id`}>
                <AttendanceCalender></AttendanceCalender>
            </Route>
            <Route path={`${path}/routine`}>
               <Routine></Routine>
            </Route>
            <Route path={`${path}/add-routine`}>
               <SetRoutine></SetRoutine>
            </Route>
            <Route path={`${path}/add-payment/:id`}>
               <AddPayment></AddPayment>
            </Route>
            <Route path={`${path}/add-result/:id`}>
               <AddResult></AddResult>
            </Route>
            <Route path={`${path}/view-details/:id`}>
                <StudentProfile></StudentProfile>
            </Route>
            <Route path={`${path}/add-teacher`}>
                <AddTeacher></AddTeacher>
            </Route>
            <Route path={`${path}/all-teachers`}>
               <AllTeacher></AllTeacher>
            </Route>
            <Route exact path={`/dashboard`}>
               <DashboardPage></DashboardPage>
            </Route>
            <Route  path={`${path}/teacher-view-details/:id`}>
               <TeacherProfile></TeacherProfile>
            </Route>
            <Route  path={`${path}/edit-teacher/:id`}>
                    <EditTeacher></EditTeacher>
            </Route>
            <Route  path={`${path}/edit-student/:id`}>
              <EditStudent></EditStudent>
            </Route>
            <Route  path={`${path}/add-staff-receiver`}>
            <AddStaffReceiver></AddStaffReceiver>
            </Route>
            <Route  path={`${path}/setting`}>
                <NewSettings></NewSettings>
            </Route>


        </Switch>
        
      </Box>
    </Box>
  );
}
