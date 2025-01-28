import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules'; // Import Autoplay module
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const FeedbackCarousel = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(true);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    const fetchFeedback = async () => {
      try {
        const response = await axiosSecure('/api/feedback');
        const data = response.data;
        setFeedbacks(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching feedback:', error);
        setLoading(false);
      }
    };

    fetchFeedback();
  }, []);

  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">What Students Are Saying</h2>
        {loading ? (
          <p>Loading feedback...</p>
        ) : feedbacks.length === 0 ? (
          <p>No feedback available at the moment.</p>
        ) : (
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{
              delay: 3000, // Delay in milliseconds
              disableOnInteraction: false, // Keep autoplay even after user interaction
            }}
            loop={true} // Enable loop
            modules={[Navigation, Pagination, Autoplay]} // Add Autoplay module
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {feedbacks.map((feedback) => (
              <SwiperSlide key={feedback._id}>
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <img
                    src={feedback.classImage || 'https://via.placeholder.com/400'}
                    alt={feedback.classTitle || 'Class'}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <p className="text-gray-600 mb-4">"{feedback.description}"</p>
                  <div className="flex items-center justify-between flex-col">
                    <h4 className="font-bold capitalize">Mentor: {feedback.classTeacher || 'Anonymous'}</h4>
                    <p className="text-gray-600">{feedback.classTitle}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </section>
  );
};

export default FeedbackCarousel;
