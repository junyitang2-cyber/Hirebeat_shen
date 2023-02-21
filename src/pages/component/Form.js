import { Card, Grid, IconButton, TextField, Typography, MenuItem, Select, InputLabel, Button, NativeSelect } from '@mui/material'
import React from 'react'
import axios from 'axios';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import uuid from 'react-uuid';


const API_URL = 'https://kasek7o0kk.execute-api.us-west-2.amazonaws.com/test';


const Form = () => {
  const [user, setUser] = useState("")
  const [error, setError] = useState('')
  const id = new Date().getTime();
  const { currentTitle, locationPreference, yearsOfExperience, seniorityLevel, requiredSkillSets, industry } = user;


  const handleChange = (e) => {
    setUser({ ...user, id: id, [e.target.name]: e.target.value })
    console.log(e.target.value)
  }

  const addUser = async (e) => {
    await axios.post(`${API_URL}`, e)
  }

  const handleAdd = async () => {
    if (!currentTitle || !locationPreference || !yearsOfExperience || !seniorityLevel || !requiredSkillSets || !industry) {
      setError("please input all input Filed!")
    } else {
      await addUser(user)
      setError("")
    }
  }



  return (
    <Card sx={{ height: 1000 }}>
      <Grid xs={12}>
        <IconButton><CloseIcon /></IconButton>
      </Grid>

      <Grid container xs={12} sx={{ height: 20, mt: 5, alignItems: 'center', justifyContent: 'center' }}>
        <Typography variant='h6'>What's your ideal candidate profile for this position?</Typography>
        <Grid item xs={12} sx={{ m: 6, alignItems: 'center', justifyContent: 'center' }}>
          <Typography lineHeight={2} variant='body2'>On-demand sourcing is a fast and effective way to fill your recruitment pipeline with quality candidates. You will specify the ideal candidate profile for each sourcing request and get 50 matching prospects within 1-2 business days.</Typography>
        </Grid>

        <Grid container xs={12} sx={{ m: 2 }}>
          <Grid item xs={10} md={5} sx={{ m: 4, ml: 10 }}>
            <TextField
              required
              label="Current Title"
              variant="standard"
              value={currentTitle}
              fullWidth
              name="currentTitle"
              onChange={(e) => handleChange(e)} />
          </Grid>
          <Grid item xs={10} md={5} sx={{ m: 4, ml: 10 }}>
            <TextField
              required
              label="Location Preference"
              variant="standard"
              value={locationPreference}
              name="locationPreference"
              onChange={(e) => handleChange(e)}
              fullWidth
            />
          </Grid>

          <Grid item xs={10} md={5} sx={{ m: 4, ml: 10 }}>
            <InputLabel variant="standard" htmlFor="uncontrolled-native">
              Years of Experience*
            </InputLabel>
            <NativeSelect
              required
              defaultValue={""}
              fullWidth
              name="yearsOfExperience"
              value={yearsOfExperience}
              onChange={(e) => handleChange(e)}
            >
              <option value={""}>Select...</option>
              <option value={"Less than 1 year"}>Less than 1 year</option>
              <option value={"1-3 years"}>1-3 years</option>
              <option value={"3-5 years"}>3-5 years</option>
            </NativeSelect>
          </Grid>
          <Grid item xs={10} md={5} sx={{ m: 4, ml: 10 }}>
            <InputLabel variant="standard" htmlFor="uncontrolled-native">
              Seniority Level*
            </InputLabel>
            <NativeSelect
              required
              defaultValue={""}
              fullWidth
              value={seniorityLevel}
              name="seniorityLevel"
              onChange={(e) => handleChange(e)}
              inputProps={{
                id: 'uncontrolled-native'
              }}
            >
              <option value={""}>Select...</option>
              <option >Entry</option>
              <option >Associate</option>
              <option >Senior</option>
            </NativeSelect>

          </Grid>

          <Grid item xs={10} md={5} sx={{ m: 4, ml: 10 }}>
            <InputLabel variant="standard" htmlFor="uncontrolled-native">
              Required Skill Sets*
            </InputLabel>
            <NativeSelect
              defaultValue={""}
              fullWidth
              value={requiredSkillSets}
              name="requiredSkillSets"
              onChange={(e) => handleChange(e)}
            >
              <option value={""}>Select...</option>
              <option value={"Leadership"}>Leadership</option>
              <option value={"Communication"}>Communication</option>

            </NativeSelect>
          </Grid>
          <Grid item xs={10} md={5} sx={{ m: 4, ml: 10 }}>
            <InputLabel variant="standard" htmlFor="uncontrolled-native">
              Perferred Skilled Sets
            </InputLabel>
            <NativeSelect
              defaultValue={""}
              fullWidth
              onChange={(e) => handleChange(e)}
              inputProps={{
                name: 'perferredSkilledSets',
                id: 'uncontrolled-native'
              }}
            >
              <option value={""}>Select...</option>
              <option >Entry</option>
              <option >Associate</option>
              <option >Senior</option>
            </NativeSelect>
          </Grid>

          <Grid item xs={10} md={5} sx={{ m: 4, ml: 10 }}>
            <InputLabel variant="standard" htmlFor="uncontrolled-native">
              Industry*
            </InputLabel>
            <NativeSelect
              defaultValue={""}
              fullWidth
              value={industry}
              name="industry"
              onChange={(e) => handleChange(e)}
            >
              <option value={""}>Select...</option>
              <option value={"Less than 1 year"}>Less than 1 year</option>
              <option value={"1-3 years"}>1-3 years</option>
              <option value={"3-5 years"}>3-5 years</option>
            </NativeSelect>
          </Grid>
          <Grid item xs={10} md={5} sx={{ m: 4, ml: 10 }}>
            <InputLabel variant="standard" htmlFor="uncontrolled-native">
              Education Level
            </InputLabel>
            <NativeSelect
              defaultValue={""}
              fullWidth
              inputProps={{
                name: 'educationLevel',
                id: 'uncontrolled-native'
              }}
            >
              <option value={""}>Select...</option>
              <option >Entry</option>
              <option >Associate</option>
              <option >Senior</option>
            </NativeSelect>
          </Grid>

          <Grid item xs={12} sx={{ m: 4, ml: 10 }}>
            <Typography>Additional Comment (eg.language skills,certificates,major, etc.)</Typography>
            <Grid item xs={12} >
              <TextField fullWidth multiline rows={7}></TextField>
            </Grid>

          </Grid>



        </Grid>
        {error && <h3>{error}</h3>}
        <Button onClick={() => handleAdd()}>Submit</Button>
      </Grid>
    </Card >



  )
}

export default Form
