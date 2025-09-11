import React, { useState } from 'react';
import { Activity, AlertTriangle, Search, Plus, Menu, X, Sun, Moon, MapPin } from 'lucide-react';

const Dashboard = ({ stockData, alerts, locations, getStockByLocation, selectedLocation, setSelectedLocation, onOpenSearch, onOpenStockManager }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const getStockStatusColor = (quantity) => {
    if (quantity <= 5) return isDarkMode ? 'text-red-400 bg-red-900/30 border-red-500/30' : 'text-red-600 bg-red-50 border-red-200';
    if (quantity <= 10) return isDarkMode ? 'text-yellow-400 bg-yellow-900/30 border-yellow-500/30' : 'text-yellow-600 bg-yellow-50 border-yellow-200';
    return isDarkMode ? 'text-green-400 bg-green-900/30 border-green-500/30' : 'text-green-600 bg-green-50 border-green-200';
  };

  const getStockStatusIcon = (quantity) => {
    if (quantity <= 10) return <AlertTriangle className="w-4 h-4" />;
    return null;
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  const themeClasses = isDarkMode
    ? 'bg-gray-900 text-white'
    : 'bg-gradient-to-br from-blue-50 via-white to-red-50 text-gray-900';

  return (
    <div className={`min-h-screen transition-all duration-300 ${themeClasses}`}>
      <div className="container mx-auto px-4 py-8">
        <div className="space-y-8">
          {/* Enhanced Header */}
          <div className="relative">
            <div className={`${isDarkMode ? 'bg-gray-800/50' : 'bg-white/80'} backdrop-blur-sm rounded-2xl shadow-xl border ${isDarkMode ? 'border-gray-700' : 'border-white/20'} p-6`}>
              <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-red-600 rounded-2xl blur opacity-20"></div>
                    <div className={`relative ${isDarkMode ? 'bg-gray-800' : 'bg-white'} p-3 rounded-2xl shadow-lg`}>
                      <Activity className="w-10 h-10 text-blue-600" />
                    </div>
                  </div>
                  <div>
                    <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">
                      Blood Bank Management
                    </h1>
                    <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mt-2 text-lg`}>
                      Monitor blood inventory - {selectedLocation}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  {/* Location Selector */}
                  <div className="relative">
                    <select
                      value={selectedLocation}
                      onChange={(e) => setSelectedLocation(e.target.value)}
                      className={`appearance-none px-4 py-3 pr-10 rounded-xl border-2 font-medium transition-all duration-300 ${isDarkMode
                          ? 'bg-gray-700 border-gray-600 text-gray-200 hover:border-gray-500'
                          : 'bg-white border-gray-200 text-gray-700 hover:border-gray-300'
                        } focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
                    >
                      {locations.map((location) => (
                        <option key={location} value={location}>
                          {location}
                        </option>
                      ))}
                    </select>
                    <MapPin className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                  </div>

                  {/* Dark Mode Toggle */}
                  <button
                    onClick={toggleDarkMode}
                    className={`p-3 rounded-xl transition-all duration-300 ${isDarkMode
                        ? 'bg-yellow-500/20 text-yellow-400 hover:bg-yellow-500/30'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                  >
                    {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                  </button>

                  {/* Mobile Menu Toggle */}
                  <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className={`lg:hidden p-3 rounded-xl transition-all duration-300 ${isDarkMode
                        ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                  >
                    {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                  </button>

                  {/* Desktop Action Buttons */}
                  <div className="hidden lg:flex gap-3">
                    <button
                      onClick={onOpenSearch}
                      className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                    >
                      <Search className="w-5 h-5" />
                      Search Blood
                    </button>
                    <button
                      onClick={onOpenStockManager}
                      className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-xl hover:from-green-700 hover:to-green-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                    >
                      <Plus className="w-5 h-5" />
                      Manage Stock
                    </button>
                  </div>
                </div>
              </div>

              {/* Mobile Menu */}
              {isMobileMenuOpen && (
                <div className="lg:hidden mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex flex-col gap-3">
                    <button
                      onClick={() => {
                        onOpenSearch();
                        setIsMobileMenuOpen(false);
                      }}
                      className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg"
                    >
                      <Search className="w-5 h-5" />
                      Search Blood
                    </button>
                    <button
                      onClick={() => {
                        onOpenStockManager();
                        setIsMobileMenuOpen(false);
                      }}
                      className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-xl hover:from-green-700 hover:to-green-800 transition-all duration-300 shadow-lg"
                    >
                      <Plus className="w-5 h-5" />
                      Manage Stock
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Enhanced Alerts */}
          {alerts.length > 0 && (
            <div className={`${isDarkMode ? 'bg-red-900/20 border-red-500/30' : 'bg-red-50 border-red-200'} border-l-4 border-red-500 rounded-2xl shadow-lg overflow-hidden`}>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-red-500/20 rounded-xl mr-3">
                    <AlertTriangle className="w-6 h-6 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold text-red-800 dark:text-red-400">Stock Alerts</h3>
                  <span className="ml-3 px-3 py-1 bg-red-500 text-white text-sm rounded-full font-medium">
                    {alerts.length}
                  </span>
                </div>
                <div className="grid gap-3">
                  {alerts.map((alert) => (
                    <div key={alert.id} className={`p-4 rounded-xl ${isDarkMode ? 'bg-red-900/30' : 'bg-red-100/50'} border ${isDarkMode ? 'border-red-500/20' : 'border-red-200'}`}>
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="font-bold text-red-700 dark:text-red-400 text-lg">{alert.bloodGroup}</span>
                          <span className={`ml-2 ${isDarkMode ? 'text-red-300' : 'text-red-600'}`}>at {alert.location}</span>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${alert.severity === 'critical'
                            ? 'bg-red-600 text-white'
                            : isDarkMode ? 'bg-yellow-500/20 text-yellow-400' : 'bg-yellow-100 text-yellow-800'
                          }`}>
                          {alert.message}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Enhanced Location-wise Stock Display */}
          <div className="grid gap-8">
            {(() => {
              const locationStock = getStockByLocation(selectedLocation);
              const locationAlerts = alerts.filter(alert => alert.location === selectedLocation);

              return (
                <div key={selectedLocation} className={`${isDarkMode ? 'bg-gray-800/50' : 'bg-white/80'} backdrop-blur-sm rounded-2xl shadow-xl border ${isDarkMode ? 'border-gray-700' : 'border-white/20'} overflow-hidden transition-all duration-300 hover:shadow-2xl`}>
                  <div className={`${isDarkMode ? 'bg-gray-700/50' : 'bg-gradient-to-r from-gray-50 to-gray-100'} px-8 py-6 border-b ${isDarkMode ? 'border-gray-600' : 'border-gray-200'}`}>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <div className={`w-3 h-3 rounded-full ${locationAlerts.length > 0 ? 'bg-red-500' : 'bg-green-500'} animate-pulse`}></div>
                        <h2 className="text-2xl font-bold">{selectedLocation}</h2>
                      </div>
                      {locationAlerts.length > 0 && (
                        <div className="flex items-center gap-2 px-4 py-2 bg-red-500/20 text-red-600 dark:text-red-400 rounded-xl">
                          <AlertTriangle className="w-5 h-5" />
                          <span className="font-semibold">{locationAlerts.length} alerts</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="p-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
                      {locationStock.map((stock) => (
                        <div
                          key={`${stock.location}-${stock.bloodGroup}`}
                          className={`group relative ${isDarkMode ? 'bg-gray-700/50' : 'bg-white'} border-2 ${getStockStatusColor(stock.quantity)} rounded-2xl p-6 text-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 cursor-pointer transform`}
                        >
                          <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                          <div className="relative z-10">
                            <div className="flex items-center justify-center mb-3">
                              <span className="text-3xl font-bold text-red-600 dark:text-red-400">{stock.bloodGroup}</span>
                              {getStockStatusIcon(stock.quantity)}
                            </div>
                            <div className={`text-3xl font-bold px-3 py-2 rounded-xl transition-all duration-300 ${getStockStatusColor(stock.quantity)}`}>
                              {stock.quantity}
                            </div>
                            <div className={`text-sm mt-2 font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>bottles</div>

                            {/* Status indicator */}
                            <div className="mt-3">
                              {stock.quantity <= 5 && (
                                <span className="px-2 py-1 bg-red-500 text-white text-xs rounded-full font-medium">
                                  Critical
                                </span>
                              )}
                              {stock.quantity > 5 && stock.quantity <= 10 && (
                                <span className="px-2 py-1 bg-yellow-500 text-white text-xs rounded-full font-medium">
                                  Low
                                </span>
                              )}
                              {stock.quantity > 10 && (
                                <span className="px-2 py-1 bg-green-500 text-white text-xs rounded-full font-medium">
                                  Good
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;