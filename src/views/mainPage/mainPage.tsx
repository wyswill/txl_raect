import React from "react";
import './mainPage.less';
import {inject, observer} from 'mobx-react'
import banner2 from '../../assets/images/bg_banner.png'
import headIcon1 from '../../assets/images/home/ic_collection_press.png'
import headIcon2 from '../../assets/images/icons/ic_home_add_newfriend.png'//ic_home_notic
import headIcon3 from '../../assets/images/home/ic_home_notic.png'
import headIcon4 from '../../assets/images/home/icon_Navigationbar_demand.png'
import ModuleDisplay from "../../component/ModuleDisplay";
import UpAndDown from "../../component/UpAndDown";

type TState = {}
@inject('mainPageStore')
@observer
export default class MainPage extends React.Component<any, TState> {
  public readonly state: Readonly<TState> = {}

  render() {
    return (<div className='mainPage'>
          <img src={banner2} alt='banner'/>
          <ModuleDisplay headICon={headIcon1} moduleName='今日之星'>
            {[1, 2, 3, 4, 5].map((ele, index) =>
                <UpAndDown key={index}>
                  <img src={headIcon1} alt='hea'/>
                  <div className="down">index</div>
                </UpAndDown>)
            }
          </ModuleDisplay>
          <ModuleDisplay headICon={headIcon2} moduleName='搜索朋友'>
            <div>asdfasd</div>
          </ModuleDisplay>
          <ModuleDisplay headICon={headIcon3} moduleName='学院通知'>
            <div>asdfasd</div>
          </ModuleDisplay>
          <ModuleDisplay headICon={headIcon4} moduleName='帖子广场' extClass='posetSquery'>
            {
              new Array(30).fill(0).map((ele, index) => <div key={index}>asdfasd</div>)
            }
          </ModuleDisplay>
        </div>
    );
  }
}
