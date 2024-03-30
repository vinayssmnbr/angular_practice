export interface signup {
  name: string;
  email: string;
  password: string;
}

export interface login {
  email: string;
  password: string;
}

export interface product {
  name: String;
  price: Number;
  color: string;
  discription: string;
  category: string;
  image: string;
  id: Number;
}
