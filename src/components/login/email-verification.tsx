import React, { useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { useVerifyEmail } from "../../apis/hooks/use-auth";

const EmailVerification: React.FunctionComponent = () => {
  const { t } = useTranslation();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const token = searchParams.get("token");

  const {  
    mutate: verifyEmail,
    isPending,
    isSuccess,
    isError,
  } = useVerifyEmail();

  useEffect(() => {
    if (token) {
      try {
        verifyEmail(token);
      } catch (error) {
        console.log("error", error);
      }
    }
  }, [token, verifyEmail]);

  const handleContinue = () => {
    navigate("/Pricing");
  };

  // Determine verification status based on mutation state
  const getVerificationStatus = () => {
    if (!token) return "invalid";
    if (isPending) return "loading";
    if (isSuccess) return "success";
    if (isError) return "error";
    return "loading";
  };

  const getMessage = () => {
    if (!token) {
      return "Invalid verification link. Please check your email for the correct link.";
    }
    if (isSuccess) {
      return "Your email has been successfully verified! You can now proceed to the pricing page.";
    }
    if (isError) {
      return "Verification failed. Please try again or contact support.";
    }
    return "Verifying your email address...";
  };

  const verificationStatus = getVerificationStatus();
  const message = getMessage();

  return (
    <>
      <Helmet>
        <title>Email Verification - Coralytics</title>
        <meta
          name="description"
          content="Verify your email address to complete your Coralytics account setup."
        />
      </Helmet>

      <section
        className="relative min-h-screen flex items-center justify-center py-12"
        style={{
          background: "white",
        }}
      >
        <div className="container relative z-10">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-8 col-sm-10">
              <div
                className="card shadow-lg border-0"
                style={{
                  borderRadius: "20px",
                  boxShadow:
                    "0 20px 40px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(255, 255, 255, 0.05)",
                }}
              >
                <div className="card-body p-5">
                  {/* Header */}
                  <div className="text-center mb-4">
                    <a className="navbar-brand logo-image" href="/home">
                      <img
                        src="/icons/New branding Coraly -LOGO.png"
                        alt="alternative"
                        style={{ maxHeight: "60px", margin: "0 auto" }}
                      />
                    </a>
                    <hr
                      className="mt-2 mb-3"
                      style={{
                        borderColor: "rgb(87, 60, 255)",
                        borderWidth: "2px",
                      }}
                    />
                    <h2 className="fw-bold" style={{ color: "#0F0B0B" }}>
                      Email Verification
                    </h2>
                  </div>

                  {/* Verification Status */}
                  <div className="text-center mb-4">
                    {verificationStatus === "loading" && (
                      <div className="d-flex flex-column align-items-center">
                        <div
                          className="spinner-border text-primary mb-3"
                          role="status"
                          style={{ color: "#573CFF" }}
                        >
                          <span className="visually-hidden">Loading...</span>
                        </div>
                        <p className="text-muted">{message}</p>
                      </div>
                    )}

                    {verificationStatus === "success" && (
                      <div className="d-flex flex-column align-items-center">
                        <div
                          className="rounded-circle d-flex align-items-center justify-content-center mb-3"
                          style={{
                            width: "80px",
                            height: "80px",
                            backgroundColor: "#d4edda",
                            color: "#155724",
                          }}
                        >
                          <i className="fas fa-check fa-2x"></i>
                        </div>
                        <h4
                          className="fw-bold mb-2"
                          style={{ color: "#0F0B0B" }}
                        >
                          Verification Successful!
                        </h4>
                        <p className="text-muted mb-4">{message}</p>
                        <button
                         type="button" aria-label="Continue"
                          onClick={handleContinue}
                          className="btn btn-primary btn-lg px-4"
                          style={{
                            backgroundColor: "#573CFF",
                            borderColor: "#573CFF",
                            borderRadius: "10px",
                            padding: "12px 24px",
                          }}
                        >
                          Continue
                        </button>
                      </div>
                    )}

                    {verificationStatus === "error" && (
                      <div className="d-flex flex-column align-items-center">
                        <div
                          className="rounded-circle d-flex align-items-center justify-content-center mb-3"
                          style={{
                            width: "80px",
                            height: "80px",
                            backgroundColor: "#f8d7da",
                            color: "#721c24",
                          }}
                        >
                          <i className="fas fa-exclamation-triangle fa-2x"></i>
                        </div>
                        <h4
                          className="fw-bold mb-2"
                          style={{ color: "#0F0B0B" }}
                        >
                          Verification Failed
                        </h4>
                        <p className="text-muted mb-4">{message}</p>
                      </div>
                    )}

                    {verificationStatus === "invalid" && (
                      <div className="d-flex flex-column align-items-center">
                        <div
                          className="rounded-circle d-flex align-items-center justify-content-center mb-3"
                          style={{
                            width: "80px",
                            height: "80px",
                            backgroundColor: "#fff3cd",
                            color: "#856404",
                          }}
                        >
                          <i className="fas fa-link fa-2x"></i>
                        </div>
                        <h4
                          className="fw-bold mb-2"
                          style={{ color: "#0F0B0B" }}
                        >
                          Invalid Link
                        </h4>
                        <p className="text-muted mb-4">{message}</p>
                      </div>
                    )}
                  </div>

                  {/* Footer */}
                  <div className="text-center mt-4">
                    <p className="text-muted small">
                      Need help?{" "}
                      <a href="/ContactUs" style={{ color: "#573CFF" }}>
                        Contact Support
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EmailVerification;
