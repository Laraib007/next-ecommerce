import { getStaticProps } from "@/services/products";



export default function handler(res, req){
  if(req.method === "GET") {
    const products = getStaticProps()
     return res.status(200).json(products);
  } res.status(404).send();
}
