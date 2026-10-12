export class Member {
  id: number; //PK, not included to dto cz autoincrements
  name: string;
  email: string;
  phone: string;
  password: string;
}
