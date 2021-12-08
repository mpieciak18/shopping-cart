import Header from "../components/Header.js"
import Footer from "../components/Footer.js"
import HomePageContents from "../components/HomePageContents.js"

const Home = () => {
    return (
        <div id='home' class='page'>
            <Header />
            <HomePageContents />
            <Footer />
        </div>
    )
}

export default Home