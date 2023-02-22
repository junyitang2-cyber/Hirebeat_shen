import { Box, Button, Card, List, ListItem, ListItemText, Typography, MenuItem, Divider } from '@mui/material'
import React from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar'


const CandLeft = (props) => {
  const { hidden } = props;

  const ScrollWrapper = ({ children }) => {
    if (hidden) {
      return <Box sx={{ height: '100%', overflowY: 'auto', overflowX: 'hidden' }}>{children}</Box>
    } else {
      return <PerfectScrollbar options={{ wheelPropagation: false }}>{children}</PerfectScrollbar>
    }
  }

  return (
    <div>
      <Card sx={{ p: 8, height: "100%", overflowY: 'hidden' }}>
        <Button fullWidth sx={{ height: '15%', mt: 5 }} variant='contained'>View Order Details</Button>

        <ScrollWrapper />
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
        <Button fullWidth sx={{ height: '15%', mt: 5 }} variant='contained'>View Order Details</Button>
      </Card>

    </div >
  )
}

export default CandLeft
