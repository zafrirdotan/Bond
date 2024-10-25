import { IUser } from "interfaces/User";
import "./UserItem.css";

function UserItem({
  user,
  onButtonClicked,
  actionButtonText,
  onUserClicked,
  isFavorite,
}: {
  user: IUser;
  onButtonClicked: (user: IUser) => void;
  actionButtonText: string;
  onUserClicked?: (user: IUser) => void;
  isFavorite?: boolean;
}) {
  const handleUserClicked = () => {
    if (onUserClicked) {
      onUserClicked(user);
    }
  };

  const handleButtonClicked = (ev: React.MouseEvent<HTMLButtonElement>) => {
    ev.stopPropagation();
    onButtonClicked(user);
  };

  return (
    <div key={user.name} className="user-item-card" onClick={handleUserClicked}>
      <h2 className="user-item-header">
        {user.name}
        {isFavorite && <div className="favorite-star"> ★ </div>}
      </h2>

      <img src={user.image} alt={user.name} />
      <button className="add-button" onClick={handleButtonClicked}>
        {actionButtonText}
      </button>
    </div>
  );
}

export default UserItem;
