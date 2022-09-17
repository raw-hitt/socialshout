export interface iconnections {

    GetData<T>(CollectionName: string, Limit?: number | string): Promise<Array<T>>

    AddData<T>(collectionName: string, data: T): Promise<string>

    DeleteData(tableName: string, docid: string): void

    UpdateData<T>(tableName: string, docid: string, data: T): Promise<boolean>
    
    GetDataWithCondition<T>(collectionName: string, column: string, operator: string, condition: any, Limit?: number | string): Promise<T[]>
    

    
    GetDataNoAsync<T>(CollectionName: string,column?: string, operator?: string, condition?: any, Limit?: number | string): Array<any>
    
}

