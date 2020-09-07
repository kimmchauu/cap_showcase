import React from 'react';

import {tagColors} from '../styles';


function CardStructure ({item, tagsOnTop}) {
    const imageBackground = {backgroundImage: `url("${require(`../../assets/images/${item.image}`)}")`};
    const style = {...imageBackground, ...item.style}
    
    // structures each card to be the same, so it can just be called in any part of the code and it will render when given data
    return (
        // link comes from mock data
        <a className="card-structure overlay" style={style} href={item.link}>
            <div className="image-text">
                <div className="tags-container">
                    {/* In REACT, every element rendered in a loop requires a key */}
                    { item.tags.map((tag, index) =>
                        <span key={index} className="tag" style={{backgroundColor: tagColors[tag]}}>
                            {tag.toUpperCase()}
                        </span>
                    )}
                </div>
                <div>
                    <h2 className="card-title">{item.title}</h2>
                    <span className="card-description">{item.description}</span>
                </div>
            </div>
        </a>
    )
}

export default CardStructure;