import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import './SimplePaper.css';
import Button from '@mui/material/Button';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

export default function SimplePaper() {
  return (
    <Box className= "hel"
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 880,
          height: 370,
        },
      }}
    >
      <Paper elevation={3}>
      <div class="btn-group" role="group" aria-label="Basic outlined example">
      <button type="button" class="btn btn-outline-danger">Login</button>
      <button type="button" class="btn btn-outline-primary">Register</button>
      </div>
      <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m:1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          id="outlined-required"
          label="Username"
          defaultValue=""/>
         </div>
         </Box> 
         <Box
          component="form"
          sx={{'& .MuiTextField-root': { m: 1, width: '25ch' },
          }}
          noValidateautoComplete="off">
         <div>
         <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"/>
         </div>
         </Box> <br />
         <Button  variant="contained" color="success"> Submit</Button>
      </Paper>
    </Box>
  );
}
