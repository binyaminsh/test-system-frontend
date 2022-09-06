import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../style/ManageTests.css';
import TestList from './TestList';
import SerchBar from "../components/SearchBar"
import { getAllTests } from '../services/testsService';

const ManageTests = () => {

  const navigate = useNavigate();

  // const tests = [
  //   {
  //     topic: "630dd84d5116916b919c1201",
  //     type: "predefined",
  //     name: "js",
  //     passingGrade: 60,
  //     header: "header",
  //     language: "English",
  //     passMessage: "pass",
  //     failMessage: "fail",
  //     showResult: true,
  //     questions: ["630f60093dba58b91e523213"],
  //     delivery: {
  //       "from": "me", "cc": "",
  //       bcc: "", "passMessage": "pass", "failMessage": "fail"
  //     }
  //   },
  //   {
  //     topic: "630dd84d5116916b919c1201",
  //     type: "predefined",
  //     name: "js",
  //     passingGrade: 60,
  //     header: "header",
  //     language: "English",
  //     passMessage: "pass",
  //     failMessage: "fail",
  //     showResult: true,
  //     questions: ["630f60093dba58b91e523213"],
  //     delivery: {
  //       "from": "me", "cc": "",
  //       bcc: "", "passMessage": "pass", "failMessage": "fail"
  //     }
  //   },
  //   {
  //     topic: "630dd84d5116916b919c1201",
  //     type: "predefined",
  //     name: "js",
  //     passingGrade: 60,
  //     header: "header",
  //     language: "English",
  //     passMessage: "pass",
  //     failMessage: "fail",
  //     showResult: true,
  //     questions: ["630f60093dba58b91e523213"],
  //     delivery: {
  //       "from": "me", "cc": "",
  //       bcc: "", "passMessage": "pass", "failMessage": "fail"
  //     }
  //   },
  // ]
  const [tests, setTests] = useState([]);
  const [serchsResults, setSerchResults] = useState(tests);


  const getTests = async () => {
    try {
      const data = await getAllTests("630dd84d5116916b919c1201");
      setTests(data);
      console.log(data);
    }
    catch (error) {
      console.log(error.massage);
    }
  }

  useEffect(() => {
    getTests();

  }, [])


  return (
    <>
      <div>
        <h3>Available Test For Development</h3>
        <p>Filter names by keywords: <SerchBar data={tests} setSerchResults={setSerchResults} /> </p>
      </div>

      <p className='p'>showing "*" of "*" available Test</p>
      <div className='center'>
        {tests.length > 0 ? <TestList tests={tests} /> : "no test avilable"}
      </div>
      <button className="btn : left" > <Link to={"/MainMenu"}>Back</Link> </button>
      <button className='btn : right'> <Link to={"/NewTest"}>Create a Test</Link></button>
    </>
  )
}

export default ManageTests