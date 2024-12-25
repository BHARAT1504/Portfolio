import React from 'react';
import { LucideIcon } from 'lucide-react';

interface AboutCardProps {
  Icon: LucideIcon;
  title: string;
  description: string;
}

export default function AboutCard({ Icon, title, description }: AboutCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
      <div className="flex items-center gap-3 mb-4">
        <Icon className="w-6 h-6 text-blue-900" />
        <h3 className="text-xl font-semibold text-blue-900">{title}</h3>
      </div>
      <p className="text-gray-700 leading-relaxed">{description}</p>
    </div>
  );
}