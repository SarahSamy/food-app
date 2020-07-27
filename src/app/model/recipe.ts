import { Category } from '../model/category';
import { Time } from '../model/time';
import { Tag } from '../model/tag';
import { BloggerComment } from '../model/bloggerComment';

export interface Recipe {
    id: number;
    name: string;
    description: string;
    createdBy: string;
    rate: number;
    image?: string;
    category?: Category;
    ingredients: string[];
    steps: string[];
    time: Time;
    yield: number;
    tags: Tag[];
    comments: BloggerComment[];
    createdAt: string;
    favourite: boolean;
    views?: number;
    isDeleted?: boolean;

}
