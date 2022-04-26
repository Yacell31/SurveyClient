import React, { FC, useState, useEffect } from "react";


export interface IProps {
   onClick:any;
   answer: any;
   onTypeTextReponseValue: any;
}


export const AnswerOption: FC<IProps> = (props: IProps) => {    

    const [getTextResponse, setTextResponse] = useState<string>();
    return (
      
            <div
                className="bg-gray-100 dark:bg-gray-900 mx-6 h-16 w-auto mb-4 rounded-md flex items-center"
               
            > 
            { props.answer.type=="option"?(
                <div>
                 <input
                    type="radio"
                    name="answer"
                    value={props.answer}
                    className="ml-5 dark:bg-gray-800"
                    onChange= {() => props.onClick(props.answer)}
                />
                <label className="text-gray-700 dark:text-gray-400 text-lg ml-4">
                        {props.answer.name}
                    </label>
                </div>
            ):
            <div>
             <label className="text-gray-700 dark:text-gray-400 text-lg ml-4">
                    {props.answer.name}
            </label>
                <input
                type="text"
                onChange={(e:any)=> props.onTypeTextReponseValue(e, props.answer.id)}
                className="ml-5 dark:bg-gray-800 text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded"
                />
            </div>
            }
               
                
            </div>
        
    );
};
