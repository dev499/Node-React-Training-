import React from 'react'

const SingleComment = (props) => {
    return(
    <div>
        <div className='comment'>
                <a href="/" className="avatar">
                    <img src={props.profile} alt="Profile picture"></img>
                </a>
                <div className='content'>
                <a href="/" className="author">
                    {props.name}
                </a>
                <div className='metadata'>
                    <span className='date'>Today at 5:00 PM</span>
                </div>
                <div className='text'>
                    {props.desc}
                </div>
                </div>
            </div>
        </div>
    )
}

export default SingleComment
