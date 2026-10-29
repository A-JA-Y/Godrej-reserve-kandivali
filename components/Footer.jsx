import Image from "next/image";
import Link from "next/link";
import { footerNavLinks } from "@/data/siteNav";
import { networkSites } from "@/data/networkSites";
import { MAHARERA_URL, PARTNER, PARTNER_ADDRESS_LINE, RERA_WINGS, SITE_URL } from "@/data/project";
import JsonLd from "./JsonLd";
import logoWhite from "@/assets/godrej-reserve-logo-white.webp";
import partnerLogo from "@/assets/synergy-international-logo-white.webp";
import qrWing1 from "@/assets/rera-qr/wing-1.png";
import qrWing2 from "@/assets/rera-qr/wing-2.png";
import qrWing3 from "@/assets/rera-qr/wing-3.png";
import qrWing4 from "@/assets/rera-qr/wing-4.png";
import qrWing5 from "@/assets/rera-qr/wing-5.png";

// MahaRERA QR codes published by the developer, in RERA_WINGS order (Wing 1–5)
const reraQrCodes = [qrWing1, qrWing2, qrWing3, qrWing4, qrWing5];

export default function Footer() {
  const half = Math.ceil(footerNavLinks.length / 2);
  const col1 = footerNavLinks.slice(0, half);
  const col2 = footerNavLinks.slice(half);
  const additionalLinks = networkSites.filter((site) => site.id !== "godrej-reserve-kandivali");

  return (
    <footer className="w-full bg-[#141004] border-t border-[rgba(242,242,242,0.11)] px-[30px] py-[20px] font-[400]">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "RealEstateAgent",
          "@id": `${SITE_URL}/#channel-partner`,
          name: PARTNER.name,
          description: "Authorised channel partner for Godrej Reserve, Kandivali East, Mumbai.",
          url: `${SITE_URL}/`,
          telephone: PARTNER.phone,
          address: { "@type": "PostalAddress", ...PARTNER.address },
          areaServed: { "@type": "City", name: "Mumbai" },
        }}
      />
      <div className="flex flex-col m-auto max-w-5xl">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8 pt-2">
          <div>
            <Image
              src={logoWhite}
              alt="Godrej Reserve"
              className="w-32 h-auto mb-4"
              sizes="128px"
            />
            <p className="text-gray-400 text-xs leading-relaxed">
              3 &amp; 4 BHK residences with private decks on Akurli Road, Kandivali East — an
              18.6-acre development by Godrej Properties.
            </p>
          </div>

          {/* Quick Links — two sub-columns */}
          <div className="lg:col-span-2">
            <p className="text-[#c9a84c] text-[11px] font-semibold tracking-widest uppercase mb-3">
              Quick Links
            </p>
            <div className="grid grid-cols-2 gap-x-6">
              <ul className="flex flex-col gap-2">
                {col1.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-gray-300 text-xs hover:text-[#DCA54A] transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className="flex flex-col gap-2">
                {col2.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-gray-300 text-xs hover:text-[#DCA54A] transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <p className="text-[#c9a84c] text-[11px] font-semibold tracking-widest uppercase mb-3">
              Mumbai Office
            </p>
            <div className="flex items-start gap-1.5 text-gray-300 text-xs mb-3">
              <svg className="w-3 h-3 text-[#c9a84c] flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
              </svg>
              {PARTNER_ADDRESS_LINE}
            </div>
            <a
              href={`tel:${PARTNER.phone}`}
              className="flex items-center gap-1.5 text-gray-300 text-xs hover:text-[#DCA54A] transition-colors"
            >
              <svg className="w-3 h-3 text-[#c9a84c] flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.81a16 16 0 0 0 6.29 6.29l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              {PARTNER.phoneDisplay}
            </a>
          </div>
        </div>

        {/* MahaRERA registrations with the developer's QR codes */}
        <div className="mb-8 border-t border-white/10 pt-6">
          <p className="text-[#c9a84c] text-[11px] font-semibold tracking-widest uppercase mb-4">
            MahaRERA Registration
          </p>
          <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {RERA_WINGS.map((wing, i) => (
              <li key={wing.number} className="flex items-center gap-3">
                <Image
                  src={reraQrCodes[i]}
                  alt={`MahaRERA QR code for Godrej Reserve ${wing.wing} (${wing.number})`}
                  className="w-14 h-14 bg-white p-1 rounded-sm flex-shrink-0"
                  sizes="56px"
                />
                <span className="text-gray-300 text-[11px] leading-snug">
                  {wing.wing}
                  <br />
                  <span className="text-white font-semibold tracking-wide">{wing.number}</span>
                </span>
              </li>
            ))}
          </ul>
          <p className="text-gray-400 text-[11px] mt-4">
            Verify at{" "}
            <a
              href={MAHARERA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 underline underline-offset-2 hover:text-[#DCA54A]"
            >
              https://maharera.maharashtra.gov.in
            </a>
          </p>
        </div>

        {/* Additional Links — sister project websites */}
        <div className="mb-8">
          <p className="text-[#c9a84c] text-[11px] font-semibold tracking-widest uppercase mb-3">
            Additional Links
          </p>
          <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-6 lg:gap-x-8 gap-y-2">
            {additionalLinks.map((site) => (
              <li key={site.id}>
                <a
                  href={site.url}
                  target="_blank"
                  rel="noopener"
                  className="text-gray-300 text-xs hover:text-[#DCA54A] transition-colors"
                >
                  {site.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="text-center mb-4">
          <p className="text-xs text-gray-400 leading-relaxed">
            Disclaimer : This website is operated by an authorised marketing/channel partner and is
            not the official website of Godrej Properties Ltd. Prices are indicative agreement
            values, exclude taxes and charges, and are subject to change without notice. Images
            are artist&apos;s impressions. Information is compiled from publicly available
            sources; verify all details with the developer and MahaRERA before purchase.
          </p>
          <div className="flex flex-col items-center gap-2 mt-4">
            <Image
              src={partnerLogo}
              alt={PARTNER.name}
              className="w-28 h-auto"
              sizes="112px"
            />
            <p className="text-xs text-gray-400 leading-relaxed">
              Authorised channel partner: {PARTNER.name}
              {PARTNER.reraAgentNo && ` · MahaRERA Agent Reg. No. ${PARTNER.reraAgentNo}`}
            </p>
          </div>
          <hr className="border-t border-gray-700 mt-3" />
        </div>

        <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2 text-center">
          <p className="text-[#fff] text-xs tracking-wide">
            Copyright &copy; 2026{" "}
            <span className="font-bold">{PARTNER.name}</span> &mdash; Authorised Channel Partner
          </p>
          <span className="text-white/20 hidden sm:inline">|</span>
          <Link href="/privacy-policy" className="text-[#fff] text-xs hover:text-[#DCA54A] transition-colors">
            Privacy Policy / Disclaimer
          </Link>
        </div>
      </div>
    </footer>
  );
}
