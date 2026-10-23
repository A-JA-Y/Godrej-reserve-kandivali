import type { Metadata } from "next";

// Post-submission confirmation: keep it out of search results.
export const metadata: Metadata = {
  title: "Thank You | Godrej Reserve Kandivali",
  robots: { index: false, follow: false },
};

export default function ThankYouLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
