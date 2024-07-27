import express from "express";
import { addLecture, createCourse, getAllCourses, getCourseLectures } from "../controllers/courseController.js";
import singleUpload from "../middlewares/multer.js";

const router = express.Router();
router.route("/courses").get(getAllCourses);
router.route("/createCourse").post(singleUpload, createCourse);

router.route("/course/:id").get(getCourseLectures).post(singleUpload, addLecture);
export default router;