"use client";

import React, { useState } from "react";
import SpeakerIcon from "@/components/SpeakerIcon";

const languages = [
  {
    code: "en",
    name: "English",
    flag: "https://flagcdn.com/w80/us.png",
    sample: "Hello! I am your AI agent, here to assist you with any questions or tasks you have.",
  },
  {
    code: "no",
    name: "Norwegian",
    flag: "https://flagcdn.com/w80/no.png",
    sample: "Hei! Jeg er din AI-agent, her for å hjelpe deg med spørsmål eller oppgaver du har.",
  },
  {
    code: "fr",
    name: "French",
    flag: "https://flagcdn.com/w80/fr.png",
    sample: "Bonjour! Je suis votre agent IA. Ici pour vous aider avec toutes vos questions ou tâches.",
  },
  {
    code: "nl",
    name: "Dutch",
    flag: "https://flagcdn.com/w80/nl.png",
    sample: "Hallo! Ik ben jouw AI-agent, hier om je te helpen met al je vragen of taken.",
  },
  {
    code: "fi",
    name: "Finnish",
    flag: "https://flagcdn.com/w80/fi.png",
    sample: "Hei! Olen tekoälyagenttisi, autan sinua kaikissa kysymyksissäsi ja tehtävissäsi.",
  },
  {
    code: "ar",
    name: "Arabic",
    flag: "https://flagcdn.com/w80/ae.png",
    sample: "مرحبًا! أنا وكيلك الذكي، هنا لمساعدتك في أي أسئلة أو مهام لديك.",
  },
  {
    code: "bn",
    name: "Bengali",
    flag: "https://flagcdn.com/w80/bd.png",
    sample: "হ্যালো! আমি আপনার এআই এজেন্ট, আপনার যেকোনো প্রশ্ন বা কাজে সাহায্য করতে এখানে আছি।",
  },
  {
    code: "da",
    name: "Danish",
    flag: "https://flagcdn.com/w80/dk.png",
    sample: "Hej! Jeg er din AI-agent, her for at hjælpe deg med alle spørgsmål eller opgaver, du måtte have.",
  },
  {
    code: "it",
    name: "Italian",
    flag: "https://flagcdn.com/w80/it.png",
    sample: "Ciao! Sono il tuo agente AI, qui per aiutarti con qualsiasi domanda o compito tu abbia.",
  },
  {
    code: "de",
    name: "German",
    flag: "https://flagcdn.com/w80/de.png",
    sample: "Hallo! Ich bin Ihr KI-Agent, hier um Ihnen bei Fragen oder Aufgaben zu helfen.",
  },
  {
    code: "es",
    name: "Spanish",
    flag: "https://flagcdn.com/w80/es.png",
    sample: "¡Hola! Soy tu agente de IA, aquí para ayudarte con cualquier pregunta o tarea.",
  },
  {
    code: "pt",
    name: "Portuguese",
    flag: "https://flagcdn.com/w80/pt.png",
    sample: "Olá! Sou o seu agente de IA, aqui para ajudá-lo com quaisquer perguntas ou tarefas.",
  },
  {
    code: "zh",
    name: "Chinese",
    flag: "https://flagcdn.com/w80/cn.png",
    sample: "你好！我是您的AI助手，随时为您解答问题或完成任务。",
  },
  {
    code: "ja",
    name: "Japanese",
    flag: "https://flagcdn.com/w80/jp.png",
    sample: "こんにちは！私はあなたのAIエージェントです。ご質問やご要望にお答えします。",
  },
  {
    code: "ko",
    name: "Korean",
    flag: "https://flagcdn.com/w80/kr.png",
    sample: "안녕하세요! 저는 귀하의 AI 에이전트로, 질문이나 작업을 도와드리기 위해 여기 있습니다.",
  },
  {
    code: "hi",
    name: "Hindi",
    flag: "https://flagcdn.com/w80/in.png",
    sample: "नमस्ते! मैं आपका AI एजेंट हूं, आपके किसी भी प्रश्न या कार्य में सहायता के लिए यहां हूं।",
  },
  {
    code: "ru",
    name: "Russian",
    flag: "https://flagcdn.com/w80/ru.png",
    sample: "Привет! Я ваш ИИ-агент, здесь чтобы помочь вам с любыми вопросами или задачами.",
  },
  {
    code: "tr",
    name: "Turkish",
    flag: "https://flagcdn.com/w80/tr.png",
    sample: "Merhaba! Ben sizin yapay zeka ajanınızım, sorularınız veya görevlerinizde yardımcı olmak için buradayım.",
  },
];

