import NavBar from './components/navbar/navbar'
import Carousel from './components/homepage/hero/carousel'
import FeaturedToday from './components/homepage/featuredToday/featuredToday'
import TopPicks from './components/homepage/featuredToday/topPicks'

export default function App() {
    return (
        <div>
            <NavBar />
            <Carousel/>
            <FeaturedToday />
            <TopPicks />
        </div> 
    )  
}