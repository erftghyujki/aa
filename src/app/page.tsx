"use client"
import { Button } from "@/components/ui/button";
import Image from "next/image";

import hmk from "../../public/static/hmkdefault.jpg"
import { useState } from "react";




export default function Home() {
  const listImages = [ 
  {
    src:"/static/hmkdefault.jpg"
  },
   {
    src: "/static/hmk.jpeg"
  }, 
  {
    src: "/static/hmkboevoi.jpg"
  },
  {
    src: "/static/hmkdengi.png"
  },
  {
    src: "/static/hmkzhirnich.jpg"
  },
  {
    src: "/static/hmkzloi.jpg"
  }
];
const [a, seta]=useState(0)
function asd() {seta(a+1)}
const getImage=() =>  {
if (a<50){return listImages[0].src}
else if (a<100){return listImages[1].src}
else if (a<250){return listImages[2].src}
else if (a<500){return listImages[3].src}
else if (a<1000){return listImages[4].src}  
else{return listImages[3].src} 
}
const winlose=() => {if (a>1000){return"победа"} else {return a}}

  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button className="square" onClick={asd}>hamster combat

      </Button>
      
      <Image alt="" src={getImage()} onClick={asd} width={250} height={250}/>
      
      {winlose()}


    </main>
  );


 
}
