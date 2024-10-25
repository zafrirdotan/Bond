import { IPlanet, IUser } from "interfaces/User";

import "./UserDetails.css";
import { useEffect, useState } from "react";
import { fetchPlanet } from "services/usersService";

function UserDetails({ user, onClose }: { user: IUser; onClose: () => void }) {
  const [homeland, setHomeland] = useState<IPlanet>();

  useEffect(() => {
    if (user.homeWorld) {
      fetchPlanet(user.homeWorld).then((planet) => {
        setHomeland(planet);
      });
    }
  }, [user.homeWorld]);

  return (
    <div className="dialog-background" onClick={onClose}>
      <div
        className="user-details-container"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="close-button" onClick={onClose}>
          X
        </button>
        <header>{user.name}</header>
        <main className="dialog-content">
          <div className="user-details">
            <div>
              <h3>Details</h3>
              <div>Height: {user.height}m</div>
              <div>Mass: {user.mass}kg</div>
              <div>Birth year: {user.birthYear}</div>
              <div>Number of films: {user.films}</div>
            </div>
            <div className="homeworld-data">
              <h3>Home World Details</h3>
              {homeland ? (
                <>
                  <div>Name: {homeland.name}</div>
                  <div>Climate: {homeland.climate}</div>
                  <div>Terrain: {homeland.terrain}</div>
                  <div>Population: {homeland.population}</div>
                </>
              ) : (
                <div>Loading homeworld data...</div>
              )}
            </div>
          </div>
          <div className="user-image">
            <img src={user.image} alt={user.name} />
          </div>
        </main>
      </div>
    </div>
  );
}

export default UserDetails;
