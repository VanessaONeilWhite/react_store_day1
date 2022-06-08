
const bookActions ={
    addToList: 'addToList',
    removeFromList: 'removeFromList',
    emptyList: 'emptyList',
}

function bookReducer(list=[], {type, book}){
    switch(type){
        case bookActions.addToList:
            return [...list, book];
        case bookActions.removeFromList:
            let newList=list.slice()
            for (let bookInList of newList){
                if(bookInList.id === book.id){
                    newList.splice(newList.indexOf(bookInList),1)
                    return newList
                }
            }
        case bookActions.emptyList:
            return []
        default:
            throw new Error('I am not a teapot!')
    }
}

export{
    bookReducer,
    bookActions
}