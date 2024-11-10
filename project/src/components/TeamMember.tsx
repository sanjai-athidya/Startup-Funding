import React from 'react';

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  linkedin: string;
}

export default function TeamMember({ name, role, image, linkedin }: TeamMemberProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img 
        src={image} 
        alt={name} 
        className="w-full h-64 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900">{name}</h3>
        <p className="text-gray-600 mb-4">{role}</p>
        <a 
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-600 hover:text-indigo-700 transition"
        >
          View LinkedIn Profile
        </a>
      </div>
    </div>
  );
}