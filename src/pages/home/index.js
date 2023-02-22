// ** MUI Imports
import { Hidden } from '@mui/material'
import Grid from '@mui/material/Grid'
import { Link } from 'react-router-dom'
import TalentPool from '../component/TalentPool'

import Task from '../component/task'


import Header from '../component/Header'
import Left from '../component/Left'

const Home = () => {
  return (
    <Grid container spacing={6}>
      <Header />
      <Hidden mdDown>
        <Grid item xs={3}>
          <Left />
        </Grid>
      </Hidden>
      <Grid item xs={9} sm={12} md={9}>
        <TalentPool />
      </Grid>
    </Grid>
  )
}

export default Home
