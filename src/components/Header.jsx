import invest from '../assets/image1.jpg'
import '../App.css'

function Header ( ) {
    return (
        <div className='image-container'>
            <img  className='invest-img' src={invest} alt="" />
            <h3>Investment calculating web App</h3>
        </div>
    )
}

export default Header