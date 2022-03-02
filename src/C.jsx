import React from "react";
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { Button } from 'react-bootstrap';
import { FcUp } from "react-icons/fc";
import { FcHome } from "react-icons/fc";
import './toy.css';
import { Table } from 'react-bootstrap';
import scanf from './cpic/scanf.png';


const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));


export default function C() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion  class="num" expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
          <Typography>C Introduction</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          C is a powerful general-purpose programming language. It can be used to develop software like operating systems, databases, compilers, and so on. C programming is an excellent language to learn to program for beginners.
          Our C tutorials will guide you to learn C programming one step at a time. <br /> <br />
          <h2>About C Programming</h2> <br />
          <h5 class="nya"> Procedural Language </h5>- Instructions in a C program are executed step by step.
          <h5 class="nya"> Portable </h5> - You can move C programs from one platform to another, and run it without any or minimal changes.
          <h5 class="nya"> Speed </h5>- C programming is faster than most programming languages like Java, Python, etc.
          <h5 class="nya"> General Purpose </h5>- C programming can be used to develop operating systems, embedded systems, databases, and so on. <br /> <br />
          <h2>Why Learn C Programming?</h2> <br />
          -C helps you to understand the internal architecture of a computer, how computer stores and retrieves information. <br />
          -After learning C, it will be much easier to learn other programming languages like Java, Python, etc. <br />
          -Opportunity to work on open source projects. Some of the largest open-source projects such as Linux kernel, Python interpreter, SQLite database, etc. are written in C <br />

          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion  class="num" expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
          <Typography >C Variables, Constants</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          -a variable is a container (storage area) to hold data. <br />
          -To indicate the storage area, each variable should be given a unique name (identifier). Variable names are just the symbolic representation of a memory location. <br />
          For example: <br />
          <h6 class="nyapan"> int Score = 90; </h6> <br />
          <h5 class="nya"> Rules for naming a variable </h5> 
          -A variable name can only have letters (both uppercase and lowercase letters), digits and underscore. <br />
          -The first letter of a variable should be either a letter or an underscore. <br />
          -There is no rule on how long a variable name (identifier) can be. However, you may run into problems in some compilers if the variable name is longer than 31 characters. <br /> <br />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion  class="num" expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
        <AccordionSummary aria-controls="panel6d-content" id="panel6d-header">
          <Typography>C Data Types</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          In C programming, data types are declarations for variables. This determines the type and size of data associated with variables. <br />
          A data type specifies the type of data that a variable can store such as integer, floating, character, etc. <br />

          For example, <br />
          <h6 class="nyapan"> int myVar; </h6> <br />
          Here, myVar is a variable of int (integer) type. The size of int is 4 bytes. <br />
           
          <Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th></th>
      <th>Types</th>
      <th>Data Types</th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Basic Data Type</td>
      <td>int, char, float, double</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Derived Data Type</td>
      <td>array, pointer, structure, union</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Enumeration Data Type</td>
      <td>	enum</td>
      
    </tr>
    <tr>
      <td>4</td>
      <td >Void Data Type</td>
      <td >void</td>
      
    </tr>
  </tbody>
</Table>
<h5 class="nya"> int </h5> 
-Integers are whole numbers that can have both zero, positive and negative values but no decimal values. For example, 0, -5, 10 <br />
<h6 class="nyapan"> int myVar; </h6> <br />
<h5 class="nya"> float and double </h5> 
-float and double are used to hold real numbers. <br />
<h6 class="nyapan"> float salary; <br />
 double price; </h6> <br />
 <h5 class="nya">  char </h5>
 -Keyword char is used for declaring character type variables. <br />
  For example, <br />
  <h6 class="nyapan"> char test = 'h'; <br /></h6> <br />
  <h5 class="nya">  void </h5> <br />
  -void is an incomplete type. It means "nothing" or "no type". You can think of void as absent. <br />

-For example, if a function is not returning anything, its return type should be void. <br />

