import React, { useState, useEffect } from 'react';
import QRCode from 'react-qr-code';
import { 
  Coffee, 
  Download, 
  CreditCard, 
  ChevronDown, 
  ChevronUp, 
  Calendar, 
  QrCode 
} from 'lucide-react';

interface MealCardProps {
  mealData: {
    balance: number;
    plan: string;
    lastRecharge: string;
    mealHistory: Array<{
      date: string;
      meal: string;
      cost: number;
    }>;
    weeklyMenu: Array<{
      day: string;
      breakfast: string;
      lunch: string;
      snack: string;
      dinner: string;
    }>;
  };
}

const WEEKDAYS = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday'
];

const MealCard: React.FC<MealCardProps> = ({ mealData }) => {
  const [expandedDay, setExpandedDay] = useState<string | null>(null);
  const [showAllTransactions, setShowAllTransactions] = useState(false);
  const [activeTab, setActiveTab] = useState('menu');
  const [showQRCode, setShowQRCode] = useState(false);

  const handleDownload = () => {
    console.log("Downloading meal card...");
    // Implement actual download logic
  };

  const toggleDay = (day: string) => {
    setExpandedDay(expandedDay === day ? null : day);
  };

  const getCurrentDayIndex = () => {
    const day = new Date().getDay();
    return day === 0 ? 6 : day - 1;
  };

  useEffect(() => {
    setExpandedDay(WEEKDAYS[getCurrentDayIndex()]);
  }, []);

  const qrCodeData = JSON.stringify({
    balance: mealData.balance,
    plan: mealData.plan,
    lastRecharge: mealData.lastRecharge
  });

  return (
    <div className="w-full max-w-8xl bg-gray-50/30 border rounded-xl shadow-none">
      <div className="border-b p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Coffee className="w-6 h-6 text-blue-600" />
            <h2 className="text-xl font-semibold">Meal Card Dashboard</h2>
          </div>
          <button
            onClick={handleDownload}
            className="flex items-center space-x-2 px-4 py-2 text-sm border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <Download className="w-4 h-4" />
            <span>Export PDF</span>
          </button>
        </div>
      </div>

      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Balance Card */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 relative">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-sm text-gray-600">Available Balance</p>
                <p className="text-2xl font-bold text-blue-700">
                  KES : {mealData.balance.toLocaleString()}
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <CreditCard className="w-10 h-10 text-blue-600" />
                <button 
                  onClick={() => setShowQRCode(!showQRCode)}
                  className="text-blue-600 hover:bg-blue-100 rounded-full p-2"
                >
                  <QrCode className="w-5 h-5" />
                </button>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Plan Type</span>
                <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full">
                  {mealData.plan}
                </span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Last Recharge</span>
                <span className="font-medium">{mealData.lastRecharge}</span>
              </div>
            </div>

            {showQRCode && (
              <div className="absolute inset-0 bg-white/95 flex items-center justify-center z-10 rounded-xl">
                <div className="text-center">
                  <QRCode 
                    value={qrCodeData}
                    size={200}
                  />
                  <button 
                    onClick={() => setShowQRCode(false)}
                    className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Close QR Code
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Transactions Section */}
          <div className="bg-white rounded-xl border p-6">
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-semibold">Recent Transactions</h4>
              <button
                className="text-sm text-blue-600 hover:text-blue-700"
                onClick={() => setShowAllTransactions(!showAllTransactions)}
              >
                {showAllTransactions ? 'Show Less' : 'View All'}
              </button>
            </div>
            <div className="space-y-2">
              {mealData.mealHistory
                .slice(0, showAllTransactions ? undefined : 3)
                .map((meal, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div>
                      <p className="font-medium">{meal.meal}</p>
                      <p className="text-sm text-gray-500">{meal.date}</p>
                    </div>
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-lg text-sm">
                      KSH {meal.cost}
                    </span>
                  </div>
                ))}
            </div>
          </div>
        </div>

        {/* Weekly Menu Section */}
        <div className="mt-6">
          <div className="border-b">
            <div className="flex space-x-4">
              <button
                onClick={() => setActiveTab('menu')}
                className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
                  activeTab === 'menu'
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-600 hover:text-gray-800'
                }`}
              >
                Weekly Menu
              </button>
              <button
                onClick={() => setActiveTab('calendar')}
                className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
                  activeTab === 'calendar'
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-600 hover:text-gray-800'
                }`}
              >
                Calendar View
              </button>
            </div>
          </div>

          <div className="mt-4">
            {activeTab === 'menu' ? (
              <div className="space-y-3">
                {WEEKDAYS.map((day, index) => {
                  const isCurrentDay = index === getCurrentDayIndex();
                  const menuData = mealData.weeklyMenu[index] || {
                    breakfast: 'Menu not available',
                    lunch: 'Menu not available',
                    snack: 'Menu not available',
                    dinner: 'Menu not available'
                  };

                  return (
                    <div
                      key={day}
                      className={`border rounded-lg transition-colors ${
                        isCurrentDay ? 'border-blue-200 bg-blue-50' : 'hover:bg-gray-50'
                      }`}
                    >
                      <button
                        onClick={() => toggleDay(day)}
                        className="w-full flex items-center justify-between p-4"
                      >
                        <div className="flex items-center space-x-2">
                          <span className="font-medium">{day}</span>
                          {isCurrentDay && (
                            <span className="text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded-full">
                              Today
                            </span>
                          )}
                        </div>
                        {expandedDay === day ? (
                          <ChevronUp className="w-4 h-4" />
                        ) : (
                          <ChevronDown className="w-4 h-4" />
                        )}
                      </button>
                      {expandedDay === day && (
                        <div className="px-4 pb-4 grid grid-cols-4 gap-4">
                          <div>
                            <p className="text-sm font-medium text-gray-600">Breakfast</p>
                            <p className="mt-1">{menuData.breakfast}</p>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-600">Lunch</p>
                            <p className="mt-1">{menuData.lunch}</p>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-600">Snack</p>
                            <p className="mt-1">{menuData.snack}</p>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-600">Dinner</p>
                            <p className="mt-1">{menuData.dinner}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="text-center py-8 bg-gray-50 rounded-lg">
                <Calendar className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                <p className="text-gray-600">Calendar view will be available in the next update.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MealCard;