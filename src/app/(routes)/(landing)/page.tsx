import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-100 py-12 px-4">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-xl font-bold text-slate-900">Sprint Todo List</h1>
          <p className="text-base font-normal text-slate-600">
            TailwindCSS 커스텀 색상 및 NanumSquare 폰트 데모
          </p>
        </div>

        {/* 버튼 섹션 */}
        <section className="bg-white rounded-2xl p-8 space-y-6">
          <h2 className="text-lg font-bold text-slate-800">버튼 스타일</h2>
          <div className="flex flex-wrap gap-4">
            <button className="bg-violet-600 hover:bg-violet-700 text-white px-6 py-3 rounded-full font-bold transition-all hover:shadow-lg hover:-translate-y-0.5 flex items-center gap-2">
              <Image src="/ic/plus_white.svg" alt="plus" width={20} height={20} />
              추가하기
            </button>

            <button className="bg-rose-500 hover:bg-rose-600 text-white px-6 py-3 rounded-full font-bold transition-all hover:shadow-lg hover:-translate-y-0.5 flex items-center gap-2">
              <Image src="/ic/X.svg" alt="close" width={20} height={20} />
              삭제하기
            </button>

            <button className="bg-lime-300 hover:bg-lime-400 text-slate-900 px-6 py-3 rounded-full font-bold transition-all hover:shadow-lg hover:-translate-y-0.5 flex items-center gap-2">
              <Image src="/ic/check.svg" alt="check" width={20} height={20} />
              수정 완료
            </button>

            <button className="bg-white hover:bg-slate-100 text-slate-900 border-2 border-slate-300 px-6 py-3 rounded-full font-bold transition-all hover:shadow-lg hover:-translate-y-0.5">
              취소
            </button>
          </div>
        </section>

        {/* 색상 팔레트 */}
        <section className="bg-white rounded-2xl p-8 space-y-6">
          <h2 className="text-lg font-bold text-slate-800">색상 팔레트</h2>

          <div className="space-y-4">
            <div>
              <h3 className="text-base font-bold text-slate-700 mb-2">Slate (회색)</h3>
              <div className="flex gap-2">
                <div className="bg-slate-100 w-20 h-20 rounded-lg flex items-center justify-center text-xs">100</div>
                <div className="bg-slate-200 w-20 h-20 rounded-lg flex items-center justify-center text-xs">200</div>
                <div className="bg-slate-300 w-20 h-20 rounded-lg flex items-center justify-center text-xs">300</div>
                <div className="bg-slate-400 w-20 h-20 rounded-lg flex items-center justify-center text-xs text-white">400</div>
                <div className="bg-slate-500 w-20 h-20 rounded-lg flex items-center justify-center text-xs text-white">500</div>
                <div className="bg-slate-800 w-20 h-20 rounded-lg flex items-center justify-center text-xs text-white">800</div>
                <div className="bg-slate-900 w-20 h-20 rounded-lg flex items-center justify-center text-xs text-white">900</div>
              </div>
            </div>

            <div>
              <h3 className="text-base font-bold text-slate-700 mb-2">Violet (보라)</h3>
              <div className="flex gap-2">
                <div className="bg-violet-100 w-20 h-20 rounded-lg flex items-center justify-center text-xs">100</div>
                <div className="bg-violet-600 w-20 h-20 rounded-lg flex items-center justify-center text-xs text-white">600</div>
              </div>
            </div>

            <div>
              <h3 className="text-base font-bold text-slate-700 mb-2">기타 색상</h3>
              <div className="flex gap-2">
                <div className="bg-rose-500 w-20 h-20 rounded-lg flex items-center justify-center text-xs text-white">Rose</div>
                <div className="bg-lime-300 w-20 h-20 rounded-lg flex items-center justify-center text-xs">Lime</div>
                <div className="bg-amber-800 w-20 h-20 rounded-lg flex items-center justify-center text-xs text-white">Amber</div>
              </div>
            </div>
          </div>
        </section>

        {/* 타이포그래피 */}
        <section className="bg-white rounded-2xl p-8 space-y-4">
          <h2 className="text-lg font-bold text-slate-800">타이포그래피 (NanumSquare)</h2>
          <div className="space-y-2">
            <p className="text-xl font-bold text-slate-900">20px Bold - 제목</p>
            <p className="text-lg font-bold text-slate-800">18px Bold - 부제목</p>
            <p className="text-base font-bold text-slate-900">16px Bold - 강조</p>
            <p className="text-base font-normal text-slate-600">16px Regular - 본문</p>
          </div>
        </section>

        {/* Todo 카드 예시 */}
        <section className="bg-white rounded-2xl p-8 space-y-6">
          <h2 className="text-lg font-bold text-slate-800">Todo 카드 예시</h2>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white border-2 border-slate-200 rounded-2xl p-4 shadow-sm hover:shadow-md transition">
              <h3 className="text-slate-900 font-bold text-base mb-2">할 일 제목</h3>
              <p className="text-slate-500 text-sm">할 일 설명이 여기에 들어갑니다.</p>
            </div>

            <div className="bg-violet-100 border-2 border-violet-600 rounded-2xl p-4">
              <h3 className="text-slate-900 font-bold text-base mb-2 line-through">완료된 할 일</h3>
              <p className="text-slate-500 text-sm line-through">완료된 할 일의 설명입니다.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
