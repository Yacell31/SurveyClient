import React, { FC, useState, useEffect } from "react";
import { AnswerOption } from "./AnswerOption";
import { ArrowCircleRightIcon } from "@heroicons/react/solid";

export interface IProps {
   answers:any;
   onClick:any;
   onNextQuestionClickHandler:any;
   onTypeTextReponseValue:any;
}


export const AnswerLayout: FC<IProps> = (props: IProps) => {    
     
    useEffect(() => {
        console.log(props.answers);
       
          
        }, [])

    return (
        <div className="bg-gray-50 dark:bg-gray-800 shadow-lg dark:shadow-dark rounded-2xl min-w-80 w-148 items-end
        ">
            <div className="pt-6 pb-2">
                 {props.answers&&  props.answers.map((answer:any) => 
                    <AnswerOption
                        key={answer.id}
                        answer={answer}
                        onClick={props.onClick}
                        onTypeTextReponseValue={(e:any, elementId:number)=> props.onTypeTextReponseValue(e, elementId)}
                    />
                )}
            </div>
            <input
                type="button"
                name="nextQuestion"
                value="Next Question"
                className="group relative w-1/2 place-self-end 
                py-2 px-4 mb-4 border border-transparent text-sm font-medium
                rounded-md text-white bg-amber-600 hover:bg-amber-700
                focus:outline-none focus:ring-2 focus:ring-offset-2
                focus:ring-amber-500" 
                onClick={props.onNextQuestionClickHandler}
                >              
                </input>
            </div>
    );
};
