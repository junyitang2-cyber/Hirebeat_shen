import React from 'react'
import { Box, Button, Card, Grid, Paper, TableCell, TableRow } from '@mui/material'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { setUseProxies } from 'immer'


const Candidates = () => {
  const [candidates, setCandidates] = useState([])
  const API_URL = 'https://kasek7o0kk.execute-api.us-west-2.amazonaws.com/test';
  const [user, setUser] = useState("")
  const { currentTitle, locationPreference, yearsOfExperience, seniorityLevel, requiredSkillSets, industry } = user;

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(API_URL)
      setCandidates(response.data.Items)

    }
    getData(),
      loadUserDetails()
  }, [])

  const editUser = async (id, user) => {
    return await axios.update(API_URL, user)
  }

  const loadUserDetails = async () => {
    const response = await getUser(id)
    setUseProxies(response.data)
  }

  const handleUpdate = async () => {
    const response = await editUser(user)
  }

  const deleteUser = async (id) => {
    return await axios.delete(API_URL)
  }

  const handleDelete = async () => {
    await deleteUser(user)
  }

  return (
    <Box sx={{ height: "100%" }}>
      <Card sx={{ height: "100%" }}>


        {candidates.map(user => (

          <TableRow key={user.id}>
            <TableCell>{user.id}</TableCell>
            <TableCell>{user.currentTitle}</TableCell>
            <TableCell>{user.locationPreference}</TableCell>
            <TableCell>{user.yearOfExperience}</TableCell>
            <TableCell>{user.seniorityLevel}</TableCell>
          </TableRow>


        ))}

        <Button onClick={() => handleUpdate()}>Edit</Button>
        <Button>delete</Button>
      </Card>
    </Box>
  )
}

export default Candidates
