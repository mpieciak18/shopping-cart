import HomePicture from "../assets/images/home-photo.png"
import { Link } from 'react-router-dom'

const HomePageContents = () => {
    return (
        <div id='home-contents' class='page-contents'>
            <div id='home-contents-left'>
                <div id='home-subheader'>#1-RATED STRENGTH EQUIPMENT SUPPLIER</div>
                <div id='home-header'>
                    <div id='home-header-line-1'>We know strength equipment.</div>
                    <div id='home-header-line-2'>We are StrengthStore.</div>
                </div>
                <Link id='home-shop-button' to='/shop'>Shop Now</Link>
            </div>
            <div id='home-contents-right'>
                <img id='home-image'src={HomePicture} />
                <div id='home-overlay'></div>
            </div>
        </div>
    )
}

export default HomePageContents