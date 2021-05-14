import React from 'react'
import {Display} from './Display';
import "./index.css";

export function Companies({students , companies}) {
    
    
    let companiesList = companies;
let studentsList = students;

    return (
        
       
            <div>{
                companiesList.map((company) =>{
                    let numberOfEmployees = 0;
                    for(let i=0;i<studentsList.length;i++)
                    if(company.name=== studentsList[i].company) numberOfEmployees += 1;
                    
                    return(<Display name={company.name} 
                        address={company.address} 
                        numberOfEmployees={numberOfEmployees} />
                    );
                
                  })
                }
                    </div>                     
         );
        
}
        
   
