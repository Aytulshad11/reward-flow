import React from 'react';
import { RefreshCw, Clock, CheckCircle, AlertCircle, Phone, Mail } from 'lucide-react';

const Refund: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-gradient-to-br from-orange-50 to-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <RefreshCw className="w-8 h-8 text-orange-600" />
            <h1 className="text-4xl font-bold text-gray-900">Refund Policy</h1>
          </div>
          <p className="text-lg text-gray-600">
            Last Updated: January 27, 2025
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 mb-8">
            <div className="flex items-start space-x-3">
              <AlertCircle className="w-6 h-6 text-orange-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-orange-900 mb-2">Important Information</h3>
                <p className="text-orange-800 text-sm">
                  At RewardFlow, we strive to ensure satisfaction with our services. This Refund Policy 
                  outlines the conditions and process for refunds, if applicable to your specific situation.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center space-x-2">
                <RefreshCw className="w-6 h-6 text-blue-600" />
                <span>1. Refunds for Platform Services</span>
              </h2>
              <div className="space-y-6">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-blue-900 mb-3">Eligibility Criteria</h3>
                  <p className="text-blue-800 mb-4">
                    Refunds may be considered for platform fees or service charges under the following conditions:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-blue-800 text-sm">
                    <li>Service was not delivered as promised due to platform technical issues</li>
                    <li>Duplicate charges were made to your account</li>
                    <li>Platform error resulted in incorrect fee deduction</li>
                    <li>Account was charged without proper authorization</li>
                  </ul>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-yellow-900 mb-3">Request Timeline</h3>
                  <div className="flex items-center space-x-3 mb-3">
                    <Clock className="w-5 h-5 text-yellow-600" />
                    <span className="text-yellow-800 font-medium">7-Day Window</span>
                  </div>
                  <p className="text-yellow-800 text-sm">
                    Refund requests must be submitted within 7 days of the transaction date. 
                    Requests submitted after this period may not be eligible for processing.
                  </p>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-green-900 mb-3">Processing Timeline</h3>
                  <div className="flex items-center space-x-3 mb-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-green-800 font-medium">7 Business Days</span>
                  </div>
                  <p className="text-green-800 text-sm">
                    Approved refunds will be processed within 7 business days to the original payment method, 
                    subject to verification and banking processing times.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center space-x-2">
                <AlertCircle className="w-6 h-6 text-red-600" />
                <span>2. Withdrawals Policy</span>
              </h2>
              <div className="space-y-4">
                <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-red-900 mb-3">Final Withdrawal Transactions</h3>
                  <p className="text-red-800 mb-4">
                    <strong>Important:</strong> Withdrawals to your verified bank account via RazorpayX Payouts 
                    are considered final once successfully processed and credited to your account.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-red-800 text-sm">
                        Once funds are transferred to your bank account, they cannot be reversed or refunded through our platform
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-red-800 text-sm">
                        Any disputes regarding credited funds must be resolved through your bank's processes
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-blue-900 mb-3">Failed Withdrawal Recovery</h3>
                  <p className="text-blue-800 mb-4">
                    If a withdrawal fails due to incorrect bank details or technical issues:
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-blue-600" />
                      <span className="text-blue-800 text-sm">Funds will be returned to your RewardFlow account balance</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-blue-600" />
                      <span className="text-blue-800 text-sm">You can update your bank details in the Dashboard</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-blue-600" />
                      <span className="text-blue-800 text-sm">Resubmit withdrawal request with correct information</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Refund Process</h2>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 text-center">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                      1
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Submit Request</h3>
                    <p className="text-gray-600 text-sm">
                      Contact our support team with your refund request and transaction details
                    </p>
                  </div>
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 text-center">
                    <div className="w-12 h-12 bg-yellow-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                      2
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Review & Verification</h3>
                    <p className="text-gray-600 text-sm">
                      Our team reviews the request and verifies eligibility within 2-3 business days
                    </p>
                  </div>
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 text-center">
                    <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                      3
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Processing</h3>
                    <p className="text-gray-600 text-sm">
                      Approved refunds are processed within 7 business days to original payment method
                    </p>
                  </div>
                </div>

                <div className="bg-gray-100 border border-gray-300 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Required Information for Refund Requests</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 text-sm">
                    <li>Transaction ID or reference number</li>
                    <li>Date and amount of the transaction</li>
                    <li>Detailed reason for refund request</li>
                    <li>Supporting documentation (if applicable)</li>
                    <li>Account information for verification</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Non-Refundable Items</h2>
              <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                <p className="text-red-800 mb-4">
                  The following are generally not eligible for refunds:
                </p>
                <ul className="list-disc list-inside space-y-2 text-red-800 text-sm">
                  <li>Successfully processed withdrawals to verified bank accounts</li>
                  <li>Service fees for completed background verification (BGV)</li>
                  <li>Requests submitted beyond the 7-day window</li>
                  <li>Earnings that were legitimately processed through platform activities</li>
                  <li>Third-party payment processor fees (as determined by Razorpay's policies)</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Contact Us for Refund Requests</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <Mail className="w-6 h-6 text-blue-600" />
                    <h3 className="text-lg font-semibold text-blue-900">Email Support</h3>
                  </div>
                  <div className="space-y-2 text-blue-800">
                    <p><strong>Refund Requests:</strong> support@rewardflow.com</p>
                    <p><strong>Subject Line:</strong> "Refund Request - [Your Transaction ID]"</p>
                    <p className="text-sm">Include all required information in your email for faster processing</p>
                  </div>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <Phone className="w-6 h-6 text-green-600" />
                    <h3 className="text-lg font-semibold text-green-900">Phone Support</h3>
                  </div>
                  <div className="space-y-2 text-green-800">
                    <p><strong>Phone:</strong> +91-123-456-7890</p>
                    <p><strong>Hours:</strong> Monday-Friday, 9:00 AM - 6:00 PM IST</p>
                    <p className="text-sm">Have your transaction details ready when calling</p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Dispute Resolution</h2>
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  If you are not satisfied with our refund decision, you may:
                </p>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <ol className="list-decimal list-inside space-y-3 text-gray-700">
                    <li>
                      <strong>Appeal the Decision:</strong> Submit additional documentation or 
                      clarification within 30 days of our initial response
                    </li>
                    <li>
                      <strong>Escalate to Management:</strong> Request management review by 
                      emailing escalation@rewardflow.com
                    </li>
                    <li>
                      <strong>Legal Recourse:</strong> Pursue resolution through appropriate 
                      legal channels as per Indian consumer protection laws
                    </li>
                  </ol>
                </div>
              </div>
            </section>

            <section className="border-t border-gray-200 pt-8">
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-orange-900 mb-3">Policy Agreement</h3>
                <p className="text-orange-800 text-sm leading-relaxed">
                  By using our platform, you agree to this Refund Policy and understand the conditions 
                  under which refunds may or may not be processed. This policy is subject to change, 
                  and any updates will be communicated through our website and registered email addresses.
                </p>
                <p className="text-orange-700 text-xs mt-4">
                  This refund policy is governed by Indian consumer protection laws and is designed to 
                  be fair to both users and the platform while maintaining compliance with financial regulations.
                </p>
              </div>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Refund;