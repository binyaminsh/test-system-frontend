import React from 'react';
import { Link } from "react-router-dom";

const Test = (props) => {
    return (
        <>
            <tr>
                <td>
                    {props.test.ID}
                </td>
                <td>
                    <button >
                        <Link style={{ color: 'black' }} to={props.test.Link}>Copy</Link>
                    </button>
                </td>
                <td>
                    {props.test.TestName}
                </td>
                <td>
                    {props.test.NumOfQuestion}
                </td>
                <td>
                    {props.test.LastUpdate}
                </td>
                <td>
                    {props.test.Type}
                </td>
                <td>
                    <button >
                        <Link style={{ color: 'black' }} to={"/newTest"}>Edit</Link>
                    </button>
                    Active
                </td>
            </tr>
        </>
    )
}

export default Test