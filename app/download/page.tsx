import type { Metadata } from "next";
import { DownloadPage } from "@/components/DownloadPage";

export const metadata: Metadata = {
  title: "Get ThaiPass",
};

export default function Download() {
  return <DownloadPage />;
}
