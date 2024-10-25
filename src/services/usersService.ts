import { ICharacterDTO, IPlanet, IUser, IUsers } from "interfaces/User";
import { generateRandomNumber } from "utils/randomNumber";

const BaseUrl = "https://swapi.dev/api/people/";

export async function fetchUsers(
  page: number,
  searchText: string
): Promise<IUsers> {
  const characterDTO = await fetchPeople(page, searchText);

  const extendedUsers: IUser[] = characterDTO.results?.map((person) => {
    const randomNumber = generateRandomNumber();
    return {
      id: person.name + person.height,
      name: person.name,
      height: person.height,
      mass: person.mass,
      birthYear: person.birth_year,
      films: person.films.length,
      homeWorld: person.homeworld,
      image: `https://picsum.photos/id/${randomNumber}/200`,
    };
  });

  return {
    count: characterDTO.count,
    next: characterDTO.next,
    previous: characterDTO.previous,
    results: extendedUsers,
  };
}

async function fetchPeople(
  page: number,
  searchText: string
): Promise<ICharacterDTO> {
  const response = await fetch(`${BaseUrl}/?page=${page};search=${searchText}`);
  return response.json();
}

export async function fetchPlanet(url: string): Promise<IPlanet> {
  const response = await fetch(url);
  return response.json();
}
