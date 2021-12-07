import Header from "../components/Header.js"
import Footer from "../components/Footer.js"
import HomePicture from "../assets/home-photo.png"

const Home = () => {
    return (
        <div id='home' class='page'>
            <Header />
            <div id='home-contents' class='page-contents'>
                <div id='home-contents-container'>
                    <div id='home-contents-one'>
                        <div id='home-contents-subheader'>#1-RATED STRENGTH EQUIPMENT SUPPLIER</div>
                        <div id='home-contents-header'>
                            <div id='home-contents-header-line-1'>We know strength equipment.</div>
                            <div id='home-contents-header-line-2'>We are StrengthStore.</div>
                        </div>
                    </div>
                    <div id='home-contents-two'>
                        <img id='home-page-picture' src={HomePicture}></img>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home