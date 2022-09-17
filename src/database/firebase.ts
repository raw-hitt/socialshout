/*@ts-ignore */
import { iconnections } from "./iconnections"


export class FirebaseCon implements iconnections {

    ObjDb: any;

    constructor(firebase: any) {
        this.ObjDb = firebase.firestore();
    }


    async GetData<T>(CollectionName: string, Limit?: number | string): Promise<T[]> {

        const data: Array<T> = [];

        if (!Limit) {
            const DataCollection = await this.ObjDb.collection(CollectionName).get();

            DataCollection.forEach((doc: any) => {
                let d = doc.data();
                d.docId = doc.id
                data.push(d)
            })


        }
        else {

            const limit: number = Limit as number;
            const DataCollection = await this.ObjDb.collection(CollectionName).limit(limit).get();

            DataCollection.forEach((doc: any) => {
                let d = doc.data();
                d.docId = doc.id
                data.push(d)
            })
        }
        return data;
    }

    async AddData<T>(collectionName: string, data: T): Promise<string> {

        const doc = await this.ObjDb.collection(collectionName).add(data);
        
        return doc;
    }

    async DeleteData(tableName: string, docid: string) {
        await this.ObjDb.collection(tableName).doc(docid).delete();

    }

    async UpdateData<T>(tableName: string, docid: string, data: T): Promise<boolean> {

        await this.ObjDb.collection(tableName).doc(docid).update(data)

        return true
    }

    async GetDataWithCondition<T>(collectionName: string, column: string, operator: string, condition: any, Limit?: number | string): Promise<T[]> {

        var data: Array<T> = [];
        //console.log('====',collectionName,column,operator,condition)
            //console.log(this.ObjDb)
        if (!Limit) {

            const DataCollection = await this.ObjDb.collection(collectionName).where(column, operator, condition).get();
            //const DataCollection = await this.ObjDb.collection("users").where("email","==","rp99452@gmail.com").get();


            DataCollection.forEach((doc: any) => {
                let d = doc.data();
                d.docId = doc.id
                data.push(d)
            })


        }
        else {

            const limit: number = Limit as number;
            const DataCollection = await this.ObjDb.collection(collectionName).where(column, operator, condition).limit(limit).get();

            DataCollection.forEach((doc: any) => {
                let d = doc.data();
                d.docId = doc.id
                data.push(d)
            })
        }

        return data;
    }

      

    //this thing doesnot work
    GetDataNoAsync(collectionName: string,column?: string, operator?: string, condition?: any, Limit?: number | string): Array<any> {

        const data: Array<any> = [];

        if (!Limit) {
            const DataCollection = this.ObjDb.collection(collectionName).where(column, operator, condition).get()
            .then((snap:any)=>{
                snap.forEach((doc: any) => {
                    let d = doc.data();
                    d.docId = doc.id
                    data.push(d)
                })
            });

          


        }
        else {

            const limit: number = Limit as number;
            const DataCollection = this.ObjDb.collection(collectionName).where(column, operator, condition).limit(limit).get();

            DataCollection.forEach((doc: any) => {
                let d = doc.data();
                d.docId = doc.id
                data.push(d)
            })
        }
        console.log('oo',data)
        return data;
    }
}