import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Shield, FileText, Scale, Lock, CreditCard, 
  AlertTriangle, Gavel, Phone, Mail, MapPin, 
  ChevronRight, CheckCircle2, ArrowLeft
} from 'lucide-react';

const sections = [
  {
    id: 'acceptance',
    icon: <CheckCircle2 className="w-5 h-5" />,
    title: '1. Acceptance of Terms',
    content: `By accessing, browsing, or using the BugsFixer website ("Site") and any services provided by BugsFixer ("Company," "we," "us," or "our"), you ("User," "you," or "your") acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions ("Terms"). If you do not agree to these Terms in their entirety, you must immediately cease using our Site and services. These Terms constitute a legally binding agreement between you and BugsFixer in accordance with the laws of the Islamic Republic of Pakistan.`
  },
  {
    id: 'services',
    icon: <FileText className="w-5 h-5" />,
    title: '2. Description of Services',
    content: `BugsFixer provides a comprehensive range of IT and technology services, including but not limited to:

• CCTV Installation, Configuration & Security Systems
• Laptop, Desktop & PC Hardware/Software Repair
• Electronics Repair & Diagnostics
• Biometric Systems & Smart Door Lock Installation
• Telephone Networking, PBX Systems & Structured Cabling
• Custom PC Build Bundles & Hardware Procurement
• Annual Maintenance Contracts (AMC) for Business Infrastructure
• Max Sale ERP Dashboard (Professional Plan Clients)
• InfraPlus AMC Portal (Pre-Production / Early Access)

We reserve the right to modify, suspend, or discontinue any service at any time without prior notice. Service availability may vary based on your location within Pakistan.`
  },
  {
    id: 'eligibility',
    icon: <Shield className="w-5 h-5" />,
    title: '3. User Eligibility & Account Responsibility',
    content: `You must be at least 18 years of age or possess legal parental/guardian consent to use our services. By creating an account or accessing our client portals (including Max Sale ERP Dashboard and InfraPlus AMC Portal), you agree to:

• Provide accurate, current, and complete registration information
• Maintain the confidentiality of your login credentials
• Accept full responsibility for all activities conducted under your account
• Immediately notify us of any unauthorized access or security breach
• Not share, sell, or transfer your account to any third party

BugsFixer reserves the right to suspend or terminate accounts that violate these Terms or engage in fraudulent activity.`
  },
  {
    id: 'payment',
    icon: <CreditCard className="w-5 h-5" />,
    title: '4. Payment Terms & Billing',
    content: `All fees for services rendered by BugsFixer are quoted in Pakistani Rupees (PKR) unless otherwise stated. By engaging our services, you agree to the following payment terms:

• Service fees must be paid in full upon completion unless a prior arrangement has been made in writing.
• Annual Maintenance Contract (AMC) fees are billed annually or as per the agreed contract schedule.
• Hardware and parts costs are additional to service/labor charges and are subject to market availability and pricing fluctuations.
• Late payments may incur a penalty of up to 5% per month on the outstanding balance.
• All prices are subject to change without prior notice. However, confirmed quotations remain valid for 7 business days from the date of issue.
• Refunds for completed services are processed on a case-by-case basis and may take 10–15 business days.

Accepted payment methods include bank transfers, JazzCash, EasyPaisa, and cash payments at our service center.`
  },
  {
    id: 'warranty',
    icon: <CheckCircle2 className="w-5 h-5" />,
    title: '5. Warranty & Service Guarantee',
    content: `BugsFixer stands behind the quality of its work. The following warranty terms apply:

• Repair Services: We provide a 15-day warranty on labor for all completed repair services. This warranty covers the specific issue that was diagnosed and repaired.
• Hardware & Parts: All new hardware components carry the manufacturer's original warranty. Refurbished or used parts carry a 7-day replacement warranty.
• CCTV & Security Installations: Installation workmanship is warranted for 90 days from the date of completion.
• AMC Contracts: Service level guarantees are outlined in your specific AMC agreement document.

Warranty does NOT cover:
• Damage caused by misuse, negligence, power surges, liquid damage, or unauthorized third-party repairs
• Software issues arising from user-installed applications or OS modifications
• Hardware failures occurring after the warranty period
• Acts of God, natural disasters, or civil unrest`
  },
  {
    id: 'ip',
    icon: <Lock className="w-5 h-5" />,
    title: '6. Intellectual Property Rights',
    content: `All content, trademarks, logos, graphics, software, code, and materials available on the BugsFixer website and client portals are the exclusive intellectual property of BugsFixer or its licensors and are protected by the copyright and trademark laws of Pakistan and international treaties.

You may not:
• Copy, reproduce, distribute, or create derivative works from our content without explicit written permission
• Reverse-engineer, decompile, or disassemble any software or portal provided by BugsFixer
• Use our branding, logos, or trade names in any manner that implies endorsement or affiliation without consent
• Scrape, mine, or extract data from our website or portals using automated tools

The "BugsFixer" name, logo, and "InfraPlus" and "Max Sale ERP" product names are registered trademarks of BugsFixer.`
  },
  {
    id: 'liability',
    icon: <AlertTriangle className="w-5 h-5" />,
    title: '7. Limitation of Liability',
    content: `To the maximum extent permitted by Pakistani law, BugsFixer and its directors, employees, agents, and partners shall NOT be liable for:

• Any indirect, incidental, special, consequential, or punitive damages arising from your use of our services or website
• Loss of data, profits, revenue, business opportunities, or goodwill
• Service interruptions, delays, or errors caused by factors beyond our reasonable control (including but not limited to ISP outages, power failures, or third-party service disruptions)
• Any unauthorized access to your data despite our reasonable security measures
• Damages exceeding the total amount paid by you to BugsFixer in the 12 months preceding the claim

Our total aggregate liability for any claim shall not exceed the amount you paid for the specific service giving rise to the claim. This limitation applies regardless of the legal theory asserted.`
  },
  {
    id: 'privacy',
    icon: <Lock className="w-5 h-5" />,
    title: '8. Privacy & Data Protection',
    content: `Your privacy is critically important to us. BugsFixer collects, stores, and processes personal data in accordance with the Prevention of Electronic Crimes Act (PECA) 2016 and applicable data protection regulations of Pakistan.

Data We Collect:
• Personal identification (name, CNIC number when required, phone, email)
• Business details (company name, address, NTN)
• Device and service history for repair tracking
• Payment and billing information
• Portal usage data and access logs

How We Use Your Data:
• To deliver and improve our services
• To communicate service updates, invoices, and AMC notifications
• To provide client portal access and support ticket management
• To comply with legal and regulatory obligations

We do NOT sell, rent, or trade your personal information to third parties. Data is stored on secured servers with encryption protocols. For complete details, please refer to our Privacy Policy page.`
  },
  {
    id: 'termination',
    icon: <AlertTriangle className="w-5 h-5" />,
    title: '9. Termination of Services',
    content: `Either party may terminate the service relationship under the following conditions:

By BugsFixer:
• Immediate termination if the User violates any of these Terms
• Termination with 30 days written notice for any reason
• Immediate suspension of portal access for non-payment of AMC fees exceeding 60 days

By the User:
• Termination with 30 days written notice for ongoing AMC contracts
• Immediate cancellation of one-time repair services before work commences (a 20% diagnostic fee may apply if assessment has already begun)

Upon Termination:
• All outstanding invoices become immediately due and payable
• The User must return any BugsFixer-owned equipment or access credentials
• BugsFixer will provide a final data export from client portals within 15 business days upon written request
• Sections regarding IP, Liability, and Governing Law survive termination`
  },
  {
    id: 'governing',
    icon: <Gavel className="w-5 h-5" />,
    title: '10. Governing Law & Dispute Resolution',
    content: `These Terms shall be governed by and construed in accordance with the laws of the Islamic Republic of Pakistan.

Dispute Resolution Process:
1. Informal Resolution: Both parties agree to attempt to resolve any dispute amicably through direct negotiation within 15 business days of written notice.
2. Mediation: If informal resolution fails, the dispute shall be referred to a mutually agreed mediator in Pakistan.
3. Arbitration/Litigation: If mediation is unsuccessful within 30 days, the dispute shall be subject to the exclusive jurisdiction of the courts of competent jurisdiction in Pakistan.

All legal proceedings shall be conducted in the Urdu or English language as per the court's requirements.`
  },
  {
    id: 'modifications',
    icon: <FileText className="w-5 h-5" />,
    title: '11. Modifications to These Terms',
    content: `BugsFixer reserves the right to update, modify, or replace these Terms at any time. When we make material changes:

• We will update the "Last Updated" date at the top of this page
• Active AMC clients will receive email notification of significant changes at least 15 days before they take effect
• Continued use of our services after changes are posted constitutes acceptance of the revised Terms
• If you disagree with the updated Terms, you must discontinue use of our services and terminate your account

We encourage you to review this page periodically to stay informed of any updates.`
  },
  {
    id: 'contact',
    icon: <Phone className="w-5 h-5" />,
    title: '12. Contact Information',
    content: `If you have any questions, concerns, or requests regarding these Terms and Conditions, please contact us through any of the following channels:

Business Name: BugsFixer – Pakistan's Best IT Service Center
WhatsApp / Phone: +92 321 6900448
Email: jeekhurram@yahoo.com
Website: bugsfixerweb.pp.ua
Client Portals: bugsfixer.pp.ua (Max Sale ERP) | InfraPlus AMC Portal

Office Hours: Monday – Saturday, 10:00 AM – 9:00 PM (PKT)
Emergency Support: Available 24/7 for active AMC clients via WhatsApp

We aim to respond to all legal and compliance inquiries within 2 business days.`
  }
];

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      
      {/* Hero Header */}
      <div className="relative bg-slate-900 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-[128px]" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500 rounded-full blur-[128px]" />
        </div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16 sm:pt-16 sm:pb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-6 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span className="text-sm font-semibold">Back to Home</span>
            </Link>

            <div className="flex items-center gap-4 mb-4">
              <div className="bg-blue-600 p-3 rounded-2xl">
                <Scale className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
                  Terms & Conditions
                </h1>
              </div>
            </div>

            <p className="text-slate-400 text-base sm:text-lg max-w-2xl leading-relaxed mt-4">
              Please read these terms carefully before using BugsFixer services. 
              By accessing our website and services, you agree to comply with these terms.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm">
              <span className="flex items-center gap-2 text-slate-500 bg-slate-800/50 px-4 py-2 rounded-full border border-slate-700/50">
                <FileText className="w-4 h-4 text-blue-400" />
                Last Updated: July 2025
              </span>
              <span className="flex items-center gap-2 text-slate-500 bg-slate-800/50 px-4 py-2 rounded-full border border-slate-700/50">
                <Gavel className="w-4 h-4 text-indigo-400" />
                Governed by Pakistan Law
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="max-w-4xl mx-auto">
          
          {/* Important Notice Banner */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-amber-50 border border-amber-200 rounded-2xl p-5 sm:p-6 mb-10 flex items-start gap-4"
          >
            <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-extrabold text-amber-900 text-sm sm:text-base">Important Legal Notice</h3>
              <p className="text-amber-700 text-sm mt-1 leading-relaxed">
                These Terms and Conditions are a legally binding document under the laws of Pakistan. 
                By using any BugsFixer service, website, or client portal, you confirm that you have 
                read and accepted all terms outlined below. If you are entering into this agreement on 
                behalf of a company, you represent that you have the authority to bind that entity.
              </p>
            </div>
          </motion.div>

          {/* Table of Contents (Mobile Friendly) */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 mb-10 shadow-sm"
          >
            <h2 className="text-lg font-black text-slate-900 mb-4 flex items-center gap-2">
              <FileText className="w-5 h-5 text-blue-600" />
              Table of Contents
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-blue-600 hover:bg-blue-50 px-3 py-2 rounded-xl transition-all group"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-0.5 transition-all" />
                  {section.title}
                </a>
              ))}
            </div>
          </motion.div>

          {/* All Sections */}
          <div className="space-y-8">
            {sections.map((section, index) => (
              <motion.section
                key={section.id}
                id={section.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.03 }}
                className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                {/* Section Header */}
                <div className="bg-slate-50 border-b border-slate-100 px-6 sm:px-8 py-4 flex items-center gap-3">
                  <div className="text-blue-600 bg-blue-100 p-2 rounded-xl">
                    {section.icon}
                  </div>
                  <h2 className="text-lg sm:text-xl font-black text-slate-900">
                    {section.title}
                  </h2>
                </div>

                {/* Section Content */}
                <div className="px-6 sm:px-8 py-6">
                  <div className="text-slate-600 text-sm sm:text-base leading-relaxed whitespace-pre-line">
                    {section.content}
                  </div>
                </div>
              </motion.section>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 sm:p-10 text-center relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-[80px]" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-600/10 rounded-full blur-[80px]" />
            
            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl font-black text-white mb-3">
                Have Questions About These Terms?
              </h3>
              <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto mb-8">
                Our team is happy to clarify any legal or service-related queries. 
                Reach out to us anytime via WhatsApp or email.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="https://wa.me/923216900448"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25D366] hover:bg-[#20ba5a] text-white px-8 py-3.5 rounded-full font-bold text-sm flex items-center gap-2 transition-all shadow-lg"
                >
                  <Phone className="w-4 h-4" />
                  Chat on WhatsApp
                </a>
                <a
                  href="mailto:jeekhurram@yahoo.com"
                  className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-3.5 rounded-full font-bold text-sm flex items-center gap-2 transition-all"
                >
                  <Mail className="w-4 h-4" />
                  Email Us
                </a>
              </div>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-500">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" />
                  Pakistan
                </span>
                <span className="flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5" />
                  +92 321 6900448
                </span>
                <span className="flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5" />
                  support@bugsfixer.pk
                </span>
              </div>
            </div>
          </motion.div>

          {/* Footer Note */}
          <p className="text-center text-xs text-slate-400 mt-10 leading-relaxed">
            © {new Date().getFullYear()} BugsFixer. All rights reserved. 
            These Terms and Conditions are governed by the laws of the Islamic Republic of Pakistan.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;