import {useState, useEffect} from "react";
import { Link } from 'react-router-dom';

import css from './fullPost.module.css';
import axios from "./../axios";
import Comments from "./Comments/comments";
import PostComment from "./PostComment/postComment";
import { getRandomImage, capitalize, getAuthorName } from "../Helper/helper";

const FullPost = props => {

    const [post, setPost] = useState({
        userId: 1,
        id: 1,
        title: "",
        body: ""
    });

    const [comments, setComments] = useState([]);

    useEffect(()=>{
        axios.get('/posts/' + props.match.params.id)
            .then(response => {
                setPost(response.data);
            })
            .catch(error => {
                console.log(error);
            });

        axios.get('/posts/' + props.match.params.id + '/comments')
            .then(response => {
                setComments(response.data);
            })
            .catch(error => {
                console.log(error);
            });

    }, [props.match.params.id]);

    return (
        <div className={css.fullPost}>
            <img className={css.fullPostImage} src={getRandomImage()} alt='Post' />

            <div className={css.flex}>
                <div className={css.author}>
                    <img className={css.authorImg} src="https://www.flaticon.com/premium-icon/icons/svg/3106/3106921.svg" alt='Author' />
                    <p>{getAuthorName(post.userId)}</p>
                </div>
                <div className={css.author}>
                    <img className={css.authorImg} src="https://www.vhv.rs/dpng/d/491-4915568_conversation-bubble-comments-comment-icon-png-transparent-png.png" alt='Comments' />
                    <p>{comments.length} Comments</p>
                </div>
            </div>

            <h1 style={{margin: '0', color: '#ff1b96', fontWeight: '900'}}>{capitalize(post.title)}</h1>

            <p className={css.p}> {post.body}. {post.body}. </p>
            <p className={css.p}> {post.body}. {post.body} </p>
            <p className={css.p}> {post.body} </p>

            <p className={css.quote}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Ipsum has been the industry's standard dummy text ever since the 1500s, wh
                unknown printer took a galley of type and scrambled
                <br />-Karon Roy</p>

            <p className={css.p}> {post.body}. {post.body} </p>
            <p className={css.p}> {post.body} </p>

            <div className={css.social}>
                <h3>Social Share</h3>
                <div>
                    <span className={css.span}> <i className="fab fa-facebook-f"></i> </span>
                    <span className={css.span}> <i className="fab fa-twitter"></i> </span>
                    <span className={css.span}> <i className="fab fa-linkedin-in"></i> </span>
                    <span className={css.span}> <i className="fab fa-pinterest"></i> </span>
                </div>
            </div>

            <hr style={{borderTop: '1px solid #d0d0d0'}} />

            <Comments comments={comments} />

            <hr style={{borderTop: '1px solid #d0d0d0'}} />

            <PostComment />

            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '30px'}}>
                <Link to={props.match.params.id === '1' ? '/posts/'+props.match.params.id : '/posts/' + (+(props.match.params.id) -1)} className={css.previous}> <i style={{color: '#ff1b96'}} className="fas fa-arrow-left"></i> <p style={{margin: '0 0 0 10px'}}>Previous</p> </Link>
                <Link to={props.match.params.id === '100' ? '/posts/'+props.match.params.id : '/posts/' + (+(props.match.params.id) +1)} className={css.previous}> <p style={{margin: '0 10px 0 0'}}>Next</p> <i style={{color: '#ff1b96'}} className="fas fa-arrow-right"></i> </Link>
            </div>

        </div>
    );

}

export default FullPost;