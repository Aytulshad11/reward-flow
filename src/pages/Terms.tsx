import React from 'react';
import { FileText, ExternalLink, Shield, AlertCircle } from 'lucide-react';

const Terms: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <FileText className="w-8 h-8 text-blue-600" />
            <h1 className="text-4xl font-bold text-gray-900">Terms and Conditions</h1>
          </div>
          <p className="text-lg text-gray-600">
            Last Updated: January 27, 2025
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-lg prose-blue">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <div className="flex items-start space-x-3">
              <AlertCircle className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-blue-900 mb-2">Important Notice</h3>
                <p className="text-blue-800 text-sm">
                  Welcome to RewardFlow. These Terms and Conditions govern your use of our platform, 
                  including earning and withdrawing funds. By using our services, you agree to these terms 
                  and Razorpay's policies.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center space-x-2">
                <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
                <span>Services</span>
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Our platform allows users to earn rewards and withdraw funds to verified bank accounts 
                after completing background verification (BGV). RewardFlow serves as a platform connecting 
                users with earning opportunities while ensuring secure fund management and compliance with 
                Indian financial regulations.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center space-x-2">
                <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
                <span>User Obligations</span>
              </h2>
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  By using RewardFlow, you agree to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Provide accurate and truthful information for BGV and bank account verification</li>
                  <li>Comply with all applicable laws and regulations</li>
                  <li>Maintain the security of your account credentials</li>
                  <li>Report any suspicious activity or unauthorized access immediately</li>
                  <li>Use the platform only for legitimate earning activities</li>
                </ul>
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 mt-4">
                  <p className="text-red-800 text-sm font-medium">
                    <strong>Prohibited Activities:</strong> Misuse of the platform including fraud, illegal activities, 
                    manipulation of earning systems, or attempts to circumvent verification processes may result 
                    in immediate account suspension and legal action.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center space-x-2">
                <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
                <span>Withdrawals</span>
              </h2>
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Users may withdraw earnings (custom amount or full balance) to verified bank accounts 
                  via RazorpayX Payouts subject to the following conditions:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Successful completion of background verification (BGV)</li>
                  <li>Bank account verification and KYC compliance</li>
                  <li>Minimum withdrawal amount as specified on the platform</li>
                  <li>Sufficient available balance in your account</li>
                </ul>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h4 className="font-semibold text-green-900 mb-2">Processing Timeline</h4>
                  <p className="text-green-800 text-sm">
                    Withdrawals are processed within 3 business days, subject to verification and RazorpayX 
                    processing times. You will receive email confirmation once the transfer is initiated.
                  </p>
                </div>
                <p className="text-gray-600 text-sm">
                  <strong>Note:</strong> Razorpay's payout fees may apply as per their 
                  <a href="https://razorpay.com/terms" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 inline-flex items-center mx-1">
                    Terms of Use <ExternalLink className="w-3 h-3 ml-1" />
                  </a>
                  and fee structure.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center space-x-2">
                <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
                <span>Refund Policy</span>
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Refunds, if applicable, are processed within 7 days to the original payment method, 
                subject to verification and the specific circumstances of the request. 
                Please refer to our detailed 
                <a href="/refund" className="text-blue-600 hover:text-blue-700 mx-1">Refund Policy</a> 
                for complete terms and conditions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center space-x-2">
                <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">5</span>
                <span>Third-Party Services</span>
              </h2>
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Payment processing and withdrawals are handled by Razorpay Technologies Pvt Ltd, 
                  a licensed Payment Aggregator. By using RewardFlow, you also agree to comply with:
                </p>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <ul className="space-y-2">
                    <li className="flex items-center space-x-2">
                      <ExternalLink className="w-4 h-4 text-blue-600" />
                      <a href="https://razorpay.com/terms" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700">
                        Razorpay Terms of Use
                      </a>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Shield className="w-4 h-4 text-green-600" />
                      <a href="https://razorpay.com/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700">
                        Razorpay Privacy Policy
                      </a>
                    </li>
                  </ul>
                </div>
                <p className="text-gray-600 text-sm">
                  Razorpay's terms and policies govern all payment-related activities. RewardFlow is not 
                  responsible for Razorpay's service availability, processing delays, or policy changes.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center space-x-2">
                <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">6</span>
                <span>Liability and Indemnification</span>
              </h2>
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  <strong>Limitation of Liability:</strong> RewardFlow is not liable for delays or errors 
                  due to incorrect bank details, network issues, or third-party service interruptions including 
                  RazorpayX processing delays.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  <strong>User Indemnification:</strong> You agree to indemnify and hold harmless RewardFlow 
                  against any losses, damages, or legal claims arising from your violation of these terms, 
                  fraudulent activities, or misuse of the platform.
                </p>
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <p className="text-yellow-800 text-sm">
                    <strong>Force Majeure:</strong> We are not liable for service interruptions due to 
                    circumstances beyond our control, including but not limited to natural disasters, 
                    government regulations, or third-party service outages.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center space-x-2">
                <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">7</span>
                <span>Governing Law and Jurisdiction</span>
              </h2>
              <p className="text-gray-700 leading-relaxed">
                These terms are governed by the laws of India, with exclusive jurisdiction in the courts 
                of Bengaluru, Karnataka. Any disputes arising from the use of RewardFlow will be subject 
                to Indian legal proceedings and applicable regulations including the Information Technology 
                Act, 2000, and RBI guidelines.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center space-x-2">
                <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">8</span>
                <span>Account Termination</span>
              </h2>
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  We may terminate or suspend your account for:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                  <li>Non-compliance with these terms and conditions</li>
                  <li>Fraudulent or illegal activities</li>
                  <li>Extended account inactivity (12+ months)</li>
                  <li>Failure to complete required verification processes</li>
                  <li>Violation of applicable laws or regulations</li>
                </ul>
                <p className="text-gray-600 text-sm">
                  Upon termination, any remaining balance will be processed for withdrawal to your 
                  verified bank account, subject to verification and compliance requirements.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center space-x-2">
                <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">9</span>
                <span>Contact Information</span>
              </h2>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <p className="text-blue-900 font-medium mb-4">
                  For support, questions, or concerns regarding these terms:
                </p>
                <div className="space-y-2 text-blue-800">
                  <p><strong>Email:</strong> support@rewardflow.com</p>
                  <p><strong>Phone:</strong> +91-123-456-7890</p>
                  <p><strong>Address:</strong> 123, Business Park, Bengaluru, Karnataka, India 560001</p>
                </div>
              </div>
            </section>

            <section className="border-t border-gray-200 pt-8">
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Agreement Acknowledgment</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  By using our platform, you acknowledge that you have read, understood, and agree to 
                  these Terms and Conditions, as well as Razorpay's terms and policies. Your continued 
                  use of RewardFlow constitutes acceptance of any updates to these terms.
                </p>
                <p className="text-gray-600 text-xs mt-4">
                  These terms may be updated periodically. Material changes will be communicated via 
                  email and posted on our website. Continued use after changes indicates acceptance 
                  of the updated terms.
                </p>
              </div>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Terms;