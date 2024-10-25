import { IUser } from "interfaces/User";
import UserItem from "../userItem/UserItem";
import { useState } from "react";
import UserDetails from "components/userDetails/UserDetails";

function UserList({
  users,
  addFavorite,
  favoritesIds,
}: {
  users: IUser[];
  addFavorite: (user: IUser) => void;
  favoritesIds: string[];
}) {
  const [selectedUser, setSelectedUser] = useState<IUser | null>(null);

  return (
    <>
      {users?.map((user, index) => (
        <UserItem
          key={index}
          user={user}
          actionButtonText="Add to Favorites"
          onButtonClicked={addFavorite}
          onUserClicked={() => setSelectedUser(user)}
          isFavorite={favoritesIds.includes(user.id)}
        />
      ))}
      {selectedUser && (
        <UserDetails
          user={selectedUser}
          onClose={() => setSelectedUser(null)}
        />
      )}
    </>
  );
}

export default UserList;
