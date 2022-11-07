import express from 'express';
import { VendorController } from '../controllers/vendor.js';
import { VendorValidations } from '../Validation/vendor.js';
import {validate} from 'express-validation';

const vendorRoutes = express.Router();
const vendorController = new VendorController();

vendorRoutes.post("/vendor/create",validate(VendorValidations.CreateOrUpdateVendorValidator),vendorController.CreateNewVendor);
vendorRoutes.get("/brands",vendorController.GetAllVendorsList);
vendorRoutes.get("/brand/id",vendorController.GetVendorById);
vendorRoutes.put("/brand/update",validate(VendorValidations.CreateOrUpdateVendorValidator),vendorController.UpdateVendorbyId);
vendorRoutes.delete("/brand/delete",vendorController.DeleteVendorById);

export default vendorRoutes;