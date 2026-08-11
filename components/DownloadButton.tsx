import Link from "next/link";

export function DownloadButton({ label }: { label: string }) {
  return (
    <Link
      href="/download"
      className="relative flex h-10 shrink-0 items-center justify-center rounded-[6px] border border-[#a6a6a6] bg-black px-6 font-sans text-[15px] font-bold text-white"
    >
      {label}
    </Link>
  );
}
