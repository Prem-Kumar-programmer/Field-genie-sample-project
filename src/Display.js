import React from 'react';
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';



export function Display({name, address, numberOfEmployees}) {
    

    return (
        <div>
            <table table border={1} className="tab">
               
                <tr>
                    <td>
                        {name}
                    </td>
                    <td>
                        {address}
                    </td>
                    <td>
                        {numberOfEmployees}
                    </td>
                </tr>
            </table>
        </div>
    );
}


