import { getById } from "@/pages/products";



export default function handler(req, res){
    if(req.method === "GET"){
    const {productId} = req.query;
    const products = getById(productId);
    return res.status(200).json(products);
    }  return res.status(404).send()
}