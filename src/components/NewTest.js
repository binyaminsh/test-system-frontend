import React, { useEffect, useState } from 'react';
import { getAllQuestions } from '../services/questionsService';
import { getAllTests } from '../services/testsService';
import classes from '../style/NewTest.module.css';
import { Link, useLocation } from 'react-router-dom';

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
    // const questions = [
    //     {
    //         content: "what is the weather today?",
    //         topicId: "630dd84c5116916b919c1201",
    //         type: "single",
    //         answers: [
    //             {
    //                 id: 1,
    //                 content: "cold",
    //                 isCorrect: false
    //             },
    //             {
    //                 id: 2,
    //                 content: "hot",
    //                 isCorrect: true
    //             },
    //             {
    //                 id: 3,
    //                 content: "chill",
    //                 isCorrect: false
    //             },
    //             {
    //                 id: 4,
    //                 content: "other",
    //                 isCorrect: false
    //             }
    //         ],
    //         answersLayout: "vertical",
    //         tags: [
    //             "weather"
    //         ]
    //     },
    //     {
    //         content: "what is the day today?",
    //         topicId: "630cc84c5116916b919c1201",
    //         type: "single",
    //         answers: [
    //             {
    //                 id: 1,
    //                 content: "monday",
    //                 isCorrect: false
    //             },
    //             {
    //                 id: 2,
    //                 content: "thusday",
    //                 isCorrect: true
    //             },
    //             {
    //                 id: 3,
    //                 content: "friday",
    //                 isCorrect: false
    //             },
    //             {
    //                 id: 4,
    //                 content: "other",
    //                 isCorrect: false
    //             }
    //         ],
    //         answersLayout: "vertical",
    //         tags: [
    //             "Days"
    //         ]
    //     },
    //     {
    //         content: "what is the month today?",
    //         topicId: "630cc84d5116916b919c1201",
    //         type: "single",
    //         answers: [
    //             {
    //                 id: 1,
    //                 content: "januar",
    //                 isCorrect: false
    //             },
    //             {
    //                 id: 2,
    //                 content: "july",
    //                 isCorrect: true
    //             },
    //             {
    //                 id: 3,
    //                 content: "june",
    //                 isCorrect: false
    //             },
    //             {
    //                 id: 4,
    //                 content: "other",
    //                 isCorrect: false
    //             }
    //         ],
    //         answersLayout: "vertical",
    //         tags: [
    //             "month"
    //         ]
    //     },
    // ]

    const location = useLocation();
    const test = location.state;
    console.log(test);

    const [language, setLanguage] = useState();

    const [selectedQuestion, setSelectedQuestion] = useState([]);

    const handleChangeCheckBox = (e, q) => {
        console.log(q);
        console.log(e.target.name);
        setSelectedQuestion(
            [...selectedQuestion, q]
        )
        console.log([...selectedQuestion, q]);
    };

    const handleChange = (e) => {

        setType({
            ...type, [e.target.name]: e.target.value
        })
    };

    const handleChangeLanguage = (e) => {
        setLanguage(e.target.value)
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
        type: "",
        questions: [],
    })


    const [question, setQuestion] = useState([]);

    const getQuestion = async () => {
        try {
            const data = await getAllQuestions("630dd84c5116916b919c1201");
            setQuestion(data);
            console.log(data);
        }
        catch (error) {
            console.log(error.massage);
        }
    }
    useEffect(() => {
        getQuestion();
        if (test) {
            setType(test);
            setLanguage(test.language)
        }
    }, [])

    return (
        <div>
            <h5 className="item"  >General Test Details</h5>
            <p className={classes.pad}> field of study:  ""צריך לסדר""</p>
            <div className='padding'>
                <p> Language: <select onChange={handleChangeLanguage} >{languages.map((option) => (<option value={option.value} key={option.value}>{option.label}</option>))}</select></p>
                <p> Test Type: <select name="type" onChange={handleChange}>{types.map((option) => (<option value={option.value} key={option.value}>{option.label}</option>))}</select></p>
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
                        <h6 className={classes.gray}>Currently showing {question.length} questions</h6>
                        <ul>
                            {question.map(q => (<li key={q._id}>content : {q.content} type : {q.type} <input type={"checkbox"} name="questions" onChange={(e) => handleChangeCheckBox(e, q.topicId)} /> </li>))}
                        </ul>
                    </div>
                </div>
                <div className='buttons'>
                    <p className='right'>
                        <button onClick={() => {
                            setType({
                                ...type, question: selectedQuestion
                            })
                            console.log(type)
                        }}>Show</button>:
                        <button onClick={() => console.log(type)}><Link className='black' to={"/NewTests"}>Create A Test</Link></button>
                    </p>
                    <p className='left'> <button className={classes.gray}><Link className='black' to={"/ManageTests"}>Manage Tests</Link></button></p>
                </div>
            </div>
        </div>
    )
}

export default NewTest
