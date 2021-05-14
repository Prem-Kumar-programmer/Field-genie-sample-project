import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useRef} from 'react';

export function AddCompany({onNewCompany}) {
    const comnameRef = useRef();
    const comaddressRef = useRef();
    

    function addCompany() {
        var newCompany = {};
        newCompany.name = comnameRef.current.value;
        newCompany.address = comaddressRef.current.value;
        
        console.log("value entered in name box is", newCompany);
        onNewCompany(newCompany);
    }
    return (
        <form>
            <table>
                <tr>
                    <td>
                    <p>Company Name :</p>
                    </td>
                    <td>
                        <input id="name" ref={comnameRef} type="text" />
                    </td>
                </tr>
                <tr>
                    <td><p>Company address :</p></td>
                    <td><input id="address" ref={comaddressRef} type="text" /></td>
                </tr>
                
                
            </table>
           
                    <center><button type="button" class="btn btn-primary" onClick={addCompany}>Add Company
                    </button></center>
               
        </form>
    )
}
