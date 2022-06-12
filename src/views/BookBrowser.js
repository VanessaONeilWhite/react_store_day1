import {useState} from 'react'
import ViewBooks from '../components/Books'
import Typography from '@mui/material/Typography'
import Box from '@Mui/material/Box'

export default function BookBrowser(){
    return (
        <>
        <Typography variant='h3'>Take a look, it's in a Book!</Typography>
        <Box sx={{display:'flex', justifyContent:"center", alignContent:"center", width:'100%', mb:2}}>
        </Box>
    
        <ViewBooks category_id={category?.id}/>
      </>   
    )
}