import React from 'react';
import '../style/NewTest.css';

const NewTest = () => {


    const languages = [
        {
            label: "Hebrew",
            value: "Hebrew",
            id: "1",
        },
        {
            label: "English",
            value: "English",
            id: "2",
        }
    ]
    const types = [
        {
            label: "Predefined - Same questions for all respondents",
            value: "Predefined ",
            id: "1",
        },
        {
            label: "Random",
            value: "Random",
            id: "2",
        },
    ]
    const certificate = [
        {
            label: "Certificate Tamplate",
            value: "Certificate Tamplate ",
            id: "1",
        },
        {
            label: "No Certificate Tamplate",
            value: "No Certificate Tamplate",
            id: "2",
        },
    ]
    return (
        <div>
            <h5 className='topic'>General Test Details</h5>
            <p className='pad'> field of study:  ""צריך לסדר""</p>
            <div className='padding'>
                <p> Language: <select  >{languages.map((option) => (<option value={option.value} key={option.value}>{option.label}</option>))}</select></p>
                <p> Test Type: <select>  {types.map((option) => (<option value={option.value} key={option.value}>{option.label}</option>))}</select></p>
                <p>Test Name: <input className='input' value={"Javascript for beginners"}></input> </p>
                <p>Passing Grade: <input></input> </p>
                <div>
                    Show correct answer after submission :   <input value={"Show"} type="checkbox" />
                    <span> {" Show"}</span>
                </div>
                <div>
                    <p> header: <input value={"Type something"}></input></p>
                    <p> Massage to show on success: <input value={"Type something"}></input></p>
                    <p> Massage to show on failure: <input value={"Type something"}></input></p>
                    <p> Certificate Tamplate: <select>  {certificate.map((option) => (<option value={option.value} key={option.value}>{option.label}</option>))}</select></p>
                    <p> From : <input></input></p>
                </div>
                <br />
                <div className='passing'>
                    <h5>Passing the test</h5>
                    <p>Massage Subject: <input></input></p>
                    <p>Massage Body: <input value={"Type something"}></input></p>
                </div>
                <br />
                <div className='Failling'>
                    <h5>Failling the test</h5>
                    <p>Massage Subject: <input></input></p>
                    <p>Massage Body: <input value={"Type something"}></input></p>
                </div>
            </div>

        </div>
    )
}

export default NewTest
