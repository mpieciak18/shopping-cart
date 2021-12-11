import Header from "../components/Header.js"
import Footer from "../components/Footer.js"

const ComingSoon = (props) => {
    return (
        <div id='coming-soon' class='page'>
            <Header total={props.total}/>
            <div id='coming-soon-contents'></div>
            <Footer />
        </div>
    )
}

export default ComingSoon