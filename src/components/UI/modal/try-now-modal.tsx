import React, { forwardRef, useEffect, useState } from "react";
import Modal from "@/components/UI/modal/modal";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

type ModalProps = {
  open: boolean;
  onClose: () => void;
};

// Custom input component without focus borders
const CustomInput = forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>((props, ref) => (
  <input
    {...props}
    ref={ref}
    className="!outline-none !border-none !ring-0 !ring-offset-0 !shadow-none"
  />
));
CustomInput.displayName = "CustomInput";

function TryNowModal({ open, onClose }: ModalProps) {
  const [isModalOpen, setIsModalOpen] = useState(open);

  // Sync with parent state
  useEffect(() => {
    setIsModalOpen(open);
  }, [open]);

  const handleClose = () => {
    setIsModalOpen(false);
    onClose();
  };
  const [phone, setPhone] = useState<string | undefined>("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  // Theme colors
  const primaryColor = "#BF9D84";
  //   const primaryLightColor = "#F6F1EC";
  useEffect(() => {
    if (!isModalOpen) {
      resetFormState();
    }
  }, [isModalOpen]);
    const resetFormState = () => {
    setPhone("");
    setOtpSent(false);
    setOtp("");
    setError("");
    setIsLoading(false);
  };
  const sendOTP = () => {
    if (!phone) {
      setError("Please enter a valid phone number");
      return;
    }

    setIsLoading(true);
    setError("");

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setOtpSent(true);
      console.log(`OTP would be sent to: ${phone}`);
    }, 1500);
  };

  const verifyOTP = () => {
    if (otp.length !== 6) {
      setError("Please enter a 6-digit OTP");
      return;
    }

    setIsLoading(true);

    // Simulate verification
    setTimeout(() => {
      setIsLoading(false);
      console.log(`OTP verified: ${otp}`);
      handleClose();
      alert("Successfully verified!");
    }, 1500);
  };

  return (
    <Modal
      isOpen={isModalOpen}
      onClose={handleClose}
      title="Get Started"
      closeOnOutsideClick={true}
    >
      <div className="space-y-4">
        {!otpSent ? (
          <>
            <div className="space-y-2">
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                Phone Number
              </label>
              <PhoneInput
                id="phone"
                international
                defaultCountry="IN"
                value={phone}
                inputComponent={CustomInput} // Use our custom input
                onChange={setPhone}
                className={`border rounded-lg px-3 py-2 focus:ring focus:ring-[${primaryColor}] focus:border-[${primaryColor}] w-full`}
                style={
                  {
                    "--react-international-phone-border-color": "#BF9D84",
                    "--react-international-phone-height": "44px",
                  } as React.CSSProperties
                }
              />
              <p className="text-xs text-gray-500 mt-1">
                {"We'll send a verification code to this number"}
              </p>
            </div>

            {error && <div className="text-red-500 text-sm">{error}</div>}

            <button
              onClick={sendOTP}
              disabled={isLoading}
              className={`w-full py-3 px-4 rounded-lg text-white font-medium transition-all 
                ${
                  isLoading
                    ? "opacity-70 cursor-not-allowed"
                    : "hover:opacity-90"
                }`}
              style={{ backgroundColor: primaryColor }}
            >
              {isLoading ? (
                <span className="flex items-center justify-center">
                  <svg
                    className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Sending...
                </span>
              ) : (
                "Send Verification Code"
              )}
            </button>
          </>
        ) : (
          <>
            <div className="space-y-2">
              <label
                htmlFor="otp"
                className="block text-sm font-medium text-gray-700"
              >
                Enter Verification Code
              </label>
              <div className="flex items-center space-x-2">
                <input
                  id="otp"
                  type="text"
                  inputMode="numeric"
                  pattern="\d{6}"
                  maxLength={6}
                  value={otp}
                  onChange={(e) => setOtp(e.target.value.replace(/\D/g, ""))}
                  className={`border border-[${primaryColor}] rounded-lg px-3 py-2 focus:ring focus:ring-[${primaryColor}] focus:border-[${primaryColor}] w-full`}
                  placeholder="123456"
                />
              </div>
              <p className="text-xs text-gray-500 mt-1">
                Enter the 6-digit code sent to {phone}
              </p>
            </div>

            {error && <div className="text-red-500 text-sm">{error}</div>}

            <button
              onClick={verifyOTP}
              disabled={isLoading}
              className={`w-full py-3 px-4 rounded-lg text-white font-medium transition-all 
                ${
                  isLoading
                    ? "opacity-70 cursor-not-allowed"
                    : "hover:opacity-90"
                }`}
              style={{ backgroundColor: primaryColor }}
            >
              {isLoading ? (
                <span className="flex items-center justify-center">
                  <svg
                    className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Verifying...
                </span>
              ) : (
                "Verify Code"
              )}
            </button>

            <button
              onClick={() => setOtpSent(false)}
              className="text-sm mt-2 text-[#BF9D84] hover:underline"
            >
              Resend Code or Change Number
            </button>
          </>
        )}

        <div className="text-xs text-gray-500 mt-4">
          <p>
            By continuing, you agree to our Terms of Service and Privacy Policy
          </p>
        </div>
      </div>
    </Modal>
  );
}

export default TryNowModal;
