import React, { useState } from 'react';
import { connect } from 'react-redux';
import {  bindActionCreators } from 'redux';
import * as action from '../action';

function Input(){

    const [nameForm, setNameForm] = useState('Peter');


   
    return(
        <div className="my-3 p-3 border rounded-3" style={{width: '28rem', margin: '15px auto'}}>
            <label htmlFor="formGroupExampleInput" className="form-label">Enter your name </label>
            <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Your name" value={nameForm} onChange={(e)=>setNameForm(e.target.value)} />
            <button className="btn btn-primary btn-lg my-3" onClick={()=>{}}>Enter</button>
        </div>
    )
}

export default Input