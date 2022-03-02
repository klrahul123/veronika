import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import MenuIcon from '@mui/icons-material/Menu';
import './toy.css';

export default function Abe(){
   return (
       <div class="hwai">
          <p class="yon"> Copyright © Technology Leads 2022. </p>
          <p class="yon">All rights reserved.</p>
          <p class="yon"> Follow Us: <a href="https://www.instagram.com/klrahul7080/"><InstagramIcon/></a> <a href="https://www.facebook.com/profile.php?id=100043468223500"><FacebookIcon/></a> <a href="https://twitter.com/RahulGu95108304"><TwitterIcon/></a> <a href="https://github.com/klrahul123"><GitHubIcon/> </a> </p>

       </div>
   );
}