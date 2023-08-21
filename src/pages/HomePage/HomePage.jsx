import NavBar from "../../components/NavBar/NavBar";
import { Routes, Route } from "react-router-dom";
import AuthPage from "../AuthPage/AuthPage";
import screenshot from "../../instance.jpg";
import "./HomePage.css";

export default function HomePage({ user }) {
    return (
        <div className="Homepage">
      <h1 className="page-title">Welcome to LinkedUp</h1>
      <div className="welcome-container">
        <div className="welcome-text">
          <h3 className="welcome-heading">A LinkedIn Clone</h3>
          <p className="welcome-description">
            Connect with professionals, build your network, and explore
            opportunities.
          </p>
        </div>
        <img src={screenshot} alt="LinkedUp" className="screenshot" />
      </div>
    </div>
    );
}