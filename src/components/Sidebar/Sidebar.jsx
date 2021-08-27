import React from 'react';
import s from "../Sidebar/Sidebar.module.css"

const Sidebar = (props) => {


    return (

        <div>
            <div className={s.text}>
                  &nbsp; &nbsp; &nbsp; &nbsp;  {props.amountOfTweets} &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; {props.followers}
            </div>
            <div className={s.text}>
                &nbsp; &nbsp;  TWEETS &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp;  FOLLOWERS
            </div>
            <div>
                {props.isFollowing ?
                    <button onClick={props.unfollow} className={s.buttonFollowing}> FOLLOWING </button> :
                    <button onClick={props.follow} className={s.buttonUnfollowing}> FOLLOW </button>}
            </div>
        </div>
    )
}

export default Sidebar;
