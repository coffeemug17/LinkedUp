import { useState } from "react";
import * as usersAPI from "../../utilities/users-api";

export default function SearchUser() {
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

    return (
        <>
            <form onSubmit={handleSearchSubmit}>
                <input type="text" onChange={handleSearchChange} placeholder="Search for users!" name="searchUser" value={searchUser} />
                <button type="submit">Search User</button>
            </form>
        </>
    );
}