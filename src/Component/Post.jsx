import {useState} from "react";


function Post(props){
    const {url, title,thumb} = props;
    const [like, setLike] = useState(0)

    return(
        <div>
            <a href={url} className="video">
                <img src={thumb} className="video-img" alt="video img" />
                <p>{title}</p>
                <p>{title}</p>
                <p>Count Like:{like}</p>
            </a>
            <button onClick={()=>{setLike(like +1)}}>Click</button>
        </div>
    )
}

export default Post;