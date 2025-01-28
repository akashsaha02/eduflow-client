import React from 'react';

const StatisticsSection = ({ totalUsers, totalClasses, totalEnrollments }) => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-8">
        {/* Left Side: Cards */}
        <div className="w-full lg:w-1/2">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Total Users Card */}
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <h3 className="text-2xl font-bold text-gray-800">{totalUsers}</h3>
              <p className="text-gray-600 mt-2">Total Users</p>
            </div>
            {/* Total Classes Card */}
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <h3 className="text-2xl font-bold text-gray-800">{totalClasses}</h3>
              <p className="text-gray-600 mt-2">Total Classes</p>
            </div>
            {/* Total Enrollments Card */}
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <h3 className="text-2xl font-bold text-gray-800">{totalEnrollments}</h3>
              <p className="text-gray-600 mt-2">Total Enrollments</p>
            </div>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="w-full lg:w-1/2">
          <img
            src="https://via.placeholder.com/500x300" // Replace with a relevant image
            alt="Website Statistics"
            className="rounded-lg shadow-lg w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
