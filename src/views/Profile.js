import React, { useContext } from 'react'
import { Paper, Typography } from '@mui/material'
import { AppContext } from '../context/AppContext'
import ProfileForm from '../forms/ProfileForm'

export default function Profile() {
    const {user} = useContext(AppContext)

  return (
    <Paper sx={{m:5, p:5, justifyContent:"center", backgroundColor: theme.palette.background.paper, backgroundImage:theme.palette.background.paper}}>
        <Typography variant="h4">Create Profile</Typography>
        <Typography variant = "h4">Edit Profile</Typography>
        <ProfileForm/>
      </Paper>
  )
}