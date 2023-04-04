import { useEffect } from "react";
import { useState } from "react";
import SearchUser from "../../components/SearchUser/SearchUser";
import UserCard from "../../components/UserCard/UserCard";
import * as usersAPI from "../../utilities/users-api";
import "./MyNetworkPage.css";

export default function MyNetworkPage({ user }) {
    const [followingUsers, setFollowingUsers] = useState([]);
    const [refreshState, setRefreshState] = useState(false);

    useEffect(function () {
        async function getFollowingUsers() {
            const following = await usersAPI.getFollowingUsers();
            setFollowingUsers(following);
            setRefreshState(!refreshState);
        }
        getFollowingUsers();
    }, [followingUsers]);

    async function handleFollowUser(id) {
        const user = usersAPI.followUser(id);
        setRefreshState(!refreshState);
    }

    const mappedFollowers = followingUsers.map((follower, idx) =>
        <UserCard searchedUser={follower} key={idx} user={user} handleFollowUser={handleFollowUser} />);
    return (
        <div className="MyNetworkPage">
            <SearchUser user={user} />
            <hr />
            <h1>My Network</h1>
            {mappedFollowers}
        </div>
    );
}