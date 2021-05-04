import css from './fullPostSkelton.module.css';

const FullPostSkelton = props => {

    const skelton = (<div className={css.fullPostSkelton}>
                        <div className={css.ullPfostSkeltonImg}></div>
                        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                            <div className={css.fullPostSkeltonAuthor}></div>
                            <div className={css.fullPostSkeltonAuthor}></div>
                        </div>
                        <div className={css.fullPostSkeltonTitle}></div>
                        <div className={css.fullPostSkeltonBody}></div>
                    </div>);

    return(
        <div style={{display: 'flex', flexWrap: 'wrap'}}>
            {skelton}
        </div>
    );
}

export default FullPostSkelton;