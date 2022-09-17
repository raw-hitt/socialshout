export interface iPost {
    userId: string;
    userName:string;
    userProfile:string
    post: string;
    createdAt: Date;
    likedBy: Array<string>;//userid,name,profilepiclink
    comments: Array<string>;//userid,name,profilepiclink,comment
    imageLink: Array<string>;//imgurl
    country?: string;
    browser?: string;
}