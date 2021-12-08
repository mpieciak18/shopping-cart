import GithubLogo from '../assets/images/github-logo.png'

const Footer = () => {
    return (
        <a href='https://github.com/mpieciak18/shopping-cart' target='_blank' id='footer'>
            <div id='footer-text'>Developed by Mark Pieciak</div>
            <img id='github-logo' src={GithubLogo}></img>
        </a>
    )
}

export default Footer