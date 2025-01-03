import React, { useState } from 'react';
import { Modal, Button } from '@mui/material';
import 'tailwindcss/tailwind.css'; // Import Tailwind CSS
import { Swiper, SwiperSlide } from 'swiper/react'; // Import Swiper components
import 'swiper/css'; // Import Swiper CSS

const ImgModal = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupData, setPopupData] = useState({ src: "", name: "", description: "" });

  const images = [
    { src: "https://images.priceoye.pk/review/7555/1540124-hopti-270x270.jpg", name: "Image 1", description: "This is image 1" },
    { src: "https://images.priceoye.pk/review/7710/1539172-oc1re-270x270.jpg", name: "Image 2", description: "This is image 2" },
    { src: "https://images.priceoye.pk/review/9969/1525458-dr4ho-270x270.jpg", name: "Image 3", description: "This is image 3" },
    { src: "https://images.priceoye.pk/review/5045/412133-8aynf-270x270.jpg", name: "Image 4", description: "This is image 4" },
    { src: "https://images.priceoye.pk/review/7908/1530725-ku80p-270x270.jpg", name: "Image 5", description: "This is image 5" },
    { src: "https://images.priceoye.pk/review/8249/1499370-rluq9-270x270.jpg", name: "Image 6", description: "This is image 6" },
    { src: "https://images.priceoye.pk/review/7802/1501120-tz4hd-270x270.jpg", name: "Image 7", description: "This is image 7" },
    { src: "https://images.priceoye.pk/review/9434/1479225-rel5k-270x270.jpg", name: "Image 8", description: "This is image 8" },
    { src: "https://images.priceoye.pk/review/7710/1530896-0ofrw-270x270.jpg", name: "Image 9", description: "This is image 9" },
    { src: "https://images.priceoye.pk/review/7555/1540124-hopti-270x270.jpg", name: "Image 1", description: "This is image 1" },
    { src: "https://images.priceoye.pk/review/7710/1539172-oc1re-270x270.jpg", name: "Image 2", description: "This is image 2" },
    { src: "https://images.priceoye.pk/review/9969/1525458-dr4ho-270x270.jpg", name: "Image 3", description: "This is image 3" },
    { src: "https://images.priceoye.pk/review/5045/412133-8aynf-270x270.jpg", name: "Image 4", description: "This is image 4" },
    { src: "https://images.priceoye.pk/review/7908/1530725-ku80p-270x270.jpg", name: "Image 5", description: "This is image 5" },
    { src: "https://images.priceoye.pk/review/8249/1499370-rluq9-270x270.jpg", name: "Image 6", description: "This is image 6" },
    { src: "https://images.priceoye.pk/review/7802/1501120-tz4hd-270x270.jpg", name: "Image 7", description: "This is image 7" },
    { src: "https://images.priceoye.pk/review/9434/1479225-rel5k-270x270.jpg", name: "Image 8", description: "This is image 8" },
    { src: "https://images.priceoye.pk/review/7710/1530896-0ofrw-270x270.jpg", name: "Image 9", description: "This is image 9" },
  ];

  const openPopup = (src, name, description) => {
    setPopupData({ src, name, description });
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className="container mx-auto mt-5">
      {/* First SwiperJS Slider */}
      <div className="max-w-6xl mx-auto">
        
        <Swiper
          spaceBetween={10}
          slidesPerView={9} // Show 9 slides at a time
          breakpoints={{
            320: { slidesPerView: 3 }, // 3 slides on very small screens
            640: { slidesPerView: 5 }, // 5 slides on small screens
            1024: { slidesPerView: 7 }, // 7 slides on medium screens
            1280: { slidesPerView: 9 }, // 9 slides on large screens
          }}
          className="my-5"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <img
                src={image.src}
                alt={image.name}
                className="w-full h-16 object-cover rounded-lg cursor-pointer" // Smaller image size
                onClick={() => openPopup(image.src, image.name, image.description)}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Modal for Popup */}
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
            <p className="mt-2 text-center">{popupData.description}</p>
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
