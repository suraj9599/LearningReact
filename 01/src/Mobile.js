import React from "react";
import Mobilelist from "./MobileList";
import books from "./books.json";

export default function Mobile() {
  return (
    <div>
      {books.map((ele) => {
        return (
          <Mobilelist image={ele.image} title={ele.title} price={ele.price} />
        );
      })}
    </div>
  );
}
