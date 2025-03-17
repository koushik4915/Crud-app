import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from './userReducer';
import { useNavigate } from 'react-router-dom';

const Create = () => {
  const[name,setName] = useState('');
  const[email,setEmail] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state)=>state.users);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addUser({id: user[user.length-1].id+1, name,email}));
    navigate('/');
  };

  return (
    <Box sx={{ maxWidth: 400, margin: 'auto', padding: 3 }}>
      <Typography variant="h5" gutterBottom>
        Create User
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Name"
          name="name"
          value={name}
          onChange={(e)=>{setName(e.target.value)}}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Email"
          name="email"
          value={email}
          onChange={(e)=>{setEmail(e.target.value)}}
          margin="normal"
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ marginTop: 2 }}
        >
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default Create;
