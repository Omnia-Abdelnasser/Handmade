"use client";

import { MessageCircle, Instagram, Globe } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6 lg:px-20 text-center">
        <h2 className="text-3xl md:text-4xl text-center  font-extrabold text-pink-600 mb-12">
          تواصلي معي
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <a
            href="https://wa.me/201208130808"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center space-y-2 hover:scale-105 transition"
          >
            <MessageCircle className="text-green-500 w-8 h-8" />
            <span className="text-gray-800 dark:text-gray-200">واتساب</span>
          </a>

          <a
            href="https://www.instagram.com/creative_hive44/?igsh=a2treTFsZ3NzMnVp&fbclid=IwZXh0bgNhZW0CMTEAAR7BqXYFVLhCbJcGid6TG8N9QuXw77bJ-9W5bwM3Y36a3bueYCM2qBsIXn1BaQ_aem_1NZSl4wKpRFUYo2NABWTGw"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center space-y-2 hover:scale-105 transition"
          >
            <Instagram className="text-purple-500 w-8 h-8" />
            <span className="text-gray-800 dark:text-gray-200">إنستجرام </span>
          </a>

          <a
            href="https://www.facebook.com/groups/1370844726638390/?ref=share&mibextid=NSMWBT"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center space-y-2 hover:scale-105 transition"
          >
            <Globe className="text-blue-500 w-8 h-8" />
            <span className="text-gray-800 dark:text-gray-200">صفحتنا</span>
          </a>
        </div>
      </div>
    </section>
  );
}
