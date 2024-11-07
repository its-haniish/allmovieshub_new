import mongoose, { Document, Schema } from 'mongoose';

// Post interface to define the structure for the Post document
interface IPost extends Document {
    featuredImage: string;
    title: string;
    slug: string;
    metaDesc: string;
    keywords: string[];
    imdbRating: string;
    releaseYear: string;
    genres: string;
    quality: string;
    fileSize: string;
    language: string;
    format: string;
    director: string;
    starCast: string;
    synopsis: string;
    image: string;
    postViews: number;
}

// Post Schema
const postSchema: Schema = new Schema<IPost>({
    featuredImage: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    slug: {
        type: String,
        required: true
    },
    metaDesc: {
        type: String,
        required: true,
    },
    keywords: {
        type: [String],
        required: true,
    },
    imdbRating: {
        type: String,
        default: "NA/10",
    },
    releaseYear: {
        type: String,
        required: true,
    },
    genres: {
        type: String,
        required: true,
    },
    quality: {
        type: String,
        required: true,
    },
    fileSize: {
        type: String,
        required: true,
    },
    language: {
        type: String,
        required: true,
    },
    format: {
        type: String,
        required: true,
    },
    director: {
        type: String,
        required: true,
    },
    starCast: {
        type: String,  // Array to store multiple actors, you can also make this an array of strings if needed
        required: true,
    },
    synopsis: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    postViews: {
        type: Number,
        default: () => Math.floor(Math.random() * (10000 - 100 + 1)) + 100,
    },
});

// Post Model
const Posts = mongoose.model<IPost>('Post', postSchema);


// Page interface to define the structure for the Page document
interface IPage extends Document {
    pageUrl: string;
    pageNo: number;
}

// Page Schema
const pageSchema: Schema = new Schema<IPage>({
    pageUrl: {
        type: String,
        required: true,
    },
    pageNo: {
        type: Number,
        default: 0,
    }
});

// Page Model
const Pages = mongoose.model<IPage>('Page', pageSchema);

export { Posts, Pages };
