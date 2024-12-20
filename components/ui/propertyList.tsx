'use client';
import React, { useState } from 'react';

type Property = {
  id: number;
  name: string;
  location: string;
  price: number;
  image: string;
  type: string;
};

type PropertyListProps = {
  properties: Property[];
};

const PropertyList: React.FC<PropertyListProps> = ({ properties }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const propertiesPerPage = 10;

  // Calcular el índice de inicio y fin para los elementos actuales en la página
  const indexOfLastProperty = currentPage * propertiesPerPage;
  const indexOfFirstProperty = indexOfLastProperty - propertiesPerPage;
  const currentProperties = properties.slice(indexOfFirstProperty, indexOfLastProperty);

  // Número total de páginas
  const totalPages = Math.ceil(properties.length / propertiesPerPage);

  // Funciones para cambiar de página
  const goToNextPage = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  return (
    <div className="px-4 w-full">
      {/* Grid de propiedades */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {currentProperties.map((property) => (
          <div key={property.id} className="bg-white w-full rounded-lg shadow-md overflow-hidden">
            <img src={property.image} alt={property.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-color1">{property.name}</h3>
              <h5>{property.type}</h5>
              <p className="text-gray-600">{property.location}</p>
              <p className="text-color3 font-bold">{property.price}</p>
            </div>
          </div>
        ))}
      </div>


    </div>
  );
};

export default PropertyList;
