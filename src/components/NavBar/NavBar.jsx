import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import "./NavBar.css"

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <div className='NavBar'>
    {user ? 
      <nav>
        <Link to="/">Home</Link>
        <Link to="/posts">All Posts</Link>
        <Link to="/jobs">Jobs</Link>
        <Link to="/myjobs">My Jobs</Link>
        <Link to="/mynetwork">My Network</Link>
        <span>Welcome, {user.name}</span>
        <Link to="" onClick={handleLogOut}>Log Out</Link>
      </nav>
      :
      <nav className='NoUserNav'>
      <Link to="/">Home</Link>
      <Link to="/authorization">Log In/Sign Up</Link>
      </nav>
    }
    </div>
  );
}