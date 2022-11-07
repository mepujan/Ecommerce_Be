import express from 'express';
import { VendorController } from '../controllers/vendor.js';
import { VendorValidations } from '../Validation/vendor.js';
import {validate} from 'express-validation';

const vendorRoutes = express.Router();
const vendorController = new VendorController();

vendorRoutes.post("/vendor/create",validate(VendorValidations.CreateOrUpdateVendorValidator),vendorController.CreateNewVendor);
vendorRoutes.get("/vendors",vendorController.GetAllVendorsList);
vendorRoutes.get("/vendor/id",vendorController.GetVendorById);
vendorRoutes.put("/vendor/update",validate(VendorValidations.CreateOrUpdateVendorValidator),vendorController.UpdateVendorbyId);
vendorRoutes.delete("/vendor/delete",vendorController.DeleteVendorById);

export default vendorRoutes;