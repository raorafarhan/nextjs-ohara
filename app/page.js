"use client";
import Slider from "@/components/Slider";
import Image from "next/image";
import card1 from "../assets/img/verify-page.svg"
import card2 from '../assets/img/card2.svg'
import card3 from '../assets/img/card3.svg'


export default function Home() {
  return (
    <main>
      <div className="bg-gray-300 mt-[2px] ">
        <Slider/>
      </div>
      <div className="container mx-auto mt-14">
        <h1 className="text-center font-bold text-3xl">Why Should Ohara Arch</h1>
        <div className="flex gap-32 justify-center mt-14">
          <div className="h-64 w-56 rounded-xl shadow-xl my-auto border">
            <Image src={card1} className="flex justify-center h-32 mt-4 mb-4"></Image>
            <h3 className="-mt-2 text-center font-bold">Zero To Hero</h3>
            <p className="text-xs px-8 mt-1 text-center">Daily assignments, quizzes and final projects help you learn from scratch</p>
          </div>
          <div className="h-64 w-56 rounded-xl shadow-xl my-auto border">
            <Image src={card2} className="flex justify-center h-32 mt-4 mb-4"></Image>
            <h3 className="-mt-2 text-center font-bold">Affordable Cost</h3>
            <p className="text-xs px-8 mt-1 text-center">The cost is more affordable so that beginners can start first</p>
          </div>
          <div className="h-64 w-56 rounded-xl shadow-xl my-auto border">
            <Image src={card3} className="flex justify-center h-32 mt-4 mb-4"></Image>
            <h3 className="-mt-2 text-center font-bold">Full Online</h3>
            <p className="text-xs px-8 mt-1 text-center">All learning processes are online so that they can be followed anywhere and anytime</p>
          </div>
          
        </div>
      </div>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, ipsa maiores quas vero, consequuntur aspernatur esse aliquid labore veniam nemo amet veritatis odio ipsum quo deserunt dolorum, quia voluptates. Expedita, officiis quam! Officiis, libero!</p>
    </main>
  );
}
