import React, { useState } from 'react';
import { SeasonContent } from '../types';

interface ContactFormProps {
  isWinter: boolean;
  content: SeasonContent;
}

const ContactForm: React.FC<ContactFormProps> = ({ isWinter, content }) => {
  // ---------------------------------------------------------
  // MODE: ACTIVATION (Single Email)
  // We use ONLY your email here to pass the validator and trigger the activation link.
  // ---------------------------------------------------------
  const targetEmail = "info@heartcadence.com";

  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phone: '',
    email: '',
    serviceNeeded: isWinter ? 'Snow Removal' : 'Lawn Care',
    propertyType: 'Residential',
    paymentPreference: 'One-Time Service',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Unified Orange CTA
  const btnClass = 'bg-orange-600 hover:bg-orange-700 border-orange-600 text-white';
  const labelClass = "block font-display uppercase text-sm font-bold text-gray-700 mb-2";
  const inputClass = "w-full p-4 text-base border-2 border-gray-200 focus:border-gray-500 focus:outline-none font-sans transition-colors rounded-sm appearance-none";

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-6 md:p-12 shadow-2xl border-t-8" style={{ borderColor: isWinter ? '#004aad' : '#2e7d32' }}>
          
          <div className="text-center mb-10">
            <h2 className="font-display text-4xl font-bold uppercase text-gray-900 mb-2">
              Get Your Free Quote
            </h2>
            <p className="font-sans text-gray-500">
              Enter your details below. We usually respond within 2 hours.
            </p>
          </div>

          {/* SINGLE EMAIL ACTIVATION FORM */}
          <form 
            action={`https://formsubmit.co/${targetEmail}`} 
            method="POST" 
            className="space-y-6"
          >
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_subject" value="New Quote Request - ClearFast Website" />
            <input type="hidden" name="_template" value="table" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className={labelClass}>
                  Name <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="phone" className={labelClass}>
                  Phone <span className="text-red-600">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="(555) 555-0123"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className={labelClass}>
                Email <span className="text-red-600">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className={inputClass}
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label htmlFor="address" className={labelClass}>
                Property Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className={inputClass}
                placeholder="123 Main St, Your City, ST"
              />
              <p className="text-xs text-gray-400 mt-1">Crucial for accurate remote quoting</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label htmlFor="serviceNeeded" className={labelClass}>Service Needed</label>
                <div className="relative">
                  <select
                    id="serviceNeeded"
                    name="serviceNeeded"
                    value={formData.serviceNeeded}
                    onChange={handleChange}
                    className={inputClass}
                  >
                    <option value="Snow Removal">Snow Removal</option>
                    <option value="Lawn Care">Lawn Care</option>
                    <option value="Year-Round">Both (Year-Round)</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="paymentPreference" className={labelClass}>Payment Preference</label>
                <div className="relative">
                  <select
                    id="paymentPreference"
                    name="paymentPreference"
                    value={formData.paymentPreference}
                    onChange={handleChange}
                    className={inputClass}
                  >
                    <option value="One-Time Service">One-Time Service</option>
                    <option value="Monthly">Monthly</option>
                    <option value="Full Season">Full Season</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="propertyType" className={labelClass}>Property Type</label>
                <div className="relative">
                  <select
                    id="propertyType"
                    name="propertyType"
                    value={formData.propertyType}
                    onChange={handleChange}
                    className={inputClass}
                  >
                    <option value="Residential">Residential</option>
                    <option value="Commercial">Commercial</option>
                  </select>
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="message" className={labelClass}>Notes</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className={inputClass}
                placeholder="Gate codes, specific hazards, or questions..."
              ></textarea>
            </div>

            <button
              type="submit"
              className={`w-full py-5 px-6 font-display font-bold uppercase text-xl tracking-wider transition-colors duration-300 rounded-sm shadow-md ${btnClass}`}
            >
              Get My Free Quote
            </button>
          </form>

        </div>
      </div>
    </section>
  );
};

export default ContactForm;