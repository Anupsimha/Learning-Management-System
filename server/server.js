import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import { clerkWebhooks, stripeWebHooks } from './controllers/webhooks.js';
import { clerkMiddleware } from '@clerk/express';

import connectDB from './configs/mongodb.js';
import educatorRouter from './routes/educatorRoutes.js';
import connectCloudinary from './configs/cloudinary.js';
import courseRouter from './routes/courseRoutes.js';
import userRoute from './routes/userRoutes.js';

// Initialize Express
const app = express();

//Connect to database
await connectDB();
await connectCloudinary();

//Midllewares
app.use(cors());
app.use(clerkMiddleware());

//Routes
app.get('/' , (req , res) => res.send("API Working"));
app.post('/clerk' , express.json() , clerkWebhooks);
app.use('/api/educator' , express.json() , educatorRouter);
app.use('/api/course' , express.json() , courseRouter);
app.use('/api/user' , express.json() , userRoute);
app.post('/stripe' , express.raw({ type: 'application/json' }), stripeWebHooks)

//PORT
const PORT = process.env.PORT || 5000;

app.listen(PORT , () => {
    console.log(`Server is running on port ${PORT}`);
})