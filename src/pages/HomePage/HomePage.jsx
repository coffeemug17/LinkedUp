import NavBar from "../../components/NavBar/NavBar";
import { Routes, Route } from "react-router-dom";
import AuthPage from "../AuthPage/AuthPage";
import "./HomePage.css";

export default function HomePage({ user }) {
    return (
        <div className="Homepage">
            <h1>Home Page</h1>
            <h3>Welcome to LinkedUp, a LinkedIn clone!</h3>
        </div>
    );
}