import UserItem from "components/users/userItem/UserItem";
import { memo, useState } from "react";

import "./FavoritesList.css";
import ColorPicker from "components/colorPicker/ColorPicker";

export default memo(function FavoritesList({
  favorites,
  removeFavorite,
}: {
  favorites: any[];
  removeFavorite: (id: string) => void;
}) {
  const [backgroundColor, setBackgroundColor] = useState<string>();

  return (
    <div style={{ backgroundColor }}>
      <header className="list-header">
        <h2>Favorites</h2>
        <ColorPicker onColorChange={setBackgroundColor} />
      </header>

      <div className="favorites-list">
        {favorites.map((user, index) => (
          <UserItem
            user={user}
            key={index}
            onButtonClicked={() => removeFavorite(user.id)}
            actionButtonText="Remove from Favorites"
            isFavorite={true}
          />
        ))}
      </div>
    </div>
  );
});
