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
      setCandidates(response.data.Items)

    }
    getData();
  }, [])

  return (
    <Box sx={{ height: 600 }}>
      <Card sx={{ height: 300 }}>


        {candidates.map(user => (

          <TableRow key={user.id}>
            <TableCell>{user.id}</TableCell>
            <TableCell>{user.currentTitle}</TableCell>
            <TableCell>{user.locationPreference}</TableCell>
            <TableCell>{user.yearOfExperience}</TableCell>
            <TableCell>{user.seniorityLevel}</TableCell>
          </TableRow>


        ))}
      </Card>
    </Box>
  )
}

export default Candidates
