import React from 'react';
import { Target, Users, Heart } from 'lucide-react';

interface DonationProgressProps {
  current: number;
  goal: number;
}

export default function DonationProgress({ current, goal }: DonationProgressProps) {
  const percentage = (current / goal) * 100;
  
  return (
    <div className="w-full bg-white rounded-lg shadow-lg p-6 mb-8">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-2xl font-bold text-gray-800">Donation Progress</h3>
        <Target className="text-indigo-600 w-6 h-6" />
      </div>
      <div className="mb-4">
        <div className="w-full bg-gray-200 rounded-full h-4">
          <div
            className="bg-indigo-600 h-4 rounded-full transition-all duration-500"
            style={{ width: `${Math.min(percentage, 100)}%` }}
          ></div>
        </div>
      </div>
      <div className="flex justify-between text-gray-600">
        <span className="font-semibold">${current.toLocaleString()}</span>
        <span className="font-semibold">Goal: ${goal.toLocaleString()}</span>
      </div>
    </div>
  );
}