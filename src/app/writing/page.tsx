import { redirect } from "next/navigation";
import { siteConfig } from "@/config/site";

export default function WritingPage() {
  redirect(siteConfig.substackUrl);
}
