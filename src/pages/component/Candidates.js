import { Avatar, Card, Grid, ListItem, ListItemAvatar, ListItemText, Paper, Typography } from '@mui/material'
import React from 'react'

const Candidates = () => {
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
            <Grid item xs={5}>
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
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
                        user.currentTitle
                      </Typography>
                    </React.Fragment>
                  }
                />
              </ListItem>
            </Grid>
            <Grid item xs={2} sx={{ alignItems: 'center', justifyItems: 'center' }}>
              Company
            </Grid>
            <Grid item xs={2} sx={{ alignItems: 'center', justifyItems: 'center' }}>
              Score
            </Grid>
            <Grid item xs={1.5} sx={{ alignItems: 'center', justifyItems: 'center' }}>
              Source
            </Grid>
            <Grid item xs={1.5} sx={{ alignItems: 'center', justifyItems: 'center' }}>
              Mark
            </Grid>
          </Grid>
        </Card>
      </Paper>
    </div>
  )
}

export default Candidates
