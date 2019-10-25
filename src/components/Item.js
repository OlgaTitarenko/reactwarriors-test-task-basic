import React from 'react';

function Item({data}) {

    return (<div className="item">
        {data.thumbnail !=="self" ?
            <img src={data.thumbnail} alt=""/>
            : null }
        <p>{data.title}</p>
        <p>Number of comments {data.num_comments}</p>
        <a href={'https://www.reddit.com'+data.permalink}
           target="_blank"
           rel="noopener noreferrer">Link</a>
    </div>)
}
export default Item;