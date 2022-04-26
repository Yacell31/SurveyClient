import React, { FC, useState, useEffect } from "react";


export interface IProps {
   imgSrc:string,
   imgAlt: string
}


export const PetsCard: FC<IProps> = (props: IProps) => {    

 
    return (
        <div
        className="bg-white dark:bg-gray-800 shadow-lg dark:shadow-none rounded-2xl h-80 w-72 m-10 hover:shadow-xl dark:hover:shadow-dark"
       >
        <div className="flex justify-center pt-12">
            <img
                src={props.imgSrc}
                alt={props.imgAlt}
                width="180"
                height="180"
            />
        </div>
        <h2 className="text-gray-800 dark:text-gray-300 font-sans font-medium text-xl pt-8 pl-8">
           {props.imgAlt}
        </h2>
    </div>
    );
};
