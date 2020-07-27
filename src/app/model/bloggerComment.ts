import { Reply } from '../model/reply';
export interface BloggerComment {
    id: number;
    body: string;
    createdBy: string;
    createdAt: string;
    replies?: Reply[];
    recipeId: number;
}