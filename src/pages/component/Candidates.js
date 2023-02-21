import React from 'react'
import { Box, Card, Grid, Paper, TableCell, TableRow } from '@mui/material'
import { useState, useEffect } from 'react'
import axios from 'axios'


const Candidates = () => {
  const [candidates, setCandidates] = useState([])
  const API_URL = 'https://kasek7o0kk.execute-api.us-west-2.amazonaws.com/test';

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(API_URL)
      setCandidates(JSON.parse(response.data.body).Items)

    }
    getData()
  }, [])

  return (
    <Box sx={{ height: 600 }}>
      {candidates.map(user => (
        <Card key={user.id}>
          <TableRow >
            <TableCell>
              {user.id}
            </TableCell>
          </TableRow>
        </Card>
      ))}

    </Box>
  )
}

export default Candidates
