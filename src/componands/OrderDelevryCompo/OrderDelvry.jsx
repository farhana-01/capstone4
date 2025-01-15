import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Stepper,
  Step,
  StepLabel,
  Modal,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const steps = ["OTP Verification", "Contact Info", "Delivery", "Payment"];

const OrderDelivery = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    otp: "",
    name: "",
    email: "",
    address: "",
    phone: "",
  });
  const [isModalOpen, setModalOpen] = useState(false);

  const validateStep = () => {
    if (activeStep === 0 && formData.otp.trim()) return true;
    if (activeStep === 1 && formData.name.trim() && formData.email.trim()) return true;
    if (activeStep === 2 && formData.address.trim() && formData.phone.trim()) return true;
    if (activeStep === 3) return true;
    return false;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (validateStep()) {
      setActiveStep((prev) => (prev < steps.length - 1 ? prev + 1 : prev));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateStep()) {
      setModalOpen(true);
    }
  };

  const resetForm = () => {
    setActiveStep(0);
    setFormData({
      otp: "",
      name: "",
      email: "",
      address: "",
      phone: "",
    });
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <Box className="min-h-screen bg-gray-50 py-8">
      <Box className="container mx-auto px-4">
        <Box className="max-w-3xl mx-auto bg-white rounded-xl shadow-sm p-6">
          <Stepper activeStep={activeStep} className="mb-8">
            {steps.map((label, index) => (
              <Step key={label}>
                <StepLabel
                  StepIconComponent={({ active, completed }) =>
                    completed || active ? (
                      <CheckCircleIcon className="text-blue-500" />
                    ) : (
                      <Box className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                        {index + 1}
                      </Box>
                    )
                  }
                >
                  {label}
                </StepLabel>
              </Step>
            ))}
          </Stepper>

          <form onSubmit={handleSubmit} className="space-y-6">
            <TextField
              fullWidth
              label="OTP Code"
              name="otp"
              value={formData.otp}
              onChange={handleChange}
              required
            />
            <TextField
              fullWidth
              label="Full Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <TextField
              fullWidth
              label="Email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <TextField
              fullWidth
              label="Address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              multiline
              rows={3}
              required
            />
            <TextField
              fullWidth
              label="Phone Number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />

            <Button
              type="submit"
              variant="contained"
              fullWidth
              className="!bg-blue-500 !mt-4"
            >
              Complete Order
            </Button>
          </form>
        </Box>
      </Box>
<Modal
  open={isModalOpen}
  onClose={closeModal}
  aria-labelledby="order-success-modal"
  aria-describedby="order-success-message"
>
  <Box
    className="bg-white rounded-lg shadow-lg p-6"
    sx={{
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: "90%",
      maxWidth: "400px",
    }}
  >
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      textAlign="center"
    >
      <Box
        sx={{
          width: "80px",
          height: "80px",
          backgroundColor: "success.main",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "16px",
        }}
      >
        <CheckCircleIcon
          sx={{ fontSize: "50px", color: "white" }}
        />
      </Box>
      <Typography
        id="order-success-modal"
        variant="h5"
        gutterBottom
      >
        Order Placed Successfully!
      </Typography>
      <Typography id="order-success-message" sx={{ marginBottom: "16px" }}>
        Thank you! Your order is being processed.
      </Typography>
      <Button
        variant="contained"
        fullWidth
        onClick={closeModal}
        className="!bg-blue-500"
      >
        Close
      </Button>
    </Box>
  </Box>
</Modal>

    </Box>
  );
};

export default OrderDelivery;
