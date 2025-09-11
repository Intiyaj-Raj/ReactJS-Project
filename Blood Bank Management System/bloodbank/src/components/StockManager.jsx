import React, { useState } from 'react';
import { Plus, Minus, X, Clock, Package, TrendingUp, TrendingDown } from 'lucide-react';
import Toast from './Toast.jsx';

const StockManager = ({ updateStock, bloodGroups, locations, transactions, setSelectedLocation, onClose }) => {
  const [selectedBloodGroup, setSelectedBloodGroup] = useState('A+');
  const [localSelectedLocation, setLocalSelectedLocation] = useState('Main Hospital');
  const [quantity, setQuantity] = useState(1);
  const [note, setNote] = useState('');
  const [activeTab, setActiveTab] = useState('manage');
  const [toast, setToast] = useState(null);

  const handleStockUpdate = (type) => {
    if (quantity > 0) {
      updateStock(selectedBloodGroup, localSelectedLocation, quantity, type, note || undefined, () => {
        // Show success toast
        const message = type === 'add'
          ? `Successfully added ${quantity} bottles of ${selectedBloodGroup} to ${localSelectedLocation}`
          : `Successfully removed ${quantity} bottles of ${selectedBloodGroup} from ${localSelectedLocation}`;

        setToast({
          message,
          type: 'success'
        });
        setSelectedLocation(localSelectedLocation); // Update global selectedLocation to reflect changes in Dashboard
      });
      setQuantity(1);
      setNote('');
    }
  };

  const closeToast = () => {
    setToast(null);
  };
  return (
    <>
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={closeToast}
        />
      )}

      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50" onClick={onClose}>
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto border border-gray-200 dark:border-gray-700" onClick={(e) => e.stopPropagation()}>
          <div className="flex items-center justify-between p-8 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-xl">
                <Package className="w-7 h-7 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Stock Management</h2>
                <p className="text-gray-600 dark:text-gray-300 mt-1">Manage blood inventory and view transaction history</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-3 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-xl transition-colors"
            >
              <X className="w-6 h-6 text-gray-600 dark:text-gray-400" />
            </button>
          </div>

          {/* Enhanced Tabs */}
          <div className="border-b border-gray-200 dark:border-gray-700">
            <div className="flex">
              <button
                onClick={() => setActiveTab('manage')}
                className={`flex items-center gap-2 px-8 py-4 font-semibold transition-all duration-300 ${activeTab === 'manage'
                  ? 'border-b-3 border-blue-500 text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700'
                  }`}
              >
                <Package className="w-5 h-5" />
                Manage Stock
              </button>
              <button
                onClick={() => setActiveTab('history')}
                className={`flex items-center gap-2 px-8 py-4 font-semibold transition-all duration-300 ${activeTab === 'history'
                  ? 'border-b-3 border-blue-500 text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700'
                  }`}
              >
                <Clock className="w-5 h-5" />
                Transaction History
              </button>
            </div>
          </div>

          <div className="p-8">
            {activeTab === 'manage' ? (
              <div className="space-y-8">
                {/* Blood Group Selection */}
                <div>
                  <label className="block text-lg font-semibold text-gray-700 dark:text-gray-300 mb-4">
                    Blood Group
                  </label>
                  <div className="grid grid-cols-4 gap-4">
                    {bloodGroups.map((group) => (
                      <button
                        key={group}
                        onClick={() => setSelectedBloodGroup(group)}
                        className={`p-4 rounded-xl border-2 font-bold text-lg transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 ${selectedBloodGroup === group
                          ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 shadow-lg'
                          : 'border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500 text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700'
                          }`}
                      >
                        {group}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Location Selection */}
                <div>
                  <label className="block text-lg font-semibold text-gray-700 dark:text-gray-300 mb-4">
                    Location
                  </label>
                  <select
                    value={localSelectedLocation}
                    onChange={(e) => setLocalSelectedLocation(e.target.value)}
                    className="w-full p-4 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-lg font-medium transition-all duration-300"
                  >
                    {locations.map((location) => (
                      <option key={location} value={location}>
                        {location}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Quantity */}
                <div>
                  <label className="block text-lg font-semibold text-gray-700 dark:text-gray-300 mb-4">
                    Quantity (bottles)
                  </label>
                  <input
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                    className="w-full p-4 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white text-lg font-medium transition-all duration-300"
                  />
                </div>

                {/* Note */}
                <div>
                  <label className="block text-lg font-semibold text-gray-700 dark:text-gray-300 mb-4">
                    Note (Optional)
                  </label>
                  <textarea
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    placeholder="Add a note about this transaction..."
                    className="w-full p-4 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-300"
                    rows={4}
                  />
                </div>

                {/* Enhanced Action Buttons */}
                <div className="grid md:grid-cols-2 gap-6">
                  <button
                    onClick={() => handleStockUpdate('add')}
                    className="flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-xl hover:from-green-700 hover:to-green-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 font-semibold text-lg"
                  >
                    <TrendingUp className="w-6 h-6" />
                    Add Stock
                  </button>
                  <button
                    onClick={() => handleStockUpdate('remove')}
                    className="flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-xl hover:from-red-700 hover:to-red-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 font-semibold text-lg"
                  >
                    <TrendingDown className="w-6 h-6" />
                    Remove Stock
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-8">
                  <Clock className="w-6 h-6 text-gray-600 dark:text-gray-400" />
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Recent Transactions</h3>
                </div>

                {transactions.length === 0 ? (
                  <div className="text-center py-12">
                    <div className="text-6xl mb-6">📋</div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                      No Transactions Yet
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-lg">
                      Start managing your blood stock to see transaction history here.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {transactions.slice(0, 20).map((transaction) => (
                      <div
                        key={transaction.id}
                        className="flex items-center justify-between p-6 bg-gray-50 dark:bg-gray-700 rounded-2xl border border-gray-200 dark:border-gray-600 hover:shadow-lg transition-all duration-300"
                      >
                        <div className="flex items-center gap-4">
                          <div className={`p-3 rounded-xl ${transaction.type === 'add'
                            ? 'bg-green-100 dark:bg-green-900/30'
                            : 'bg-red-100 dark:bg-red-900/30'
                            }`}>
                            {transaction.type === 'add' ? (
                              <TrendingUp className="w-6 h-6 text-green-600 dark:text-green-400" />
                            ) : (
                              <TrendingDown className="w-6 h-6 text-red-600 dark:text-red-400" />
                            )}
                          </div>
                          <div>
                            <div className="font-bold text-lg text-gray-900 dark:text-white">
                              {transaction.type === 'add' ? 'Added' : 'Removed'} {transaction.quantity} bottles of {transaction.bloodGroup}
                            </div>
                            <div className="text-gray-600 dark:text-gray-400">
                              {transaction.location} • {transaction.timestamp.toLocaleString()}
                            </div>
                            {transaction.note && (
                              <div className="text-sm text-gray-500 dark:text-gray-400 mt-1 italic">
                                Note: {transaction.note}
                              </div>
                            )}
                          </div>
                        </div>
                        <div className={`px-4 py-2 rounded-xl font-semibold ${transaction.type === 'add'
                          ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400'
                          : 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400'
                          }`}>
                          {transaction.type === 'add' ? '+' : '-'}{transaction.quantity}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>

          <div className="border-t border-gray-200 dark:border-gray-700 p-6">
            <button
              onClick={onClose}
              className="w-full px-6 py-3 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors font-medium"
            >
              Close Manager
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default StockManager;