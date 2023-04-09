import express from "express";
import { isAuthenticated, isAdmin } from "../middlewares/auth.js";
import { singleUpload } from "../middlewares/multer.js";
import {
  deleteProductImage,
  addProductImage,
  createProdcut,
  getAllProducts,
  getProductDetails,
  updateProduct,
  deleteProduct,
  addCategory,
  getAllCategories,
  deleteCategory,
  getAdminProducts,
} from "../controllers/product.js";

const router = express.Router();

router.get("/all", getAllProducts);
router.get("/admin", isAuthenticated, isAdmin, getAdminProducts);

router
  .route("/single/:id")
  .get(getProductDetails)
  .put(isAuthenticated, isAdmin, updateProduct)
  .delete(isAuthenticated, isAdmin, deleteProduct);

router.post("/new", isAuthenticated, isAdmin, singleUpload, createProdcut);

router
  .route("/images/:id")
  .post(isAuthenticated, singleUpload, isAdmin, addProductImage)
  .delete(isAuthenticated, isAdmin, deleteProductImage);

router.post("/category", isAuthenticated, isAdmin, addCategory);
router.get("/categories", isAuthenticated, getAllCategories);
router.delete("/category/:id", isAuthenticated, isAdmin, deleteCategory);

export default router;
