import NavBar from './components/navbar/navbar'
import Carousel from './components/homepage/hero/carousel'
import Features from './components/homepage/featuredSection/features'

export default function App() {
    return (
        <div>
            <NavBar />
            <Carousel/>
            <Features />
        </div> 
    )  
}