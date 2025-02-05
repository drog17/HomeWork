import './header.scss'
import logo from './Img/SHOP.CO.png'
import cart from './Img/Frame (12).png'
import user from './Img/Frame (13).png'


const Header = () => {
  return (
    <header className='header'>
      <div className="header__top">
        <p>Sign up and get 20% off to your first order. <a href="">Sign Up Now</a></p>
      </div>
      <div className="header__menu">
        <div className="container">
            <img src={logo} alt="" />
            <ul className='header__lists'>
                <li>Shop</li>
                <li>On Sale</li>
                <li>New Arrivals</li>
                <li>Brands</li>
            </ul>
            <input type="text" placeholder='Search for products...'/>
            <img src={cart} alt="" />
            <img src={user} alt="" />
        </div>
      </div>
    </header>
    
  )
}

export default Header
