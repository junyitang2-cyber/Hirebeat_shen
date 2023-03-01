import { Box, Button, Card, Grid, List, ListItem, ListItemText, Typography, MenuItem, Divider, Hidden } from '@mui/material'
import React from 'react'
import Candidates from './Candidates'

const CandidatesFull = () => {


  return (
    <Grid container spacing={6} xs={12}>
      <Hidden mdDown>
        <Grid item xs={3}>
          <Card sx={{ p: 8, height: "100%", mt: 4 }}>
            <Button fullWidth sx={{ height: 70, mt: 5 }} variant='contained'>View Order Details</Button>
            <Box sx={{ m: 2, mt: 6, overflowY: 'hidden' }}>
              <List component='div'>
                <ListItemText>Sort</ListItemText>
              </List>
              <Button fullWidth sx={{ textAlign: 'start', justifyContent: 'flex-start' }}> Score</Button>
              <Divider />
              <Button fullWidth sx={{ textAlign: 'start', justifyContent: 'flex-start' }}>Experience</Button>

            </Box>
            <Box sx={{ m: 2, mt: 8, mb: 10, overflowY: 'hidden' }}>
              <List component='div'>
                <ListItemText>Sort</ListItemText>
              </List>
              <Button fullWidth sx={{ textAlign: 'start', justifyContent: 'flex-start' }}>Score</Button>
              <Divider />
              <Button fullWidth sx={{ textAlign: 'start', justifyContent: 'flex-start' }}>Experience</Button>

            </Box>
          </Card>
        </Grid>
      </Hidden>
      <Grid item xs={12} md={9}>
        <Candidates />
      </Grid>
    </Grid>
  )
}

export default CandidatesFull
