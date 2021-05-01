import React from 'react';
import { connect } from 'react-redux';
import {  bindActionCreators } from 'redux';
import * as action from '../action';


function Counter({ value, inc, dec, rnd}){
    return(
        <div className="container">
        <h1 className="my-3 text-center">Redux</h1>
        <div className="card" style={{width: '18rem', margin: '15px auto'}}>
          <div className="card-body">
            <h5 className="card-title text-center">Count</h5>
            <p className="card-text text-center" id="result">{value!==undefined ? value : 's0'}</p>
            <div className="d-flex justify-content-center my-3">
              <button className="btn btn-primary btn-lg mx-3" onClick={inc}>+</button>
              <button className="btn btn-primary btn-lg mx-3" onClick={dec}>-</button>
              <button className="btn btn-primary btn-lg mx-3" onClick={rnd}>RND</button>
            </div>
          </div>
      </div>
      </div>
    )
}

const mapStateProps = (state) => {
  return {
    value : state.count
  }
}

const mapDispatchAction = (dispatch) =>{
  const {inc, dec, rnd} = bindActionCreators(action, dispatch);
  return {
    inc, 
    dec, 
    rnd : ()=>{
      const payload = Math.floor(Math.random()*10)
      rnd(payload);
    }
  }
}

export default connect(mapStateProps, mapDispatchAction)(Counter);
