import type { Metadata } from "next";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import Breadcrumbs from "@/components/Breadcrumbs";
import { MAHARERA_URL, PARTNER, RERA_WINGS } from "@/data/project";
import { pageMetadata } from "@/utils/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Privacy Policy & Disclaimer | Godrej Reserve Kandivali",
  description:
    "Privacy policy and disclaimer for the Godrej Reserve Kandivali channel-partner website. Read the terms of use and information disclaimer.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Privacy Policy", path: "/privacy-policy" }]} />
      <PageBanner
        eyebrow="Legal"
        title="Privacy Policy / Disclaimer"
        subtitle="Please read the following terms before using this website."
      />

      <section className="w-full bg-white py-16 px-6">
        <div className="max-w-3xl mx-auto flex flex-col gap-8 text-sm text-gray-600 leading-relaxed">
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">Disclaimer</h2>
            <p>
              This website is operated by an authorised marketing/channel partner ({PARTNER.name})
              and is not the official website of Godrej Properties Ltd. Prices are indicative
              agreement values, exclude taxes and charges, and are subject to change without
              notice. Images are artist&apos;s impressions. Information is compiled from publicly
              available sources; verify all details with the developer and MahaRERA before
              purchase. All rights for logos and images are reserved by the developer.
            </p>
            <p className="mt-3">
              By using or accessing this website you agree with the disclaimer without
              any limitation. By accessing this website, the viewer confirms that the
              information including brochures and marketing collaterals on this website
              are solely for informational purposes only, and the viewer has not relied
              on this information for making any booking or purchase in any project of
              the company.
            </p>
            <p className="mt-3">
              MahaRERA:{" "}
              {RERA_WINGS.map((w) => `${w.wing} ${w.number}`).join(" | ")} —{" "}
              <a href={MAHARERA_URL} target="_blank" rel="noopener noreferrer" className="text-[#DCA54A] hover:underline">
                https://maharera.maharashtra.gov.in
              </a>
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">Privacy Policy</h2>
            <p>
              We respect your privacy. Information submitted through enquiry forms on
              this website (such as name, phone number, and email) is used only to
              respond to your request and provide project-related information.
            </p>
            <p className="mt-3">
              We do not sell your personal data to third parties. Data may be shared
              with authorised representatives solely for the purpose of assisting you
              with project-related queries.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">Accuracy of Information</h2>
            <p>
              Project details, pricing, floor plans, and availability mentioned on this
              website are indicative and subject to change without prior notice. Users
              are advised to verify all details with the authorised sales team before
              making any decision.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">Contact</h2>
            <p>
              For any queries regarding this website, please visit our{" "}
              <Link href="/contact-us" className="text-[#DCA54A] hover:underline">
                Contact Us
              </Link>{" "}
              page or call {PARTNER.phoneDisplay}.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
