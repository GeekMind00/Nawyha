import { Request, Response } from "express";
import httpStatus from 'http-status';
import Apartment from "../models/apartmentModel"

export const createApartment = async (req: Request, res: Response) => {
  try {
    const apartment = await Apartment.create(req.body);
    res.status(httpStatus.CREATED).send(apartment);
  }
  catch (err: any) {
    console.log(err)
    res.status(500).json({
        message: err.message,
    })
  }
  };
  
  export const getAllApartments = async (req: Request, res: Response) => {
    try {
    const result = await Apartment.find();
    res.send(result);
    }
    catch (err: any) {
      console.log(err)
      res.status(500).json({
          message: err.message,
      })
    }
  };
  
  export const getApartment = async (req: Request, res: Response) => {
    try {
      const user = await Apartment.findById(req.params.id);
      res.send(user);
    }
    catch (err: any) {
      console.log(err)
      res.status(500).json({
          message: err.message,
      })
    }  
  };
  
  export const updateAparmtent = async (req: Request, res: Response) => {
    try {
      const user = await Apartment.findByIdAndUpdate(req.params.id, req.body);
      res.send(user);
    }
     catch (err: any) {
      console.log(err)
      res.status(500).json({
          message: err.message,
      })
    }  
  };
  
  export const deleteAparmtent= async (req: Request, res: Response) => {
    try{
      await Apartment.findByIdAndDelete(req.params.id);
      res.status(httpStatus.NO_CONTENT).send();
    }
    catch (err: any) {
      console.log(err)
      res.status(500).json({
          message: err.message,
      })
    }  
  };