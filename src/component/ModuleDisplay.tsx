import React from "react";
import '../styles/ModuleDisplay.less'

/**
 * @param headICon 模块图片
 * @param moduleName 模块名称
 * @param children 插槽
 * @param extClass  附加class
 */
type TProps = {
  headICon: string,
  moduleName: string,
  children: any
  extClass?: string
}
/**
 * 基本的模块展示组件
 * @param props TProps
 */
export default function ModuleDisplay(props: TProps) {
  return <div className={`ModuleDisplay ${props.extClass ? props.extClass : ''}`}>
    <div className="title">
      <img src={props.headICon} alt='headIcon'/>
      <h3>{props.moduleName}</h3>
    </div>
    <div className="content">{props.children}</div>
  </div>
}