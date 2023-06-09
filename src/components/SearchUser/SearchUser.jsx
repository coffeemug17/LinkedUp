import { useState } from "react";
import { Button } from "react-bootstrap";
import * as usersAPI from "../../utilities/users-api";
import UserCard from "../UserCard/UserCard";
import "./SearchUser.css";

export default function SearchUser({ user }) {
    const [searchResults, setSearchResults] = useState([]);
    const [searchUser, setSearchUser] = useState('');

    async function handleSearch(searchUser) {
        const results = await usersAPI.getUserSearch(searchUser);
        setSearchResults(results);
    }

    function handleSearchSubmit(evt) {
        evt.preventDefault();
        handleSearch(searchUser);
    }

    function handleSearchChange(evt) {
        setSearchUser(evt.target.value);
    }

    async function handleFollowUser(id) {
        const user = usersAPI.followUser(id);
    }

    const mappedUsers = searchResults.map((searchedUser, idx) => <UserCard searchedUser={searchedUser} key={idx} user={user} handleFollowUser={handleFollowUser} />);
    return (
        <>
            <form onSubmit={handleSearchSubmit} className="SearchUser">
                <input className="textarea" type="text" onChange={handleSearchChange} placeholder="Search for users!" name="searchUser" value={searchUser} />
                <div className="button">
                    <Button variant="success" type="submit">Search User</Button>
                </div>
            </form>
            <div>
                {mappedUsers}
            </div>
        </>
    );
}