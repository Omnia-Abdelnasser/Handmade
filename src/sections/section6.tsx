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

const Section6 = () => {
  const images = [
    "/section6/s1.jpg",
    "/section6/s2.jpg",
    "/section6/s3.jpg",
    "/section6/s4.jpg",
    "/section6/s5.jpg",
    "/section6/s6.jpg",
    "/section6/s7.jpg",
    "/section6/s8.jpg",
    "/section6/s9.jpg",
    "/section6/s10.jpg",
    "/section6/s11.jpg",
    "/section6/s12.jpg",
    "/section6/s13.jpg",
    "/section6/s14.jpg",
    "/section6/s15.jpg",
  ];

  return (
    <section className="py-10 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto sm:px-6 px-12">
        <h2
          className="text-2xl md:text-4xl font-extrabold text-center mb-10
  bg-pink-500
  bg-clip-text text-transparent
  drop-shadow-lg
  transition-transform duration-500 hover:scale-105 hover:tracking-wider"
        >
          قسم مميز
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
                        alt={` ${index}`}
                        fill
                        sizes="(max-width: 768px) 100vw, 
         (max-width: 1200px) 50vw, 
         33vw"
                        className="object-cover"
                      />
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-[-20] top-1/2 -translate-y-1/2 z-10" />
          <CarouselNext className="absolute right-[-20] top-1/2 -translate-y-1/2 z-10" />
        </Carousel>
      </div>
    </section>
  );
};

export default Section6;
