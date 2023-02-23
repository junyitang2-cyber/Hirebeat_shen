import React from 'react'
import { Box, Button, Card, Grid, Paper, TableCell, TableRow, styled, Table, TableHead, Typography, IconButton, Tooltip } from '@mui/material'
import { useState, useEffect } from 'react'
import axios from 'axios'
import EditIcon from '@mui/icons-material/Edit';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ClearIcon from '@mui/icons-material/Clear';
import { useRouter } from 'next/router';




const PostDetails = () => {
  const [candidates, setCandidates] = useState([])
  const API__URL = 'https://ancc52vql6.execute-api.us-west-2.amazonaws.com/dev';
  const [user, setUser] = useState("")
  const { currentTitle, locationPreference, yearsOfExperience, seniorityLevel, requiredSkillSets, industry } = user;
  const router = useRouter()

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    const response = await axios.get(`${API__URL}`)
    console.log(response)
    setCandidates(response.data.Items)

  }

  const handleDelete = async (id) => {
    try {
      return await axios.delete(`${API_URL}/${id}`),
        getData()
    } catch (error) {
      console.log("error while calling deleteUser api", error)
    }
  };

  const handleUpdate = async (id) => {
    try {
      return await axios.update(`${API_URL}/${id}`)

    } catch (error) {
      console.log("error while calling deleteUser api", error)
    }
  };




  const StyledTable = styled(Table)`
width:90%;margin:50px 0 0 50px`

  return (
    <Box sx={{ height: "100%" }}>


      <Grid container xs={12} sx={{ p: 4 }}>
        <Grid item xs={12}>
          {candidates.map(user => (
            <Card key='index' sx={{ m: 4, height: 100 }}>
              <Typography sx={{ m: 4, mt: 4, mb: 1 }} variant='h5'>{user.id}</Typography>
              <Grid container xs={12} sx={{ m: 4, mt: 2, mb: 4 }} direction="row" justifyContent='center' alignItems='center'>
                <Grid item xs={2}>
                  date
                </Grid>
                <Grid item xs={2}>
                  ShortList
                </Grid>
                <Grid item xs={5}>
                  Candidates:{user.locationPreference}
                </Grid>
                <Grid item xs={3}>
                  <Tooltip title="Edit">
                    <IconButton onClick={() => handleUpdate()}>
                      <EditIcon />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Mark">
                    <IconButton>
                      <BookmarkIcon />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="More">
                    <IconButton>
                      <MoreVertIcon />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="More">
                    <IconButton onClick={() => handleDelete(user.id)}>
                      <ClearIcon />
                    </IconButton>
                  </Tooltip>
                </Grid>
              </Grid>
            </Card>
          ))}
          <Grid item xs={12}>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}

export default PostDetails
