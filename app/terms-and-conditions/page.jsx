import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AddProject from "@/components/AddProjectPanel";

export const metadata = {
  title: "Terms & Conditions",
  description:
    "Scenthub Realty & Construction Limited delivers premium construction, renovation, and real estate solutions in Nigeria.",
};

export default function TermsAndConditions() {
    return (
        <>
            <Navbar />
            <main className="pb-24 mt-20 bg-white">
                <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-16 py-16">

                                {/* <AddProject /> */}


                    {/* Header */}
                    <div className="mb-20 text-center">
                        {/* <p className="uppercase tracking-[4px] text-sm text-[var(--norms)] font-semibold">
                            Legal
                        </p> */}

                        <h1 className="mt-4 text-4xl md:text-6xl font-bold text-gray-900">
                            Terms & Conditions
                        </h1>

                        <p className="mt-6 max-w-3xl mx-auto text-gray-600 leading-8">
                            These Terms & Conditions govern your use of the
                            Scenthub Realty & Construction Limited website and
                            the services we provide. By accessing this website,
                            you agree to comply with these terms.
                        </p>
                    </div>

                    <div className="space-y-16 text-gray-700 leading-8 mt-4">

                        {/* 1 */}
                        <section className="mb-4">
                            <h2 className="text-2xl font-semibold mb-4">
                                1. Acceptance of Terms
                            </h2>

                            <p>
                                By accessing or using this website, you agree to
                                be legally bound by these Terms & Conditions.
                                If you do not agree with any part of these
                                terms, please discontinue use of the website.
                            </p>
                        </section>

                        {/* 2 */}
                        <section className="mb-4">
                            <h2 className="text-2xl font-semibold mb-4">
                                2. Our Services
                            </h2>

                            <p>
                                Scenthub Realty & Construction Limited provides
                                construction, renovation, project management,
                                engineering consultancy, property development,
                                and related real estate services. Information
                                provided on this website is for general
                                informational purposes and may be updated at any
                                time without prior notice.
                            </p>
                        </section>

                        {/* 3 */}
                        <section className="mb-4">
                            <h2 className="text-2xl font-semibold mb-4">
                                3. Quotations & Contracts
                            </h2>

                            <p>
                                Any quotation submitted through this website is
                                subject to review and approval. A project shall
                                only commence after a formal written agreement
                                has been signed by both parties.
                            </p>
                        </section>

                        {/* 4 */}
                        <section className="mb-4">
                            <h2 className="text-2xl font-semibold mb-4">
                                4. Intellectual Property
                            </h2>

                            <p>
                                All content on this website—including images,
                                logos, project photographs, text, graphics,
                                designs, and other materials—is the property of
                                Scenthub Realty & Construction Limited unless
                                otherwise stated. Unauthorized reproduction,
                                distribution, or commercial use is prohibited.
                            </p>
                        </section>

                        {/* 5 */}
                        <section className="mb-4">
                            <h2 className="text-2xl font-semibold mb-4">
                                5. User Responsibilities
                            </h2>

                            <ul className="list-disc pl-6 space-y-3">
                                <li>Provide accurate information when making inquiries.</li>
                                <li>Use this website only for lawful purposes.</li>
                                <li>Do not interfere with website functionality.</li>
                                <li>Do not upload malicious software or harmful content.</li>
                            </ul>
                        </section>

                        {/* 6 */}
                        <section className="mb-4">
                            <h2 className="text-2xl font-semibold mb-4">
                                6. Project Timelines
                            </h2>

                            <p>
                                Estimated project durations are subject to site
                                conditions, regulatory approvals, weather,
                                material availability, client decisions, and
                                other unforeseen circumstances. We strive to
                                deliver projects on schedule but cannot
                                guarantee completion dates under every
                                circumstance.
                            </p>
                        </section>

                        {/* 7 */}
                        <section className="mb-4">
                            <h2 className="text-2xl font-semibold mb-4">
                                7. Payments
                            </h2>

                            <p>
                                Payment terms for construction or real estate
                                projects shall be specified within individual
                                contracts. Failure to comply with agreed payment
                                schedules may result in suspension of services
                                until outstanding balances are settled.
                            </p>
                        </section>

                        {/* 8 */}
                        <section className="mb-4">
                            <h2 className="text-2xl font-semibold mb-4">
                                8. Limitation of Liability
                            </h2>

                            <p>
                                While every effort is made to ensure the
                                accuracy of the information presented, Scenthub
                                Realty & Construction Limited shall not be held
                                liable for any direct, indirect, incidental, or
                                consequential damages arising from the use of
                                this website or reliance on its contents.
                            </p>
                        </section>

                        {/* 9 */}
                        <section className="mb-4">
                            <h2 className="text-2xl font-semibold mb-4">
                                9. Third-Party Links
                            </h2>

                            <p>
                                This website may contain links to third-party
                                websites for convenience. We do not endorse or
                                assume responsibility for the content,
                                availability, or practices of external websites.
                            </p>
                        </section>

                        {/* 10 */}
                        <section className="mb-4">
                            <h2 className="text-2xl font-semibold mb-4">
                                10. Privacy
                            </h2>

                            <p>
                                Information submitted through contact forms or
                                quotation requests will be handled in accordance
                                with our Privacy Policy and applicable data
                                protection laws.
                            </p>
                        </section>

                        {/* 11 */}
                        <section className="mb-4">
                            <h2 className="text-2xl font-semibold mb-4">
                                11. Governing Law
                            </h2>

                            <p>
                                These Terms & Conditions shall be governed by
                                and interpreted in accordance with the laws of
                                the Federal Republic of Nigeria. Any disputes
                                arising from the use of this website shall be
                                subject to the jurisdiction of Nigerian courts.
                            </p>
                        </section>

                        {/* 12 */}
                        <section className="mb-4">
                            <h2 className="text-2xl font-semibold mb-4">
                                12. Changes to These Terms
                            </h2>

                            <p>
                                We reserve the right to update or modify these
                                Terms & Conditions at any time without prior
                                notice. Continued use of this website after
                                changes have been made constitutes acceptance of
                                the revised terms.
                            </p>
                        </section>

                        {/* Contact */}
                        <section className="p-10 mt-16 mb-16">
                            <h2 className="text-2xl font-semibold mb-4">
                                Contact Us
                            </h2>

                            <p className="text-gray-600">
                                If you have any questions regarding these Terms
                                & Conditions, please contact Scenthub Realty &
                                Construction Limited through the contact details
                                provided on our Contact page.
                            </p>
                        </section>

                    </div>
                </div>
            </main>

            <Footer />
        </>
    );
}