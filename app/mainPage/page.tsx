import ToTop from "@/component/toTop";
import { comicksInfo } from "@/constants/comicsInfo";
import React from "react";

export default function Page() {
  return (
    <div className="mainPageBody main-container flex flex-wrap items-center justify-center gap-[10px] ">
      {comicksInfo.map((item) => (
        <div
          style={{
            backgroundImage: `url(${item.img})`,
            backgroundRepeat: "no-repeat",
            backgroundSize:'cover'
          }}
          key={item.id}
          className="card relative max-w-[400px] w-full max-h-[600px] h-full "
        >
          <p className="text-white" >{item.comicName}</p>
        </div>
      ))}
      <ToTop />
    </div>
  );
}
