import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Avatar, Grid } from '@mui/material';

const UserProfile = () => {
  const [profiles, setProfiles] = useState([])
  const API_URL1 = 'https://xkv8hqg3o0.execute-api.us-west-2.amazonaws.com/dev';


  useEffect(() => {
    getData()
  }, [])

  const getData = async (id) => {
    const response = await axios.get(API_URL1)
    setProfiles(response.data.Items)
    console.log(response)

  }

  return (
    <div>
      {profiles.map((user, index) => (
        <Grid container xs={12} key={index}>
          <Grid container xs={5} direction="column" alignItems="center">
            <Grid item xs={3}>
              <Avatar alt='Ki' size='large' />
            </Grid>
            <Grid item>
              {user.name}
            </Grid>
          </Grid>
          <Grid container xs={7}>
            hello
          </Grid>
        </Grid>
      ))}
    </div>
  )
}

export default UserProfile
