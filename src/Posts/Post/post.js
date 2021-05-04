import css from './post.module.css';
import { Link } from "react-router-dom";
import { getRandomImage, capitalize } from './../../Helper/helper';

const Post = props => {

    return <div className={css.post}>
        <img className={css.postImg} src={getRandomImage()} alt='Post' />

        <div className={css.flex}>
            <div className={css.author}>
                <img className={css.authorImg} src="https://www.flaticon.com/premium-icon/icons/svg/3106/3106921.svg" alt='Author' />
                <p>{props.author}</p>
            </div>
            <div className={css.author}>
                <img className={css.authorImg} src="https://www.vhv.rs/dpng/d/491-4915568_conversation-bubble-comments-comment-icon-png-transparent-png.png" alt='Comments' />
                <p>{props.comments.length} Comments</p>
            </div>
        </div>

        <div style={{marginRight: '10px'}}>
            <h2 className={css.h2}>{capitalize(props.post.title).substr(0, 30) + '...'}</h2>
            <p className={css.p}>{props.post.body.substr(0, 80) + '...'} <Link style={{color: '#ff1b96'}} to={'/posts/' + props.post.id}>Read More</Link> </p>
        </div>

    </div>
}

export default Post;

