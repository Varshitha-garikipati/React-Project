import React,{useState} from "react";
import{
    TextField,
    Button,
} from "@mui/material";

function RegistrationForm() {
    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[number,setNumber]=useState("");

    const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:5000/register", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, number }),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('Success:', data);
        alert("Registration Successfully");
        handleReset();
      })
      .catch(error => {
        console.error('Error:', error);
        alert("Registration failed. Please try again.");
      });
  };

    const handleReset=()=>{
        setName("");
        setEmail("");
        setNumber("");
    };
    return(
        <form onSubmit={handleSubmit}>
            <h2 style={{ textAlign: "center", marginBottom: "20px", color: "#1976d2" }}>
      Registration Form
    </h2>
            <TextField
            label="Name"
            value={name}
            onChange={(e)=> setName(e.target.value)}
            fullWidth
            margin="normal"
            required
            />
            <TextField
            label="Email"
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
            fullWidth
            margin="normal"
            required
            />
            <TextField
            label="Phone Number"
            value={number}
            onChange={(e)=> setNumber(e.target.value)}
            fullWidth
            margin="normal"
            required
            />
            <Button type="submit" 
                    variant="contained" 
                    color="primary" 
                    style={{marginRight:"10px"}}>Submit</Button>
            <Button type="button" 
                    variant="outlined" 
                    color="secondary" 
                    onClick={handleReset}>Reset</Button>
        </form>
    )
}
export default RegistrationForm;
