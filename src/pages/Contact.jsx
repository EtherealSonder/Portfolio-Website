import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "../styles/contact.css";

const SERVICE_ID = "service_lazv4ub";
const TEMPLATE_ID = "template_nyup8vw";
const PUBLIC_KEY = "N2yJmcDJZ4gAMnfZK";

const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    message: "",
};

const Contact = () => {
    const [formData, setFormData] = useState(initialState);
    const [touched, setTouched] = useState({});
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const validate = (field, value) => {
        let msg = "";

        if (!value.trim()) {
            const labels = {
                firstName: "First Name",
                lastName: "Last Name",
                email: "Email",
                message: "Message",
            };
            msg = `${labels[field]} cannot be empty.`;
        }

        if (field === "email" && value) {
            const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!regex.test(value)) msg = "Enter a valid email.";
        }

        if (field === "message" && value.length > 1000) {
            msg = "Message cannot exceed 1000 characters.";
        }

        setErrors((prev) => ({ ...prev, [field]: msg }));
    };

    const handleBlur = (field) => {
        setTouched((t) => ({ ...t, [field]: true }));
        validate(field, formData[field]);
    };

    const handleChange = (field, value) => {
        if (field === "message" && value.length > 1000) return;
        setFormData((f) => ({ ...f, [field]: value }));
        if (touched[field]) validate(field, value);
    };

    const isFormValid = () => {
        const filled = Object.values(formData).every((v) => v.trim());
        const hasErr = Object.values(errors).some((e) => e);
        return filled && !hasErr;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!isFormValid()) return;
        setLoading(true);

        try {
            await emailjs.send(
                SERVICE_ID,
                TEMPLATE_ID,
                {
                    first_name: formData.firstName,
                    last_name: formData.lastName,
                    email: formData.email,
                    message: formData.message,
                },
                PUBLIC_KEY
            );

            setSubmitted(true);
            setFormData(initialState);
            setTouched({});
            setErrors({});
        } catch (err) {
            console.error("EmailJS error:", err);
            // Optional: show a toast/toaster here
        } finally {
            setLoading(false);
        }
    };

    const renderInput = (label, field, isTextarea = false) => {
        const val = formData[field];
        const hasError = touched[field] && errors[field];

        return (
            <div className={`inputGroup ${isTextarea ? "isTextarea" : ""} ${val.trim() ? "filled" : ""}`}>
                {isTextarea ? (
                    <textarea
                        value={val}
                        onChange={(e) => handleChange(field, e.target.value)}
                        onBlur={() => handleBlur(field)}
                        placeholder=" "
                    />
                ) : (
                    <input
                        type={field === "email" ? "email" : "text"}
                        value={val}
                        onChange={(e) => handleChange(field, e.target.value)}
                        onBlur={() => handleBlur(field)}
                        placeholder=" "
                    />
                )}
                <label>{label}</label>
                {hasError && <div className="warningPopup">{errors[field]}</div>}
                {field === "message" && (
                    <div className="charCount">{val.length}/1000</div>
                )}
            </div>
        );
    };

    return (
        <section className="contactSection">
            <h2 className="heading">CONNECT</h2>
            <div className="decorativeLineWrapper">
                <div className="decorativeLine"></div>
            </div>

            {submitted ? (
                <div className="successBox">
                    <img
                        src="/message_gif.gif"
                        alt="Message Sent"
                        className="successGif"
                    />
                    <p className="successText">
                        Thanks for connecting , I will attend to your enquiry soon.
                    </p>
                    <p className="successSubText">Want to know more?</p>
                    <button className="ghostButton" onClick={() => setSubmitted(false)}>
                        Send us another message
                    </button>
                </div>
            ) : (
                <form className="glassBox" onSubmit={handleSubmit} noValidate>
                    <div className="row">
                        {renderInput("First Name", "firstName")}
                        {renderInput("Last Name", "lastName")}
                    </div>
                    {renderInput("Email", "email")}
                    {renderInput("Message", "message", true)}

                    <div className="buttonRow">
                        {loading ? (
                            <div className="loaderSpinner" aria-label="Sending..." />
                        ) : (
                            <button
                                type="submit"
                                className="submitButton"
                                disabled={!isFormValid()}
                                aria-disabled={!isFormValid()}
                            >
                                Submit
                            </button>
                        )}
                    </div>
                </form>
            )}
        </section>
    );
};

export default Contact;
