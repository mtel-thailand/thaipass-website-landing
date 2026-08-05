import Image from "next/image";

export function AppStoreButton() {
  return (
    <a
      href="#"
      className="relative flex h-10 w-[120px] shrink-0 items-center gap-[8px] overflow-clip rounded-[6px] border border-[#a6a6a6] bg-black pl-[7px]"
    >
      <Image src="/icons/apple.svg" alt="" width={20} height={24} />
      <span className="flex flex-col text-white">
        <span className="font-sans text-[9px] leading-[9px]">Download on the</span>
        <span className="font-sans text-[18px] leading-none tracking-[-0.47px]">App Store</span>
      </span>
    </a>
  );
}

export function GooglePlayButton() {
  return (
    <a
      href="#"
      className="relative flex h-10 w-[120px] shrink-0 items-center gap-[7px] overflow-clip rounded-[6px] border border-[#a6a6a6] bg-black pl-[7px]"
    >
      <Image src="/icons/playstore.svg" alt="" width={21} height={24} />
      <span className="flex flex-col items-start gap-[3px]">
        <span className="font-sans text-[10px] uppercase leading-none text-white">
          Get it on
        </span>
        <span className="h-[15px] w-[74px] shrink-0 scale-y-[-1]">
          <Image
            src="/icons/google-play-text.svg"
            alt="Google Play"
            width={74}
            height={15}
          />
        </span>
      </span>
    </a>
  );
}
