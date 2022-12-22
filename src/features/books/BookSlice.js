import { createSlice } from "@reduxjs/toolkit"

const initialBooks = {
    book:[
    { id: 1, title: "Love Bangladesh", author: "Hafiz" },
    { id: 2, title: "Bangladeshi", author: "Raju" },
    ],
};
export const bookSlice = createSlice({
    name: 'books',
    initialState:initialBooks,
    reducers: {
        showBooks: (state) => state,
        addBook:(state, action)=>{
            state.book.push(action.payload);
        },
        updateBook:(state, action)=>{
            const {id, title, author} = action.payload;
            const isBook = state.book.filter((bk)=> bk.id === id);
            if(isBook){
                isBook[0].title = title;
                isBook[0].author = author;
            }
        },
        deleteBook: (state, action)=>{
            const id = action.payload;
            state.book = state.book.filter((bk)=> bk.id !== id);
        }
    }

})
export const {showBooks, addBook, updateBook, deleteBook} = bookSlice.actions;
export default bookSlice.reducer;