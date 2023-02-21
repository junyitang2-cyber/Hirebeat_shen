// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Header from '../component/Header'
import Left from '../component/Left'

const SecondPage = () => {
  return (
    <Grid container spacing={6}>
      <Header />
      <Grid item xs={5}>
        <Left />
      </Grid>

    </Grid>
  )
}

export default SecondPage
