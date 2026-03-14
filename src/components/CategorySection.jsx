import React from 'react';
import Wearable from '../assets/images/wearable.png';
import Equipments from '../assets/images/equipments.png';
import  Shoes from '../assets/images/sports-shoes.png';

const categories = [
  { title: 'Sports Wear', imageUrl: Wearable },
  { title: 'Fitness Equipment', imageUrl: Equipments },
  { title: 'Sports Shoes', imageUrl: Shoes },
];

const CategorySection = () => (
  <div className="container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 p-4">
    {categories.map((category, index) => (
      <div
        key={index}
        className="group relative h-64 overflow-hidden rounded-lg shadow-lg cursor-pointer"
      >
        <img
          src={category.imageUrl}
          alt={category.title}
          className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <h2 className="text-2xl font-bold">{category.title}</h2>
          <p className="mt-2 bg-red-600 px-4 py-2 rounded-lg transform transition-transform duration-300 group-hover:scale-105">
            View All
          </p>
        </div>
      </div>
    ))}
  </div>
);

export default CategorySection;
