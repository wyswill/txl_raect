import React from "react";
import style from "../styles/ModuleDisplay.module.less";

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
  extClass?: string,
  extTtileClass?: string,
  extContentClass?: string
}
/**
 * 基本的模块展示组件
 * @param props TProps
 */
export default function ModuleDisplay(props: TProps) {
  return (
    <div className={`${style.ModuleDisplay} ${props.extClass}`}>
      <div className={`${style.title} ${props.extTtileClass}`}>
        <img src={props.headICon} alt='headIcon'/>
        <h3>{props.moduleName}</h3>
      </div>
      <div className={`${style.content} ${props.extContentClass}`}>{props.children}</div>
    </div>
  );
}