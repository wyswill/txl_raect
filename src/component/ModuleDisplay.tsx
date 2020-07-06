import React from "react";
import '../styles/ModuleDisplay.less'

type TProps = {
  headICon: string,
  moduleName: string,
  children: any
}
export default function ModuleDisplay(props: TProps) {
  return <div className='ModuleDisplay'>
    <div className="title">
      <img src={props.headICon} alt='headIcon'/>
      <h3>{props.moduleName}</h3>
    </div>
    <div className="content">{props.children}</div>
  </div>
}