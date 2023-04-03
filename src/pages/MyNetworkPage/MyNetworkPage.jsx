import SearchUser from "../../components/SearchUser/SearchUser";

export default function MyNetworkPage({ user }) {
    return (
        <>
            <h1>My Network</h1>
            <SearchUser user={user} />
        </>
    );
}