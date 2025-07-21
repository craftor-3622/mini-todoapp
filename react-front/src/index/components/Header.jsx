import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
  const nowDate = new Date().toDateString();
  
  return (
    <header className="Header">
      <h1>{nowDate}</h1>
      <h3>환영합니다.</h3>
      <Link to={"/todo"}>[My Todo]</Link>
      <Link to={"/login"}>[Login]</Link>
      <Link to={"/signup"}>[Signup]</Link>
    </header>
  )
}

export default Header;