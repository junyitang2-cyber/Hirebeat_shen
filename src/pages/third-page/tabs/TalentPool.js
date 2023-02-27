import React from 'react'
import { Box, Button, Card, Grid, Paper, TableCell, TableRow, styled, Table, TableHead, Typography, IconButton, Tooltip, ListItemAvatar, ListItem, Avatar, ListItemText } from '@mui/material'
import { useState, useEffect } from 'react'
import axios from 'axios'

import { useRouter } from 'next/router';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import PopUpProfile from './PopUpProfile';
import UserProfile from './UserProfile';



const TalentPool = () => {
  const [candidates, setCandidates] = useState([])
  const API_URL1 = 'https://xkv8hqg3o0.execute-api.us-west-2.amazonaws.com/dev';
  const [user, setUser] = useState("")
  const [openPopup, setOpenPopup] = useState(false)
  const router = useRouter()
  const now = new Date().toISOString()


  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    const response = await axios.get(API_URL1)
    setCandidates(response.data.Items)
    console.log(response)

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

  const showDetails = (id) => {
    setOpenPopup(true)
    axios.get(`${API_URL1}`)
  }




  const StyledTable = styled(Table)`
width:90%;margin:50px 0 0 50px`

  return (
    <Box sx={{ height: "100%", width: '100%' }}>
      <Grid container xs={12} >
        <Grid container xs={12} spacing={3} sx={{ m: 5, justifyContent: 'space-around' }}>
          <Grid item xs={4.7}>
            Candidates
          </Grid>
          <Grid item xs={2.3}>
            Company
          </Grid>
          <Grid item xs={2}>
            Score
          </Grid>
          <Grid item xs={1.5}>
            Source
          </Grid>
          <Grid item xs={1.5}>
            Mark
          </Grid>
        </Grid>
        <Grid item xs={12}>
          {candidates.map(candidate => (
            <Card key='idx' sx={{ m: 4, height: 80 }}>
              <Grid container justifyContent='center' alignItems='center' >
                <Grid item xs={5} >
                  <ListItem direction="row" alignItems="flex-start" justifyContent="center">
                    <ListItemAvatar>
                      <Avatar alt={candidate.name} src="" />
                    </ListItemAvatar>
                    <ListItemText
                      onClick={(e) => showDetails(candidate.id)}
                      primary={candidate.name}
                      secondary={
                        <React.Fragment>
                          <Typography
                            sx={{ display: 'inline' }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                          >
                            {String(candidate.createdAt).substring(5, 10)} {candidate.currentTitle}
                          </Typography>
                        </React.Fragment>
                      }
                    />
                  </ListItem>
                </Grid>
                <Grid item xs={2} sx={{ alignItems: 'center', justifyItems: 'center' }}>
                  {candidate.workExp}
                </Grid>
                <Grid item xs={2} sx={{ alignItems: 'center', justifyItems: 'center' }}>
                  {candidate.Score}
                </Grid>
                <Grid item xs={1.5} sx={{ alignItems: 'center', justifyItems: 'center' }}>
                  {candidate.source}
                </Grid>
                <Grid item xs={1.5} sx={{ alignItems: 'center', justifyItems: 'center' }}>
                  <ThumbUpIcon />
                  <ThumbDownOffAltIcon />
                </Grid>
              </Grid>
              <PopUpProfile
                title={candidate.name}
                openPopup={openPopup}
                setOpenPopup={setOpenPopup}
              >
                <UserProfile />
              </PopUpProfile>
            </Card>
          ))}
          <Grid item xs={12}>
          </Grid>
        </Grid>
      </Grid>

    </Box>
  )
}

export default TalentPool
