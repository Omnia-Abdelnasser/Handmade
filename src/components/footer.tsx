"use client";

import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer dir="rtl" className="bg-gray-50 dark:bg-gray-900 py-6">
      <div className="container mx-auto px-6 lg:px-20 text-center space-y-3">
        <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
          صُنع بحب <Heart className="inline w-4 h-4 text-pink-500" /> بواسطة{" "}
          <span className="font-bold text-pink-500">أمنية عبد الناصر</span>
          <br />
          لبراند الهاند ميد الخاص بـ{" "}
          <span className="font-bold text-purple-500">إسراء إسماعيل</span>
        </p>

        <div className="border-t border-gray-300 dark:border-gray-700 pt-3">
          <p className="sm:text-sm text-xs text-gray-500 dark:text-gray-600">
            © {new Date().getFullYear()} براند الهاند ميد. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  );
}
