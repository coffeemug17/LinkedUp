import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import * as usersAPI from "../../utilities/users-api";

export default function UserCard({ searchedUser, user, handleFollowUser }) {


    return (
        <Card>
          <Card.Header as="h5">{searchedUser.name}</Card.Header>
          <Card.Body>
            <Card.Title>{searchedUser.about} at {searchedUser.company}</Card.Title>
            {user._id !== searchedUser._id 
                ?
                <Button variant="primary" onClick={() => handleFollowUser(searchedUser._id)}>Follow</Button>
                :
                <></>
            }
          </Card.Body>
        </Card>
      );
}