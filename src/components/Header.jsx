import invest from '../assets/image1.jpg';
import '../App.css';

function Header() {
    return (
        <div className='image-container'>
            <img className='invest-img' src={invest} alt="Investment banner" />
            <h2 className='header-title'>Investment Calculating Web App</h2>
        </div>
    );
}

export default Header;

