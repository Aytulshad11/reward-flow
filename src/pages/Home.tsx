import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Zap, CreditCard, CheckCircle, Users, Clock, Award } from 'lucide-react';

const Home: React.FC = () => {
  const benefits = [
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: "Secure & Compliant",
      description: "Bank-grade security with full compliance to RBI guidelines and Indian regulations"
    },
    {
      icon: <Zap className="w-8 h-8 text-green-600" />,
      title: "Instant Withdrawals",
      description: "Withdraw your earnings instantly to verified bank accounts via RazorpayX"
    },
    {
      icon: <CreditCard className="w-8 h-8 text-purple-600" />,
      title: "Multiple Payment Options",
      description: "Support for all major banks and payment methods with seamless integration"
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-green-600" />,
      title: "Background Verification",
      description: "Complete BGV process ensures secure and verified transactions"
    }
  ];

  const stats = [
    { number: "50K+", label: "Active Users", icon: <Users className="w-6 h-6" /> },
    { number: "₹2Cr+", label: "Withdrawn", icon: <CreditCard className="w-6 h-6" /> },
    { number: "99.9%", label: "Uptime", icon: <Clock className="w-6 h-6" /> },
    { number: "4.9/5", label: "User Rating", icon: <Award className="w-6 h-6" /> }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  Earn Rewards & 
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-green-300">
                    {" "}Withdraw Seamlessly
                  </span>
                </h1>
                <p className="text-xl lg:text-2xl text-blue-100 max-w-lg">
                  Complete background verification, earn rewards, and withdraw funds securely to your verified bank account with RazorpayX integration.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/dashboard"
                  className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 shadow-lg"
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link 
                  to="/about"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-all duration-300 flex items-center justify-center"
                >
                  Learn More
                </Link>
              </div>

              <div className="flex items-center space-x-4 text-sm text-blue-200">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>✓ RBI Compliant</span>
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>✓ Secure BGV</span>
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>✓ Instant Payouts</span>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="relative">
                <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-gray-900">Dashboard Preview</h3>
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    </div>
                    <div className="space-y-3">
                      <div className="bg-gradient-to-r from-blue-50 to-green-50 p-4 rounded-lg">
                        <p className="text-sm text-gray-600">Available Balance</p>
                        <p className="text-2xl font-bold text-gray-900">₹15,750</p>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium">
                          Withdraw
                        </button>
                        <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium">
                          History
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-lg mx-auto mb-3">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose RewardFlow?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the most secure and efficient way to earn rewards and manage your withdrawals 
              with our RazorpayX-powered platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-blue-200 transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600">
              Simple steps to start earning and withdrawing your rewards
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Complete BGV</h3>
              <p className="text-gray-600">
                Complete our secure background verification process to ensure account safety and compliance.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Earn Rewards</h3>
              <p className="text-gray-600">
                Participate in various activities and earn rewards that accumulate in your secure account.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Withdraw Funds</h3>
              <p className="text-gray-600">
                Instantly withdraw your earnings to your verified bank account via RazorpayX payouts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Start Earning?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of users who trust RewardFlow for secure earnings and instant withdrawals.
          </p>
          <Link 
            to="/dashboard"
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 inline-flex items-center space-x-2 shadow-lg"
          >
            <span>Access Dashboard</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;