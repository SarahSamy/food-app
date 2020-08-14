// import Reply from '../model/reply';
export default interface BloggerComment {
    id: number;
    body: string;
    author: string;
    createdAt: Date;
    // replies?: Reply[];
    recipeId: number;
}