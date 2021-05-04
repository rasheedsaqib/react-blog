import {useState, useEffect} from "react";
import { Link } from 'react-router-dom';

import Post from './Post/post';
import css from './posts.module.css';
import axios from "./../axios";
import PostSkelton from "../Ui/PostSkelton/postSkelton";
import {getAuthorName} from '../Helper/helper';

const Posts = props => {

    const [posts, setPosts] = useState([]);
    const [comments, setComments] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('/posts')
            .then(response => {
                setPosts(response.data);
            });

        axios.get('/comments')
            .then(response => {
                setComments(response.data);

                setLoading(false);
            });

        const query = new URLSearchParams(props.location.search);
        for(let param of query){
            setPage(param[1]);
        }

    }, [props.location.search]);

    const getCommentsOfPost = postId => {
        const commentOfPost = [];
        comments.forEach(comment => {
            if(comment.postId === postId){
                commentOfPost.push(comment);
            }
        });
        return commentOfPost;
    }

    const allPosts = posts.slice((page-1)*10, page*10).map(post => {
        return <Post key={post.id} post={post} author={getAuthorName(post.userId)} comments={getCommentsOfPost(post.id)} />;
    });

    const pageLinks = page => {
        if(page === 1){
            return <div style={{margin: '0 10px'}}>
                <Link className={css.links} onClick={()=>setPage(1)} to={{pathname: '/', search: '?page=1'}}>1</Link>
                <Link className={css.links} onClick={()=>setPage(2)} to={{pathname: '/', search: '?page=2'}}>2</Link>
                <Link className={css.links} onClick={()=>setPage(3)} to={{pathname: '/', search: '?page=3'}}>Next</Link>
            </div>;
        }
        else if(page === Math.floor(posts.length / 10)){

            const last = Math.floor(posts.length / 10);

            return <div style={{margin: '0 10px'}}>
                <Link className={css.links} onClick={()=>setPage(last-2)} to={{pathname: '/', search: '?page=' + (last-2)}}>Previous</Link>
                <Link className={css.links} onClick={()=>setPage(last-1)} to={{pathname: '/', search: '?page=' + (last-1)}}>{last-1}</Link>
                <Link className={css.links} onClick={()=>setPage(last)} to={{pathname: '/', search: '?page=' + last}}> {last} </Link>
            </div>;
        }
        else {
            return <div style={{margin: '0 10px'}}>
                <Link className={css.links} onClick={()=>setPage(page-1)} to={{pathname: '/', search: '?page=' + (page-1)}}>Previous</Link>
                <Link className={css.links} onClick={()=>setPage(page)} to={{pathname: '/', search: '?page=' + (page)}}>{page}</Link>
                <Link className={css.links} onClick={()=>setPage(page+1)} to={{pathname: '/', search: '?page=' + (page+1)}}>Next</Link>
            </div>;
        }
    }

    return (
        <div style={{margin: '20px 5%'}}>

            {loading ?
                <PostSkelton />
            :
                <div>
                    <div className={css.posts}>
                        {allPosts}
                    </div>
                    {pageLinks(+page)}
                </div>
            }

        </div>
    );
}

export default Posts;