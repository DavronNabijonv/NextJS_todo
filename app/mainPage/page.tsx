import Card from "@/component/card";
import { comicksInfo } from "@/constants/comicsInfo";
import React from "react";

export default function Page() {
  return (
    <div className="mainPageBody w-full main-container flex flex-wrap items-center justify-center gap-[10px] ">
      {comicksInfo.map((item) => (
        <div key={item.id} className="max-w-[340px] w-full h-[450px]">
          <Card
            img={item.img.src}
            page={item.page}
            allPage={item.allPage}
            comicName={item.comicName}
          />
        </div>
      ))}
    </div>
  );
}
