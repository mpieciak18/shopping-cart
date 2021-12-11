import Header from "../components/Header.js"
import Footer from "../components/Footer.js"
import HomePageContents from "../components/HomePageContents.js"

const Home = (props) => {
    return (
        <div id='home' class='page'>
            <Header total={props.total} />
            <HomePageContents />
            <Footer />
        </div>
    )
}

export default Home