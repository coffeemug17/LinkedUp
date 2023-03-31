import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <>
    {user ? 
      <nav>
        <Link to="/">Home</Link>
        &nbsp; | &nbsp;
        <Link to="/posts">All Posts</Link>
        &nbsp; | &nbsp;
        <Link to="/jobs">Jobs</Link>
        &nbsp; | &nbsp;
        <Link to="/myjobs">My Saved Jobs</Link>
        &nbsp;&nbsp;
        <span>Welcome, {user.name}</span>
        &nbsp;&nbsp;<Link to="" onClick={handleLogOut}>Log Out</Link>
      </nav>
      :
      <nav>
        <Link to="/">Home</Link>
        &nbsp; | &nbsp;
        <Link to="/authorization">Log In/Sign Up</Link>
      </nav>
    }
    </>
  );
}