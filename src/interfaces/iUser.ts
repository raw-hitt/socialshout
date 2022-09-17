export interface iUser {
    name: string; 
    email: string; 
    password: string; 
    profilePictureLink: string; 
    phone?: number
    about?:string;
    website?:string;
    //tobe implemented later
    isPrivate?:boolean;
    followers?:Array<string>;//profilepiclink,name,id
    followeRequests?:Array<string>;//profilepiclink,name,id
    following?:Array<string>;//profilepiclink,name,id
    notifications?:Array<string>;//notification, post/userlink


}