export default function MultilingualPage() {
  const [search, setSearch] = useState("");
  const [playing, setPlaying] = useState<string | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [pageSize, setPageSize] = useState(9);
  const [isMounted, setIsMounted] = useState(false);

  React.useEffect(() => {
    setIsMounted(true);
    const updatePageSize = () => {
      setPageSize(window.innerWidth < 640 ? 4 : 9);
    };
    updatePageSize();
    window.addEventListener("resize", updatePageSize);
    return () => window.removeEventListener("resize", updatePageSize);
  }, []);

  const filtered = languages.filter((l) =>
    l.name.toLowerCase().includes(search.toLowerCase())
  );

  const displayedPageSize = isMounted ? pageSize : 9;
  const visible = isExpanded ? filtered : filtered.slice(0, displayedPageSize);
  const hasMore = !isExpanded && filtered.length > pageSize;

  const handlePlay = (code: string) => {
    setPlaying(playing === code ? null : code);
  };

  return (
    <div className="min-h-screen bg-[#F5F6F8]" suppressHydrationWarning>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="pt-20 pb-10 px-4 flex flex-col items-center text-center mb-10">
        {/* Logo icon */}
        <div className="mb-5 flex items-center justify-center">
          <img
            src="/logo.png"
            alt="Hexa AI Logo"
            className="w-16 h-16 object-contain"
          />
        </div>

        <h1 className="text-4xl font-bold text-gray-900 mb-3 tracking-tight">
          Multilingual
        </h1>
        <p className="text-gray-500 text-base max-w-xs leading-relaxed mb-0">
          Support 100+ languages, can dial to any countries phone numbers.
        </p>

        {/* Search */}
        <div className="mt-8 w-full max-w-sm relative"
        >
          <svg
            className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
          </svg>
          <input
            type="text"
            placeholder="Search language..."
            value={search}
            onChange={(e) => { setSearch(e.target.value); setIsExpanded(false); }}
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 bg-white text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#06B6D4]/30 focus:border-[#06B6D4] shadow-sm transition"
          />
        </div>
      </section>

      {/* ── Language Grid ─────────────────────────────────────── */}
      <section className="relative max-w-9xl mx-auto px-4 sm:px-6 lg:px-8 pb-32 pt-20 overflow-hidden rounded-[4rem]">
        {/* Animated Background for the whole section */}
        <div
          className="absolute inset-0 bg-[url('/Rainbow.gif')] bg-cover bg-center opacity-80"
          style={{ filter: "blur(60px) saturate(1.8)" }}
        />
        {/* Content Overlay */}
        <div className="absolute inset-0 bg-white/95 backdrop-blur-[4px]" />

        <div className="relative ">
          <div className="mb-16 ml-20">
            <h2 className="text-4xl font-semibold text-gray-900  mb-10">Languages</h2>
            <p className="text-gray-500 text-2xl mt-1  max-w-2xl">
              Supports 100+ languages for easy international  communication.
            </p>
          </div>

          {filtered.length === 0 ? (
            <div className="text-center py-20 text-gray-400">
              No languages found for &ldquo;{search}&rdquo;
            </div>
          ) : (
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {visible.map((lang) => (
                  <div
                    key={lang.code}
                    className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex items-start gap-4"
                  >
                    {/* Flag */}
                    <div className="w-12 h-9 shrink-0 mt-1 overflow-hidden rounded-sm border border-gray-100 shadow-sm">
                      <img
                        src={lang.flag}
                        alt={lang.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Text */}
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-gray-900 text-base mb-1">{lang.name}</p>
                      <p className="text-sm text-gray-400 leading-relaxed line-clamp-2">{lang.sample}</p>
                    </div>

                    {/* Speaker icon */}
                    <button
                      onClick={() => handlePlay(lang.code)}
                      aria-label={`Play ${lang.name}`}
                      className={`shrink-0 mt-0.5 p-1.5 rounded-lg transition-colors ${playing === lang.code
                        ? "text-[#00A3FF]"
                        : "text-gray-300 hover:text-gray-500 hover:bg-gray-50"
                        }`}
                    >
                      <SpeakerIcon className="w-5 h-5" isPlaying={playing === lang.code} />
                    </button>
                  </div>
                ))}
              </div>

              {/* See More / See Less Buttons */}
              {(hasMore || isExpanded) && filtered.length > pageSize && (
                <div className="flex justify-end mt-12 pb-4">
                  {!isExpanded ? (
                    <button
                      onClick={() => setIsExpanded(true)}
                      className="relative px-8 py-3 rounded-xl text-gray-400 bg-white text-sm font-semibold overflow-hidden group transition-all active:scale-95 shadow-md hover:shadow-lg "
                    >
                      <span className="relative z-10">See More</span>
                    </button>
                  ) : (
                    <button
                      onClick={() => setIsExpanded(false)}
                      className="relative px-8 py-3 rounded-xl text-gray-400 bg-white text-sm font-semibold overflow-hidden group transition-all active:scale-95 shadow-md hover:shadow-lg "
                    >
                      <span className="relative z-10">See Less</span>
                    </button>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
