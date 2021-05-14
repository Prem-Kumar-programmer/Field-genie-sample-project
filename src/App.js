import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState, useEffect} from 'react'
import { AddStudent } from './AddStudent';
import { AddCompany } from "./AddCompany";
import {Companies} from './Companies';
import {Students} from './Students';

export function App() {

    const [studentsList, setStudentList] = useState([]);
    const [companiesList, setCompaniesList] = useState([]);

    useEffect(async() => {
       var result = await fetch("http://localhost:4000/students/");
       var list = await result.json();
        setStudentList(list);

        var companieResult = await fetch("http://localhost:4000/company/");
        var companies = await companieResult.json();
        setCompaniesList(companies);
    },[]);

    
    function addStudentInApp(student) {
       console.log("student passed to app.js:", student);
        //setStudentList([...studentsList, student]);
    
       
        // var request = new XMLHttpRequest();
        // request.open('POST', 'http://localhost:4000/newstudent/', true);
        // request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
        // request.send(student);



    }
    function addCompanyInApp(companies) {
        console.log("Company passed to app.js:", companies);
        setCompaniesList([...companiesList, companies]);
    }

    return (
        <div>
           <div className="col-sm-12">
            <div className="col-sm-6">
            <p>Companies:</p>
            <table><tr><th>Name of the Company</th><th>Address</th><th>Number of Employees</th></tr></table>
            <Companies students={studentsList} companies={companiesList} />
            </div>
            <div className="col-sm-6">
            <p>Students:</p>
            <table><tr><th>Name of the Student</th><th>Address</th></tr></table>
            <Students students={studentsList} />
            </div>
            <br></br>
           <pre> <br></br>  </pre>
           <hr></hr>
           <br></br>
           </div>
           
    <div class="col-sm-12">
        <hr></hr>
            <div className="col-sm-6">
            <p>Add Students:</p>
            <AddStudent onNewStudent={addStudentInApp} />
            </div>
            <div className="col-sm-6">
            <p>Add Company:</p>
            <AddCompany onNewCompany={addCompanyInApp} />
            </div>
    </div>
        </div>
    );
}