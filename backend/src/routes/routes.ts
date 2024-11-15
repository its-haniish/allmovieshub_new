import { Router } from 'express';
import { createBlog, getBlogBySlug, updateBlog, deleteBlog, getAllBlogs, getMovieCards, getMovieCardsBySearch, getMovie } from '../controllers/blogController'; // Import all relevant controllers

const router = Router();

// Route to create a new blog
router.post('/create', createBlog);

// Route to fetch a blog by slug 
router.get('/fetch-one', getMovie);

// Route to update a blog by slug
router.post('/update', updateBlog);

// Route to delete a blog by slug
router.post('/delete', deleteBlog);

// Route to fetch all blogs
router.post('/fetch-all', getAllBlogs);

// Route to fetch all slugs and titles
router.get('/movies', getMovieCards);

// Route to fetch all slugs and titles
router.get('/search', getMovieCardsBySearch);



// Export the router to use in your app
export default router;
