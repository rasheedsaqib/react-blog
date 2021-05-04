import Comment from "./Comment/comment";

const Comments = props => {

    const comments = props.comments.map(comment => {
       return <Comment key={comment.id} comment={comment} />
    });

    return (
        <div>
            <h2>Comments:</h2>
            {comments}
        </div>
    )
}

export default Comments;