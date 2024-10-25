export interface ICharacterDTO {
  count: number;
  next: string;
  previous: string;
  results: ICharacter[];
}

export interface IUsers {
  count: number;
  next: string;
  previous: string;
  results: IUser[];
}

export interface IUser {
  id: string;
  name: string;
  height: number;
  mass: number;
  birthYear: string;
  films: number;
  homeWorld: string;
  image: string;
}

export interface ICharacter {
  name: string;
  mass: number;
  birth_year: string;
  films: string[];
  homeworld: string;
  height: number;
}

export interface IPlanet {
  name: string;
  terrain: string;
  climate: string;
  population: number;
}
