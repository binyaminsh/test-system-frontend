import React from 'react';
import { Link } from "react-router-dom";

const Test = (props) => {

    const date = new Date(props.test.updatedAt).toLocaleDateString();
    console.log(props.test);

    return (
        <>
            <tr>
                <td>
                    {props.test.topic}
                </td>
                <td>
                    {props.test.name}
                </td>
                <td>
                    {props.test.questions.length}
                </td>
                <td>
                    {date}
                </td>
                <td>
                    {props.test.type}
                </td>
                <td>
                    <button >
                        <Link style={{ color: 'black' }} state={props.test} to={"/newTest"}>Edit</Link>
                    </button>
                    Active
                </td>
            </tr>
        </>
    )
}

export default Test