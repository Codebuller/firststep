import React, { useEffect, useRef, useState } from 'react';
import PostService from '../API/PostServise';
import PostFilter from '../components/PostFilter';
import PostForm from '../components/PostForm';
import PostList from '../components/PostsList';
import { useFetching } from '../hook/useFetching';
import { useObserver } from '../hook/useObserver';
import { usePosts } from '../hook/usePosts';
import MyButton from '../UI/button/MyButton';
import Loader from '../UI/Loader/Loader';
import MyModal from '../UI/MyModals/MyModal';
import Pagination from '../UI/pagination/Pagination';
import MySelect from '../UI/Select/MySelect';
import { getPageCount } from '../utils/pages';


function Posts() {
  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({sort : '', query : ''})
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] =  useState(10)
  const [page, setPage] =  useState(1)
  const lastElement = useRef();
  console.log(lastElement);
  
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  
  const [fetchPosts, isPostsLoading, postError] = useFetching( async () => {
    const response = await PostService.getAll(limit, page );
      setPosts([...posts , ...response.data]);
      const totalCount = response.headers['x-total-count']; 
      setTotalPages(getPageCount(totalCount, limit))
  })



    useObserver(lastElement, page < totalPages, isPostsLoading, () => {
        setPage(page + 1);
    })


    useEffect( () => {
      fetchPosts(limit, page)
    }, [page, limit])
    const changePage = (page) => {
      setPage(page)
    }
    const createPost = (newPost) => {
     setPosts([...posts, newPost]) 
    setModal(false);
    }

    const removePost = (post) => {
      setPosts(posts.filter(p => p.id !== post.id))

    }
  return (
    <div className='App'>
      
      <MyButton style={{marginTop: 30}} onClick={() => setModal(true)}> Создать пост </MyButton>
      <MyModal visible={modal} setVisible={setModal}> <PostForm  create={createPost}/></MyModal>
    
      <hr style={{margin: '15px 8px' }} />
      
      <PostFilter filter={filter} setFilter={setFilter}/>
      <MySelect
      defaultValue='Выдать кол-во страниц'
      value={limit}
      onChange={value => setLimit(value)}
      options={[
        {value: 5, name:'5'},
        {value: 10, name:'Выдать кол-во страниц'},
        {value: 25, name:'25'},
        {value: -1, name:'Все'}
      ]}
      
      />
      
      {postError && 
      <h1>ПРОИЗОШЛА ОШИБКА ${postError}</h1>
      }
      {isPostsLoading &&
      <div style={{display: 'flex', justifyContent: 'center', marginTop: 50}}><Loader/></div>
      }

      <PostList remove ={removePost} posts={sortedAndSearchedPosts} title="Список постов"/>
      <div ref={lastElement} style={{height: 20, background: 'red'}}/>
      <Pagination 
        page={page}
        changePage={changePage}
        totalPages={totalPages}
      />
    </div>
  );
  
} 

export default Posts;
