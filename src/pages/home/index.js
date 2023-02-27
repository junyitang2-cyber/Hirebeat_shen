// ** MUI Imports
import { Hidden } from '@mui/material'
import Grid from '@mui/material/Grid'
import { Link } from 'react-router-dom'
import TalentPool from '../component/TalentPool'

import Task from '../component/task'


import Header from '../component/Header'
import Left from '../component/Left'

import Talent from '../third-page/tabs'


const Home = () => {
  return (
    <Grid container spacing={6}>
      <Header />

      <Grid item xs={3}>
        <Talent />
      </Grid>
    </Grid>
  )
}

export default Home
