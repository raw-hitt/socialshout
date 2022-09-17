import { Connection } from '../database/projectConfig'


export default class post {

    async getAllPost<T>(): Promise<any[]> {

        //.orderBy("population", "desc")
        var data= await Connection().GetData("posts");
        //console.log(data);
        return data;

    }

    async getUserAllPost<T>(username:string): Promise<any[]> {

        var data= await Connection().GetDataWithCondition("posts","userName","==",username);
        //console.log(data);
        return data;

    }

    getAllPostNoAsync():Array<any[]> {

        var data=  Connection().GetDataNoAsync("posts");
        //console.log(data);
        //return data;
        console.log('2');
        return data;

    }

   

}