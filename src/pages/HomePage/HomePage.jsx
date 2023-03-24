import NavBar from "../../components/NavBar/NavBar";
import { Routes, Route } from "react-router-dom";
import AuthPage from "../AuthPage/AuthPage";

export default function HomePage() {
    return (
        <>
            {/* <NavBar /> */}
            <h1>Home Page</h1>
            <h3>Welcome to LinkedUp, a LinkedIn clone!</h3>
        </>
    );
}