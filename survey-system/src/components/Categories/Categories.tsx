import React, { FC, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Header } from "../Header/Header";
import categories from '../Data/PetsCategories';
import { PetsCard } from "../PetsCards/PetsCards";
import dogQuestions from "../Data/Questions.json";
import { Test1 } from "../Tests/Test1";
import ExampleList from "../Data/Example.json";
import Elements from "../Data/QuestionsAnswers.json";
import { AnswerLayout } from "../AnswerOptions/AnswerLayout";
import { SurveyCompleted } from "./SurveyCompleted";
import ElementService from "../../services/ElementService";
import AnswerService from "../../services/AnswerService";
import getTreeData from "../../common/getTreeData";
import { getMaxListeners } from "process";



export interface IProps {
   
}


export const SurveyCategories: FC<IProps> = (props: IProps) => {   
    const elementsMap =Elements.map((parentElement:any, i:number)=>{
        return parentElement
     })

     const answersTest= {
        question: Elements[0].Name,
        answers:Elements[0].children.map((child:any, i:number)=>{
           return child
        })

    }
   
    let treeRoot=0;

    const[getSurveyQuestions, setSurveyQuestions]= useState<any>();
    const[getRedirectQuestions, setRedirectQuestions]= useState<boolean>(false);
    const[getSelectedAnswer, setSelectedAnswer] =  useState<any>();
   // const[getAnswers, setAnswers]= useState<any>(answersTest);
    const[getCurrentQuestionIndex, setCurrentQuestionIndex]= useState<number>(0);
  /*  const[getNextQuestion, setNextQuestion]= useState<any>({
        Id:Elements[treeRoot].Id,
        Name:Elements[treeRoot].Name,
        ParentId:Elements[treeRoot].ParentId,
        children:Elements[treeRoot].children
    });*/
    const[getNextQuestion, setNextQuestion]= useState<any>();
    const[getCurrentQuestion, setCurrentQuestion]= useState<any>();
    const[IsNextQuestion, setIsNextQuestion]=useState<boolean>(false);
    const[getTypedResponses, setTypedResponses]= useState<any>({Id:0, value:''});
    const[getAnswerList, setAnswerList]= useState<any>([]);
    const[getIsSurveyCompleted, setIsSurveyCompleted]=useState<boolean>(false);
    const elementService= new ElementService();
    const answerService= new AnswerService();
  
   
   
    const onAnswerClickHandler =(option:any) => {
     //Find out if the answer have a child and render the child, if not move to the next question.
     let tempAnswers = getAnswerList;
     tempAnswers[option.parentId] = option.id;
     setAnswerList(tempAnswers);

     if(option.children.length> 0){
         setCurrentQuestion(option)
         setIsNextQuestion(true);
         console.log(option.children);
     }
     else{
     //   console.log(treeRoot);
        setIsNextQuestion(false);
        console.log("Incrementing state");
     

     }
      setSelectedAnswer(option);
      const elementsMap =Elements.map((parentElement:any, i:number)=>{
        return parentElement
     })
    }


    const onTypeTextValueHandler=(e:any, elementId:number)=>{
        console.log(getCurrentQuestionIndex);
        var response = e.target.value;
        let tempAnswers = getAnswerList;
        tempAnswers[elementId] = response;
        setAnswerList(tempAnswers);
        console.log(tempAnswers)
       /* let answer={id:elementId, answerText: response};
        const answerList=[...getAnswerList];
        answerList.push(answer);*/
        //setTypedResponses({Id: elementId, value:response});
        setIsNextQuestion(false);
        
        //console.log(elementId);
    /*const onchangeInput = (val, index) =>{
    temp[index] = val.target.value
    console.log(temp)*/
    }

    const onNextQuestionClickHandler=()=>{
        //Debugging logs
        console.log(getCurrentQuestionIndex);
       // console.log(getTypedResponses);
        console.log(getAnswerList);

        //Move to the next child node.
        if(IsNextQuestion){
            setNextQuestion(getCurrentQuestion);
        }
        else{
         //Move to the next root parent node.
           let nextIndex:number=getCurrentQuestionIndex;
           nextIndex++;
           setCurrentQuestionIndex(nextIndex);
           if(getSurveyQuestions[nextIndex]){
                setNextQuestion({
                    Id:getSurveyQuestions[nextIndex].id,
                    Name:getSurveyQuestions[nextIndex].name,
                    ParentId:getSurveyQuestions[nextIndex].parentId,
                    children:getSurveyQuestions[nextIndex].children
                });
           }
           else{
               setRedirectQuestions(false);
               //Save questions.
               SaveAnswerList();
               setIsSurveyCompleted(true);


           }
    }
       // setCurrentQuestion(getNextQuestion);
        //Find within the tree which question has the Id of next question and deploy it.
        //setCurrentQuestionIndex(getCurrentQuestionIndex+1);
    }
    const onCategoryClickHandler =(e:any, id:number)=>{

                //Load Axios with questions from backend.
                const fetchQuestionList = async () => {
                    const questionList = await elementService.GetElementListByCategory(id) as [];
                    if (questionList) {
                    var treeData= getTreeData(questionList);
                    console.log(getTreeData(questionList));
                    setSurveyQuestions(treeData);
                   console.log( {
                    Id:treeData[treeRoot].id,
                    Name:treeData[treeRoot].name,
                    ParentId:treeData[treeRoot].parentId,
                    children:treeData[treeRoot].children
                    });
                    setNextQuestion({
                        Id:treeData[treeRoot].id,
                        Name:treeData[treeRoot].name,
                        ParentId:treeData[treeRoot].parentId,
                        children:treeData[treeRoot].children
                    });
                     
                    };
                  };
                fetchQuestionList();
                setRedirectQuestions(true);
                console.log(dogQuestions);
        }

        const SaveAnswerList = async () => {
            let answers:any=[]
            getAnswerList.map((answer:any)=>{
               // console.log({ParentId: getAnswerList.indexOf(answer), ElementId:answer});
                return answers.push({ParentId: getAnswerList.indexOf(answer), Element:answer.toString()}); 
            })
            console.log(answers);
            const response = await answerService.PostElements(answers) as any;
            if (response) {
               alert(response);
            }

          };

    return (
        <>

     {getIsSurveyCompleted?
            <SurveyCompleted/>
     :
     <div>
        {getRedirectQuestions && getNextQuestion
                ? 
                <div>
                    <Header>{getNextQuestion.Name}</Header>
                        <div className="flex justify-center mt-16">
                            <AnswerLayout answers={getNextQuestion.children} onClick={onAnswerClickHandler} onNextQuestionClickHandler={onNextQuestionClickHandler} onTypeTextReponseValue={onTypeTextValueHandler}/>
                        </div>
                </div>
            
                : 
                <div>
                <Header>Choose a survey to get started</Header>
                <div className="flex flex-row flex-wrap justify-center mt-16">
                    {categories && categories.map((element:any, i:any)=>
                    <div key={i} onClick={(e:any)=> onCategoryClickHandler(e, element.Id)}>
                        <PetsCard imgSrc={element.ImgSrc} imgAlt={element.ImgAlt} ></PetsCard>
                    </div>
                    )}
                </div>
        </div>
      }	
         </div>
     
     }
     	  
         </>
    );
};
