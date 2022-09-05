import React from 'react';
import Test from './Test';

const TestList = (props) => {

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th className='item'>ID</th>
                        <th className='item'>Link</th>
                        <th className='item'>Test Name</th>
                        <th className='item'>Num Of Question</th>
                        <th className='item'>Last Update</th>
                        <th className='item'>Type</th>
                        <th className='item'></th>
                    </tr>
                </thead>
                <tbody>
                    {props.tests.map(test => {
                        return <Test key={test.ID} test={test} />
                    })}
                </tbody>
            </table>
        </>
    )
}

export default TestList