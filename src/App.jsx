import Post from './Component/Post.jsx';
import PostsList from './posts.json'
import './App.css'

function App() {
  return (
    <>
       <div className="video-container">
           {
               PostsList.map(post => (
                   <Post
                       key={post.id}
                       url={post.url}
                       title={post.title}
                       thumb={post.thumbnail}
                   />
               ))
           }
       </div>
    </>
  )
}

export default App
