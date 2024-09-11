import React from 'react';

const PropertyListing = () => {
    const properties = [
        {
            id: 1,
            image: 'https://images.unsplash.com/photo-1599423300746-b62533397364',
            title: 'Luxury Apartment in NYC',
            price: '$1,200,000',
            beds: 3,
            baths: 2,
            sqft: 1500,
        },

        {
            id: 3,
            image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c',
            title: 'Beachside Villa in Miami',
            price: '$2,500,000',
            beds: 5,
            baths: 4,
            sqft: 3000,
        },
        {
            id: 4,
            image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be',
            title: 'Cozy Cottage in the Woods',
            price: '$400,000',
            beds: 2,
            baths: 1,
            sqft: 900,
        },
    ];

    return (
        <div className="container mx-auto px-4 py-12">
            {/* Page Title */}
            <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">Property Listings</h1>

            {/* Listings Grid */}
            <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
                {properties.map((property) => (
                    <div key={property.id} className="border rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                        {/* Property Image */}
                        <img
                            className="w-full h-48 object-cover"
                            src={property.image}
                            alt={property.title}
                        />

                        {/* Property Details */}
                        <div className="p-6">
                            <h2 className="text-xl font-semibold text-gray-800">{property.title}</h2>
                            <p className="text-gray-600 mt-2">{property.price}</p>
                            <div className="flex items-center justify-between mt-4">
                                <p className="text-gray-600">{property.beds} Beds • {property.baths} Baths • {property.sqft} sqft</p>
                            </div>
                            <button className="mt-4 w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-500 transition duration-300">
                                View Details
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PropertyListing;
