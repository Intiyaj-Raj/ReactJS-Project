import React, { useState } from 'react';
import Dashboard from './components/Dashboard.jsx';
import SearchBlood from './components/SearchBlood.jsx';
import StockManager from './components/StockManager.jsx';
import Footer from './components/Footer.jsx';
import { useBloodBankData } from './hooks/useBloodBankData.js';

function App() {
  const [showSearch, setShowSearch] = useState(false);
  const [showStockManager, setShowStockManager] = useState(false);

  const { stockData, alerts, locations, getStockByLocation, selectedLocation, setSelectedLocation, updateStock, bloodGroups, transactions } = useBloodBankData();

  return (
    <div className="min-h-screen flex flex-col min-h-screen">
      <div className="flex-grow">
        <Dashboard
          stockData={stockData}
          alerts={alerts}
          locations={locations}
          getStockByLocation={getStockByLocation}
          selectedLocation={selectedLocation}
          setSelectedLocation={setSelectedLocation}
          onOpenSearch={() => setShowSearch(true)}
          onOpenStockManager={() => setShowStockManager(true)}
        />

        {showSearch && (
          <SearchBlood onClose={() => setShowSearch(false)} />
        )}

        {showStockManager && (
          <StockManager
            updateStock={updateStock}
            bloodGroups={bloodGroups}
            locations={locations}
            transactions={transactions}
            setSelectedLocation={setSelectedLocation}
            onClose={() => setShowStockManager(false)}
          />
        )}
      </div>
      <Footer />
    </div>
  );
}

export default App;