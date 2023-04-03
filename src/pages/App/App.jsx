import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../components/NavBar/NavBar';
import HomePage from "../../pages/HomePage/HomePage";
import AllPostsPage from '../AllPostsPage/AllPostsPage';
import JobsPage from '../JobsPage/JobsPage';
import SavedJobsPage from '../SavedJobsPage/SavedJobsPage';
import MyNetworkPage from '../MyNetworkPage/MyNetworkPage';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      { user ?
          <>
            <NavBar user={user} setUser={setUser} />
            <Routes>
              {/* Route components in here */}
              <Route path="/" element={<HomePage user={user} />} />
              <Route path="/posts" element={<AllPostsPage user={user} />} />
              <Route path="/jobs" element={<JobsPage user={user} />} />
              <Route path="/myjobs" element={<SavedJobsPage user={user} />} />
              <Route path="/mynetwork" element={<MyNetworkPage user={user} />} />
            </Routes>
          </>
          :
          <>
            <NavBar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/authorization" element={<AuthPage setUser={setUser} />} />
            </Routes>
          </>
      }
    </main>
  );
}
