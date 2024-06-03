import NavBar from './components/navbar/navbar.jsx'
import './index.css'
import FeaturedVideos from './components/homepage/featuredVideos.jsx'
import Carousel from './components/homepage/carousel.jsx'

export default function App() {
    return (
        <div>
            <NavBar />
            <FeaturedVideos />
            <Carousel />    
        </div>
    )
}