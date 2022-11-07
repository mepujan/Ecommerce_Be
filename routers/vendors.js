import express from 'express';
import { VendorController } from '../controllers/vendor.js';
import { VendorValidations } from '../Validation/vendor.js';
import {validate} from 'express-validation';

const vendorRoutes = express.Router();
const vendorController = new VendorController();

vendorRoutes .post("/vendor/create",validate(VendorValidations.CreateOrUpdateVendorValidator),vendorController.CreateNewVendor);

export default vendorRoutes;