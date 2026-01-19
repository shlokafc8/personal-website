import type { Metadata } from "next";
import "./globals.css";
import { PageContainer } from "@/components/PageContainer";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: {
    default: siteConfig.siteName,
    template: `%s · ${siteConfig.siteName}`
  },
  description: "Personal site with writing, bookshelf, and travel."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
        <footer className="border-t border-subtle">
          <PageContainer>
            <a href={siteConfig.twitterUrl} className="text-sm text-[var(--text)] hover:text-[var(--text)]">
              Twitter
            </a>
          </PageContainer>
        </footer>
      </body>
    </html>
  );
}
