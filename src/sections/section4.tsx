"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const Section4 = () => {
  const images = [
    "/section4/h1.jpg",
    //    "/section4/h2.jpg",
    "/section4/h3.jpg",
    "/section4/h4.jpg",
    "/section4/mr0.jpg",
    "/section4/mr1.jpg",
    "/section4/mr2.jpg",
    "/section4/mr3.jpg",
    "/section4/mr4.jpg",
    "/section4/mr5.jpg",
    "/section4/mr6.jpg",
  ];

  return (
    <section className="py-10 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto sm:px-6 px-12">
        <h2
          className="text-2xl md:text-4xl font-extrabold text-center mb-7
  bg-pink-500
  bg-clip-text text-transparent
  drop-shadow-lg
  transition-transform duration-500 hover:scale-105 hover:tracking-wider"
        >
          الهوايات والمرايا
        </h2>

        <Carousel className="sm:max-w-6xl mx-auto max-w-6xl">
          <CarouselContent>
            {images.map((img, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <Card
                  className="group relative overflow-hidden rounded-2xl 
                shadow-md hover:shadow-2xl transition-all duration-300 h-full"
                >
                  <CardContent className="p-0 flex items-center justify-center aspect-square">
                    <div className="relative w-full h-full">
                      <Image
                        src={img}
                        alt={`${index}`}
                        fill
                        //                 sizes="(max-width: 768px) 100vw,
                        //  (max-width: 1200px) 50vw,
                        //  33vw"
                        className="object-cover"
                      />
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-[-30] top-1/2 -translate-y-1/2 z-10" />
          <CarouselNext className="absolute right-[-30] top-1/2 -translate-y-1/2 z-10" />
        </Carousel>
      </div>
    </section>
  );
};

export default Section4;
