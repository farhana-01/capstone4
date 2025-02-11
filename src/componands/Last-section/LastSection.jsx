import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Box } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';

const InlineImagesSection = () => {
  const images = [
    {
      src: 'https://static.priceoye.pk/icons/approved-feature.svg',
      heading: 'PTA Approved',
      description: 'Mobile Phone.',
    },
    {
      src: 'https://static.priceoye.pk/icons/warranty-feature.svg',
      heading: '1 Year',
      description: 'Brand Warranty.',
    },
    {
      src: 'https://static.priceoye.pk/icons/video-shooting-camera.svg',
      heading: 'Packaging Video',
      description: 'See Your Product.',
    },
    {
      src: 'https://static.priceoye.pk/icons/shipping-feature.svg',
      heading: 'Fast Delivery',
      description: 'All Over Pakistan.',
    },
  ];

  return (
    <Box
      style={{
        backgroundColor: '#ffffff', 
        marginTop: '400px',
        width: '100%', 
        padding: '20px 0', 
      }}
    >
      <Container>
        <Row className="justify-content-center">
          {images.map((image, index) => (
            <Col
              key={index}
              xs={6}
              sm={4}
              md={3}
              className="d-flex flex-column align-items-center"
              style={{
                textAlign: 'center',
              }}
            >
              <img
                src={image.src}
                alt={`Image ${index + 1}`}
                style={{
                  width: '80px',
                  height: '80px',
                  objectFit: 'cover',
                  marginBottom: '15px', 
                }}
              />
              <h5
                style={{
                  fontSize: '16px',
                  margin: '0', 
                  marginBottom: '5px', 
                }}
              >
                {image.heading}
              </h5>
              <span
                style={{
                  fontSize: '12px',
                  color: '#666',
                }}
              >
                {image.description}
              </span>
            </Col>
          ))}
        </Row>
      </Container>
    </Box>
  );
};

export default InlineImagesSection;
