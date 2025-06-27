import React from 'react';
import { Shield, Lock, Eye, Database, ExternalLink, AlertCircle } from 'lucide-react';

const Privacy: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-gradient-to-br from-green-50 to-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Shield className="w-8 h-8 text-green-600" />
            <h1 className="text-4xl font-bold text-gray-900">Privacy Policy</h1>
          </div>
          <p className="text-lg text-gray-600">
            Last Updated: January 27, 2025
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
            <div className="flex items-start space-x-3">
              <Shield className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-green-900 mb-2">Our Privacy Commitment</h3>
                <p className="text-green-800 text-sm">
                  At RewardFlow, we value your privacy and are committed to protecting your personal information. 
                  This Privacy Policy outlines how we collect, use, store, and share your data in compliance with 
                  Indian laws and Razorpay's policies.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center space-x-2">
                <Database className="w-6 h-6 text-blue-600" />
                <span>1. Information We Collect</span>
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Personal Information</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    <li><strong>Identity Information:</strong> Name, email address, phone number, date of birth</li>
                    <li><strong>Address Information:</strong> Billing address, correspondence address for verification</li>
                    <li><strong>Financial Information:</strong> Bank account details (post-background verification) for withdrawals</li>
                    <li><strong>Verification Documents:</strong> Government-issued ID, address proof, and other KYC documents</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Financial Information</h3>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <p className="text-blue-800 text-sm">
                      <strong>Important:</strong> Payment data (e.g., card details, transaction information) is processed 
                      securely by Razorpay using PCI-DSS compliant systems and is not stored on our servers. We only 
                      maintain transaction records for compliance and support purposes.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Automatically Collected Data</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    <li>IP address and device information for security and fraud prevention</li>
                    <li>Usage data including page views, session duration for analytics</li>
                    <li>Browser type, operating system, and technical specifications</li>
                    <li>Cookies and similar tracking technologies (with your consent)</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center space-x-2">
                <Eye className="w-6 h-6 text-purple-600" />
                <span>2. How We Use Your Information</span>
              </h2>
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  We use your personal information for the following purposes:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Service Delivery</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Verify your identity during BGV process</li>
                      <li>• Process withdrawals to verified bank accounts</li>
                      <li>• Manage your account and earnings</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Communication</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Send transaction confirmations</li>
                      <li>• Provide customer support</li>
                      <li>• Share important updates and notices</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Legal Compliance</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Comply with RBI regulations</li>
                      <li>• Fulfill KYC and AML requirements</li>
                      <li>• Meet tax reporting obligations</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">Security & Analytics</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Detect and prevent fraud</li>
                      <li>• Improve platform performance</li>
                      <li>• Enhance user experience</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center space-x-2">
                <ExternalLink className="w-6 h-6 text-orange-600" />
                <span>3. Data Sharing</span>
              </h2>
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  We share your data only in the following circumstances:
                </p>
                <div className="space-y-4">
                  <div className="border border-blue-200 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-900 mb-2">With Razorpay</h4>
                    <p className="text-blue-800 text-sm">
                      We share necessary payment and identity information with Razorpay for payment processing 
                      and withdrawal services. This data sharing is governed by Razorpay's 
                      <a href="https://razorpay.com/privacy" target="_blank" rel="noopener noreferrer" 
                         className="text-blue-600 hover:text-blue-700 inline-flex items-center mx-1">
                        Privacy Policy <ExternalLink className="w-3 h-3 ml-1" />
                      </a>
                      and is essential for service delivery.
                    </p>
                  </div>
                  <div className="border border-red-200 rounded-lg p-4">
                    <h4 className="font-semibold text-red-900 mb-2">Legal Requirements</h4>
                    <p className="text-red-800 text-sm">
                      We may share data with regulatory authorities, law enforcement, or courts as required 
                      by Indian law, including compliance with RBI guidelines, tax authorities, or legal proceedings.
                    </p>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">What We DON'T Do</h4>
                    <p className="text-gray-700 text-sm">
                      <strong>We do not sell or share your data for marketing purposes without explicit consent.</strong> 
                      We do not share personal information with third parties for their promotional activities.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center space-x-2">
                <Lock className="w-6 h-6 text-green-600" />
                <span>4. Data Security</span>
              </h2>
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  We implement industry-standard security measures to protect your information:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
                    <Lock className="w-8 h-8 text-green-600 mx-auto mb-2" />
                    <h4 className="font-semibold text-green-900 mb-2">Encryption</h4>
                    <p className="text-green-800 text-sm">
                      AES-256 encryption for sensitive data including bank account details
                    </p>
                  </div>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
                    <Shield className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    <h4 className="font-semibold text-blue-900 mb-2">Secure Transmission</h4>
                    <p className="text-blue-800 text-sm">
                      All data transmitted using HTTPS/TLS protocols
                    </p>
                  </div>
                  <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 text-center">
                    <Database className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                    <h4 className="font-semibold text-purple-900 mb-2">Access Control</h4>
                    <p className="text-purple-800 text-sm">
                      Restricted access to personal data on need-to-know basis
                    </p>
                  </div>
                </div>
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <p className="text-yellow-800 text-sm">
                    <strong>Razorpay Security:</strong> Payment processing is handled by Razorpay using 
                    PCI-DSS compliant infrastructure with bank-grade security measures.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Data Retention</h2>
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  We retain your personal data according to the following schedule:
                </p>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Active Account Data</h4>
                      <p className="text-gray-700 text-sm">
                        Retained for as long as your account is active and you continue using our services.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Post-Closure Data</h4>
                      <p className="text-gray-700 text-sm">
                        Retained for up to 5 years after account closure as required by Indian financial regulations.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Transaction Records</h4>
                      <p className="text-gray-700 text-sm">
                        Maintained for 5 years as per RBI guidelines and tax compliance requirements.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">KYC Documents</h4>
                      <p className="text-gray-700 text-sm">
                        Retained as per regulatory requirements, typically 5 years post-relationship.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Your Rights</h2>
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  You have the following rights regarding your personal data:
                </p>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3 p-4 bg-blue-50 rounded-lg">
                    <Eye className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-blue-900">Right to Access</h4>
                      <p className="text-blue-800 text-sm">
                        Request a copy of personal data we hold about you
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 p-4 bg-green-50 rounded-lg">
                    <Lock className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-green-900">Right to Correction</h4>
                      <p className="text-green-800 text-sm">
                        Request correction of inaccurate or incomplete information
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 p-4 bg-red-50 rounded-lg">
                    <AlertCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-red-900">Right to Deletion</h4>
                      <p className="text-red-800 text-sm">
                        Request deletion of personal data (subject to legal retention requirements)
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-100 border border-gray-300 rounded-lg p-4">
                  <p className="text-gray-800 text-sm">
                    <strong>To exercise your rights:</strong> Contact us at privacy@rewardflow.com or 
                    +91-123-456-7890. We will respond to your request within 30 days. Note that some 
                    data may be retained for legal compliance even after deletion requests.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Third-Party Links</h2>
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                <p className="text-orange-800 text-sm">
                  Our platform may contain links to third-party websites, including Razorpay's services. 
                  These external sites have their own privacy policies and data practices. We recommend 
                  reviewing their privacy policies before providing any personal information.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Updates to This Policy</h2>
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  We may update this Privacy Policy periodically to reflect changes in our practices, 
                  legal requirements, or service improvements.
                </p>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-900 mb-2">How We Notify You</h4>
                  <ul className="text-blue-800 text-sm space-y-1">
                    <li>• Material changes will be emailed to registered users</li>
                    <li>• Updated policy will be posted on our website</li>
                    <li>• Continued use constitutes acceptance of changes</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Contact Us</h2>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <p className="text-gray-900 font-medium mb-4">
                  For privacy-related questions, concerns, or requests:
                </p>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Privacy Email:</strong> privacy@rewardflow.com</p>
                  <p><strong>General Support:</strong> support@rewardflow.com</p>
                  <p><strong>Phone:</strong> +91-123-456-7890</p>
                  <p><strong>Address:</strong> 123, Business Park, Bengaluru, Karnataka, India 560001</p>
                </div>
              </div>
            </section>

            <section className="border-t border-gray-200 pt-8">
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-green-900 mb-3">Consent Acknowledgment</h3>
                <p className="text-green-800 text-sm leading-relaxed">
                  By using our platform, you consent to this Privacy Policy and the collection, use, 
                  and sharing of your information as described herein. You also acknowledge that you 
                  have read and understood how your data is processed by both RewardFlow and our 
                  payment partner, Razorpay.
                </p>
              </div>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;