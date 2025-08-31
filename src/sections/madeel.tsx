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

const ManadeelSlider = () => {
  const images = [
    "/Manadeel/m1.jpg",
    "/Manadeel/m25.jpg",
    "/Manadeel/m26.jpg",
    "/Manadeel/m2.jpg",
    "/Manadeel/m24.jpg",
    "/Manadeel/m27.jpg",
    "/Manadeel/m3.jpg",
    "/Manadeel/m23.jpg",
    "/Manadeel/m4.jpg",
    "/Manadeel/m22.jpg",
    "/Manadeel/m5.jpg",
    "/Manadeel/m21.jpg",
    "/Manadeel/m6.jpg",
    "/Manadeel/m20.jpg",
    "/Manadeel/m7.jpg",
    "/Manadeel/m19.jpg",
    "/Manadeel/m8.jpg",
    "/Manadeel/m18.jpg",
    "/Manadeel/m9.jpg",
    "/Manadeel/m17.jpg",
    "/Manadeel/m10.jpg",
    "/Manadeel/m16.jpg",
    "/Manadeel/m11.jpg",
    "/Manadeel/m15.jpg",
    "/Manadeel/m12.jpg",
    "/Manadeel/m14.jpg",
    "/Manadeel/m13.jpg",
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto sm:px-6 px-12">
        <h2
          className="text-2xl md:text-4xl font-extrabold text-center mb-16
  bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600
  bg-clip-text text-transparent
  drop-shadow-lg
  transition-transform duration-500 hover:scale-105 hover:tracking-wider"
        >
          معرض مناديل فاخرة
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
                        alt={`manadeel ${index}`}
                        fill
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

export default ManadeelSlider;
