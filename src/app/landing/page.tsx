import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";

export default function LandingPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-black text-white">
      <div className="w-full">
        <Hero />
        <Features />
        
        {/* Footer */}
        <footer className="w-full py-20 px-8 border-t border-white/5 mt-20">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-white/30 text-sm">
              © 2026 Hexa AI Platform. All rights reserved.
            </div>
            <div className="flex gap-8 text-sm text-white/50 font-medium tracking-tight">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Twitter (X)</a>
              <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
