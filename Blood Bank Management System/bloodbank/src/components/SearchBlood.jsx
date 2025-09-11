import React, { useState } from 'react';
import { Search, MapPin, X, Activity } from 'lucide-react';
import { useBloodBankData } from '../hooks/useBloodBankData.js';

const SearchBlood = ({ onClose }) => {
  const [selectedBloodGroup, setSelectedBloodGroup] = useState('A+');
  const { searchBlood, bloodGroups, getTotalStock } = useBloodBankData();

  const searchResults = searchBlood(selectedBloodGroup);
  const totalAvailable = getTotalStock(selectedBloodGroup);

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50" onClick={onClose}>
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-3xl w-full max-h-[85vh] overflow-y-auto border border-gray-200 dark:border-gray-700" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between p-8 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl">
              <Search className="w-7 h-7 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Search Blood</h2>
              <p className="text-gray-600 dark:text-gray-300 mt-1">Find available blood across all locations</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-3 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-xl transition-colors"
          >
            <X className="w-6 h-6 text-gray-600 dark:text-gray-400" />
          </button>
        </div>

        <div className="p-8 space-y-8">
          {/* Blood Group Selection */}
          <div>
            <label className="block text-lg font-semibold text-gray-700 dark:text-gray-300 mb-4">
              Select Blood Group
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

          {/* Total Available */}
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border border-blue-200 dark:border-blue-700 rounded-2xl p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Activity className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                <span className="text-xl font-semibold text-blue-900 dark:text-blue-300">
                  Total {selectedBloodGroup} Available
                </span>
              </div>
              <div className="text-right">
                <span className="text-4xl font-bold text-blue-600 dark:text-blue-400">
                  {totalAvailable}
                </span>
                <div className="text-sm text-blue-700 dark:text-blue-300">bottles</div>
              </div>
            </div>
          </div>

          {/* Search Results */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
              <MapPin className="w-6 h-6 text-gray-600 dark:text-gray-400" />
              Available Locations
            </h3>

            {searchResults.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-6xl mb-6">🩸</div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  No Stock Available
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-lg">
                  {selectedBloodGroup} blood is currently out of stock at all locations.
                </p>
              </div>
            ) : (
              <div className="grid gap-4">
                {searchResults.map((stock) => (
                  <div
                    key={`${stock.location}-${stock.bloodGroup}`}
                    className="flex items-center justify-between p-6 bg-gray-50 dark:bg-gray-700 rounded-2xl border border-gray-200 dark:border-gray-600 hover:shadow-lg transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-600"
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-xl">
                        <MapPin className="w-6 h-6 text-green-600 dark:text-green-400" />
                      </div>
                      <div>
                        <span className="font-bold text-xl text-gray-900 dark:text-white">{stock.location}</span>
                        <div className="text-sm text-gray-600 dark:text-gray-400">Blood Bank Location</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <span className="text-3xl font-bold text-green-600 dark:text-green-400">
                          {stock.quantity}
                        </span>
                        <div className="text-sm text-gray-500 dark:text-gray-400">bottles</div>
                      </div>
                      {stock.quantity <= 10 && (
                        <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-400 text-sm rounded-full font-medium">
                          Low Stock
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-700 p-6">
          <button
            onClick={onClose}
            className="w-full px-6 py-3 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors font-medium"
          >
            Close Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBlood;