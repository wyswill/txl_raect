import React from "react";
import './Mypeer.less'

type TState = {}
type TProps = {}
export default class Mypeet extends React.Component<TProps, TState> {
  public readonly state: Readonly<TState> = {}

  render() {
    return <div className='Mypeet'>Mypeet</div>
  }
}