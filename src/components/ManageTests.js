import React from 'react';
import '../style/ManageTests.css';

const ManageTests = () => {
  return (
    <>
      <div>
        <h3>Available Test For Development</h3>
        <p>Filter names by keywords: <input value={"Enter a list of keywords separated by commas"}></input> <a className='pSide'> showing "*" of "*" </a> </p>
      </div>
      <div class="grid-container">
        <div className="item1 : item " >ID</div>
        <div className="item2 : item ">Link</div>
        <div className="item3 : item ">TestName</div>
        <div className="item4 : item ">Num Of Questions</div>
        <div className="item5 : item ">Last Updated</div>
        <div className="item6 : item ">Type</div>
        <div className="item7 : item ">Version</div>
        <div className="item8 : item "></div>
        <div className="item1 : itembg">5</div>
        <div className="item2 : itembg"><button className="btn"> Copy</button></div>
        <div className="item3 : itembg">Javascrips basics</div>
        <div className="item4 : itembg">1</div>
        <div className="item5 : itembg">6/12/2018</div>
        <div className="item6 : itembg">Predefined</div>
        <div className="item7 : itembg">1</div>
        <div className="item8 : itembg"><button className="btn"> Edit</button> <button className="btn"> Duplicate</button> <a className='active'>Active</a></div>
        <div className="item1 : itembg">6</div>
        <div className="item2 : itembg"><button className="btn"> Copy</button></div>
        <div className="item3 : itembg">מבחן הערכה - DOM and Javascript</div>
        <div className="item4 : itembg">8 / 9</div>
        <div className="item5 : itembg">10/12/2018</div>
        <div className="item6 : itembg">Random</div>
        <div className="item7 : itembg">1</div>
        <div className="item8 : itembg"><button className="btn"> Edit</button> <button className="btn"> Duplicate</button> <a className='active'>Active</a></div>
        <div className="item1 : itembg">7</div>
        <div className="item2 : itembg"><button className="btn"> Copy</button></div>
        <div className="item3 : itembg">Java for beginners</div>
        <div className="item4 : itembg">15</div>
        <div className="item5 : itembg">21/1/2019</div>
        <div className="item6 : itembg">Predefined</div>
        <div className="item7 : itembg">1</div>
        <div className="item8 : itembg"><button className="btn"> Edit</button> <button className="btn"> Duplicate</button> <a className='active'>Active</a></div>
      </div>
      <p className='p'>showing "*" of "*" available Test</p>
      <button className="btn : left"> Back </button> <button className='btn : right'> Create a Test</button>
    </>
  )
}

export default ManageTests