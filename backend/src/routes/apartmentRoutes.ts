import express, { Router } from 'express';
const apartmentController= require('./../controllers/apartmentController')

const apartmentRouter = express.Router();

apartmentRouter
  .route('/')
  .get(apartmentController.getAllApartments)
  .post(apartmentController.createApartment);

  apartmentRouter
  .route('/:id')
  .get(apartmentController.getApartment)
  .patch(apartmentController.updateAparmtent)
  .delete(apartmentController.deleteAparmtent);

export default apartmentRouter;