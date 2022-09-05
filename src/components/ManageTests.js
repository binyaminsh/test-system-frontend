import React from 'react';
import { Link } from 'react-router-dom';
import '../style/ManageTests.css';
import TestList from './TestList';

const ManageTests = () => {

  const tests = [
    {
      ID: "5",
      Link: "/https",
      TestName: "Javascript basics",
      NumOfQuestion: 1,
      LastUpdate: "6/12/2018",
      Type: "Predefines",
    },
    {
      ID: "6",
      Link: "/https",
      TestName: "Javascript for begninners",
      NumOfQuestion: 8,
      LastUpdate: "10/12/2018",
      Type: "Predefines",
    },
    {
      ID: "7",
      Link: "/https",
      TestName: "מבחן הערכה - DOM and javascript",
      NumOfQuestion: 15,
      LastUpdate: "21/1/2019",
      Type: "Predefines",
    },
  ]


  return (
    <>
      <div>
        <h3>Available Test For Development</h3>
        <p>Filter names by keywords: <input value={"Enter a list of keywords separated by commas"}></input> <a className='pSide'> showing "*" of "*" </a> </p>
      </div>

      <p className='p'>showing "*" of "*" available Test</p>
      <div className='center'>
        {tests.length > 0 ? <TestList tests={tests} /> : "no test avilable"}
      </div>
      <button className="btn : left" > <Link to={""}>Back</Link> </button>
      <button className='btn : right'> <Link to={"/NewTest"}>Create a Test</Link></button>
    </>
  )
}

export default ManageTests