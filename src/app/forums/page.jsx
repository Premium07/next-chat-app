import { topics } from "@/constants/data";
import Image from "next/image";
import React from "react";

const Forums = () => {
  return (
    <section className="container mx-auto my-10">
      <h2 className="text-center font-bold text-2xl">Discussion Forums</h2>
      <div className="w-full flex items-center justify-center flex-wrap gap-4 mt-5">
        {topics.map((topic, index) => {
          return (
            <div
              key={index}
              className="w-1/4 shadow-lg bg-slate-100 border p-2 rounded-md flex flex-col items-center justify-center py-4"
            >
              <Image
                src={topic.img}
                height={40}
                width={40}
                className="aspect-square object-cover h-auto"
                alt="images"
              />
              <h3 className="font-semibold text-lg my-2">{topic.text}</h3>
              <p className="px-4 text-center">{topic.description}</p>
              <button className="p-2 px-4 bg-blue-600 rounded mt-4 text-white">
                Discuss now
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Forums;
