import { Document, Schema, model } from 'mongoose';

// Define an interface for the content
interface Content {
    type: string;
    content: string;
}

// Define an interface for the blog document
interface Blog extends Document {
    featured?: string;
    slug: string;
    title: string;
    contents: Content[]; // Change this to an array of Content objects
    location: string;
    createdAt?: Date;
    author: string;
    description: string;
    keywords: string;
}

// Define the schema for contents
const contentSchema = new Schema<Content>({
    type: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    }
});

// Define the schema for blogs
const blogsSchema: Schema<Blog> = new Schema({
    featured: {
        type: String,
        default: ''
    },
    slug: {
        type: String,
        required: true,
        unique: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    keywords: {
        type: String,
        required: true
    },
    contents: {
        type: [contentSchema], // Change this to an array of Content objects
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    author: {
        type: String,
        required: true
    }
});

// Create and export the model
const Blogs = model<Blog>('blogs', blogsSchema);

export default Blogs;
