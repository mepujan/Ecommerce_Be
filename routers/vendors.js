import express from 'express';
import { VendorController } from '../controllers/vendor.js';
import LoginRequired from '../middleware/LoginRequired.js';

const vendorRoutes = express.Router();
const vendorController = new VendorController();



vendorRoutes.post("/vendor/create",LoginRequired,vendorController.CreateNewVendor);
vendorRoutes.get("/vendors",vendorController.GetAllVendorsList);
vendorRoutes.get("/vendor/id",vendorController.GetVendorById);
vendorRoutes.put("/vendor/update",vendorController.UpdateVendorbyId);
vendorRoutes.delete("/vendor/delete",vendorController.DeleteVendorById);

export default vendorRoutes;