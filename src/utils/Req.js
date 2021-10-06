import Prismic from "@prismicio/client";

const request = async (doctype) => {
  const res = Prismic.client(
    "https://benjamin-joly--portfolio.prismic.io/api/v2"
  );
  const data = await res.query(Prismic.Predicates.at("document.type", doctype));
  console.log(data.results[0]);
  return data.results[0];
};
export default request;
