import { Card, Grid, IconButton, TextField, Typography, MenuItem, Select, InputLabel, Button } from '@mui/material'
import React from 'react'
import axios from 'axios';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';

const API_URL = 'https://kasek7o0kk.execute-api.us-west-2.amazonaws.com/test';


const Form = () => {
  const [years, setYears] = React.useState('');
  const [user, setUser] = useState("")
  const { currentTitle, locationPreference } = user;

  const handleChange = (event) => {
    setYears(event.target.value);
  };

  const addUser = async (e) => {
    return await axios.put(API_URL, e.target)
  }

  const handleAdd = async () => {
    await addUser(user)
  }



  return (

    <Card sx={{ height: 600 }}>
      <Grid xs={12}>
        <IconButton><CloseIcon /></IconButton>
      </Grid>

      <Grid container xs={12} sx={{ height: 20, mt: 5, alignItems: 'center', justifyContent: 'center' }}>
        <Typography variant='h6'>What's your ideal candidate profile for this position?</Typography>
        <Grid item xs={12} sx={{ m: 6, alignItems: 'center', justifyContent: 'center' }}>
          <Typography lineHeight={2} variant='body2'>On-demand sourcing is a fast and effective way to fill your recruitment pipeline with quality candidates. You will specify the ideal candidate profile for each sourcing request and get 50 matching prospects within 1-2 business days.</Typography>
        </Grid>
        <Grid container xs={12} sx={{ m: 2 }}>
          <Grid item xs={5} sx={{ m: 4, ml: 10 }}>
            <TextField
              required
              label="Current Title"
              variant="standard"
              value={currentTitle}
              fullWidth
            />
          </Grid>
          <Grid item xs={5} sx={{ m: 4, ml: 10 }}>
            <TextField
              required
              label="Location Preference"
              variant="standard"
              value={locationPreference}
              fullWidth
            />
          </Grid>
          {/* <Grid item xs={5} sx={{ m: 4, ml: 10 }}>
            <InputLabel required>Years of Experience</InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={years}
              label="Years of Experience"
              onChange={handleChange}
              fullWidth
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>

          </Grid>
          <Grid item xs={5} sx={{ m: 4, ml: 10 }}>
            <InputLabel id="demo-simple-select-helper-label">Age</InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={years}
              label="Years of Experience"
              onChange={handleChange}
              fullWidth
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </Grid> */}

        </Grid>
        <Button onClick={() => handleAdd()}>Submit</Button>


      </Grid>
    </Card>



  )
}

export default Form
