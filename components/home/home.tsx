// Home.tsx
'use client'
import React, { useState, useRef } from 'react';
import { FaSearch, FaUser, FaBuilding, FaComments, FaFileContract } from 'react-icons/fa';
import PropertyList from '../ui/propertyList';
import properties from '../../data/properties';

const Home: React.FC = () => {
  const [filters, setFilters] = useState({
    propertyType: '',
    priceRange: '',
    location: '',
    searchQuery: '',
  });
  const [currentPage, setCurrentPage] = useState(1);
  const propertiesPerPage = 10;
  const propertiesRef = useRef<HTMLDivElement | null>(null);

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
    setCurrentPage(1); 
  };

  const filteredProperties = properties.filter((property) => {
    const matchesType = !filters.propertyType || property.type === filters.propertyType;
    const matchesLocation = !filters.location || property.location === filters.location;
    const matchesPrice =
      !filters.priceRange ||
      (filters.priceRange === 'low' && property.price < 50000) ||
      (filters.priceRange === 'medium' && property.price >= 50000 && property.price <= 100000) ||
      (filters.priceRange === 'high' && property.price > 100000);
    const matchesSearchQuery = !filters.searchQuery || property.name.toLowerCase().includes(filters.searchQuery.toLowerCase());

    return matchesType && matchesLocation && matchesPrice && matchesSearchQuery;
  });

  // Función para obtener las propiedades de la página actual
  const getCurrentPageProperties = () => {
    const start = (currentPage - 1) * propertiesPerPage;
    const end = start + propertiesPerPage;
    return filteredProperties.slice(start, end);
  };

  const totalPages = Math.ceil(filteredProperties.length / propertiesPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleSearchClick = () => {
    propertiesRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col items-center justify-center bg-color4 text-center">
      {/* Header y Filtros */}
      <header className="w-full h-screen flex flex-col items-center pt-24 bg-cover bg-fixed bg-no-repeat relative" style={{ backgroundImage: "url('/images/living.jpg')" }}>
      <div className="absolute inset-0 bg-gray-200 bg-opacity-30"></div>

<div className="relative z-10 text-color1">
  <h1 className="text-5xl font-bold mb-6 text-color1">HABITA</h1>
  <p className="text-lg mb-8 text-color1">La aplicación que facilita la relación entre propietarios e inquilinos.</p>

  <div className="flex items-center bg-white text-gray-900 rounded-full px-4 py-2 w-full shadow-md border border-gray-400">
    <FaSearch className="text-gray-500 mr-2 cursor-pointer" onClick={handleSearchClick} /> {/* Agregar onClick aquí */}
    <input
      type="text"
      placeholder="Buscar propiedades..."
      name="searchQuery"
      value={filters.searchQuery}
      onChange={handleFilterChange}
      className="w-full focus:outline-none text-gray-900"
    />
  </div>

  {/* Filtros de búsqueda */}
  <div className="flex bg-color3 bg-opacity-30 mt-6 space-x-4 p-2 rounded-full justify-center items-center shadow-md">
    <select name="propertyType" value={filters.propertyType} onChange={handleFilterChange} className="px-4 py-2 text-gray-600 rounded-full transition">
      <option value="">Tipo de propiedad</option>
      <option value="casa">Casa</option>
      <option value="departamento">Departamento</option>
      <option value="duplex">Dúplex</option>
    </select>
    <select name="priceRange" value={filters.priceRange} onChange={handleFilterChange} className="px-4 py-2 text-gray-600 rounded-full transition">
      <option value="">Precio</option>
      <option value="low">Menor a $50,000</option>
      <option value="medium">$50,000 - $100,000</option>
      <option value="high">Mayor a $100,000</option>
    </select>
    <select name="location" value={filters.location} onChange={handleFilterChange} className="px-4 py-2 text-gray-600 rounded-full transition">
      <option value="">Ubicación</option>
      <option value="Norte">Norte</option>
      <option value="Sur">Sur</option>
      <option value="Playa">Playa</option>
      <option value="Centro">Centro</option>
      <option value="Bosque">Bosque</option>
    </select>
  </div>
</div>
      </header>

      {/* Servicios */}
      <section className="w-[1000px] max-w-[1000px] py-12">
      <h2 className="text-4xl font-bold text-center text-color1 mb-10">Servicios Principales</h2>
      
      <div className="container text-color2 mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Servicio 1 */}
        <div data-aos="fade-right" className="flex items-center p-6 bg-color3 bg-opacity-40  rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <FaUser className="text-4xl text-[--color2] mr-4" />
          <div>
            <h3 className="text-xl font-semibold text-[--color1] mb-2">Perfiles de Usuarios</h3>
            <p className="text-[--color4]">
              Perfiles personalizados para propietarios e inquilinos, con verificación de identidad, contacto e historial.
            </p>
          </div>
        </div>

    

        {/* Servicio 2 */}
        <div data-aos="fade-left" className="flex items-center p-6 bg-color3 bg-opacity-40  rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <FaBuilding className="text-4xl text-[--color2] mr-4" />
          <div>
            <h3 className="text-xl font-semibold text-[--color1] mb-2">Gestión de Propiedades</h3>
            <p className="text-[--color4]">
              Registro de propiedades con descripciones detalladas, fotos, ubicación, y sistema de favoritos para inquilinos.
            </p>
          </div>
        </div>

        {/* Servicio 3 */}
        <div data-aos="fade-right" className="flex items-center p-6 bg-color3 bg-opacity-40 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <FaComments className="text-4xl text-[--color2] mr-4" />
          <div>
            <h3 className="text-xl font-semibold text-[--color1] mb-2">Seguimiento de pagos y mantenmiento</h3>
            <p className="text-[--color4]">
              Chat en tiempo real y notificaciones. Visualización de pagos y reclamos por mantenimeinto
            </p>
          </div>
        </div>

        {/* Servicio 4 */}
        <div data-aos="fade-left" className="flex items-center p-6 bg-color3 bg-opacity-40  rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
          <FaFileContract className="text-4xl text-[--color2] mr-4" />
          <div>
            <h3 className="text-xl font-semibold text-[--color1] mb-2">Gestión de Contratos</h3>
            <p className="text-[--color4]">
              Creación y firma de contratos digitales, almacenamiento de documentos, y recordatorios de vencimientos.
            </p>
          </div>
        </div>
      </div>
      </section>

      {/* Propiedades y paginación */}
      <div ref={propertiesRef} className="w-full max-w-[1000px] py-12 flex flex-col justify-center items-center">
        <h2 className="text-4xl font-bold text-center text-color1 mb-10">Propiedades Disponibles</h2>
        <div className="w-full max-w-[1100px] flex flex-wrap justify-between items-center">
          <PropertyList properties={getCurrentPageProperties()} />
        </div>

        {/* Controles de Paginación */}
        <div className="flex justify-center mt-6">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className="px-4 py-2 mx-2 bg-gray-300 rounded disabled:bg-gray-200 disabled:cursor-not-allowed"
          >
            Anterior
          </button>
          <span className="px-4 py-2">{`Página ${currentPage} de ${totalPages}`}</span>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className="px-4 py-2 mx-2 bg-gray-300 rounded disabled:bg-gray-200 disabled:cursor-not-allowed"
          >
            Siguiente
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;



















// 'use client';
// import React, { useState, useRef } from 'react';
// import { FaSearch, FaUser, FaBuilding, FaComments, FaFileContract } from 'react-icons/fa';
// import PropertyList from '../ui/propertyList';
// import properties from'../../data/properties'


// const Home: React.FC = () => {
//   const [filters, setFilters] = useState({
//     propertyType: '',
//     priceRange: '',
//     location: '',
//     searchQuery: '',
//   });

//   const propertiesRef = useRef<HTMLDivElement | null>(null); // Referencia a la sección de propiedades

//   // Función para actualizar los filtros
//   const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFilters(prevFilters => ({
//       ...prevFilters,
//       [name]: value,
//     }));
//   };

//   // Función para filtrar las propiedades
//   const filteredProperties = properties.filter(property => {
//     const matchesType = !filters.propertyType || property.type === filters.propertyType;
//     const matchesLocation = !filters.location || property.location === filters.location;
//     const matchesPrice =
//       !filters.priceRange ||
//       (filters.priceRange === 'low' && property.price < 50000) ||
//       (filters.priceRange === 'medium' && property.price >= 50000 && property.price <= 100000) ||
//       (filters.priceRange === 'high' && property.price > 100000);
//     const matchesSearchQuery = !filters.searchQuery || property.name.toLowerCase().includes(filters.searchQuery.toLowerCase());

//     return matchesType && matchesLocation && matchesPrice && matchesSearchQuery;
//   });

//   // Función para manejar el clic en el icono de búsqueda
//   const handleSearchClick = () => {
//     propertiesRef.current?.scrollIntoView({ behavior: 'smooth' });
//   };

//   return (
//     <div className="flex flex-col items-center justify-center bg-color4 text-center">
//       <header className="w-full h-screen flex flex-col items-center pt-24 bg-cover bg-fixed bg-no-repeat relative" style={{ backgroundImage: "url('/images/living.jpg')" }}>

//       </header>

  



//       <section className=" w-[1000px] max-w-[1000px] py-12">

//     </section>
//     <div ref={propertiesRef} className="w-full max-w-[1000px] py-12 flex flex-col justify-center items-center">
//         <h2 className="text-3xl font-bold text-center text-color1 mb-10">Propiedades Disponibles</h2>
//         <div className="w-full max-w-[1100px] flex flex-wrap justify-between items-center">
//           <PropertyList properties={filteredProperties} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;
