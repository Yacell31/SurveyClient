import React, { FC, useState, useEffect } from "react";
import { Header } from "../Header/Header";
import surveyCompletedIcon from "../../images/survey_completed.png";
import { Link } from "react-router-dom";
import { RefreshIcon } from "@heroicons/react/solid";


export interface IProps {
   
}


export const SurveyCompleted: FC<IProps> = (props: IProps) => {    
    return (
        <>

        <Header>Survey has been completed, thank you so much for your time and collaboration!</Header>
        <div>
            <img
            className="mx-auto h-13 w-40"
            src={surveyCompletedIcon}
            alt="SurveyCompleted"
            /> 
              <Link
               to="/"
                className="mx-auto group relative w-1/6 flex justify-center
                py-2 px-4 border border-transparent text-sm font-medium
                rounded-md text-white bg-amber-500 hover:bg-amber-700
                focus:outline-none focus:ring-2 focus:ring-offset-2
                focus:ring-amber-500"
               
              >

                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <RefreshIcon className="h-5 w-5 text-amber-300 group-hover:text-amber-400" aria-hidden="true" />
                </span>
                Reset Survey
              </Link>           
        </div>    
      </>
    );
};
