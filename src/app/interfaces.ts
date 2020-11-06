export interface Actor {
  id: number;
  name: string;
}

export interface Movie {
  id: number;
  name: string;
  year: number;
  actors: Actor[];
}
