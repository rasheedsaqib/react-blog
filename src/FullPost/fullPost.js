import {useState, useEffect} from "react";
import { Link } from 'react-router-dom';
import { connect } from "react-redux";

import css from './fullPost.module.css';
import Comments from "./Comments/comments";
import PostComment from "./PostComment/postComment";
import { getRandomImage, capitalize } from "../Helper/helper";
import FullPostSkelton from '../Ui/FullPostSkelton/fullPostSkelton';
import * as actions from '../Store/Actions/index';

const FullPost = props => {

    useEffect(()=>{
        props.onFetchPost(props.match.params.id);
        props.onFetchComments(props.match.params.id);

    }, [props.match.params.id]);

    return (
        <div className={css.fullPost}>

            {props.loading ?
                <FullPostSkelton />
            :
                <div>
                    <img className={css.fullPostImage} src={getRandomImage()} alt='Post' />

                    <div className={css.flex}>
                        <div className={css.author}>
                            <img className={css.authorImg} src="https://www.flaticon.com/premium-icon/icons/svg/3106/3106921.svg" alt='Author' />
                            <p>Saqib Rasheed</p>
                        </div>
                        <div className={css.author}>
                            <img className={css.authorImg} src="https://www.vhv.rs/dpng/d/491-4915568_conversation-bubble-comments-comment-icon-png-transparent-png.png" alt='Comments' />
                            <p>{props.comments.length} Comments</p>
                        </div>
                    </div>

                    <h1 style={{margin: '0', color: '#ff1b96', fontWeight: '900'}}>{capitalize(props.post.title)}</h1>

                    <p className={css.p}> {props.post.body}. {props.post.body}. </p>
                    <p className={css.p}> {props.post.body}. {props.post.body} </p>
                    <p className={css.p}> {props.post.body} </p>

                    <p className={css.quote}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Ipsum has been the industry's standard dummy text ever since the 1500s, wh
                        unknown printer took a galley of type and scrambled
                        <br />-Karon Roy</p>

                    <p className={css.p}> {props.post.body}. {props.post.body} </p>
                    <p className={css.p}> {props.post.body} </p>

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

                    <Comments comments={props.comments} />

                    <hr style={{borderTop: '1px solid #d0d0d0'}} />

                    <PostComment />

                    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '30px'}}>
                        <Link to={props.match.params.id === '1' ? '/posts/'+props.match.params.id : '/posts/' + (+(props.match.params.id) -1)} className={css.previous}> <i style={{color: '#ff1b96'}} className="fas fa-arrow-left"></i> <p style={{margin: '0 0 0 10px'}}>Previous</p> </Link>
                        <Link to={props.match.params.id === '100' ? '/posts/'+props.match.params.id : '/posts/' + (+(props.match.params.id) +1)} className={css.previous}> <p style={{margin: '0 10px 0 0'}}>Next</p> <i style={{color: '#ff1b96'}} className="fas fa-arrow-right"></i> </Link>
                    </div>
                </div>
            }

        </div>
    );

}

const mapStateToProps = state => {
    return{
        post: state.fullPost.post,
        comments: state.fullPost.comments,
        loading: state.fullPost.loading,
        error: state.fullPost.error
    }
}

const mapDispatchToProps = dispatch => {
    return{
        onFetchPost: (id) => dispatch(actions.fetchFullPost(id)),
        onFetchComments: (id) => dispatch(actions.fetchPostComments(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FullPost);