-Note that, you cannot create variables of void type. <br />
 
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion  class="num"expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
        <AccordionSummary aria-controls="panel7d-content" id="panel8d-header">
          <Typography>C Input Output (I/O)</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          In C programming, printf() is one of the main output function. The function sends formatted output to the screen. <br />
          For example, <br /> <br />
          <h6 class="nyapan">  // Displays the string inside quotations <br />
             printf("C Programming"); <br /> <br />
             Output: <br />
             C Programming
              </h6> <br />
              <h5 class="nya"> C Input</h5>
              In C programming, scanf() is one of the commonly used function to take input from the user. The scanf() function reads formatted input from the standard input such as keyboards. <br />
              <img class="e" src={scanf} alt="" /> <br /> <br />
              <h5 class="nya"> Format Specifiers for I/O </h5>
              As you can see from the above examples, we use: <br />
              1-%d for int <br />
              2-%f for float <br />
              3-%lf for double <br />
              4-%c for char <br />
              
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion  class="num" expanded={expanded === 'panel9'} onChange={handleChange('panel9')}>
        <AccordionSummary aria-controls="panel9d-content" id="panel9d-header">
          <Typography>C Comments</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          -In programming, comments are hints that a programmer can add to make their code easier to read and understand. <br />
           -For example, <br />
           <h6 class="nyapan">    // print Hello World to the screen <br />
           printf("Hello World"); </h6> <br />

           <p className="man">Here, // print Hello World to the screen is a comment in C programming. Comments are completely ignored by C compilers.</p>
           <h5 class="nya"> Types of Comments</h5>
           There are two ways to add comments in C: <br />
           1-// - Single Line Comment <br />

           2-/*...*/ - Multi-line Comment
           <h5 class="nya">  Use of Comments in C</h5>
           1. Make Code Easier to Understand <br />
           2. Using Comments for debugging <br />

           
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion  class="num"expanded={expanded === 'panel10'} onChange={handleChange('panel10')}>
        <AccordionSummary aria-controls="panel10d-content" id="panel10d-header">
          <Typography>C Programming Operators</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          -An operator is a symbol that operates on a value or a variable. For example: + is an operator to perform addition. <br />
          -C has a wide range of operators to perform various operations. <br />
          <h5 class="nya">   C Arithmetic Operators</h5> <br />
          An arithmetic operator performs mathematical operations such as addition, subtraction, multiplication, division etc on numerical values (constants and variables). <br />
          <Table striped bordered hover variant="dark">
  <thead>
    <tr>
      
      <th>Operator</th>
      <th>Meaning of Operator</th>
      
    </tr>
  </thead>
  <tbody>
    <tr>
      
      <td>+</td>
      <td>addition or unary plus</td>
      
    </tr>
    <tr>
      
      <td>-</td>
      <td>subtraction or unary minus</td>
      
    </tr>
    <tr>
      
      <td >*</td>
      <td >multiplication</td>
      
    </tr>
    <tr>
      
      <td >/</td>
      <td >division</td>
      
    </tr>
    <tr>
      
      <td >%</td>
      <td >remainder after division (modulo division)</td>
      
    </tr>
  </tbody>
</Table> <br /> 
<h5 class="nya">   C Increment and Decrement Operators</h5> <br />
C programming has two operators increment ++ and decrement -- to change the value of an operand (constant or variable) by 1.

Increment ++ increases the value by 1 whereas decrement -- decreases the value by 1. These two operators are unary operators, meaning they only operate on a single operand.
<br /> <br />
<h5 class="nya">   C Assignment Operators</h5> <br />
An assignment operator is used for assigning a value to a variable. The most common assignment operator is = <br />
<Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>Operator</th>
      <th>Example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>=</td>
      <td>a = b</td>
    </tr>
    <tr>
      <td>+=</td>
      <td>a += b</td>
    </tr>
    <tr>
      <td >-=</td>
      <td >a -= b</td>
      
    </tr>
    <tr>
      <td >*=</td>
      <td >a *= b</td>
    </tr>
    <tr>
      <td >/=</td>
      <td >a /= b</td>
    </tr>
    <tr>
      <td >%=</td>
      <td >a %= b</td>
    </tr>
  </tbody>
