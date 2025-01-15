import React, { useState } from 'react';
import { Modal, Button } from '@mui/material';
import 'tailwindcss/tailwind.css';
import { Swiper, SwiperSlide } from 'swiper/react'; 
import 'swiper/css'; 
import CheckCircleIcon from '@mui/icons-material/CheckCircle'; 

const ImgModal = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupData, setPopupData] = useState({ src: "", name: "", description: "", quantity: 0 });

  const images = [
    { src: "https://images.priceoye.pk/review/7555/1540124-hopti-270x270.jpg", name: "Samsung Galaxy S22", description: "Latest flagship with an awesome display.", quantity: 10 },
    { src: "https://images.priceoye.pk/review/7710/1539172-oc1re-270x270.jpg", name: "iPhone 13", description: "Experience Apple’s premium quality.", quantity: 5 },
    { src: "https://images.priceoye.pk/review/9969/1525458-dr4ho-270x270.jpg", name: "OnePlus 9 Pro", description: "Great performance with a sleek design.", quantity: 8 },
    { src: "https://images.priceoye.pk/review/5045/412133-8aynf-270x270.jpg", name: "Google Pixel 6", description: "Pure Android experience with excellent camera.", quantity: 6 },
    { src: "https://images.priceoye.pk/review/7908/1530725-ku80p-270x270.jpg", name: "Xiaomi Mi 11", description: "Affordable flagship with a powerful processor.", quantity: 12 },
    { src: "https://images.priceoye.pk/review/8249/1499370-rluq9-270x270.jpg", name: "Oppo Reno 6", description: "Sleek design and great camera performance.", quantity: 7 },
    { src: "https://images.priceoye.pk/review/7802/1501120-tz4hd-270x270.jpg", name: "Realme GT", description: "Flagship performance at a budget price.", quantity: 15 },
    { src: "https://images.priceoye.pk/review/9434/1479225-rel5k-270x270.jpg", name: "Vivo V21", description: "Good balance of performance and camera quality.", quantity: 20 },
    { src: "https://images.priceoye.pk/review/7710/1530896-0ofrw-270x270.jpg", name: "Samsung A52", description: "Mid-range smartphone with solid features.", quantity: 25 },
  ];

  const openPopup = (src, name, description, quantity) => {
    setPopupData({ src, name, description, quantity });
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className="container mx-auto mt-5">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold">Customer Reviews</h2>
        <p className="text-gray-600 mt-2">
          What our Customers say about Priceoye.pk
        </p>
      </div>
      <div className="max-w-6xl mx-auto">
        <Swiper
          spaceBetween={10}
          slidesPerView={9} 
          breakpoints={{
            320: { slidesPerView: 3 }, 
            640: { slidesPerView: 5 }, 
            1024: { slidesPerView: 7 }, 
            1280: { slidesPerView: 9 }, 
          }}
          className="my-5"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <img
                src={image.src}
                alt={image.name}
                className="w-full h-16 object-cover rounded-lg cursor-pointer" 
                onClick={() => openPopup(image.src, image.name, image.description, image.quantity)}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <Modal
        open={isPopupOpen}
        onClose={closePopup}
        aria-labelledby="popup-modal-title"
        aria-describedby="popup-modal-description"
      >
        <div className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-xl w-11/12 sm:w-1/3 lg:w-1/4 xl:w-1/5">
            <img
              src={popupData.src}
              alt="Popup"
              className="w-full h-48 mx-auto rounded-lg"
            />
            <p className="mt-4 text-center text-lg font-semibold">{popupData.name}</p>
            <p className="mt-2 text-center text-gray-600">{popupData.description}</p>
            <p className="mt-2 text-center text-gray-500">Available Quantity: {popupData.quantity}</p>
            <div className="flex justify-center items-center mt-4">
              <span className="text-green-500 text-sm font-semibold">Verified</span>
              <CheckCircleIcon className="text-green-500 ml-2" />
            </div>
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

export default ImgModal;
