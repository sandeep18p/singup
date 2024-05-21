import './App.css';
import { Link } from 'react-router-dom';
export default function Navbar(){
 return (<>
<nav>
      <div>Header</div>
      <ul>
        <li><Link to="/">Signup</Link></li>
        <li><Link to="/Profile">Profile</Link></li>
      </ul>
    </nav>
 </>)
}