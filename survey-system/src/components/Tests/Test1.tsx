import React, { FC, useState, useEffect } from "react";
import { Link } from "react-router-dom";

export interface IProps {
   questions:any;
}


export const Test1: FC<IProps> = (props: IProps) => {    

    
  
    useEffect(() => {
        console.log(props.questions);
       
          
        }, [])
      //  console.log(props.questions);
         

      const renderMenu = (item:any) => {
        return item.map((element:any, i:number) => (
            <div className="ml-10" key={i}>
                {element.Name +" "}
               <ul className="ml-10"><li>{element.Answers}</li></ul>
                {element.children && renderMenu(element.children)}
            </div>
        ))
      }

      return <div>{renderMenu(props.questions)}</div>;


};
