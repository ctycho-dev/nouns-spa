import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ArticleNotFound() {
  return (
    <div className="max-w-3xl animate-in fade-in duration-700">
      <h1 className="font-heading text-6xl mb-8">Article Not Found</h1>
      <Link
        href="/writing"
        className="inline-flex items-center gap-2 font-heading text-xl text-nouns-red hover:translate-x-2 transition-transform"
      >
        <ArrowLeft size={20} />
        Back to Writing
      </Link>
    </div>
  );
}
