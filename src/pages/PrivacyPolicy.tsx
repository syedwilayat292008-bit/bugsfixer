import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Shield, Eye, Database, Lock, Cookie, UserCheck, 
  AlertTriangle, Phone, Mail, MapPin, ChevronRight, 
  FileText, ArrowLeft, Globe, Smartphone, Server,
  Trash2, RefreshCw, Bell, Users
} from 'lucide-react';

const sections = [
  {
    id: 'introduction',
    icon: <Shield className="w-5 h-5" />,
    title: '1. Introduction',
    content: `Welcome to BugsFixer ("Company," "we," "us," or "our"). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your data when you visit our website, use our client portals, or engage any of our IT services.

This policy applies to all information collected through:
• Our website (bugsfixerweb.pp.ua)
• Client portals (Max Sale ERP Dashboard & InfraPlus AMC Portal)
• WhatsApp communications (+92 321 6900448)
• In-person service visits at our center
• Phone calls and email correspondence

By using any of our services or platforms, you consent to the data practices described in this Privacy Policy. This document is drafted in compliance with the Prevention of Electronic Crimes Act (PECA) 2016 and the Personal Data Protection Bill of Pakistan.`
  },
  {
    id: 'data-collection',
    icon: <Database className="w-5 h-5" />,
    title: '2. Information We Collect',
    content: `We collect information that you voluntarily provide to us, as well as data that is automatically gathered when you interact with our services.

A. Personal Information You Provide:
• Full name and father's name
• CNIC number (when required for billing or government compliance)
• Phone number and WhatsApp contact
• Email address
• Residential or business address
• Company name, NTN, and business registration details (for corporate clients)
• Payment information (bank details, JazzCash/EasyPaisa numbers)

B. Device & Service Information:
• Device type, model, serial number, and IMEI (for repair services)
• Diagnostic reports and hardware specifications
• CCTV camera models, DVR/NVR details, and network configurations
• Biometric device IDs and access logs
• PBX/telephone system configurations

C. Portal & Usage Data:
• Login credentials (username and encrypted password)
• IP address and browser type
• Pages visited and time spent on each page
• Click patterns and navigation behavior
• Session duration and access timestamps
• Device type used to access the portal

D. Communication Data:
• WhatsApp chat history related to support tickets
• Email correspondence
• Voice call recordings (only with prior consent for quality assurance)
• Support ticket descriptions and attachments`
  },
  {
    id: 'how-we-use',
    icon: <Eye className="w-5 h-5" />,
    title: '3. How We Use Your Information',
    content: `We use the collected information for the following specific purposes:

Service Delivery:
• To diagnose, repair, and maintain your devices and IT infrastructure
• To install and configure CCTV, biometric, and networking systems
• To process AMC contracts and schedule preventive maintenance visits
• To deliver custom PC build bundles and hardware orders

Portal Management:
• To provide access to the Max Sale ERP Dashboard for Professional Plan clients
• To manage InfraPlus AMC Portal accounts and ticket systems
• To display branch sales data, AMC device tracking, and fee status

Communication:
• To send service updates, repair status notifications, and completion reports
• To deliver invoices, receipts, and payment reminders
• To respond to your inquiries and support requests via WhatsApp or email
• To send AMC renewal reminders and contract updates

Business Improvement:
• To analyze service trends and improve response times
• To train our technical staff using anonymized repair case studies
• To develop new service offerings based on client needs

Legal Compliance:
• To comply with Pakistani tax regulations and FBR requirements
• To respond to lawful requests from government authorities
• To maintain records as required by PECA 2016`
  },
  {
    id: 'data-sharing',
    icon: <Users className="w-5 h-5" />,
    title: '4. How We Share Your Information',
    content: `We do NOT sell, rent, or trade your personal information to third parties for marketing purposes. We only share your data in the following limited circumstances:

A. Authorized Service Partners:
• Hardware suppliers and warranty claim processors (only device serial numbers and purchase details)
• Sub-contracted technicians for specialized installations (only relevant service details)
• Cloud hosting providers for portal data storage (encrypted and access-controlled)

B. Legal & Regulatory Obligations:
• When required by Pakistani law enforcement agencies under PECA 2016
• In response to a valid court order or government subpoena
• To comply with FBR tax audit requirements
• To protect our legal rights, property, or safety

C. Business Transfers:
• In the event of a merger, acquisition, or sale of assets, your data may be transferred to the new entity. You will be notified via email and WhatsApp at least 30 days before any such transfer.

D. With Your Explicit Consent:
• When you specifically authorize us to share information with a third party (e.g., sharing CCTV footage with law enforcement at your request)

All third-party recipients are contractually obligated to protect your data and use it only for the specified purpose.`
  },
  {
    id: 'data-security',
    icon: <Lock className="w-5 h-5" />,
    title: '5. Data Security Measures',
    content: `We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction:

Technical Safeguards:
• SSL/TLS encryption for all website and portal communications
• AES-256 encryption for stored passwords and sensitive data
• Firewall protection and intrusion detection systems on all servers
• Regular security audits and vulnerability assessments
• Two-factor authentication (2FA) for client portal access
• Encrypted backups stored in geographically separate locations

Physical Safeguards:
• Restricted access to our service center's data storage areas
• CCTV surveillance of premises where client devices are stored
• Secure disposal of decommissioned hard drives and storage media

Administrative Safeguards:
• Employee confidentiality agreements and data handling training
• Role-based access control (only authorized staff can view client data)
• Incident response plan for data breach scenarios
• Regular review of data access logs

Important Note: While we strive to use commercially acceptable means to protect your data, no method of transmission over the internet or electronic storage is 100% secure. We cannot guarantee absolute security but commit to notifying you within 72 hours of any confirmed data breach.`
  },
  {
    id: 'cookies',
    icon: <Cookie className="w-5 h-5" />,
    title: '6. Cookies & Tracking Technologies',
    content: `Our website and client portals use cookies and similar tracking technologies to enhance your experience:

Types of Cookies We Use:
• Essential Cookies: Required for portal login sessions and security. Cannot be disabled.
• Analytics Cookies: Help us understand how visitors interact with our website (e.g., Google Analytics). These collect anonymized data.
• Functional Cookies: Remember your preferences such as language and region settings.
• Performance Cookies: Monitor website loading speed and error rates to improve service.

How to Manage Cookies:
You can control cookie settings through your browser preferences. However, disabling essential cookies may prevent you from accessing our client portals or certain website features.

Browser-specific instructions:
• Chrome: Settings > Privacy and Security > Cookies
• Safari: Preferences > Privacy > Cookies
• Firefox: Options > Privacy & Security > Cookies

We do NOT use cookies for cross-site advertising or behavioral profiling.`
  },
  {
    id: 'user-rights',
    icon: <UserCheck className="w-5 h-5" />,
    title: '7. Your Data Rights',
    content: `As a user of BugsFixer services, you have the following rights regarding your personal data:

Right to Access:
You may request a complete copy of all personal data we hold about you. We will provide this within 15 business days of receiving your verified request.

Right to Correction:
If any of your personal information is inaccurate or incomplete, you can request corrections through WhatsApp, email, or your client portal settings.

Right to Deletion:
You may request the deletion of your personal data, subject to the following exceptions:
• Data required for active AMC contracts or ongoing services
• Financial records required by Pakistani tax law (minimum 6 years)
• Data needed to resolve active disputes or legal claims

Right to Data Portability:
You can request your data in a commonly used, machine-readable format (CSV or JSON) for transfer to another service provider.

Right to Withdraw Consent:
You may withdraw your consent for data processing at any time. Note that this may affect our ability to provide certain services.

Right to Opt-Out of Communications:
You can unsubscribe from non-essential notifications by replying "STOP" to any WhatsApp message or clicking "Unsubscribe" in emails.

To exercise any of these rights, contact us at jeekhurram@yahoo.com or via WhatsApp at +92 321 6900448.`
  },
  {
    id: 'data-retention',
    icon: <RefreshCw className="w-5 h-5" />,
    title: '8. Data Retention Policy',
    content: `We retain your personal data only for as long as necessary to fulfill the purposes outlined in this Privacy Policy:

• Repair Service Records: Retained for 2 years after the last service date
• AMC Contract Data: Retained for the duration of the contract plus 3 years
• Financial & Billing Records: Retained for 6 years as required by Pakistani tax law
• CCTV Installation Records: Retained for 5 years (includes device configurations and IP mappings)
• Portal Access Logs: Retained for 1 year
• WhatsApp Support Chats: Retained for 1 year after the last interaction
• Inactive Client Accounts: Data is anonymized or deleted after 3 years of inactivity

Upon expiration of the retention period, your data will be securely deleted or anonymized so that it can no longer be associated with you.

If you request early deletion and no legal obligations prevent it, we will process your request within 30 business days.`
  },
  {
    id: 'third-party',
    icon: <Globe className="w-5 h-5" />,
    title: '9. Third-Party Links & Services',
    content: `Our website and communications may contain links to third-party websites, services, or applications that are not operated by BugsFixer. These include:

• Payment gateways (JazzCash, EasyPaisa, bank portals)
• Hardware manufacturer websites (for warranty verification)
• Cloud service providers (for portal hosting)
• Social media platforms

Important:
• We are NOT responsible for the privacy practices or content of these third-party sites
• Clicking on external links will redirect you away from our website
• We strongly recommend reading the privacy policies of every website you visit
• BugsFixer does not endorse or guarantee the security of third-party platforms

If you access third-party services through our portals (e.g., payment processing), your data may be subject to that third party's privacy policy in addition to ours.`
  },
  {
    id: 'children',
    icon: <AlertTriangle className="w-5 h-5" />,
    title: '10. Children\'s Privacy',
    content: `BugsFixer services are intended for individuals aged 18 and above, or for businesses and organizations. We do NOT knowingly collect personal information from children under the age of 18.

If we become aware that we have inadvertently collected data from a minor:
• We will immediately take steps to delete such information from our systems
• We will notify the parent or legal guardian if contact information is available
• The associated account (if any) will be suspended pending verification

If you are a parent or guardian and believe your child has provided us with personal data, please contact us immediately at jeekhurram@yahoo.com so we can take corrective action.

For educational institutions that engage our services for campus IT infrastructure, data collection is governed by the institution's own consent framework and our institutional AMC agreement.`
  },
  {
    id: 'international',
    icon: <Server className="w-5 h-5" />,
    title: '11. International Data Transfers',
    content: `BugsFixer primarily operates within Pakistan, and your data is stored on servers located in Pakistan whenever possible. However, certain services may involve international data transfers:

• Cloud hosting providers may store encrypted backups on servers outside Pakistan
• Hardware warranty claims may require sharing device details with international manufacturers
• Software licensing verification may involve communication with foreign servers

When international transfers occur, we ensure:
• Data is encrypted during transit using TLS 1.3 or higher
• Recipient countries have adequate data protection standards
• Contractual safeguards are in place with all international processors
• Only the minimum necessary data is transferred

If you have concerns about international data transfers related to your specific service, please contact us for detailed information about where your data is stored.`
  },
  {
    id: 'updates',
    icon: <Bell className="w-5 h-5" />,
    title: '12. Changes to This Privacy Policy',
    content: `We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors.

When We Make Changes:
• The "Last Updated" date at the top of this page will be revised
• For material changes, active AMC clients will receive notification via WhatsApp and email at least 15 days before changes take effect
• Portal users will see an in-app notification upon their next login
• The updated policy will be posted on our website immediately

Your Continued Use:
By continuing to use our services after changes are posted, you acknowledge that you accept the revised Privacy Policy. If you do not agree with the changes, you should discontinue use of our services and contact us to request data deletion.

We recommend reviewing this Privacy Policy at least once every 6 months to stay informed about how we protect your information.`
  },
  {
    id: 'contact',
    icon: <Phone className="w-5 h-5" />,
    title: '13. Contact Us',
    content: `If you have any questions, concerns, complaints, or requests regarding this Privacy Policy or our data handling practices, please reach out to us:

Business Name: BugsFixer – Pakistan's Best IT Service Center
Data Protection Officer: Khurram
WhatsApp / Phone: +92 321 6900448
Email: jeekhurram@yahoo.com
Website: bugsfixerweb.pp.ua

Office Hours: Monday – Saturday, 10:00 AM – 9:00 PM (PKT)
Response Time: We aim to respond to all privacy-related inquiries within 2 business days.

For urgent data breach reports, contact us immediately via WhatsApp at any time.

You also have the right to lodge a complaint with the relevant Pakistani data protection authority if you believe your rights have been violated.`
  }
];

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      
      {/* Hero Header */}
      <div className="relative bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-indigo-500 rounded-full blur-[128px]" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-[128px]" />
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
              <div className="bg-indigo-600 p-3 rounded-2xl">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
                  Privacy Policy
                </h1>
              </div>
            </div>

            <p className="text-slate-400 text-base sm:text-lg max-w-2xl leading-relaxed mt-4">
              Your privacy matters to us. This policy explains how BugsFixer collects, 
              uses, and protects your personal information across all our services and platforms.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm">
              <span className="flex items-center gap-2 text-slate-500 bg-slate-800/50 px-4 py-2 rounded-full border border-slate-700/50">
                <FileText className="w-4 h-4 text-indigo-400" />
                Last Updated: July 2025
              </span>
              <span className="flex items-center gap-2 text-slate-500 bg-slate-800/50 px-4 py-2 rounded-full border border-slate-700/50">
                <Lock className="w-4 h-4 text-blue-400" />
                PECA 2016 Compliant
              </span>
              <span className="flex items-center gap-2 text-slate-500 bg-slate-800/50 px-4 py-2 rounded-full border border-slate-700/50">
                <Globe className="w-4 h-4 text-emerald-400" />
                Pakistan Jurisdiction
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="max-w-4xl mx-auto">
          
          {/* Trust Banner */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-blue-50 border border-blue-200 rounded-2xl p-5 sm:p-6 mb-10 flex items-start gap-4"
          >
            <Lock className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-extrabold text-blue-900 text-sm sm:text-base">Our Privacy Commitment</h3>
              <p className="text-blue-700 text-sm mt-1 leading-relaxed">
                BugsFixer does NOT sell your personal data to third parties. We collect only the 
                information necessary to deliver our IT services, maintain your client portals, 
                and comply with Pakistani law. Your data is encrypted, access-controlled, and 
                retained only as long as legally required. You have full rights to access, 
                correct, or delete your data at any time.
              </p>
            </div>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-10"
          >
            {[
              { label: 'Data Sold', value: '0%', color: 'text-green-600 bg-green-50 border-green-200' },
              { label: 'Encryption', value: 'AES-256', color: 'text-blue-600 bg-blue-50 border-blue-200' },
              { label: 'Breach Response', value: '<72hrs', color: 'text-amber-600 bg-amber-50 border-amber-200' },
              { label: 'Data Requests', value: '15 Days', color: 'text-indigo-600 bg-indigo-50 border-indigo-200' },
            ].map((stat) => (
              <div key={stat.label} className={`${stat.color} border rounded-2xl p-4 text-center`}>
                <div className={`text-lg sm:text-xl font-black ${stat.color.split(' ')[0]}`}>{stat.value}</div>
                <div className="text-xs font-bold text-slate-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* Table of Contents */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 mb-10 shadow-sm"
          >
            <h2 className="text-lg font-black text-slate-900 mb-4 flex items-center gap-2">
              <FileText className="w-5 h-5 text-indigo-600" />
              Table of Contents
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-indigo-600 hover:bg-indigo-50 px-3 py-2 rounded-xl transition-all group"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-indigo-600 group-hover:translate-x-0.5 transition-all" />
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
                <div className="bg-slate-50 border-b border-slate-100 px-6 sm:px-8 py-4 flex items-center gap-3">
                  <div className="text-indigo-600 bg-indigo-100 p-2 rounded-xl">
                    {section.icon}
                  </div>
                  <h2 className="text-lg sm:text-xl font-black text-slate-900">
                    {section.title}
                  </h2>
                </div>

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
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/10 rounded-full blur-[80px]" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/10 rounded-full blur-[80px]" />
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-indigo-500/20 border border-indigo-500/30 px-4 py-1.5 rounded-full mb-6">
                <Shield className="w-4 h-4 text-indigo-400" />
                <span className="text-xs font-bold text-indigo-300 uppercase tracking-wider">Your Data is Safe With Us</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-white mb-3">
                Questions About Your Privacy?
              </h3>
              <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto mb-8">
                Want to access, correct, or delete your data? Our Data Protection Officer 
                is available to assist you within 2 business days.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="https://wa.me/923216900448?text=Assalam-o-Alaikum!%20I%20have%20a%20privacy%20or%20data%20related%20query."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25D366] hover:bg-[#20ba5a] text-white px-8 py-3.5 rounded-full font-bold text-sm flex items-center gap-2 transition-all shadow-lg"
                >
                  <Smartphone className="w-4 h-4" />
                  WhatsApp Us
                </a>
                <a
                  href="mailto:jeekhurram@yahoo.com?subject=Privacy%20Policy%20Inquiry"
                  className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-3.5 rounded-full font-bold text-sm flex items-center gap-2 transition-all"
                >
                  <Mail className="w-4 h-4" />
                  Email DPO
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
                  jeekhurram@yahoo.com
                </span>
              </div>
            </div>
          </motion.div>

          {/* Related Links */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link 
              to="/terms" 
              className="text-sm font-bold text-slate-500 hover:text-blue-600 transition-colors flex items-center gap-1"
            >
              <FileText className="w-4 h-4" />
              View Terms & Conditions
            </Link>
            <span className="hidden sm:inline text-slate-300">|</span>
            <Link 
              to="/contact" 
              className="text-sm font-bold text-slate-500 hover:text-blue-600 transition-colors flex items-center gap-1"
            >
              <Phone className="w-4 h-4" />
              Contact Support
            </Link>
          </motion.div>

          {/* Footer Note */}
          <p className="text-center text-xs text-slate-400 mt-10 leading-relaxed">
            © {new Date().getFullYear()} BugsFixer. All rights reserved. 
            This Privacy Policy is governed by the laws of the Islamic Republic of Pakistan.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;