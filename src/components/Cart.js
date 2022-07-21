import React from "react";

export default function Cart() {
  return (
   
      <div className="flex items-center justify-center flex-col h-32 w-1/2 rounded-xl ">
        <header className="text-center font-bold text-xl text-white bg-red-500">
          Cart
        </header>
        <p className=" p-5">Choose the food you want and click on the Order Now button to order it.</p>
        <footer>
          <button className="bg-red-500 justify-end ">Order Now</button>
        </footer>
      </div>
  
  );
}
