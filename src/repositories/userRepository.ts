import { UserData } from "../types/userType";

export function authWithEmailUser(props: UserData) {
  const { email, password } = props;

  console.log("Meus dados", email, password);
}
