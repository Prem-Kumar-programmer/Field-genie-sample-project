import React from 'react';
import {useRef} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


export function AddStudent({onNewStudent}) {
    const nameRef = useRef();
    const addressRef = useRef();
    const companyRef = useRef();

//  var newStudent = {
//     "name" : nameRef,
//     "address" : addressRef,
//     "company" : companyRef}



    



    function addStudent() {
        

       


         var newStudent = {};
         newStudent.name = nameRef.current.value;
         newStudent.address = addressRef.current.value;
         newStudent.company = companyRef.current.value;
         console.log("value entered in name box is", newStudent);
        //onNewStudent(newStudent);


    //     fetch("http://localhost:4000/students/",{
    //     method: 'PUT',
    //     headers: {
    //         'Accept' : 'application/json',
    //         'Content-Type' : 'application/json'
    //     },
    //     body:JSON.stringify(newStudent)

    // })

    
    var request = new XMLHttpRequest();
    request.open('POST', 'http://localhost:4000/newstudent/', true);
    request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
    request.send(newStudent);

        
        
    }
    return (
        <form>
            <table>
                
                <tr>
                    <td>
                    <p>student Name :</p>
                    </td>
                    <td>
                        <input id="name" ref={nameRef} type="text" />
                    </td>
                </tr>
                <tr>
                    <td><p>address :</p></td>
                    <td><input id="address" ref={addressRef} type="text" /></td>
                </tr>
                <tr>
                    <td><p>company :</p></td>
                    <td><input id="company" ref={companyRef} type="text" /></td>
                </tr>
                
            </table>
            <center>
            <button type="button" class="btn btn-primary" onClick={addStudent}>Add Student</button>
            </center>
        </form>
    )
}
