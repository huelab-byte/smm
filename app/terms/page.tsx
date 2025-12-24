import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Terms of Service | Sentosh",
  description: "Sentosh Terms of Service - Read our terms and conditions for using our platform.",
}

export default function TermsPage() {
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
          
          <h1 className="mb-4 text-4xl font-bold">Terms of Service</h1>
          <p className="mb-8 text-muted-foreground">
            Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
          </p>

          <div className="prose prose-slate dark:prose-invert max-w-none">
            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold">1. Acceptance of Terms</h2>
              <p className="mb-4 text-muted-foreground">
                By accessing and using Sentosh ("the Service"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold">2. Description of Service</h2>
              <p className="mb-4 text-muted-foreground">
                Sentosh is a social media management platform that allows users to schedule posts, manage multiple social media accounts, analyze performance, and automate social media activities. The Service is provided "as is" and may be modified, suspended, or discontinued at any time without notice.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold">3. User Accounts</h2>
              
              <h3 className="mb-3 text-xl font-semibold">3.1 Registration</h3>
              <p className="mb-4 text-muted-foreground">
                To use certain features of the Service, you must register for an account. You agree to:
              </p>
              <ul className="mb-4 ml-6 list-disc space-y-2 text-muted-foreground">
                <li>Provide accurate, current, and complete information during registration</li>
                <li>Maintain and update your account information to keep it accurate</li>
                <li>Maintain the security of your password and identification</li>
                <li>Accept responsibility for all activities under your account</li>
                <li>Notify us immediately of any unauthorized use of your account</li>
              </ul>

              <h3 className="mb-3 text-xl font-semibold">3.2 Account Responsibility</h3>
              <p className="mb-4 text-muted-foreground">
                You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. We are not liable for any loss or damage arising from your failure to comply with this obligation.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold">4. Acceptable Use</h2>
              <p className="mb-4 text-muted-foreground">
                You agree not to use the Service to:
              </p>
              <ul className="mb-4 ml-6 list-disc space-y-2 text-muted-foreground">
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe upon the rights of others, including intellectual property rights</li>
                <li>Transmit any harmful, offensive, or inappropriate content</li>
                <li>Spam, harass, or abuse other users</li>
                <li>Attempt to gain unauthorized access to the Service or related systems</li>
                <li>Interfere with or disrupt the Service or servers</li>
                <li>Use automated systems to access the Service without permission</li>
                <li>Reverse engineer, decompile, or disassemble any part of the Service</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold">5. Content and Intellectual Property</h2>
              
              <h3 className="mb-3 text-xl font-semibold">5.1 Your Content</h3>
              <p className="mb-4 text-muted-foreground">
                You retain ownership of any content you create, upload, or share through the Service. By using the Service, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, and distribute your content solely for the purpose of providing and improving the Service.
              </p>

              <h3 className="mb-3 text-xl font-semibold">5.2 Our Intellectual Property</h3>
              <p className="mb-4 text-muted-foreground">
                The Service, including its original content, features, and functionality, is owned by Sentosh and is protected by international copyright, trademark, patent, trade secret, and other intellectual property laws. You may not copy, modify, distribute, sell, or lease any part of our Service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold">6. Payment and Billing</h2>
              
              <h3 className="mb-3 text-xl font-semibold">6.1 Subscription Plans</h3>
              <p className="mb-4 text-muted-foreground">
                The Service is offered on a subscription basis. By subscribing, you agree to pay the fees associated with your chosen plan. Fees are billed in advance on a monthly or annual basis, as selected.
              </p>

              <h3 className="mb-3 text-xl font-semibold">6.2 Free Trial</h3>
              <p className="mb-4 text-muted-foreground">
                We may offer a free trial period. At the end of the trial period, your subscription will automatically convert to a paid plan unless you cancel before the trial ends.
              </p>

              <h3 className="mb-3 text-xl font-semibold">6.3 Cancellation and Refunds</h3>
              <p className="mb-4 text-muted-foreground">
                You may cancel your subscription at any time. Cancellation will take effect at the end of your current billing period. Refunds are provided at our discretion and in accordance with our refund policy.
              </p>

              <h3 className="mb-3 text-xl font-semibold">6.4 Price Changes</h3>
              <p className="mb-4 text-muted-foreground">
                We reserve the right to modify subscription fees. We will provide notice of any price changes, and you may cancel your subscription if you do not agree to the new pricing.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold">7. Third-Party Services</h2>
              <p className="mb-4 text-muted-foreground">
                The Service may integrate with third-party social media platforms and services. Your use of these third-party services is subject to their respective terms of service and privacy policies. We are not responsible for the practices of third-party services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold">8. Service Availability</h2>
              <p className="mb-4 text-muted-foreground">
                We strive to provide reliable service but do not guarantee that the Service will be available at all times. The Service may be unavailable due to maintenance, updates, technical issues, or other reasons beyond our control. We are not liable for any damages resulting from Service unavailability.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold">9. Limitation of Liability</h2>
              <p className="mb-4 text-muted-foreground">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, SENTOSH SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM YOUR USE OF THE SERVICE.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold">10. Indemnification</h2>
              <p className="mb-4 text-muted-foreground">
                You agree to indemnify and hold harmless Sentosh, its officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses (including legal fees) arising out of or relating to your use of the Service, violation of these Terms, or infringement of any rights of another.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold">11. Termination</h2>
              <p className="mb-4 text-muted-foreground">
                We may terminate or suspend your account and access to the Service immediately, without prior notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third parties. Upon termination, your right to use the Service will cease immediately.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold">12. Changes to Terms</h2>
              <p className="mb-4 text-muted-foreground">
                We reserve the right to modify these Terms at any time. We will notify users of any material changes by posting the new Terms on this page and updating the "Last updated" date. Your continued use of the Service after such modifications constitutes acceptance of the updated Terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold">13. Governing Law</h2>
              <p className="mb-4 text-muted-foreground">
                These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which Sentosh operates, without regard to its conflict of law provisions. Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of the courts in that jurisdiction.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold">14. Severability</h2>
              <p className="mb-4 text-muted-foreground">
                If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary, and the remaining provisions shall remain in full force and effect.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold">15. Contact Information</h2>
              <p className="mb-4 text-muted-foreground">
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <div className="mb-4 rounded-lg border bg-muted/50 p-4">
                <p className="text-muted-foreground">
                  <strong>Email:</strong> legal@sentosh.com<br />
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

