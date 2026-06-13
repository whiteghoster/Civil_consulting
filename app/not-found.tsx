import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[var(--color-primary)] flex items-center justify-center">
      <div className="text-center px-6">
        <div className="text-8xl font-black text-accent/20 font-mono mb-6">404</div>
        <h1 className="text-2xl font-bold text-white mb-3">Page Not Found</h1>
        <p className="text-white/50 text-sm mb-8 max-w-xs mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex gap-3 justify-center">
          <Link
            href="/"
            className="flex items-center gap-2 px-5 py-2.5 bg-accent text-[var(--color-primary)] font-semibold text-sm rounded-xl"
          >
            <Home className="w-4 h-4" />
            Go Home
          </Link>
          <Link
            href="/contact"
            className="flex items-center gap-2 px-5 py-2.5 bg-white/8 text-white font-semibold text-sm rounded-xl border border-white/12"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
