export default function Hero() {
  return (
    <>
      <section className=" min-h-screen relative bg-gray-50 dark:bg-gray-900 py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto mt-[15%]">
          <h1 className="text-2xl md:text-5xl font-extrabold text-pink-500 leading-tight">
            ✨لمسات يدوية تصنع الفرق ✨
          </h1>

          <p className="mt-6 text-lg text-gray-800 dark:text-gray-50">
            نقدم مجموعة متنوعة من الأعمال اليدوية الفريدة: صواني كتب الكتاب
            المزخرفة، مرايات أنيقة، شنط أولى عملية، مناديل كتب الكتاب، لوحات
            البصمة التذكارية، والهوايات المميزة. كل قطعة تُصنع بعناية لتبقى ذكرى
            لا تُنسى وتضفي لمسة خاصة على مناسباتك.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#products"
              className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-full shadow-lg transition"
            >
              تصفحي المنتجات
            </a>
            <a
              href="#contact"
              className="bg-white border border-pink-400 text-pink-500 hover:bg-rose-50 px-6 py-3 rounded-full shadow-lg transition"
            >
              اطلب تصميم مخصص
            </a>
          </div>
        </div>

        <div className="absolute top-0 left-0 w-32 h-32 bg-rose-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      </section>
    </>
  );
}
