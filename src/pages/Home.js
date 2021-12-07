import Header from "../components/Header.js"
import Footer from "../components/Footer.js"
import HomePicture from "../assets/home-photo.png"

const Home = () => {
    return (
        <div id='home' class='page'>
            <Header />
            <div id='home-contents' class='page-contents'>
                <div id='home-contents-one'>
                    <div id='home-subheader'>#1-RATED STRENGTH EQUIPMENT SUPPLIER</div>
                    <div id='home-header'>
                        <div id='home-header-line-1'>We know strength equipment.</div>
                        <div id='home-header-line-2'>We are StrengthStore.</div>
                    </div>
                    <div id='home-shop-button'>Shop Now</div>
                </div>
                <div id='home-contents-two'>
                    <img id='home-picture' src={HomePicture}></img>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home