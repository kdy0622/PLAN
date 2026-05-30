import { motion } from "motion/react";
import { Sparkles, Sliders, ArrowRight, BookOpen, Users, HelpCircle, CheckCircle, ExternalLink } from "lucide-react";

interface IntroTabProps {
  onStartTour: () => void;
  onGoSimulator: () => void;
  onSwitchTab: (tabId: string) => void;
}

export default function IntroTab({ onStartTour, onGoSimulator, onSwitchTab }: IntroTabProps) {
  return (
    <div className="space-y-8">
      {/* 오프닝 배너 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-slate-950 text-white rounded-3xl p-8 sm:p-12 shadow-xl relative overflow-hidden border border-slate-800"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-teal-900/40 via-transparent to-transparent opacity-60"></div>
        
        <div className="relative z-10 max-w-4xl space-y-6">
          <span className="inline-flex items-center space-x-1.5 bg-teal-500/10 text-teal-300 font-extrabold text-xs sm:text-sm px-4 py-2 rounded-full border border-teal-500/25">
            <Sparkles className="w-3.5 h-3.5 text-teal-400 animate-pulse" />
            <span>초보자 눈높이 맞춤형 안전 팩트 가이드</span>
          </span>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight sm:leading-tight">
            평범한 브랜드 체인지가 <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-emerald-300 to-teal-400 bg-300% animate-gradient">
              평생 마르지 않는 자산식 권리소득
            </span>
            으로!
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-3xl">
            거창한 판매나 영업이 아닙니다! 내가 평소 먹던 종합영양제와 세안제를 가장 안전한 고품격 브랜드(유사나)로 체인지해 일상의 건강을 챙기고, 그 감동적인 경험을 시간 속에서 나누는 일입니다.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <button
              onClick={onStartTour}
              className="group bg-teal-500 hover:bg-teal-400 text-slate-950 px-8 py-4 rounded-2xl font-black text-base sm:text-lg shadow-lg shadow-teal-500/20 active:scale-95 transition-all flex items-center space-x-2"
            >
              <span>🚀 보상 스토리 투어 시작하기</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={onGoSimulator}
              className="bg-slate-900 hover:bg-slate-800 text-teal-300 border border-slate-700 px-8 py-4 rounded-2xl font-black text-base sm:text-lg active:scale-95 transition-all flex items-center space-x-2"
            >
              <Sliders className="w-5 h-5 text-teal-400" />
              <span>🎮 실시간 주급 정산기 돌려보기</span>
            </button>
          </div>
        </div>
      </motion.div>

      {/* 핵심 비전 카드 */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm space-y-6"
      >
        <div className="flex items-center space-x-3">
          <div className="bg-teal-50 p-2.5 rounded-xl border border-teal-100">
            <Users className="w-6 h-6 text-teal-600" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            공유와 연결이 만드는 무한 소득의 원리
          </h2>
        </div>
        
        <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
          맛집 정보를 친구에게 공유하듯, 내 몸이 더 가볍고 건강해진 실제 가치를 공유해 보세요. 유사나는 이 평범한 공유 네트워크를 안전하게 보존하고, 전 세계 100% 무제한으로 매출 실적 점수를 동일하게 올려보내는 상생의 네트워크 비즈니스 모델을 실현합니다.
        </p>

        {/* 4개 라인 설명 */}
        <div className="bg-gradient-to-br from-teal-50/70 to-emerald-50/60 rounded-2xl p-6 sm:p-8 border border-teal-100/80 space-y-4">
          <h3 className="text-xl sm:text-2xl font-black text-teal-900 flex items-center space-x-2">
            <span>🧬 4개의 시간축과 라이프 라인</span>
          </h3>
          <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
            처음에는 나와 가장 가까운 <strong>가족(A), 직장(B), 지인(C), 친구(D)</strong>로 이루어진 단 4개의 라인으로 탄탄하게 비즈니스 발판을 뻗어 나갑니다. 복잡한 수십 개의 라인이 아니라 누구나 소통하고 도울 수 있는 밀착형 협업 비즈니스입니다.
          </p>
          <div className="bg-white/90 p-5 rounded-2xl border border-teal-200/60 leading-relaxed text-sm sm:text-base flex items-start space-x-2.5">
            <CheckCircle className="w-5 h-5 text-teal-600 shrink-0 mt-0.5" />
            <p className="text-teal-950 font-bold">
              스폰서와 함께 4개의 축으로 자연스럽게 펼쳐 나가다가, 각 매장이 완성(맥스아웃)되면 끊임없이 제공되는 추가 비즈니스 센터(추가 BC)를 통해 수당 제한 없이 무한의 추가소득 확장 및 세일즈 공유가 가능해집니다.
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 pt-3">
            <div className="bg-white p-4 rounded-xl border border-teal-100/80 text-center font-bold text-slate-800 text-xs sm:text-sm shadow-sm">
              <span className="text-teal-600 block text-[11px] font-extrabold mb-1">LINE A</span>
              가족라인 (BC2 Left)
            </div>
            <div className="bg-white p-4 rounded-xl border border-teal-100/80 text-center font-bold text-slate-800 text-xs sm:text-sm shadow-sm">
              <span className="text-teal-600 block text-[11px] font-extrabold mb-1">LINE B</span>
              직장라인 (BC2 Right)
            </div>
            <div className="bg-white p-4 rounded-xl border border-teal-100/80 text-center font-bold text-slate-800 text-xs sm:text-sm shadow-sm">
              <span className="text-teal-600 block text-[11px] font-extrabold mb-1">LINE C</span>
              지인라인 (BC3 Left)
            </div>
            <div className="bg-white p-4 rounded-xl border border-teal-100/80 text-center font-bold text-slate-800 text-xs sm:text-sm shadow-sm">
              <span className="text-teal-600 block text-[11px] font-extrabold mb-1">LINE D</span>
              친구라인 (BC3 Right)
            </div>
          </div>
        </div>
      </motion.div>

      {/* 공식 홍보 브로셔 & 가이드북 섹션 */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="bg-gradient-to-br from-slate-50 to-teal-50/30 border border-slate-200 p-5 sm:p-7 rounded-3xl shadow-sm space-y-5"
      >
        <div className="flex items-center space-x-3">
          <div className="bg-teal-700 text-white p-2.5 rounded-2xl shrink-0 shadow-sm shadow-teal-700/10">
            <BookOpen className="w-5 h-5 text-teal-100" />
          </div>
          <div>
            <h3 className="font-extrabold text-sm sm:text-base text-slate-900 leading-snug">
              📖 유사나 스마트 모바일 공식 가이드북 & 회사소개서
            </h3>
            <p className="text-slate-500 text-[11px] sm:text-xs">
              고해상도 플립북 형식으로 손쉽게 넘겨볼 수 있는 모바일 최적화 온라인 책자 서비스입니다.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          <a
            href="https://issuu.com/usanakorea/docs/_18b387dc56d8e8"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between bg-white hover:bg-teal-50/20 border border-slate-200 hover:border-teal-300 p-4.5 rounded-2xl shadow-sm transition-all active:scale-[0.98] cursor-pointer"
          >
            <div className="flex items-center space-x-3 min-w-0">
              <span className="text-2xl sm:text-3xl shrink-0">📘</span>
              <div className="min-w-0">
                <span className="font-black text-slate-800 text-xs sm:text-sm block group-hover:text-teal-700 transition-colors truncate">
                  유사나 전제품 가이드북
                </span>
                <span className="text-slate-400 text-[10px] sm:text-xs block truncate font-medium">전 라인업별 영양 성분 & 가격 안내</span>
              </div>
            </div>
            <div className="bg-slate-50 group-hover:bg-teal-100 text-slate-400 group-hover:text-teal-700 p-2 rounded-xl transition-all shrink-0">
              <ExternalLink className="w-4 h-4" />
            </div>
          </a>

          <a
            href="https://issuu.com/usanakorea/docs/_26e9a6d47b782c"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between bg-white hover:bg-emerald-50/20 border border-slate-200 hover:border-emerald-300 p-4.5 rounded-2xl shadow-sm transition-all active:scale-[0.98] cursor-pointer"
          >
            <div className="flex items-center space-x-3 min-w-0">
              <span className="text-2xl sm:text-3xl shrink-0">🏢</span>
              <div className="min-w-0">
                <span className="font-black text-slate-800 text-xs sm:text-sm block group-hover:text-emerald-700 transition-colors truncate">
                  유사나 회사소개서
                </span>
                <span className="text-slate-400 text-[10px] sm:text-xs block truncate font-medium">웰니스 선도 기업의 탄생 배경과 가치</span>
              </div>
            </div>
            <div className="bg-slate-50 group-hover:bg-emerald-100 text-slate-400 group-hover:text-emerald-700 p-2 rounded-xl transition-all shrink-0">
              <ExternalLink className="w-4 h-4" />
            </div>
          </a>
        </div>
      </motion.div>

      {/* 세 개의 필수 추천 링크 배너 */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        <a
          href="https://open.kakao.com/o/sg1nwMZ"
          target="_blank"
          rel="noopener noreferrer"
          className="group bg-white hover:bg-teal-50/40 border-2 border-teal-100 hover:border-teal-300 p-6 sm:p-8 rounded-3xl shadow-sm hover:shadow-md text-center transition-all duration-300 flex flex-col justify-between"
        >
          <div>
            <span className="text-4xl block mb-2 group-hover:scale-110 transition-transform">💬</span>
            <h4 className="text-lg sm:text-xl font-black text-slate-900 mt-2">1:1 무료 컨설팅</h4>
            <p className="text-slate-600 text-xs sm:text-sm mt-2 leading-relaxed">
              카카오톡 오픈챗으로 편안하게 나만의 맞춤 소득 로드맵을 설계받아 보세요!
            </p>
          </div>
          <span className="text-teal-600 font-extrabold text-xs sm:text-sm mt-4 inline-block group-hover:translate-x-1 transition-transform">
            오픈챗 바로가기 →
          </span>
        </a>

        <a
          href="https://www.usana.com/s/HxJkG2"
          target="_blank"
          rel="noopener noreferrer"
          className="group bg-white hover:bg-sky-50/40 border-2 border-sky-100 hover:border-sky-300 p-6 sm:p-8 rounded-3xl shadow-sm hover:shadow-md text-center transition-all duration-300 flex flex-col justify-between"
        >
          <div>
            <span className="text-4xl block mb-2 group-hover:scale-110 transition-transform font-bold">📝</span>
            <h4 className="text-lg sm:text-xl font-black text-slate-900 mt-2">유사나 회원되기</h4>
            <p className="text-slate-600 text-xs sm:text-sm mt-2 leading-relaxed">
              유사나 공식 온라인 매장의 즉각적인 특별 혜택 멤버십을 획득하세요.
            </p>
          </div>
          <span className="text-sky-600 font-extrabold text-xs sm:text-sm mt-4 inline-block group-hover:translate-x-1 transition-transform">
            공식 사이트 가입하기 →
          </span>
        </a>

        <a
          href="https://litt.ly/usana"
          target="_blank"
          rel="noopener noreferrer"
          className="group bg-white hover:bg-indigo-50/40 border-2 border-indigo-100 hover:border-indigo-300 p-6 sm:p-8 rounded-3xl shadow-sm hover:shadow-md text-center transition-all duration-300 flex flex-col justify-between"
        >
          <div>
            <span className="text-4xl block mb-2 group-hover:scale-110 transition-transform">✨</span>
            <h4 className="text-lg sm:text-xl font-black text-slate-900 mt-2">유사나 알아보기</h4>
            <p className="text-slate-600 text-xs sm:text-sm mt-2 leading-relaxed">
              유사나의 심오한 비전, 압도적인 제품력 정보를 하나로 모아 한눈에 탐색하세요.
            </p>
          </div>
          <span className="text-indigo-600 font-extrabold text-xs sm:text-sm mt-4 inline-block group-hover:translate-x-1 transition-transform">
            모아보기 채널 열기 →
          </span>
        </a>
      </motion.div>
    </div>
  );
}
