import { useState, useEffect } from 'react';
import { bloodGroups, locations } from '../types/bloodBank.js';

// Initial stock data
const initialStock = [
  // Main Hospital
  { bloodGroup: 'A+', quantity: 25, location: 'Main Hospital' },
  { bloodGroup: 'A-', quantity: 15, location: 'Main Hospital' },
  { bloodGroup: 'B+', quantity: 18, location: 'Main Hospital' },
  { bloodGroup: 'B-', quantity: 8, location: 'Main Hospital' },
  { bloodGroup: 'O+', quantity: 30, location: 'Main Hospital' },
  { bloodGroup: 'O-', quantity: 12, location: 'Main Hospital' },
  { bloodGroup: 'AB+', quantity: 14, location: 'Main Hospital' },
  { bloodGroup: 'AB-', quantity: 6, location: 'Main Hospital' },
  
  // Branch 1
  { bloodGroup: 'A+', quantity: 9, location: 'Branch 1' },
  { bloodGroup: 'A-', quantity: 11, location: 'Branch 1' },
  { bloodGroup: 'B+', quantity: 12, location: 'Branch 1' },
  { bloodGroup: 'B-', quantity: 5, location: 'Branch 1' },
  { bloodGroup: 'O+', quantity: 16, location: 'Branch 1' },
  { bloodGroup: 'O-', quantity: 8, location: 'Branch 1' },
  { bloodGroup: 'AB+', quantity: 7, location: 'Branch 1' },
  { bloodGroup: 'AB-', quantity: 4, location: 'Branch 1' },
  
  // Branch 2
  { bloodGroup: 'A+', quantity: 13, location: 'Branch 2' },
  { bloodGroup: 'A-', quantity: 7, location: 'Branch 2' },
  { bloodGroup: 'B+', quantity: 15, location: 'Branch 2' },
  { bloodGroup: 'B-', quantity: 9, location: 'Branch 2' },
  { bloodGroup: 'O+', quantity: 22, location: 'Branch 2' },
  { bloodGroup: 'O-', quantity: 5, location: 'Branch 2' },
  { bloodGroup: 'AB+', quantity: 11, location: 'Branch 2' },
  { bloodGroup: 'AB-', quantity: 3, location: 'Branch 2' },
];

export const useBloodBankData = () => {
  const [stockData, setStockData] = useState(initialStock);
  const [transactions, setTransactions] = useState([]);
  const [alerts, setAlerts] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState('Main Hospital');

  // Generate alerts when stock is low
  useEffect(() => {
    const newAlerts = [];
    
    stockData.forEach((stock) => {
      if (stock.quantity <= 10) {
        const severity = stock.quantity <= 5 ? 'critical' : 'low';
        const message = stock.quantity <= 5 
          ? `Critical: Only ${stock.quantity} bottles remaining`
          : `Low stock: ${stock.quantity} bottles remaining`;
          
        newAlerts.push({
          id: `${stock.location}-${stock.bloodGroup}`,
          bloodGroup: stock.bloodGroup,
          location: stock.location,
          currentQuantity: stock.quantity,
          message,
          severity
        });
      }
    });
    
    setAlerts(newAlerts);
  }, [stockData]);

  const updateStock = (bloodGroup, location, quantity, type, note, onSuccess) => {
    const transaction = {
      id: Date.now().toString(),
      bloodGroup,
      location,
      type,
      quantity,
      timestamp: new Date(),
      note
    };

    setTransactions(prev => [transaction, ...prev]);

    setStockData(prev => prev.map(stock => {
      if (stock.bloodGroup === bloodGroup && stock.location === location) {
        const newQuantity = type === 'add' 
          ? stock.quantity + quantity 
          : Math.max(0, stock.quantity - quantity);
        return { ...stock, quantity: newQuantity };
      }
      return stock;
    }));

    // Call success callback for toast notification
    if (onSuccess) {
      onSuccess();
    }
  };

  const getStockByLocation = (location) => {
    return stockData.filter(stock => stock.location === location);
  };

  const searchBlood = (bloodGroup) => {
    return stockData.filter(stock => stock.bloodGroup === bloodGroup && stock.quantity > 0);
  };

  const getTotalStock = (bloodGroup) => {
    return stockData
      .filter(stock => stock.bloodGroup === bloodGroup)
      .reduce((total, stock) => total + stock.quantity, 0);
  };

  return {
    stockData,
    transactions,
    alerts,
    bloodGroups,
    locations,
    selectedLocation,
    setSelectedLocation,
    updateStock,
    getStockByLocation,
    searchBlood,
    getTotalStock
  };
};