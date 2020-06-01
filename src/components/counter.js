import React from 'react';
import * as s from './counter.module.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions';



const Counter = ({ counter, inc, dec, res }) => {
    return (
        <div className={s.wrapper}>
            <div className={s.counter_block}>
                <h1 className={s.counter_number} >{counter}</h1>
            </div>
            <div className={s.btn_block}>
                <div className={s.btn_row}>
                    <span onClick={inc} className={`${s.btn} ${s.inc}`}> </span>
                    <span onClick={dec}  className={`${s.btn} ${s.dec}`}> </span>
                    <span  onClick={res} className={`${s.btn} ${s.res}`}> </span>
                </div>
                {/* <div className={s.btn_row}>
                    <span className={`${s.btn} ${s.dwl}`}> </span>
                    <span className={`${s.btn} ${s.upl}`}> </span>
                </div> */}
            </div>
        </div>
    )

}


const mStP = (state) => {
    return {
        counter: state,
    }
}

const mDtP = (dispatch) => {
    return bindActionCreators(actions, dispatch)
}

export default connect(mStP, mDtP)(Counter);