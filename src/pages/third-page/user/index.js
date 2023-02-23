import { Box, Button, FormControl, Grid, Paper, TextField, Typography } from '@mui/material'

import React from 'react'
import { useState } from 'react'
import FileBase from 'react-file-base64'
import axios from 'axios'

import PostDetails from './right'

const UserProfile = () => {
  const API__URL = 'https://ancc52vql6.execute-api.us-west-2.amazonaws.com/dev';

  const [postData, setPostData] = useState({
    creator: '', title: '', message: '', tags: '', selectedFile: ''
  })

  const handleSubmit = async (e) => {
    try {
      await axios.post(`${API__URL}`, e)
    } catch (error) {
      console.log("error while calling deleteUser api", error)
    }
  }

  const clear = () => {

  }


  return (
    <Box>
      <Grid container xs={12} spacing={4}>
        <Grid container
          direction="column"
          justifyContent="space-around"
          alignItems="stretch" xs={4} spacing={2}>
          <Grid item>
            <Typography variant='h6'>Create</Typography>
            <TextField
              name="creator"
              variant='outlined'
              label="creator"
              fullWidth
              value={postData.creator}
              onChange={(e) => setPostData({ ...postData, creator: e.target.value })}
            />
          </Grid>
          <Grid item >
            <TextField
              name="title"
              variant='outlined'
              label="title"
              fullWidth
              value={postData.title}
              onChange={(e) => setPostData({ ...postData, title: e.target.value })}
            />
          </Grid>
          <Grid item>
            <TextField
              name="message"
              variant='outlined'
              label="message"
              fullWidth
              value={postData.message}
              onChange={(e) => setPostData({ ...postData, message: e.target.value })}
            />
          </Grid>
          <Grid item>
            <TextField
              name="tags"
              variant='outlined'
              label="tags"
              fullWidth
              value={postData.tags}
              onChange={(e) => setPostData({ ...postData, tags: e.target.value })}
            />
          </Grid>
          <Grid item>
            <FileBase
              type='file'
              multiple={false}
              onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })}
            />
          </Grid>
          <Grid item><Button variant="contained" color='primary' size='large' type='submit' onClick={() => handleSubmit()} fullWidth>Submit</Button></Grid>

          <Grid item><Button variant="contained" color='secondary' size='small' onClick={clear} fullWidth>Clear</Button></Grid>


        </Grid>
        <Grid item xs={8}>
          <PostDetails />
        </Grid>
      </Grid>


    </Box>
  )
}

export default UserProfile
