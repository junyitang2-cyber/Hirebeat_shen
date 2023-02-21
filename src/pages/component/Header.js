import { Box, Button, Divider, Fab, Grid, Paper, Stack, Tab, Tabs, Typography } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import AddIcon from '@mui/icons-material/Add';
import React from 'react'



const Header = () => {
  return (
    <Grid item xs={12} container>
      <Grid item xs={4}>
        <Typography variant='h4'>Find Candidates</Typography>
      </Grid>
      <Grid item xs={6}>
      </Grid>
      <Grid item xs={2}>
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Grid>
    </Grid>
  )
}

export default Header
