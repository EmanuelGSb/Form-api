import { Request, Response} from "express";

const downloadPdf = (req:Request, res:Response) => { 
  return res.status(200).send({ message: "Dowload pdf sucessfully" });
};

export default {
  action: downloadPdf 
}