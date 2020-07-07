import React from "react";
import '../styles/BackBar.less'
import {History} from "history";

type TProps = {
  title: string,
  history: History
}
export default function BackBar(props: TProps) {
  return (
      <div className="BackBar">
        <span className='lr' onClick={() => {
          props.history.goBack();
        }}>back</span>
        <span className='center'>{props.title}</span>
        <span className='lr'>
        </span>
      </div>
  )
}