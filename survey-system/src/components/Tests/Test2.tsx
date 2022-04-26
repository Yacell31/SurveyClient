import React, { FC, useState, useEffect } from "react";
import { Link } from "react-router-dom";

export interface IProps {
   
}


export const Test2: FC<IProps> = (props: IProps) => {    
    return (
        <h1 className="text-3xl font-sans mt-32 md:mt-8 lg:mt-32 font-bold text-gray-800 dark:text-gray-300 text-center">
            This is test 2
        </h1>
    );
};
