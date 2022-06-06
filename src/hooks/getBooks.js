import {useEffect, useState} from 'react';
import apiBook from '../api/apiBook';
import {CancelToken} from 'apisauce';

export default function getBooks(bookId=null){
    const [books, setBooks] = useState ({});

    useEffect(
        () => {
            const source = CancelToken.source()
            bookId ?
            (async () => {
                const response = await apiBookAuth.getBook(bookId, source.token);
                setBooks(response)
            })()
            :
            (async () => {
                const response = await apiBook.getBooks(source.token);
                setBooks(response)
            })()
            return () => {source.cancel()}
        },
        [bookId]
    )
    return books
}