import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Privacy Policy | Sentosh",
  description: "Sentosh Privacy Policy - Learn how we collect, use, and protect your data.",
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-24 pb-16">
        <div className="container max-w-4xl px-4">
          <div className="mb-8">
            <Link
              href="/"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              ← Back to Home
            </Link>
          </div>
          
          <h1 className="mb-4 text-4xl font-bold">Privacy Policy</h1>
          <p className="mb-8 text-muted-foreground">
            Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
          </p>

          <div className="prose prose-slate dark:prose-invert max-w-none">
            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold">1. Introduction</h2>
              <p className="mb-4 text-muted-foreground">
                Welcome to Sentosh ("we," "our," or "us"). We are committed to protecting your privacy and ensuring you have a positive experience on our website and in using our products and services. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold">2. Information We Collect</h2>
              
              <h3 className="mb-3 text-xl font-semibold">2.1 Information You Provide</h3>
              <p className="mb-4 text-muted-foreground">
                We collect information that you provide directly to us, including:
              </p>
              <ul className="mb-4 ml-6 list-disc space-y-2 text-muted-foreground">
                <li>Account registration information (name, email address, password)</li>
                <li>Profile information and preferences</li>
                <li>Payment and billing information</li>
                <li>Content you create, upload, or share through our services</li>
                <li>Communications with us (support requests, feedback)</li>
              </ul>

              <h3 className="mb-3 text-xl font-semibold">2.2 Automatically Collected Information</h3>
              <p className="mb-4 text-muted-foreground">
                When you use our services, we automatically collect certain information, including:
              </p>
              <ul className="mb-4 ml-6 list-disc space-y-2 text-muted-foreground">
                <li>Device information (IP address, browser type, operating system)</li>
                <li>Usage data (pages visited, features used, time spent)</li>
                <li>Cookies and similar tracking technologies</li>
                <li>Log files and analytics data</li>
              </ul>

              <h3 className="mb-3 text-xl font-semibold">2.3 Social Media Account Information</h3>
              <p className="mb-4 text-muted-foreground">
                When you connect your social media accounts to Sentosh, we may access and collect information from those accounts as permitted by the respective platform's terms and your authorization. This may include profile information, posts, engagement metrics, and other data necessary to provide our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold">3. How We Use Your Information</h2>
              <p className="mb-4 text-muted-foreground">
                We use the information we collect to:
              </p>
              <ul className="mb-4 ml-6 list-disc space-y-2 text-muted-foreground">
                <li>Provide, maintain, and improve our services</li>
                <li>Process transactions and send related information</li>
                <li>Send you technical notices, updates, and support messages</li>
                <li>Respond to your comments, questions, and requests</li>
                <li>Monitor and analyze trends, usage, and activities</li>
                <li>Detect, prevent, and address technical issues and security threats</li>
                <li>Personalize and improve your experience</li>
                <li>Send you marketing communications (with your consent)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold">4. Information Sharing and Disclosure</h2>
              <p className="mb-4 text-muted-foreground">
                We do not sell your personal information. We may share your information in the following circumstances:
              </p>
              <ul className="mb-4 ml-6 list-disc space-y-2 text-muted-foreground">
                <li><strong>Service Providers:</strong> We may share information with third-party service providers who perform services on our behalf</li>
                <li><strong>Legal Requirements:</strong> We may disclose information if required by law or in response to valid legal requests</li>
                <li><strong>Business Transfers:</strong> Information may be transferred in connection with a merger, acquisition, or sale of assets</li>
                <li><strong>With Your Consent:</strong> We may share information with your explicit consent</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold">5. Data Security</h2>
              <p className="mb-4 text-muted-foreground">
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold">6. Your Rights and Choices</h2>
              <p className="mb-4 text-muted-foreground">
                Depending on your location, you may have certain rights regarding your personal information, including:
              </p>
              <ul className="mb-4 ml-6 list-disc space-y-2 text-muted-foreground">
                <li>Access and receive a copy of your personal data</li>
                <li>Rectify inaccurate or incomplete information</li>
                <li>Request deletion of your personal data</li>
                <li>Object to or restrict processing of your information</li>
                <li>Data portability</li>
                <li>Withdraw consent where processing is based on consent</li>
              </ul>
              <p className="mb-4 text-muted-foreground">
                To exercise these rights, please contact us at privacy@sentosh.com.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold">7. Cookies and Tracking Technologies</h2>
              <p className="mb-4 text-muted-foreground">
                We use cookies and similar tracking technologies to collect and store information about your preferences and usage patterns. You can control cookies through your browser settings, but disabling cookies may limit your ability to use certain features of our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold">8. Children's Privacy</h2>
              <p className="mb-4 text-muted-foreground">
                Our services are not intended for individuals under the age of 13. We do not knowingly collect personal information from children under 13. If you believe we have collected information from a child under 13, please contact us immediately.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold">9. International Data Transfers</h2>
              <p className="mb-4 text-muted-foreground">
                Your information may be transferred to and processed in countries other than your country of residence. These countries may have data protection laws that differ from those in your country. By using our services, you consent to the transfer of your information to these countries.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold">10. Changes to This Privacy Policy</h2>
              <p className="mb-4 text-muted-foreground">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically for any changes.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold">11. Contact Us</h2>
              <p className="mb-4 text-muted-foreground">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <div className="mb-4 rounded-lg border bg-muted/50 p-4">
                <p className="text-muted-foreground">
                  <strong>Email:</strong> privacy@sentosh.com<br />
                  <strong>Address:</strong> Sentosh, 123 Business Street, City, State, ZIP Code
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

