// ** MUI Imports
import Grid from '@mui/material/Grid'
import Candidates from '../component/Candidates'


import Header from '../component/Header'
import Left from '../component/Left'

const Home = () => {
  return (
    <Grid container spacing={6}>
      <Header />

      <Grid item xs={5}>
        <Left />
      </Grid>

      <Grid item xs={7}>
        <Candidates />
      </Grid>

    </Grid>
  )
}

export default Home
