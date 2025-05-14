import reactLogo from '../assets/react.svg'

function Video(){
    return(
        <div className="video">
                  <img src={reactLogo} className="video-img" alt="video img" />
                  <p>Video 1</p>
                  <p>Author Name</p>
                  <div className="video-footer">
                    <p>Like: 0</p>
                    <button>Like</button>
                  </div>
                </div>
    )
}

export default Video;