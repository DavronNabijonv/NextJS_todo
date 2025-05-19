import React from 'react'

export default function User_Page({params}:{params:{id:string}}) {
    const {id} = params;
  return (
    <div>User_Page {id}</div>
  )
}
