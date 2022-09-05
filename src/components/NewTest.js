import React, { useState } from 'react';
import classes from '../style/NewTest.module.css';

const NewTest = () => {


    const languages = [
        {
            label: "Not Selected",
            value: "Not Selected",
            id: 0,
        },
        {
            label: "Hebrew",
            value: "Hebrew",
            id: 1,
        },
        {
            label: "English",
            value: "English",
            id: 2,
        }
    ]
    const types = [
        {
            label: "Not Selected",
            value: "Not Selected",
            id: 0,
        },
        {
            label: "Predefined - Same questions for all respondents",
            value: "Predefined ",
            id: 1,
        },
        {
            label: "Random",
            value: "Random",
            id: 2,
        },
    ]

    const handleChange = (e) => {
        setType({
            ...type, [e.target.name]: e.target.value
        })
    };

    const [type, setType] = useState({
        testName: "",
        passingGrade: 0,
        header: "",
        massageSucsess: "",
        massageFailure: "",
        from: "",
        massageSubjectPassing: "",
        massageBodyPassing: "",
        massageSubjectFailling: "",
        massageBodyFailling: "",
        filter: "",
        language: "",
        testType: "",

    })


    return (
        <div>
            <h5 className="item"  >General Test Details</h5>
            <p className={classes.pad}> field of study:  ""צריך לסדר""</p>
            <div className='padding'>
                <p> Language: <select name="language" onChange={handleChange} >{languages.map((option) => (<option value={option.value} key={option.value}>{option.label}</option>))}</select></p>
                <p> Test Type: <select name="testType" onChange={handleChange}>{types.map((option) => (<option value={option.value} key={option.value}>{option.label}</option>))}</select></p>
                <p>Test Name: <input className='input' value={type.testName} name="testName" onChange={(e) => handleChange(e)}></input> </p>
                <p>Passing Grade: <input className='input' value={type.passingGrade} name="passingGrade" onChange={(e) => handleChange(e)}></input> </p>
                <div>
                    Show correct answer after submission :   <input value={"Show"} type="checkbox" />
                    <span> {" Show"}</span>
                </div>
                <div>
                    <p> header: <input className='input' value={type.header} name="header" onChange={(e) => handleChange(e)} /></p>
                    <p> Massage to show on success: <input className='input' value={type.massageSucsess} name="massageSucsess" onChange={(e) => handleChange(e)} /></p>
                    <p> Massage to show on failure: <input className='input' value={type.massageFailure} name="massageFailure" onChange={(e) => handleChange(e)} /></p>
                </div>
                <br />
                <div className='Email'>
                    <h5 className='item' >Email Delivary Upon Test Completion  </h5>
                    <p> From : <input className='input' value={type.from} name="from" onChange={(e) => handleChange(e)} /></p>
                </div>
                <div className='passing'>
                    <h5 className={classes.gray}>Passing the test</h5>
                    <p>Massage Subject: <input className='input' value={type.massageSubjectPassing} name="massageSubjectPassing" onChange={(e) => handleChange(e)} /></p>
                    <p>Massage Body: <input className='input' value={type.massageBodyPassing} name="massageBodyPassing" onChange={(e) => handleChange(e)} /></p>
                </div>
                <br />
                <div className='Failling'>
                    <h5 className={classes.gray}>Failling the test</h5>
                    <p>Massage Subject: <input className='input' value={type.massageSubjectFailling} name="massageSubjectFailling" onChange={(e) => handleChange(e)} /></p>
                    <p>Massage Body: <input className='input' value={type.massageBodyFailling} name="massageBodyFailling" onChange={(e) => handleChange(e)} /></p>
                </div>
                <div className='question'>
                    <h5 className='item' >Question  </h5>
                    <h6>Note: This test is set to be 'Predefined' test,which means:</h6>
                    <ul>
                        <li>All the questions that you select here will be include</li>
                    </ul>
                    <p> Filter by tags or content: <input className='input' value={type.filter} name="filter" onChange={(e) => handleChange(e)} /> <button>select</button> </p>
                    <div>
                        <h6 className={classes.gray}>Currently showing "" questions</h6>
                    </div>
                </div>
                <div className='buttons'>
                    <p className='right'>
                        <button onClick={() => console.log(type)}>Show</button>:
                        <button onClick={() => console.log(type)}>Create</button>
                    </p>
                    <p className='left'> <button onClick={() => console.log(type)}>Back</button></p>
                </div>

            </div>
        </div>
    )
}

export default NewTest
