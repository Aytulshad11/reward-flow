import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { 
  CreditCard, 
  DollarSign, 
  History, 
  Settings, 
  ArrowDownToLine, 
  CheckCircle,
  AlertCircle,
  Clock,
  Edit3,
  Banknote
} from 'lucide-react';

const Dashboard: React.FC = () => {
  const { isLoggedIn, user, updateBalance, updateBankDetails } = useAuth();
  const [withdrawalAmount, setWithdrawalAmount] = useState<string>('');
  const [withdrawalType, setWithdrawalType] = useState<'full' | 'custom'>('full');
  const [showBankForm, setShowBankForm] = useState(false);
  const [bankFormData, setBankFormData] = useState({
    accountNumber: '',
    ifscCode: '',
    accountHolderName: ''
  });

  // Mock transaction history
  const transactions = [
    { id: 1, date: '2025-01-15', amount: 5000, status: 'Processed', type: 'Withdrawal' },
    { id: 2, date: '2025-01-10', amount: 2500, status: 'Processed', type: 'Withdrawal' },
    { id: 3, date: '2025-01-05', amount: 1000, status: 'Pending', type: 'Withdrawal' },
    { id: 4, date: '2025-01-01', amount: 7500, status: 'Processed', type: 'Withdrawal' }
  ];

  if (!isLoggedIn || !user) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-md text-center">
          <AlertCircle className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Access Restricted</h2>
          <p className="text-gray-600">Please log in to access your dashboard.</p>
        </div>
      </div>
    );
  }

  const handleWithdraw = () => {
    const amount = withdrawalType === 'full' ? user.balance : parseFloat(withdrawalAmount);
    
    if (withdrawalType === 'custom' && (isNaN(amount) || amount <= 0 || amount > user.balance)) {
      alert('Please enter a valid amount within your available balance.');
      return;
    }

    // Mock API call
    console.log('Sending withdrawal request to backend:', {
      userId: user.id,
      amount: amount,
      bankDetails: user.bankDetails,
      type: withdrawalType
    });

    alert(`Withdrawal request of ₹${amount.toLocaleString()} submitted successfully! 
Processing via RazorpayX Payouts. You will receive confirmation shortly.`);

    // Update balance (in real app, this would be handled by backend)
    updateBalance(user.balance - amount);
    setWithdrawalAmount('');
  };

  const handleBankDetailsUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Updating bank details:', bankFormData);
    alert('Bank details updated successfully in backend! New withdrawals will use these details.');
    updateBankDetails(bankFormData);
    setShowBankForm(false);
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Processed':
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'Pending':
        return <Clock className="w-4 h-4 text-yellow-500" />;
      default:
        return <AlertCircle className="w-4 h-4 text-red-500" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-2">Welcome back, {user.name}! Manage your earnings and withdrawals.</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Available Balance</p>
                <p className="text-3xl font-bold text-gray-900">₹{user.balance.toLocaleString()}</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Withdrawn</p>
                <p className="text-3xl font-bold text-gray-900">₹{(16000).toLocaleString()}</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <ArrowDownToLine className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Pending Withdrawals</p>
                <p className="text-3xl font-bold text-gray-900">₹{(1000).toLocaleString()}</p>
              </div>
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                <Clock className="w-6 h-6 text-yellow-600" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Withdrawal Section */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-100">
            <div className="p-6 border-b border-gray-100">
              <div className="flex items-center space-x-2">
                <Banknote className="w-5 h-5 text-blue-600" />
                <h2 className="text-xl font-semibold text-gray-900">Withdraw Funds</h2>
              </div>
            </div>
            <div className="p-6 space-y-6">
              <div className="space-y-4">
                <div className="flex space-x-4">
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="radio"
                      name="withdrawalType"
                      value="full"
                      checked={withdrawalType === 'full'}
                      onChange={(e) => setWithdrawalType(e.target.value as 'full')}
                      className="text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-sm font-medium text-gray-900">Full Amount (₹{user.balance.toLocaleString()})</span>
                  </label>
                </div>
                <div className="flex space-x-4">
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="radio"
                      name="withdrawalType"
                      value="custom"
                      checked={withdrawalType === 'custom'}
                      onChange={(e) => setWithdrawalType(e.target.value as 'custom')}
                      className="text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-sm font-medium text-gray-900">Custom Amount</span>
                  </label>
                </div>
              </div>

              {withdrawalType === 'custom' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Enter Amount (₹)
                  </label>
                  <input
                    type="number"
                    value={withdrawalAmount}
                    onChange={(e) => setWithdrawalAmount(e.target.value)}
                    placeholder="Enter amount"
                    max={user.balance}
                    min="1"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Maximum: ₹{user.balance.toLocaleString()}
                  </p>
                </div>
              )}

              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-sm font-medium text-gray-900 mb-2">Bank Details</h3>
                <div className="space-y-1 text-sm text-gray-600">
                  <p>Account: {user.bankDetails.accountNumber}</p>
                  <p>IFSC: {user.bankDetails.ifscCode}</p>
                  <p>Name: {user.bankDetails.accountHolderName}</p>
                </div>
                <button
                  onClick={() => setShowBankForm(true)}
                  className="mt-2 text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center space-x-1"
                >
                  <Edit3 className="w-3 h-3" />
                  <span>Update Details</span>
                </button>
              </div>

              <button
                onClick={handleWithdraw}
                disabled={user.balance === 0}
                className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors flex items-center justify-center space-x-2"
              >
                <ArrowDownToLine className="w-5 h-5" />
                <span>
                  Withdraw {withdrawalType === 'full' 
                    ? `₹${user.balance.toLocaleString()}` 
                    : withdrawalAmount ? `₹${parseFloat(withdrawalAmount).toLocaleString()}` : 'Amount'}
                </span>
              </button>

              <p className="text-xs text-gray-500 text-center">
                Withdrawals are processed via RazorpayX Payouts within 3 business days
              </p>
            </div>
          </div>

          {/* Transaction History */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-100">
            <div className="p-6 border-b border-gray-100">
              <div className="flex items-center space-x-2">
                <History className="w-5 h-5 text-gray-600" />
                <h2 className="text-xl font-semibold text-gray-900">Transaction History</h2>
              </div>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {transactions.map((transaction) => (
                  <div key={transaction.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      {getStatusIcon(transaction.status)}
                      <div>
                        <p className="font-medium text-gray-900">₹{transaction.amount.toLocaleString()}</p>
                        <p className="text-sm text-gray-600">{transaction.date}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-gray-900">{transaction.type}</p>
                      <p className={`text-xs ${
                        transaction.status === 'Processed' ? 'text-green-600' :
                        transaction.status === 'Pending' ? 'text-yellow-600' : 'text-red-600'
                      }`}>
                        {transaction.status}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bank Details Update Modal */}
        {showBankForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg shadow-xl max-w-md w-full">
              <div className="p-6 border-b border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900">Update Bank Details</h3>
              </div>
              <form onSubmit={handleBankDetailsUpdate} className="p-6 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Account Number
                  </label>
                  <input
                    type="text"
                    value={bankFormData.accountNumber}
                    onChange={(e) => setBankFormData({...bankFormData, accountNumber: e.target.value})}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    IFSC Code
                  </label>
                  <input
                    type="text"
                    value={bankFormData.ifscCode}
                    onChange={(e) => setBankFormData({...bankFormData, ifscCode: e.target.value})}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Account Holder Name
                  </label>
                  <input
                    type="text"
                    value={bankFormData.accountHolderName}
                    onChange={(e) => setBankFormData({...bankFormData, accountHolderName: e.target.value})}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div className="flex space-x-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setShowBankForm(false)}
                    className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 font-medium"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium"
                  >
                    Update
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;