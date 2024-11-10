import React from 'react';
import { Check } from 'lucide-react';

interface InvestmentTierProps {
  name: string;
  amount: string;
  features: string[];
  recommended?: boolean;
}

export default function InvestmentTier({ name, amount, features, recommended }: InvestmentTierProps) {
  return (
    <div className={`bg-white rounded-lg shadow-lg p-6 ${recommended ? 'ring-2 ring-indigo-600' : ''}`}>
      {recommended && (
        <span className="bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-medium">
          Recommended
        </span>
      )}
      <h3 className="text-2xl font-bold text-gray-900 mt-4">{name}</h3>
      <div className="mt-4 mb-8">
        <span className="text-4xl font-bold text-gray-900">{amount}</span>
        <span className="text-gray-600"> minimum</span>
      </div>
      <ul className="space-y-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-3">
            <Check className="h-5 w-5 text-indigo-600" />
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
      <button className={`w-full mt-8 px-6 py-3 rounded-md transition
        ${recommended 
          ? 'bg-indigo-600 text-white hover:bg-indigo-700' 
          : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
        }`}>
        Invest Now
      </button>
    </div>
  );
}