import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import PostService from "../API/PostServise";
import { useFetching } from "../hook/useFetching";
import Loader from "../UI/Loader/Loader";
const PostIdPage = () => {
    const params = useParams();
    
    const [post, setPosts] = useState('');
    const [comments,setComments] = useState([]);
    const [fetchPostById, isLoading, error] = useFetching(async () => {
        const response = await PostService.getById(params.id)
        setPosts(response.data);
    })
    const [fetchComments, isComLoading, ComError] = useFetching(async () => {
        const response = await PostService.getCommentsByPostId(params.id)
        setComments(response.data);
    })
    useEffect( () => {
        fetchPostById(params.id)
        fetchComments(params.id)


    }, [])

    return(
<div>
    <h1> Вы открыли страницу поста c ID =  {params.id}</h1>
    {isLoading
    ? <Loader/>
    : <div> {post.id}, {post.title}</div>
    }
    <h1>Комментарии</h1>
    {isComLoading
    ? <Loader/>
    : <div>
        {comments.map(comm => 
            <div key={comm.id} style={{marginTop: 15}}>
                <h5>{comm.email}</h5>
                <div>{comm.body} </div>
            </div>
            )}

    </div>
    }
</div>

    )
}
export default PostIdPage;
