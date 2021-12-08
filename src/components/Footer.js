import GithubLogo from '../assets/github-logo.png'

const Footer = () => {
    return (
        <footer>
            <div>Developed by Mark Pieciak</div>
            <a href='https://github.com/mpieciak18/shopping-cart' target='_blank'>
                <img id='github-logo' src={GithubLogo}></img>
            </a>
        </footer>
    )
}

export default Footer