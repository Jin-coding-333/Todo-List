import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-100 px-6">
      {/* 404 Content Container */}
      <div className="flex max-w-md flex-col items-center text-center">
        {/* Illustration */}
        <div className="mb-8 animate-bounce">
          <Image
            src="/img/image_done_large.svg"
            alt="페이지를 찾을 수 없습니다"
            width={240}
            height={220}
            priority
          />
        </div>

        {/* Error Code */}
        <h1 className="mb-4 text-7xl font-extrabold text-slate-800 md:text-8xl">404</h1>

        {/* Error Message */}
        <h2 className="mb-3 text-xl font-bold text-slate-700 md:text-2xl">
          페이지를 찾을 수 없습니다
        </h2>

        <p className="mb-8 leading-relaxed text-slate-500">
          요청하신 페이지가 존재하지 않거나,
          <br />
          이동되었을 수 있습니다.
        </p>

        {/* Back to Home Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full bg-violet-600 px-6 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-violet-700 hover:shadow-xl"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z"
              clipRule="evenodd"
            />
          </svg>
          홈으로 돌아가기
        </Link>
      </div>
    </div>
  );
}
