"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AppStoreButton, GooglePlayButton } from "@/components/StoreButton";

const APP_STORE_URL = "https://apps.apple.com/pl/app/my-thaipass/id6761145502";
const GOOGLE_PLAY_URL = "https://play.google.com/store/apps/details?id=com.thaipass.prod";

function getStoreUrlForDevice(): string | null {
  const ua = navigator.userAgent || navigator.vendor || "";

  const isIOS =
    /iPad|iPhone|iPod/.test(ua) ||
    (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
  if (isIOS) return APP_STORE_URL;

  if (/android/i.test(ua)) return GOOGLE_PLAY_URL;

  return null;
}

export function DownloadPage() {
  const [showFallback, setShowFallback] = useState(false);

  useEffect(() => {
    const checkDevice = () => {
      const storeUrl = getStoreUrlForDevice();
      if (storeUrl) {
        window.location.replace(storeUrl);
        return;
      }
      setShowFallback(true);
    };
    checkDevice();
  }, []);

  return (
    <>
      <noscript>
        <main className="flex min-h-screen flex-col items-center justify-center gap-8 bg-white px-6 py-20 text-center md:py-28">
          <h1 className="font-serif text-[32px] font-semibold leading-[1.1] text-navy-900 sm:text-[40px]">
            Get ThaiPass
          </h1>
          <p className="font-sans text-base leading-[1.6] text-neutral-800">
            Download ThaiPass for iOS or Android.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-[18px]">
            <a href={APP_STORE_URL} className="font-sans text-base text-accent underline">
              Download on the App Store
            </a>
            <a href={GOOGLE_PLAY_URL} className="font-sans text-base text-accent underline">
              Get it on Google Play
            </a>
          </div>
        </main>
      </noscript>

      {showFallback && (
        <>
          <Header />
          <main className="flex min-h-screen flex-col items-center justify-center gap-8 bg-white px-6 py-20 text-center md:py-28">
            <Image src="/logo.svg" alt="ThaiPass" width={158} height={39} priority />
            <div className="flex max-w-[420px] flex-col gap-3">
              <h1 className="font-serif text-[32px] font-semibold leading-[1.1] text-navy-900 sm:text-[40px]">
                Get ThaiPass
              </h1>
              <p className="font-sans text-base leading-[1.6] text-neutral-800">
                Download ThaiPass for iOS or Android.
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-[18px]">
              <AppStoreButton href={APP_STORE_URL} />
              <GooglePlayButton href={GOOGLE_PLAY_URL} />
            </div>
          </main>
          <Footer />
        </>
      )}
    </>
  );
}
