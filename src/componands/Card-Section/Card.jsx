import React, { useState } from 'react';
import { Modal, Button } from '@mui/material';
import 'tailwindcss/tailwind.css'; // Import Tailwind CSS
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Import Swiper styles

const ReviewCards = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupImage, setPopupImage] = useState('');

  const reviews = [
    {
      name: "John Doe",
      rating: 4,
      comment: "Good service!",
      date: "2024-12-24",
      time: "12:30 PM",
      image: "https://via.placeholder.com/150", // Profile image
      mobileImage: "https://via.placeholder.com/500", // Mobile image to show in popup
    },
    {
      name: "Jane Smith",
      rating: 5,
      comment: "Excellent quality!",
      date: "2024-12-23",
      time: "11:15 AM",
      image: "https://via.placeholder.com/150", // Profile image
      mobileImage: "https://via.placeholder.com/500", // Mobile image to show in popup
    },
    {
      name: "Alex Lee",
      rating: 3,
      comment: "Average experience.",
      date: "2024-12-22",
      time: "10:00 AM",
      image: "https://via.placeholder.com/150", // Profile image
      mobileImage: "https://via.placeholder.com/500", // Mobile image to show in popup
    },
    {
      name: "Emily Clarke",
      rating: 5,
      comment: "Absolutely loved it!",
      date: "2024-12-21",
      time: "9:00 AM",
      image: "https://via.placeholder.com/150", // Profile image
      mobileImage: "https://via.placeholder.com/500", // Mobile image to show in popup
    },
    {
      name: "Chris Brown",
      rating: 4,
      comment: "Great product, will buy again.",
      date: "2024-12-20",
      time: "8:45 AM",
      image: "https://via.placeholder.com/150", // Profile image
      mobileImage: "https://via.placeholder.com/500", // Mobile image to show in popup
    },
  ];

  const openPopup = (image) => {
    setPopupImage(image);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    
      
    <div className="container mx-auto mt-10">
    <div className="text-center mb-8">
        <h2 className="text-2xl font-bold">Customer Reviews</h2>
        <p className="text-gray-600 mt-2">
        What our Customers say about Priceoye.pk
        </p>
      </div>
      {/* Swiper Component */}
      <Swiper
        spaceBetween={30}  // Adjust space between slides
        slidesPerView={1}  // One card per view
        breakpoints={{
          640: {
            slidesPerView: 2, // Two cards for medium screens
          },
          1024: {
            slidesPerView: 3, // Three cards for large screens
          },
        }}
        loop={true}  // Infinite loop
        className="mySwiper"
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <div
              className="p-5 bg-white shadow-lg rounded-lg cursor-pointer"
              onClick={() => openPopup(review.mobileImage)}
            >
              <div className="flex items-center mb-4">
                {/* Profile Image */}
                <div className="w-12 h-12 rounded-full overflow-hidden mr-3">
                  <img src={review.image} alt={review.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  {/* Name and Verified Ring */}
                  <div className="flex items-center">
                    <span className="font-semibold text-lg mr-2">{review.name}</span>
                    <div className="w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                  </div>
                  <div className="flex items-center">
                    {/* Rating */}
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={`text-yellow-500 ${i < review.rating ? "text-yellow-500" : "text-gray-300"}`}>★</span>
                    ))}
                  </div>
                </div>
              </div>
              {/* Comment */}
              <p className="text-sm text-gray-700">{review.comment}</p>
              {/* Date and Time */}
              <div className="mt-3 text-xs text-gray-500">
                <span>{review.date}</span> at <span>{review.time}</span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Modal for Popup */}
      <Modal
        open={isPopupOpen}
        onClose={closePopup}
        aria-labelledby="popup-modal-title"
        aria-describedby="popup-modal-description"
      >
        <div className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-xl w-11/12 sm:w-1/3">
            <img
              src={popupImage}
              alt="Popup"
              className="w-full h-auto mx-auto rounded-lg"
            />
            <Button
              variant="contained"
              color="primary"
              onClick={closePopup}
              className="mt-4 w-full px-6 py-3"
            >
              Close
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ReviewCards;