</Table> <br />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion  class="num"expanded={expanded === 'panel11'} onChange={handleChange('panel11')}>
        <AccordionSummary aria-controls="panel11d-content" id="panel11d-header">
          <Typography>C if...else Statement</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion  class="num"expanded={expanded === 'panel12'} onChange={handleChange('panel12')}>
        <AccordionSummary aria-controls="panel12d-content" id="panel12d-header">
          <Typography>C for Loop</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion  class="num"expanded={expanded === 'panel13'} onChange={handleChange('panel13')}>
        <AccordionSummary aria-controls="panel13d-content" id="panel13d-header">
          <Typography>C while and do...while Loop</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion  class="num" expanded={expanded === 'panel14'} onChange={handleChange('panel14')}>
        <AccordionSummary aria-controls="panel14d-content" id="panel14d-header">
          <Typography>C break and continue</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion  class="num" expanded={expanded === 'panel15'} onChange={handleChange('panel15')}>
        <AccordionSummary aria-controls="panel15d-content" id="panel15d-header">
          <Typography>C switch Statement</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion  class="num" expanded={expanded === 'panel16'} onChange={handleChange('panel16')}>
        <AccordionSummary aria-controls="panel16d-content" id="panel16d-header">
          <Typography>C goto Statement</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion  class="num" expanded={expanded === 'panel17'} onChange={handleChange('panel17')}>
        <AccordionSummary aria-controls="panel17d-content" id="panel17d-header">
          <Typography>C Functions</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion   class="num"expanded={expanded === 'panel18'} onChange={handleChange('panel18')}>
        <AccordionSummary aria-controls="panel18d-content" id="panel18d-header">
          <Typography>C Recursion</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion   class="num"expanded={expanded === 'panel19'} onChange={handleChange('panel19')}>
        <AccordionSummary aria-controls="panel19d-content" id="panel19d-header">
          <Typography>C Arrays</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion  class="num" expanded={expanded === 'panel20'} onChange={handleChange('panel20')}>
        <AccordionSummary aria-controls="panel20d-content" id="panel20d-header">
          <Typography>C Pointers</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion  class="num" expanded={expanded === 'panel21'} onChange={handleChange('panel21')}>
        <AccordionSummary aria-controls="panel21d-content" id="panel21d-header">
          <Typography>C Programming Strings</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion  class="num"expanded={expanded === 'panel22'} onChange={handleChange('panel22')}>
        <AccordionSummary aria-controls="panel22d-content" id="panel22d-header">
          <Typography> String Functions</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion  class="num"expanded={expanded === 'panel23'} onChange={handleChange('panel23')}>
        <AccordionSummary aria-controls="panel23d-content" id="panel23d-header">
          <Typography>C struct</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion  class="num"expanded={expanded === 'panel24'} onChange={handleChange('panel24')}>
        <AccordionSummary aria-controls="panel24d-content" id="panel24d-header">
          <Typography>C Unions</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion   class="num"expanded={expanded === 'panel25'} onChange={handleChange('panel25')}>
        <AccordionSummary aria-controls="panel25d-content" id="panel25d-header">
          <Typography>C File Handling</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
     
      <Accordion  class="num" expanded={expanded === 'panel27'} onChange={handleChange('panel27')}>
        <AccordionSummary aria-controls="panel27d-content" id="panel27d-header">
          <Typography>C Standard Library Functions</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      
      <br />
      <a href="/c"> <Button variant="warning" className="bray"> <FcUp/> Back To TOP</Button> </a>
      <a href="/"> <Button variant="warning"> <FcHome/> Back To Home</Button> </a>
    </div>
  );
}
