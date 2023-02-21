// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Header from '../component/Header'
import Left from '../component/Left'
import Form from '../component/Form'

const SecondPage = () => {
  return (
    <Grid container spacing={6}>
      <Header />
      <Grid item xs={3}>
        <Left />
      </Grid>
      <Grid item xs={9}>
        <Form />
      </Grid>

    </Grid>
  )
}

export default SecondPage
