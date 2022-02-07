import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './b.css';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import CustomizedAccordions from './CustomizedAccordions';
import TitlebarBelowImageList from './TitlebarBelowImageList';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <nav class="navbar navbar-light bg-light">
      <div class="container-fluid">
      <a class="navbar-brand" href="#">
       <h3 class="me"> <MenuBookIcon/> CODING HUB </h3>
     </a>
     <form class="d-flex">
           <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button class="btn btn-outline-success" type="submit">Search</button>
         </form>
       </div>
     </nav>
          
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Home" {...a11yProps(0)} />
          <Tab label="JAVA" {...a11yProps(1)} />
          <Tab label="C " {...a11yProps(2)} />
          <Tab label="C++" {...a11yProps(3)} />
          <Tab label="Python" {...a11yProps(4)} />
          <Tab label="Oops" {...a11yProps(5)} />
          <Tab label="" disabled /></Tabs>
      </Box>
      <TabPanel value={value} index={0}>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione quaerat reiciendis, repudiandae corporis perspiciatis, itaque eius ipsa tenetur earum amet, ducimus aut aliquam sunt perferendis neque explicabo. Cumque, vero? Sunt?
       Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit quam maxime rerum repudiandae fugit. Possimus, eos. Animi maiores soluta, voluptatum nulla dolorem, impedit deleniti optio enim laborum eum maxime tempore.      
       
       <TitlebarBelowImageList/> 
       Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione quaerat reiciendis, repudiandae corporis perspiciatis, itaque eius ipsa tenetur earum amet, ducimus aut aliquam sunt perferendis neque explicabo. Cumque, vero? Sunt?
       Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit quam maxime rerum repudiandae fugit. Possimus, eos. Animi maiores soluta, voluptatum nulla dolorem, impedit deleniti optio enim laborum eum maxime tempore.      
       <TitlebarBelowImageList/> 
       Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione quaerat reiciendis, repudiandae corporis perspiciatis, itaque eius ipsa tenetur earum amet, ducimus aut aliquam sunt perferendis neque explicabo. Cumque, vero? Sunt?
       Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit quam maxime rerum repudiandae fugit. Possimus, eos. Animi maiores soluta, voluptatum nulla dolorem, impedit deleniti optio enim laborum eum maxime tempore.      

       <TitlebarBelowImageList/> 
       Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione quaerat reiciendis, repudiandae corporis perspiciatis, itaque eius ipsa tenetur earum amet, ducimus aut aliquam sunt perferendis neque explicabo. Cumque, vero? Sunt?
       Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit quam maxime rerum repudiandae fugit. Possimus, eos. Animi maiores soluta, voluptatum nulla dolorem, impedit deleniti optio enim laborum eum maxime tempore.      

       <TitlebarBelowImageList/>
       Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione quaerat reiciendis, repudiandae corporis perspiciatis, itaque eius ipsa tenetur earum amet, ducimus aut aliquam sunt perferendis neque explicabo. Cumque, vero? Sunt?
       Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit quam maxime rerum repudiandae fugit. Possimus, eos. Animi maiores soluta, voluptatum nulla dolorem, impedit deleniti optio enim laborum eum maxime tempore.      


       <TitlebarBelowImageList/> 
       Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione quaerat reiciendis, repudiandae corporis perspiciatis, itaque eius ipsa tenetur earum amet, ducimus aut aliquam sunt perferendis neque explicabo. Cumque, vero? Sunt?
       Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit quam maxime rerum repudiandae fugit. Possimus, eos. Animi maiores soluta, voluptatum nulla dolorem, impedit deleniti optio enim laborum eum maxime tempore.      

      </TabPanel>
      <TabPanel value={value} index={1}>
       <CustomizedAccordions/>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <CustomizedAccordions/>

      </TabPanel>
      <TabPanel value={value} index={3}>
     
      <CustomizedAccordions/>
      </TabPanel>
      <TabPanel value={value} index={4}>
     
      <CustomizedAccordions/>
      </TabPanel>
      <TabPanel value={value} index={5}>
     
      <CustomizedAccordions/>
      </TabPanel>

    </Box>
  );
}
