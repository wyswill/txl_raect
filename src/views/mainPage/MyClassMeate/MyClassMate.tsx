import React from "react";
import './MyClassMate.less'

type TState = {}
type TProps = {}
export default class MyClassMate extends React.Component<TProps, TState> {
  public readonly state: Readonly<TState> = {}

  render() {
    return <div className='MyClassMate'>MyClassMate</div>
  }
}