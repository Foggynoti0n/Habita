'use client'
import React from 'react';

type Property = {
  id: number;
  name: string;
  location: string;
  price: number;
  image: string;
  type:string;
};


type PropertyListProps = {
  properties: Property[];
};

const PropertyList: React.FC<PropertyListProps> = ({ properties }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 w-full">
      {properties.map((property) => (
        <div key={property.id} className="bg-white w-full rounded-lg shadow-md overflow-hidden">
          <img src={property.image} alt={property.name} className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="text-lg font-semibold text-color1">{property.name}</h3>
            <p className="text-gray-600">{property.location}</p>
            <p className="text-color3 font-bold">{property.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PropertyList;
