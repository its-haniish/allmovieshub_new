import { Router } from 'express';
import { createBlog, getBlogBySlug, updateBlog, deleteBlog, getAllBlogs, getAllSlugsAndTitles } from '../controllers/blogController'; // Import all relevant controllers

const router = Router();

// Route to create a new blog
router.post('/create', createBlog);

// Route to fetch a blog by slug 
router.post('/fetch-one', getBlogBySlug);

// Route to update a blog by slug
router.post('/update', updateBlog);

// Route to delete a blog by slug
router.post('/delete', deleteBlog);

// Route to fetch all blogs
router.post('/fetch-all', getAllBlogs);

// Route to fetch all slugs and titles
router.post('/fetch-slugs-titles', getAllSlugsAndTitles);

// Export the router to use in your app
export default router;
