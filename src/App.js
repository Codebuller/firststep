import React, { useEffect, useMemo, useRef, useState } from 'react';
import ClassCounter from './components/classCounter';
import Counter from './components/counter';
import PostFilter from './components/PostFilter';
import PostForm from './components/PostForm';
import PostItem from './components/postItem';
import PostList from './components/PostsList';
import { usePosts } from './hook/usePosts';
import './styles/App.css';
import MyButton from './UI/button/MyButton';
import MyInput from './UI/input/MyInput';
import MyModal from './UI/MyModals/MyModal';
import MySelect from './UI/Select/MySelect';
import axios from 'axios'
import PostService from './API/PostServise';
import Loader from './UI/Loader/Loader';
import { useFetching } from './hook/useFetching';
import { getPageCount, getPagesArray } from './utils/pages';
import Pagination from './UI/pagination/Pagination';
import {BrowserRouter, Link, Route, Routes, Redirect, Navigate} from "react-router-dom";
import About from './pages/About';
import Posts from './pages/Posts';
import Navbar from './UI/navbar/Navbar';
import Error from './pages/Error';
import AppRouter from './components/AppRouter';
import { AuthContext } from './context';
function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect( () => {
    if(localStorage.getItem('auth')) {
      setIsAuth(true)
    }
    setIsLoading(false);
    localStorage.setItem('auth','true')
  }, [])


  return (
    <AuthContext.Provider value={{
      isAuth, 
      setIsAuth,
      isLoading
    }}>
    <BrowserRouter>
      <Navbar/>
      <AppRouter/>
  </BrowserRouter>
  </AuthContext.Provider>
  )
  
} 

export default App;
