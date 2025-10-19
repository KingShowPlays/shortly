import React from 'react';

const TealBtn = ({ content = 'text', rounded = true, bg = '', color = 'white' }) => {
    return (
        <button
            className={`${rounded ? 'rounded-2xl' : 'rounded-none'} ${bg ? 'bg-transparent' : 'teal'} py-1.5 px-3 ${color ? `text-${color}-400` : 'text-white'}`}
        >
            {content}
        </button>
    );
};

export default TealBtn;
