import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, MessageSquare, Send, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock form submission (since this is frontend-only)
    console.log('Contact form submission:', formData);
    alert('Thank you for your message! Our support team will get back to you within 24 hours. For urgent matters, please call +91-123-456-7890.');
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6 text-blue-600" />,
      title: "Email Support",
      primary: "support@rewardflow.com",
      secondary: "Available 24/7 for all inquiries"
    },
    {
      icon: <Phone className="w-6 h-6 text-green-600" />,
      title: "Phone Support",
      primary: "+91-123-456-7890",
      secondary: "Mon-Fri: 9:00 AM - 6:00 PM IST"
    },
    {
      icon: <MapPin className="w-6 h-6 text-purple-600" />,
      title: "Office Address",
      primary: "123, Business Park",
      secondary: "Bengaluru, Karnataka, India 560001"
    },
    {
      icon: <Clock className="w-6 h-6 text-orange-600" />,
      title: "Response Time",
      primary: "Within 24 Hours",
      secondary: "Urgent issues handled immediately"
    }
  ];

  const supportCategories = [
    "General Inquiry",
    "Withdrawal Issues",
    "Account Verification",
    "Bank Details Update",
    "Transaction Support",
    "Technical Issues",
    "Compliance Questions",
    "Partnership Inquiry"
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions about RewardFlow? We're here to help! Reach out to our 
            support team for assistance with withdrawals, account verification, or any other inquiries.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="flex justify-center mb-4">{info.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{info.title}</h3>
                <p className="text-gray-900 font-medium mb-1">{info.primary}</p>
                <p className="text-gray-600 text-sm">{info.secondary}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <div className="flex items-center space-x-2 mb-6">
                <MessageSquare className="w-6 h-6 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-900">Send us a Message</h2>
              </div>

              {submitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Message Sent!</h3>
                  <p className="text-gray-600">
                    Thank you for contacting us. We'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    >
                      <option value="">Select a subject</option>
                      {supportCategories.map((category, index) => (
                        <option key={index} value={category}>{category}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-vertical"
                      placeholder="Please provide details about your inquiry..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2 shadow-sm"
                  >
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </button>

                  <p className="text-xs text-gray-500 text-center">
                    * Required fields. We typically respond within 24 hours.
                  </p>
                </form>
              )}
            </div>

            {/* FAQ & Additional Info */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      How long do withdrawals take to process?
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Withdrawals are processed via RazorpayX Payouts within 3 business days. 
                      You'll receive a confirmation email once the transfer is initiated.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      What documents are needed for BGV?
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Background verification requires valid government ID, address proof, 
                      and bank account verification documents as per RBI KYC guidelines.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Can I update my bank details?
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Yes, you can update your bank details through the Dashboard. 
                      New details will require re-verification before processing withdrawals.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      Is my data secure?
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Absolutely. We use AES-256 encryption and comply with all Indian 
                      data protection regulations including IT Act, 2000.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white rounded-2xl p-8">
                <h3 className="text-xl font-bold mb-4">Need Immediate Help?</h3>
                <p className="text-blue-100 mb-6">
                  For urgent withdrawal issues or account access problems, call our support line directly.
                </p>
                <div className="flex items-center space-x-3 mb-4">
                  <Phone className="w-5 h-5 text-blue-200" />
                  <span className="text-lg font-semibold">+91-123-456-7890</span>
                </div>
                <p className="text-blue-200 text-sm">
                  Available Monday-Friday, 9:00 AM - 6:00 PM IST
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;