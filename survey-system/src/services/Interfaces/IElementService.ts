

export default interface IElementService {

    GetElementListByCategory : (IdCategory:number) => Promise<void | Array<any>>
    
}