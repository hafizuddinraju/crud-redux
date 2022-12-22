import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddBook from '../features/books/AddBook';
import BookView from '../features/books/BookView';
import EditBook from '../features/books/EditBook';
import Home from '../features/books/Home';
import Navbar from '../Navbar/Navbar';

const Main = () => {
    return (
        <BrowserRouter>
        <Navbar></Navbar>
        <main>
            <Routes>
                <Route path='/' element={<Home></Home>}></Route>
                <Route path='/show-books' element={<BookView></BookView>}></Route>
                <Route path='/add-book' element={<AddBook></AddBook>}></Route>
                <Route path='/edit-book' element={<EditBook></EditBook>}></Route>
            </Routes>
        </main>
        
        </BrowserRouter>
    );
};

export default Main;