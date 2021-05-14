import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


export function StudentDisplay({name, address}) {
    

    return (
        <div>
            
            <table border={1} className="tab">
            
                <tr>
                    <td>
                        {name}
                    </td>
                    <td>
                        {address}
                    </td>
                </tr>
            </table>
        </div>
    );
}


