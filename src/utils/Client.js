import Prismic from "@prismicio/client";
import Dotenv from "dotenv";
Dotenv.config();
const Client = Prismic.client(
  "https://benjamin-joly--portfolio.prismic.io/api/v2"
);
export default Client;
