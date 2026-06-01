import { MessageSquare, ExternalLink, Sparkles } from "lucide-react";

interface FooterProps {
  onSwitchTab: (tabId: string) => void;
  currentTab: string;
}

export default function Footer({ onSwitchTab, currentTab }: FooterProps) {
  const links = [
    { id: "intro", label: "🌱 소개 및 가치" },
    { id: "steps", label: "🔄 보상플랜설명" },
    { id: "simulator", label: "🎮 공유연결 시뮬레이션" },
    { id: "vs", label: "📊 1BC vs 3bc" },
    { id: "glossary", label: "📖 보상 용어사전" },
    { id: "faq", label: "❓ 자주 묻는 질문" },
  ];

  return (
    <footer className="bg-slate-900 text-slate-400 py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-10">
        
        {/* 가로형 빠른 탭 가이드 링크 */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-3.5 text-sm sm:text-base font-extrabold text-slate-300">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => onSwitchTab(link.id)}
              className={`hover:text-teal-400 transition-colors uppercase outline-none focus:outline-none cursor-pointer ${
                currentTab === link.id ? "text-teal-400" : ""
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* 3대 추천 직접 연결 단추 */}
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="https://open.kakao.com/o/sg1nwMZ"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 bg-teal-600 hover:bg-teal-700 text-white font-extrabold px-6 py-3 rounded-full text-xs sm:text-sm shadow-md transition-all active:scale-95"
          >
            <MessageSquare className="w-4 h-4 text-white" />
            <span>💬 1:1문의 카톡방</span>
          </a>
          
          <a
            href="https://www.usana.com/s/HxJkG2"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 bg-sky-600 hover:bg-sky-700 text-white font-extrabold px-6 py-3 rounded-full text-xs sm:text-sm shadow-md transition-all active:scale-95"
          >
            <ExternalLink className="w-4 h-4 text-white" />
            <span>📝 유사나 회원가입 링크</span>
          </a>
          
          <a
            href="https://litt.ly/usana"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold px-6 py-3 rounded-full text-xs sm:text-sm shadow-md transition-all active:scale-95"
          >
            <Sparkles className="w-4 h-4 text-white" />
            <span>✨ 유사나 알아보기 (리틀리)</span>
          </a>
        </div>

        {/* 회사 교육용 법적 디스크레이머 */}
        <div className="text-[11px] text-slate-500 leading-relaxed max-w-3xl mx-auto border-t border-slate-800/60 pt-8">
          본 가이드 어플리케이션은 유사나 브랜드를 정직하게 전달하고자 개별 독립 디스트리뷰터가 예비 가망파트너들의 올바른 마케팅 이해를 돕기 목적으로 기획·개발한 특수 제작 교육 솔루션입니다. 본 가이드에 수록된 모든 시뮬레이션 공식은 공식 본사의 마케팅 규범 및 한국 직접판매공제조합 법적 규칙을 성실히 준수하였습니다.
        </div>

        {/* 저작권 표시 기여 (by kdy) */}
        <div className="text-slate-500 text-xs sm:text-sm space-y-1 border-t border-slate-800/80 pt-6">
          <p>© 2026 USANA Independent Distributor Education Systems. All rights reserved.</p>
          <p className="font-extrabold text-teal-500 mt-1 uppercase tracking-wide">
            copyright : dreamon(by kdy)
          </p>
        </div>
      </div>
    </footer>
  );
}
