import React from "react";
import '../styles/UpAndDown.less'

type TProps = {
  children: object[]
}
export default function UpAndDown(props: TProps) {
  const {children} = props
  const _style = {
    color: "red",
    fontsize: "20px"
  };
  if (children.length < 2 || children.length > 2) return <div style={_style}>必须传入两个元素 </div>
  return (
      <div className='UpAndDown'>
        {children}
      </div>
  )
}