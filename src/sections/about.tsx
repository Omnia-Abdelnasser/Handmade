import Image from "next/image";

export default function About() {
  return (
    <section
      dir="rtl"
      id="about"
      className=" dark:bg-gray-900 bg-gray-50 by-10"
    >
      <div className="container mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="text-center md:text-right px-2">
            <h2 className="text-3xl md:text-4xl text-center  font-extrabold text-pink-600 mb-6">
              من انا
            </h2>
            <p className="text-lg text-gray-800 dark:text-gray-50 leading-relaxed">
              أنا{" "}
              <span className="font-semibold text-pink-500">إسراء إسماعيل</span>
              ، شغوفة بالأعمال اليدوية وصناعة التحف المميزة. أقدم مجموعة متنوعة
              من الأعمال اليدوية المميزة
              <br />
              <span className="font-medium"></span>، كلها مصنوعة بإيدي وبكل حب
              في كل تفصيلة.
            </p>
            <p className="mt-4 text-lg dark:text-gray-50 text-gray-800">
              هدفي إن كل مناسبة عندكم تفضل ذكرى جميلة مع لمسات يدوية تجمع بين{" "}
              <span className="font-semibold">الأناقة والجودة</span> وتضيف روح
              خاصة لليوم المميز.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <Image
                src="/about/WhatsApp Image 2025-08-31 at 15.25.56_061c8685.jpg"
                alt="إسراء إسماعيل - أعمال يدوية"
                width={320}
                height={320}
                className="rounded-2xl shadow-xl object-cover "
              />
              <Image
                src="/about/WhatsApp Image 2025-08-31 at 15.25.56_1bd7a0a5.jpg"
                alt="إسراء إسماعيل - أعمال يدوية"
                width={320}
                height={320}
                className="rounded-2xl shadow-xl object-cover "
              />
            </div>

            <div className="space-y-4 pt-6">
              <Image
                src="/about/WhatsApp Image 2025-08-31 at 15.25.56_366a2cf6.jpg"
                alt="إسراء إسماعيل - أعمال يدوية"
                width={320}
                height={320}
                className="rounded-2xl shadow-xl object-cover "
              />
              <Image
                src="/about/WhatsApp Image 2025-08-31 at 15.25.56_862b1eb8.jpg"
                alt="إسراء إسماعيل - أعمال يدوية"
                width={320}
                height={320}
                className="rounded-2xl shadow-xl object-cover "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
