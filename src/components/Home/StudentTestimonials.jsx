import React from 'react';

const StudentTestimonials = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">What Our Students Are Saying</h2>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg w-80">
            <p className="text-lg font-medium mb-4">"The classes were amazing! I learned so much in just a few weeks, and now I'm ready for a career in web development."</p>
            <div className="flex items-center">
              <img src="https://via.placeholder.com/50" alt="student" className="rounded-full mr-4" />
              <div>
                <h4 className="font-bold">Sarah Johnson</h4>
                <p className="text-gray-600">Web Developer</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg w-80">
            <p className="text-lg font-medium mb-4">"The platform made learning so much fun and interactive. I can apply what I learned in my job every day."</p>
            <div className="flex items-center">
              <img src="https://via.placeholder.com/50" alt="student" className="rounded-full mr-4" />
              <div>
                <h4 className="font-bold">Michael Davis</h4>
                <p className="text-gray-600">Marketing Specialist</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentTestimonials;
