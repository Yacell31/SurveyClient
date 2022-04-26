
import axios from './config/axiosConfig';
import IElementService from './Interfaces/IElementService';



export default class ElementService implements IElementService {
  private API_BASE_URL: string | undefined

  constructor() {
    this.API_BASE_URL = process.env.SURVEY_APP_BASE_URL;
  }

  GetElementListByCategory = async (IdCategory:number) => {
      
    return await axios.get(`${'/Element/get-elements?IdCategory='}${IdCategory}`)

    .then((response) => {
    console.log(response.status);
      return response.data;
    })
   .catch((error) => {
     console.log(error);
     if (error.response === 400) {
       throw error;
     }
   });
  }
 
}
