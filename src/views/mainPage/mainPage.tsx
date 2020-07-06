import React from "react";
import './mainPage.less';
import {inject, observer} from 'mobx-react'
import banner2 from '../../assets/images/bg_banner.png'
import ic_collection_press from '../../assets/images/home/ic_collection_press.png'
import ModuleDisplay from "../../component/ModuleDisplay";

type TState = {}
@inject('mainPageStore')
@observer
export default class MainPage extends React.Component<any, TState> {
  public readonly state: Readonly<TState> = {}

  render() {
    return (<div className='mainPage'>
      <img src={banner2} alt='banner'/>
      <ModuleDisplay headICon={ic_collection_press} moduleName='今日之星'>
        <div>asdfasd</div>
      </ModuleDisplay>
      <ModuleDisplay headICon={ic_collection_press} moduleName='今日之星'>
        <div>asdfasd</div>
      </ModuleDisplay>
      <ModuleDisplay headICon={ic_collection_press} moduleName='今日之星'>
        <div>asdfasd</div>
      </ModuleDisplay>

    </div>);
  }
}
