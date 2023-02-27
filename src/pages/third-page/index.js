// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Header from '../component/Header'
import Left from '../component/Left'
import Form from '../component/Form'
import CandLeft from '../component/CandLeft'
import Candidates from './Candidates'
import { Hidden } from '@mui/material'
import TalentPool from './tabs/TalentPool'

const thirdPage = () => {
  return (
    <Grid container spacing={6}>
      <Header />
      <Hidden mdDown>
        <Grid item xs={3}>
          <CandLeft />
        </Grid>
      </Hidden>
      <Grid item xs={12} md={9}>
        <TalentPool />

      </Grid>


    </Grid>
  )
}

export default thirdPage
