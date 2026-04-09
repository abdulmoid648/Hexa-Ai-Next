import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700"],
});

export default function LandingPage() {
  return (
    <main className={`${roboto.className} flex min-h-screen flex-col items-center justify-between bg-white text-gray-900 relative overflow-hidden`}>
      {/* Decorative Blur Blobs (Auth Aesthetic) */}
      <div
        className="absolute -top-[100px] right-[50px] w-[600px] h-[600px] rounded-full blur-[80px] pointer-events-none z-0"
        style={{ background: 'radial-gradient(circle, rgba(14,165,233,0.15) 0%, transparent 70%)' }}
      />
      <div
        className="absolute top-[20%] -left-[100px] w-[500px] h-[500px] rounded-full blur-[80px] pointer-events-none z-0"
        style={{ background: 'radial-gradient(circle, rgba(238,16,229,0.1) 0%, transparent 70%)' }}
      />
      <div
        className="absolute bottom-[10%] right-[-50px] w-[450px] h-[450px] rounded-full blur-[80px] pointer-events-none z-0"
        style={{ background: 'radial-gradient(circle, rgba(0,163,255,0.1) 0%, transparent 70%)' }}
      />

      <div className="w-full relative z-10">
        <Hero />
        <Features />
      </div>
    </main>
  );
}
