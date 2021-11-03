import React from 'react';
import q from './TextContent.module.css';

const TextContent = () => {
    return (
        <div className={q.textContent}>
            <h3 className={q.heading}>Lorem ipsum dolor</h3>
            <div className={q.content}>
            <p className={q.contentParagr}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                nisi ut aliquip ex ea commodo consequat.</p>
            </div>
        </div>
    )
}

export default TextContent;