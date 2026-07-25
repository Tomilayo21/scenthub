"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
    return (
        <>
            <Navbar />

            <main className="pb-24 bg-white">
                <div className="max-w-5xl mx-auto px-6 md:px-12 lg:px-16 py-4">

                    {/* Header */}
                    <div className="mb-20 text-center">
                        <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
                            Privacy Policy
                        </h1>

                        <p className="mt-6 max-w-3xl mx-auto text-gray-600 leading-8">
                            At Scenthub Realty & Construction Limited, we are
                            committed to protecting your privacy. This Privacy
                            Policy explains how we collect, use, store, and
                            safeguard your personal information when you visit
                            our website or use our services.
                        </p>
                    </div>

                    <div className="space-y-16 text-gray-700 leading-8 mt-4">

                        {/* 1 */}
                        <section className="mb-4">
                            <h2 className="text-2xl font-semibold mb-4">
                                1. Information We Collect
                            </h2>

                            <p>
                                We may collect personal information that you
                                voluntarily provide when contacting us,
                                requesting a quotation, subscribing to updates,
                                or filling out forms on our website. This may
                                include your name, email address, phone number,
                                company name, project details, and any other
                                information you choose to provide.
                            </p>
                        </section>

                        {/* 2 */}
                        <section className="mb-4">
                            <h2 className="text-2xl font-semibold mb-4">
                                2. How We Use Your Information
                            </h2>

                            <p>
                                We use the information collected to respond to
                                inquiries, prepare project quotations, improve
                                our services, communicate project updates,
                                provide customer support, and maintain the
                                security and functionality of our website.
                            </p>
                        </section>

                        {/* 3 */}
                        <section className="mb-4">
                            <h2 className="text-2xl font-semibold mb-4">
                                3. Cookies & Analytics
                            </h2>

                            <p>
                                Our website may use cookies and similar
                                technologies to improve user experience, analyze
                                website traffic, and remember user preferences.
                                You may choose to disable cookies through your
                                browser settings, although some website features
                                may not function properly.
                            </p>
                        </section>

                        {/* 4 */}
                        <section className="mb-4">
                            <h2 className="text-2xl font-semibold mb-4">
                                4. Sharing of Information
                            </h2>

                            <p>
                                We do not sell, rent, or trade your personal
                                information to third parties. Information may be
                                shared with trusted service providers,
                                consultants, or legal authorities only when
                                necessary to provide our services, comply with
                                legal obligations, or protect our rights.
                            </p>
                        </section>

                        {/* 5 */}
                        <section className="mb-4">
                            <h2 className="text-2xl font-semibold mb-4">
                                5. Data Security
                            </h2>

                            <p>
                                We implement appropriate technical and
                                organizational measures to protect your personal
                                information against unauthorized access,
                                alteration, disclosure, or destruction. While we
                                strive to safeguard your data, no method of
                                electronic transmission or storage is completely
                                secure.
                            </p>
                        </section>

                        {/* 6 */}
                        <section className="mb-4">
                            <h2 className="text-2xl font-semibold mb-4">
                                6. Data Retention
                            </h2>

                            <p>
                                We retain personal information only for as long
                                as necessary to fulfill the purposes outlined in
                                this Privacy Policy, comply with legal
                                obligations, resolve disputes, and enforce our
                                agreements.
                            </p>
                        </section>

                        {/* 7 */}
                        <section className="mb-4">
                            <h2 className="text-2xl font-semibold mb-4">
                                7. Your Rights
                            </h2>

                            <p>
                                Depending on applicable laws, you may have the
                                right to access, correct, update, or request the
                                deletion of your personal information. You may
                                also withdraw your consent to certain data
                                processing activities where permitted by law.
                            </p>
                        </section>

                        {/* 8 */}
                        <section className="mb-4">
                            <h2 className="text-2xl font-semibold mb-4">
                                8. Third-Party Websites
                            </h2>

                            <p>
                                Our website may contain links to external
                                websites. We are not responsible for the privacy
                                practices, security, or content of third-party
                                websites. We encourage you to review their
                                privacy policies before providing any personal
                                information.
                            </p>
                        </section>

                        {/* 9 */}
                        <section className="mb-4">
                            <h2 className="text-2xl font-semibold mb-4">
                                9. Children's Privacy
                            </h2>

                            <p>
                                Our services are not directed toward individuals
                                under the age of 18. We do not knowingly collect
                                personal information from children. If such
                                information is identified, we will take
                                reasonable steps to remove it promptly.
                            </p>
                        </section>

                        {/* 10 */}
                        <section className="mb-4">
                            <h2 className="text-2xl font-semibold mb-4">
                                10. Changes to This Privacy Policy
                            </h2>

                            <p>
                                We reserve the right to update this Privacy
                                Policy whenever necessary. Any changes will be
                                posted on this page, and your continued use of
                                our website constitutes acceptance of the revised
                                policy.
                            </p>
                        </section>

                        {/* 11 */}
                        <section className="mb-4">
                            <h2 className="text-2xl font-semibold mb-4">
                                11. Contact Us
                            </h2>

                            <p>
                                If you have any questions, concerns, or requests
                                regarding this Privacy Policy or the handling of
                                your personal information, please contact
                                Scenthub Realty & Construction Limited through
                                the contact details provided on our Contact
                                page.
                            </p>
                        </section>

                        {/* Contact */}
                        <section className="p-10 mt-16 mb-16">
                            <h2 className="text-2xl font-semibold mb-4">
                                Your Privacy Matters
                            </h2>

                            <p className="text-gray-600">
                                We value the trust you place in Scenthub Realty
                                & Construction Limited and are committed to
                                protecting your personal information with
                                transparency, integrity, and industry-standard
                                security practices.
                            </p>
                        </section>

                    </div>
                </div>
            </main>

            <Footer />
        </>
    );
}