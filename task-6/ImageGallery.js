import React, { useState } from 'react';
import Image from './Image';
import Modal from './Modal';
import './ImageGallery.css';

const images = [
  'vpimages/0.jpeg',
  'vpimages/1.jpeg',
  'vpimages/2.jpeg',
  'vpimages/3.jpeg',
  'vpimages/4.jpeg',
  'vpimages/5.jpeg',
  'vpimages/6.jpeg',
  'vpimages/7.jpeg',
  'vpimages/8.jpeg',
  'vpimages/9.jpeg',
  'vpimages/10.jpeg',
  'vpimages/11.jpeg',
  'vpimages/12.jpeg',
  'vpimages/13.jpg',
  'vpimages/14.jpg',
  'vpimages/15.jpg',
  'vpimages/16.jpeg',
  'vpimages/17.jpg',
];

function ImageGallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="image-gallery">
      {images.map((image, index) => (
        <Image key={index} src={image} onClick={() => handleImageClick(image)} />
      ))}
      {selectedImage && <Modal src={selectedImage} onClose={closeModal} />}
    </div>
  );
}

export default ImageGallery;
