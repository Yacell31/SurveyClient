
import axios from './config/axiosConfig';
import IAnswerService from './Interfaces/IAnswerService';



export default class AnswerService implements IAnswerService {
  private API_BASE_URL: string | undefined

  constructor() {
    this.API_BASE_URL = process.env.SURVEY_APP_BASE_URL;
  }

  PostElements = async (elementList:any) => {
    console.log(elementList);
    const data= [{
        "id": 0,
        "elementId": 0,
        "parentId": 0,
        "elementType": "A",
        "createdDate": "2022-04-26T02:56:00.455Z",
        "isActive": true
    },
    {
        "id": 0,
        "elementId": 1,
        "parentId": 1,
        "elementType": "A",
        "createdDate": "2022-04-26T02:56:00.455Z",
        "isActive": true
    }
]
    return axios.request({
        method: 'POST',
        url: `${'/Answer/create-answers'}`,
        data:elementList,
  
      }).then((response) => {
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
