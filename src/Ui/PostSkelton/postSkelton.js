import css from './postSkelton.module.css';

const PostSkelton = props => {

    const skelton = (<div className={css.postSkelton}>
                        <div className={css.postSkeltonImg}></div>
                        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                            <div className={css.postSkeltonAuthor}></div>
                            <div className={css.postSkeltonAuthor}></div>
                        </div>
                        <div className={css.postSkeltonTitle}></div>
                        <div className={css.postSkeltonBody}></div>
                    </div>);

    return(
        <div style={{display: 'flex', flexWrap: 'wrap'}}>
            {skelton} {skelton} {skelton} {skelton}
        </div>
    );
}

export default PostSkelton;