import React from 'react';
import { Shield, Users, Award, Zap, CheckCircle, Building, Globe, Lock } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: "Security First",
      description: "Bank-grade security with end-to-end encryption and compliance with RBI guidelines"
    },
    {
      icon: <Users className="w-8 h-8 text-green-600" />,
      title: "User-Centric",
      description: "Designed with users in mind, ensuring seamless experience from earning to withdrawal"
    },
    {
      icon: <Award className="w-8 h-8 text-purple-600" />,
      title: "Excellence",
      description: "Committed to providing the highest quality service and continuous improvement"
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-600" />,
      title: "Innovation",
      description: "Leveraging cutting-edge technology to simplify financial transactions"
    }
  ];

  const milestones = [
    { year: "2024", event: "Platform Launch", description: "RewardFlow officially launches with RazorpayX integration" },
    { year: "2024", event: "10K Users", description: "Reached 10,000 active users within first 6 months" },
    { year: "2024", event: "₹1Cr Withdrawn", description: "Users successfully withdrew over ₹1 crore through our platform" },
    { year: "2025", event: "50K+ Users", description: "Growing community of over 50,000 satisfied users" }
  ];

  const compliance = [
    "Reserve Bank of India (RBI) Payment Aggregator Guidelines",
    "Information Technology Act, 2000",
    "Payment and Settlement Systems Act, 2007",
    "Know Your Customer (KYC) Regulations",
    "Anti-Money Laundering (AML) Compliance",
    "Data Protection and Privacy Laws"
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              About RewardFlow
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Empowering users to earn rewards and withdraw funds securely through our 
              RazorpayX-powered platform. We're committed to providing a trustworthy, 
              compliant, and user-friendly financial experience.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                To democratize financial services by providing a secure, transparent, and 
                efficient platform where users can earn rewards and access their funds 
                seamlessly through verified bank accounts.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We believe that everyone deserves access to reliable financial tools that 
                prioritize security, compliance, and user experience above all else.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 text-white p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-blue-100 leading-relaxed">
                To become India's most trusted rewards and withdrawal platform, setting 
                the standard for financial technology innovation while maintaining the 
                highest levels of security and regulatory compliance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership with Razorpay */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-2xl p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">Powered by Razorpay</h2>
                <p className="text-blue-100 leading-relaxed mb-6">
                  Our partnership with Razorpay ensures that all payment processing and 
                  withdrawals are handled with the highest security standards. RazorpayX 
                  Payouts enable instant, secure transfers to verified bank accounts.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-300" />
                    <span className="text-blue-100">PCI-DSS Compliant Payment Processing</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-300" />
                    <span className="text-blue-100">Instant Bank Transfers via RazorpayX</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-300" />
                    <span className="text-blue-100">99.99% Uptime Guarantee</span>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white bg-opacity-10 rounded-xl p-8">
                  <Building className="w-16 h-16 text-white mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Trusted Partnership</h3>
                  <p className="text-blue-100 text-sm">
                    Leveraging Razorpay's robust infrastructure for secure and reliable transactions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance & Security */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <Lock className="w-6 h-6 text-blue-600" />
                <h2 className="text-3xl font-bold text-gray-900">Compliance & Security</h2>
              </div>
              <p className="text-lg text-gray-600 mb-6">
                We maintain the highest standards of regulatory compliance and security 
                to protect our users' data and financial information.
              </p>
              <div className="space-y-3">
                {compliance.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-center space-x-3 mb-4">
                  <Shield className="w-6 h-6 text-blue-600" />
                  <h3 className="text-lg font-semibold text-gray-900">Data Protection</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  AES-256 encryption for all sensitive data, including bank account details. 
                  Regular security audits and penetration testing ensure maximum protection.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-center space-x-3 mb-4">
                  <Globe className="w-6 h-6 text-green-600" />
                  <h3 className="text-lg font-semibold text-gray-900">Regulatory Compliance</h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Full compliance with Indian financial regulations including RBI guidelines, 
                  KYC requirements, and AML policies to ensure legal operation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600">
              Key milestones in building a trusted financial platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {milestone.year}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{milestone.event}</h3>
                <p className="text-gray-600 text-sm">{milestone.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Commitment</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            RewardFlow is built by a dedicated team of financial technology experts, 
            security professionals, and user experience specialists. We're committed to 
            continuous innovation while maintaining the trust and security our users deserve.
          </p>
          <div className="mt-12 bg-white p-8 rounded-2xl shadow-sm border border-gray-100 max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 italic">
              "Our mission is to make financial services accessible, secure, and transparent 
              for everyone. We're not just building a platform; we're building trust."
            </p>
            <div className="mt-4 text-gray-600">
              <p className="font-semibold">RewardFlow Team</p>
              <p className="text-sm">Bengaluru, Karnataka, India</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;