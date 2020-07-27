import Category from '../model/category';
import Time from '../model/time';
import BloggerComment from '../model/bloggerComment';

export default interface Recipe {
    id: number;
    name: string;
    description: string;
    author: string;
    rate: number;
    image?: string;
    category: Category;
    ingredients: string[];
    steps: string[];
    time: Time;
    yield: number;
    tags: string[];
    comments: BloggerComment[];
    createdAt: Date;
    favorite: boolean;
    views?: number;
    isDeleted?: boolean;
}

