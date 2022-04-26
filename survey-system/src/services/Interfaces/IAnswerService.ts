

export default interface IAnswerService {

    PostElements : (elementList: any) => Promise<void | any>
    
}