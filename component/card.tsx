import React from 'react'

interface GetInfo {
    img:string,
    page?:number,
    allPage?:number | null,
    comicName:string
}

export default function Card({img,page,allPage,comicName}:GetInfo) {
  return (
    <div
          style={{
            backgroundImage: `url(${img})`,
            backgroundRepeat: "no-repeat",
            backgroundSize:'cover',
            backgroundPosition:'center'
          }}
          className="card relative h-full flex flex-col items-start justify-between "
        >
          {page&&(<p className="text-[18px] bg-[#000000bf] px-[10px] py-[5px] text-white">{page}/{allPage ?? "?"}</p>)}
          <p className="text-white text-center w-full bg-[#000000bf] p-[10px] text-[18px] ">{comicName}</p>
        </div>
  )
}
