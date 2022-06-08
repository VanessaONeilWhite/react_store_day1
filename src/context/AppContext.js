import {createContext, useEffect, useReducer, useState} from 'react';
import { bookReducer, bookActions } from '../reducers/bookReducer';

export const AppContext = createContext();

const AppContextProvider = ({children}) => {
    const getUserFromLS = () => {
        let user = localStorage.getItem('user')
        if (user){
            return JSON.parse(user)
        }
    }

    const [user, _setUser] = useState(getUserFromLS())


    const setUser = (user) => {
        localStorage.setItem('user', JSON.stringify(user))
        _setUser(user)
    }


    
    const {error, books} = getBooks()

    const getListFromLS = ()=>{
        let bookList = localStorage.getItem('bookList')
        if (bookList){
            return JSON.parse(bookList)
        }
    }

    const [bookList, dispatch] = useReducer(bookReducer, getListFromLS()??[])

    useEffect(
        ()=>{
            if (list.length>0){
                localStorage.setItem('bookList', JSON.stringify(bookList))
            }
        }, [bookList]
    )
// // const bookActions ={
//     addToList: 'addToList',
//     removeFromList: 'removeFromList',
//     emptyList: 'emptyList',
// }
    const values = {
        user,
        setUser,
        books,
        bookList,
        addToList: (book)=>{
            dispatch({type: bookActions.addToList, book})
        },
        removeFromList: (book)=>{
            dispatch({type: bookActions.removeFromList, book})
        },
        emptyList: (book) =>{
            dispatch({type: bookActions.emptyList})
        }
    }

    return (
        <AppContext.Provider value={values}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContextProvider