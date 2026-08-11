import Link from "next/link";

export function DownloadButton({ label }: { label: string }) {
  return (
    <Link
      href="/download"
      className="relative flex h-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-b from-[#ff6a5c] to-accent px-10 font-sans text-lg font-bold text-white shadow-[0_10px_30px_-8px_rgba(241,76,68,0.55)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_14px_34px_-8px_rgba(241,76,68,0.65)]"
    >
      {label}
    </Link>
  );
}
