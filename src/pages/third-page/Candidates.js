import { Avatar, Card, Grid, ListItem, ListItemAvatar, ListItemText, Paper, Typography } from '@mui/material'
import { Amplify, API, graphqlOperation } from 'aws-amplify'
import { useRouter } from 'next/router'
import React from 'react'
import { useState, useEffect } from 'react'
import awsmobile from 'src/aws-exports'
import { listCandidates } from 'src/graphql/queries'


Amplify.configure(awsmobile)



const Candidates = () => {
  const [candidates, setCandidates] = useState([])

  useEffect(() => {
    fetchCandidates();
  }, [])

  const fetchCandidates = async () => {
    try {
      const candidateDate = await API.graphql(graphqlOperation(listCandidates));
      const candidateList = candidateDate.data.listCandidates.Items;
      console.log("Candidates list", candidateList)
      setCandidates(candidateList)
    } catch (error) {
      console.log('error on fetching', error)
    }
  }

  return (
    <div>
      <Grid container xs={12} sx={{ mt: 5, mb: 5 }}>
        <Grid item xs={5}>
          Candidates
        </Grid>
        <Grid item xs={2}>
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

      <Paper>
        <Card>
          <Grid container xs={12} direction='row' justifyContent='space-around' alignItems='center'>
            {
              candidates.map(candidate => {
                return (<div key={id}>
                  <Grid item xs={5}>
                    <ListItem alignItems="flex-start">
                      <ListItemAvatar>
                        <Avatar alt={candidate.name} src="" />
                      </ListItemAvatar>
                      <ListItemText
                        primary='user.name'
                        secondary={
                          <React.Fragment>
                            <Typography
                              sx={{ display: 'inline' }}
                              component="span"
                              variant="body2"
                              color="text.primary"
                            >
                              {candidate.currentTitle}
                            </Typography>
                          </React.Fragment>
                        }
                      />
                    </ListItem>
                  </Grid>
                  <Grid item xs={2} sx={{ alignItems: 'center', justifyItems: 'center' }}>
                    {candidate.company}
                  </Grid>
                  <Grid item xs={2} sx={{ alignItems: 'center', justifyItems: 'center' }}>
                    {candidate.Score}
                  </Grid>
                  <Grid item xs={1.5} sx={{ alignItems: 'center', justifyItems: 'center' }}>
                    Source
                  </Grid>
                  <Grid item xs={1.5} sx={{ alignItems: 'center', justifyItems: 'center' }}>
                    Mark
                  </Grid>
                </div>)
              })
            }

          </Grid>
        </Card>
      </Paper>
    </div>
  )
}

export default Candidates
