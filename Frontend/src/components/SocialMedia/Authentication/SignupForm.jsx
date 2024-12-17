import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

import {TextField, Button, FormControl} from "@mui/material";
import { registerUser } from '../Store/Auth/Actions';
import { useDispatch } from 'react-redux';

const SignupForm = () => {

    // const navigate = useNavigate()
    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        name:"",
        email:"",
        password:""
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]  : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(registerUser(formData));
    };

  return (
    <div>
        <form onSubmit={handleSubmit}>
        <FormControl>
            <TextField
              label="Name"
              variant="outlined"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </FormControl>

          <FormControl fullWidth margin="normal">
            <TextField
              label="Email"
              type="email"
              variant="outlined"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </FormControl>

          <FormControl fullWidth margin="normal">
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </FormControl>

          <Button
          variant="content"
          fullWidth
          type="sumbit"
          size="large"
          sx={{
            borderRadius: "29px",
            py: "15px",
            bgcolor: "#2e2e2d",
            color: "white",
          }}
        >
          Signup
        </Button>
          

        </form>
    </div>
  )
}

export default SignupForm