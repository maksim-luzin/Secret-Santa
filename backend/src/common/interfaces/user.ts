interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  password: string;
  santaId: number;
  wishList: string[];
  ready: boolean;
}

export { IUser };
