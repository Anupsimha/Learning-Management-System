import express from 'express';
import { addCourse, educatorDashboardData, getEducatorCourses, updateRoleEducator , getEnrolledStudentsData } from '../controllers/educatorController.js';
import { protectEducator } from '../midldlewares/authMiddleware.js';
import upload from '../configs/multer.js';

const educatorRouter = express.Router();

//add Educator Role
educatorRouter.get('/update-role' , updateRoleEducator);
educatorRouter.post('/add-course' , upload.single('image') , protectEducator , addCourse);
educatorRouter.get('/courses' , protectEducator , getEducatorCourses);
educatorRouter.get('/dashboard' , protectEducator , educatorDashboardData);
educatorRouter.get('/enrolled-students' , protectEducator , getEnrolledStudentsData);

export default educatorRouter;