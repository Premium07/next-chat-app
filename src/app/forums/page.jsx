import { Button } from "@/components/ui/button";
import { topics } from "@/constants/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Forums = () => {
  return (
    <section className="container mx-auto min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
      <div className="py-10 h-full">
        <h2 className="text-center font-bold text-2xl text-white">
          Discussion Forums
        </h2>
        <div className="w-full grid grid-cols-3 gap-4 p-5 mt-5">
          {topics.map((topic, index) => {
            return (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 hover:transform hover:-translate-y-1 transition duration-300 flex flex-col gap-2 items-center justify-center"
              >
                <Image
                  src={topic.img}
                  height={40}
                  width={40}
                  className="aspect-square object-cover h-auto mix-blend-difference"
                  alt="images"
                />
                <h3 className="font-semibold text-lg my-2 text-white">
                  {topic.text}
                </h3>
                <p className="px-4 text-center text-white">
                  {topic.description}
                </p>
                <Link href={`/forum/${topic.slug}`}>
                  <Button className="mt-2 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-2 px-4 rounded">
                    Discuss now
                  </Button>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Forums;
