import React from "react";
import PostItem from "./postItem";
import {TransitionGroup,CSSTransition} from 'react-transition-group';
import '../styles/App.css';

const PostList = ({posts, title,remove}) => {
  if (!posts.length){
    return (
        <h1 style={{textAlign: 'center'}}>Посты не найдены</h1>
    )
}


    return (
        <div>
      <h1 style={{textAlign: 'center' , marginBottom : '3vw' , marginTop : '3vw'}}>
        {title}
      </h1>
      <TransitionGroup>
      {posts.map((post,index) =>
      <CSSTransition
      key={post.id} 
      timeout={500}
      classNames="post"
      >
 <PostItem remove={remove} number = {index + 1} post={post} />
      </CSSTransition>
        )}
        </TransitionGroup>     
    </div>

    );

};  
export default PostList;