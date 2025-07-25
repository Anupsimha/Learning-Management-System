import express from 'express';
import { addUserRating, getUserCourseProgress, getUserData, purchaseCourse, updateUserCourseProgress, userEnrolledCourses } from '../controllers/userController.js';

const userRoute = express.Router();

userRoute.get('/data' , getUserData);
userRoute.get('/enrolled-courses' , userEnrolledCourses);
userRoute.post('/purchase' , purchaseCourse);

userRoute.post('/update-course-progress' , updateUserCourseProgress);
userRoute.post('/get-course-progress' , getUserCourseProgress);
userRoute.post('/add-rating' , addUserRating);


export default userRoute;