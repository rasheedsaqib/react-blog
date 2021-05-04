import css from './postComment.module.css';

const PostComment = props => {
    return (
        <div>
            <h2>Post a Comment</h2>
            <div className={css.form}>
                <form style={{width: '85%'}}>
                    <textarea className={css.textarea} placeholder='Type Comment'></textarea>
                    <input className={css.input} type='text' placeholder='Your Name' />
                    <input className={css.input} type='Email' placeholder='Your Email' />
                    <button className={css.button}>Add Comment</button>
                </form>
            </div>
        </div>
    );
}

export default PostComment;