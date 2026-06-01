import { MessageSquare, ExternalLink } from "lucide-react";

interface HeaderProps {
  onConsultingClick: () => void;
}

export default function Header({ onConsultingClick }: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-sm transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <div className="flex items-center space-x-3.5">
          <span className="bg-gradient-to-r from-teal-800 to-teal-600 text-white font-black text-2xl px-4 py-2 rounded-xl tracking-wider shadow-md shadow-teal-700/10 hover:scale-[1.03] transition-transform cursor-pointer">
            USANA
          </span>
          <span className="text-slate-300 text-xl hidden sm:inline">|</span>
          <span className="text-slate-900 font-black text-2xl tracking-tight leading-none">
            보상플랜
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <a
            href="https://open.kakao.com/o/sg1nwMZ"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 bg-teal-600 hover:bg-teal-700 active:scale-95 transition-all text-white px-4 py-2.5 rounded-full font-black text-sm shadow-sm hover:shadow shadow-teal-600/20"
          >
            <MessageSquare className="w-4 h-4 text-white" />
            <span>1:1문의</span>
            <ExternalLink className="w-3.5 h-3.5 text-teal-100" />
          </a>
        </div>
      </div>
    </header>
  );
}
