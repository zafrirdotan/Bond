import FavoritesList from "components/favoritesList/FavoritesList";
import Users from "components/users/Users";
import { useCallback, useMemo, useState } from "react";
import { IUser } from "interfaces/User";

import "./UsersPage.css";

function UsersPage() {
  const [favorites, setFavorites] = useState<IUser[]>([]);

  const addFavorite = useCallback((user: IUser) => {
    setFavorites((prevFavorites) => {
      if (prevFavorites.some((favorite) => favorite.id === user.id)) {
        return prevFavorites;
      }

      return [...prevFavorites, user];
    });
  }, []);

  const removeFavorite = useCallback((id: string) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((favorite) => favorite.id !== id)
    );
  }, []);

  const favoritesIds = useMemo(
    () => favorites.map((user) => user.id),
    [favorites]
  );

  return (
    <div className="users-page">
      <div className="left-list">
        <Users addFavorite={addFavorite} favoritesIds={favoritesIds} />
      </div>
      <div className="right-list">
        <FavoritesList favorites={favorites} removeFavorite={removeFavorite} />
      </div>
    </div>
  );
}

export default UsersPage;
