import React from 'react'
import Object from './Object'

export default function PropsEg2() {
    let obj={name:'pallab', roll:45};
    let arr=['ram',4];
    function add(a,b){
        return a+b;
    }
  return (
    <>
      <Object msgarr={arr} msgobj={obj} msgfunc={add}/>
    </>
  )
}
