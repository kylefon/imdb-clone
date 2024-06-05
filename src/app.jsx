import NavBar from './components/navbar/navbar'
import Carousel from './components/homepage/hero/carousel'
import FeaturedToday from './components/homepage/featuredToday/featuredToday'

export default function App() {
    return (
        <div>
            <NavBar />
            <Carousel/>
            <FeaturedToday />
        </div> 
    )  
}