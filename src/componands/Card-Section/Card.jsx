import React, { useState } from 'react';
import { Modal, Button } from '@mui/material';
import 'tailwindcss/tailwind.css'; 
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; 

const ReviewCards = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupImage, setPopupImage] = useState('');

  const reviews = [
    {
      name: "Ali Khan",
      rating: 4,
      comment: "Good service!",
      date: "2024-12-24",
      time: "12:30 PM",
      image: "https://via.placeholder.com/150",
      mobileImage: "https://via.placeholder.com/500",
    },
    {
      name: "Fatima Bano",
      rating: 5,
      comment: "Excellent quality!",
      date: "2024-12-23",
      time: "11:15 AM",
      image: "https://via.placeholder.com/150",
      mobileImage: "https://via.placeholder.com/500",
    },
    {
      name: "Ahmed Raza",
      rating: 3,
      comment: "Average experience.",
      date: "2024-12-22",
      time: "10:00 AM",
      image: "https://via.placeholder.com/150",
      mobileImage: "https://via.placeholder.com/500",
    },
    {
      name: "Ayesha Noor",
      rating: 5,
      comment: "Absolutely loved it!",
      date: "2024-12-21",
      time: "9:00 AM",
      image: "https://via.placeholder.com/150",
      mobileImage: "https://via.placeholder.com/500",
    },
    {
      name: "Usman Malik",
      rating: 4,
      comment: "Great product, will buy again.",
      date: "2024-12-20",
      time: "8:45 AM",
      image: "https://via.placeholder.com/150",
      mobileImage: "https://via.placeholder.com/500",
    },
  ];

  const popupImages = [
    "https://images.priceoye.pk/review/7555/1540124-hopti-270x270.jpg",
    "https://images.priceoye.pk/review/7710/1539172-oc1re-270x270.jpg",
    "https://images.priceoye.pk/review/9969/1525458-dr4ho-270x270.jpg",
    "https://images.priceoye.pk/review/5045/412133-8aynf-270x270.jpg",
    "https://images.priceoye.pk/review/7908/1530725-ku80p-270x270.jpg",
    "https://images.priceoye.pk/review/8249/1499370-rluq9-270x270.jpg",
    "https://images.priceoye.pk/review/7802/1501120-tz4hd-270x270.jpg",
    "https://images.priceoye.pk/review/9434/1479225-rel5k-270x270.jpg",
    "https://images.priceoye.pk/review/7710/1530896-0ofrw-270x270.jpg"
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
    
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        loop={true}
        className="mySwiper"
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <div
              className="p-5 bg-white rounded-lg cursor-pointer"
              onClick={() => openPopup(popupImages[index])} 
            >
              <div className="flex items-center mb-4">
        
                <div className="w-12 h-12 rounded-full overflow-hidden mr-3">
                  <img src={review.image} alt={review.name} className="w-full h-full object-cover" />
                </div>
                <div>
              
                  <div className="flex items-center">
                    <span className="font-semibold text-lg mr-2">{review.name}</span>
                    <div className="w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                  </div>
                  <div className="flex items-center">
                  
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className={`text-yellow-500 ${i < review.rating ? "text-yellow-500" : "text-gray-300"}`}>★</span>
                    ))}
                  </div>
                </div>
              </div>
        
              <p className="text-sm text-gray-700">{review.comment}</p>
            
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
              className="w-full h-auto rounded-lg"
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
