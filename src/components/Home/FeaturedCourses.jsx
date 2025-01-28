import React from 'react';

const FeaturedCourses = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Featured Courses</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <img src="https://via.placeholder.com/400" alt="Course Image" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-semibold mb-2">Full-Stack Web Development</h3>
            <p className="text-gray-600 mb-4">Learn how to build full web applications with React, Node.js, and MongoDB.</p>
            <a href="/courses/full-stack" className="text-blue-600 hover:underline">Learn More</a>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <img src="https://via.placeholder.com/400" alt="Course Image" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-semibold mb-2">Data Science with Python</h3>
            <p className="text-gray-600 mb-4">Explore data analysis and machine learning with Python and Pandas.</p>
            <a href="/courses/data-science" className="text-blue-600 hover:underline">Learn More</a>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <img src="https://via.placeholder.com/400" alt="Course Image" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-semibold mb-2">Digital Marketing</h3>
            <p className="text-gray-600 mb-4">Master SEO, SEM, and social media strategies to grow your business online.</p>
            <a href="/courses/digital-marketing" className="text-blue-600 hover:underline">Learn More</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;
