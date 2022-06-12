import { Typography } from '@mui/material'
import {useContext, useEffect} from 'react'
import BookList from '../components/BookList'
import { AppContext} from '../context/AppContext'
import { Navigate } from 'react-router-dom'

export default function BookListPage() {
    const {bookList, user} = useContext(AppContext)
    
    useEffect(
        ()=>{
            if (user.token){
                if (bookList.length<1){
                    return(
                        <Typography>Your booklist is empty</Typography>
                    )
                }else{
                    return(
                        <>
                            <Typography variant="h3">Your Books:</Typography>
                            <BookList/>
                        </>
                    )
                }
            }else{
                return(
                    <Navigate to={'/login'}/>
                )
            }
        }
    )
}