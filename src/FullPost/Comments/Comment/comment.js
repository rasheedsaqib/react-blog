import css from './comment.module.css';
import { getRandomCommentImage, capitalize } from '../../../Helper/helper';

const Comment = props => {

    const backgroundImage = 'url(' + getRandomCommentImage() + ')'

    return (
        <div className={css.comment}>
            <div className={css.commentImg} style={{backgroundImage: backgroundImage}}></div>
            <div style={{width: '70%'}}>
                <div className={css.commentReply}>
                    <div>
                        <h3 style={{margin: 0, color: '#2c2c2c'}}>{capitalize(props.comment.name.substr(0, 20))}</h3>
                        <p style={{margin: 0, color: '#ff1b96'}}>{props.comment.email}</p>
                    </div>
                    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer'}}>
                        <span style={{color: '#a7a7a7'}}> <i className="fas fa-reply"></i> </span>
                        <p style={{marginLeft: '10px', color: '#ff1b96'}}>Reply</p>
                    </div>
                </div>
                <p className={css.commentBody}>{props.comment.body}</p>
            </div>
        </div>
    )
}

export default Comment;