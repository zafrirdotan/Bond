import { IUser } from "interfaces/User";
import UserList from "./userList/UserList";
import { useState } from "react";
import SearchBar from "./searchBar/SearchBar";
import Paginator from "./paginator/Paginator";

import "./Users.css";
import Loader from "components/loader/Loader";
import { useFetchUsers } from "hooks/fatchUsers";

function Users({
  addFavorite,
  favoritesIds,
}: {
  addFavorite: (user: IUser) => void;
  favoritesIds: string[];
}) {
  const [searchText, setSearchText] = useState("");
  const [page, setPage] = useState(1);

  const { users, loading, error } = useFetchUsers(page, searchText);

  return (
    <>
      <header className="list-header">
        <h2>Users List</h2>
        <SearchBar onValueChange={setSearchText} />
      </header>

      <div className="user-list-container">
        {loading && <Loader />}
        {error && <div>Error: {error.message}</div>}
        {!loading && !users?.results?.length && <div>No users found</div>}
        {users && (
          <>
            <div className="user-list">
              <UserList
                users={users.results}
                addFavorite={addFavorite}
                favoritesIds={favoritesIds}
              />
            </div>
            <Paginator
              page={page}
              setPage={setPage}
              nextDisabled={!users?.next}
              prevDisabled={!users?.previous}
            />
          </>
        )}
      </div>
    </>
  );
}

export default Users;
