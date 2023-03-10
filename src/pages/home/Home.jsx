import Posts from "../../components/posts/Posts"
import Stories from "../../components/stories/Stories"
import "./home.scss"

function Home() {
  return (
    <div className="home">Home
    <Stories/>
    <Posts/>
    </div>
  )
}

export default Home