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
      <Grid container xs={12}>
        <Box sx={{ width: '100%' }}>
          <Tabs
            textColor="secondary"
            indicatorColor="secondary"
            aria-label="secondary tabs example"
          >
            <Tab value="one" label="Talent Pool" to="./Home" />
            <Tab value="two" label="Candidates" />
            <Tab value="three" label="Detail" />
          </Tabs>
        </Box>
      </Grid>
    </Grid>
  )
}

export default Header
