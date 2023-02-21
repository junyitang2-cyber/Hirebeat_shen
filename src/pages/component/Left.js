import React from 'react'

import { Button, Divider, Fab, Grid, IconButton, List, ListItemButton, ListItemIcon, ListItemText, TextField } from '@mui/material'
import CardContent from '@mui/material/CardContent'
import Card from '@mui/material/Card'

// ICON
import Icon from 'src/@core/components/icon'
import EmailIcon from '@mui/icons-material/Email';
import DraftsIcon from '@mui/icons-material/Drafts';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';

const Left = () => {
  return (
    <Card sx={{ height: 600 }}>

      <CardContent sx={{ mt: 4, alignItems: 'center', justifyItems: 'center' }}>
        <TextField fullWidth >hello</TextField>
      </CardContent>

      <Divider />

      <Grid item xs={12} container >
        <Grid item xs={7} md={2} sx={{ ml: 4, mt: 1 }}>
          <Icon sx={{ fontSize: 40 }} icon="ri:align-left" />
        </Grid>
        <Button xs={2} variant='contained'>search</Button>
      </Grid>

      <Divider />

      <List sx={{ p: 3 }}>
        <ListItemButton>
          <ListItemIcon>
            <AddToPhotosIcon />
          </ListItemIcon>
          <ListItemText primary="New Order" />
        </ListItemButton>
      </List>
      <Divider />

      <List sx={{ p: 3 }}>
        <ListItemButton>
          <ListItemIcon>
            <EmailIcon />
          </ListItemIcon>
          <ListItemText primary="Active" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText primary="Archied" />
        </ListItemButton>
      </List>
      <Divider />

      <List sx={{ p: 3 }}>
        <ListItemButton>
          <ListItemIcon>
            <BookmarkAddIcon />
          </ListItemIcon>
          <ListItemText primary="Reorder" />
        </ListItemButton>
      </List>
      <Divider />

    </Card>
  )
}

export default Left
