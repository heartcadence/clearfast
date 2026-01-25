import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { SeasonContent } from '../types';

interface ContactProps {
  isWinter: boolean;
  content: SeasonContent;
}

const Contact: React.FC<ContactProps> = ({ isWinter, content }) => {
  // ---------------------------------------------------------
  // CONFIGURATION: NO KEYS NEEDED
  // The email address below is where the leads will go.
  // ---------------------------------------------------------
  const targetEmail = "clearfastsales@gmail.com";

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      // Using FormSubmit.co AJAX endpoint (No API Key required)
      const response = await fetch(`https://formsubmit.co/ajax/${targetEmail}`, {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          _subject: "New Quote Request - ClearFast Website", // Email Subject Line
          _template: "table", // Makes the email look clean
          _captcha: "false", // Disable captcha for smoother user experience
          ...formData,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', address: '', message: '' }); // Clear form
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const buttonColor = isWinter 
    ? 'bg-orange-600 hover:bg-orange-700 shadow-orange-900/20' 
    : 'bg-green-600 hover:bg-green-700 shadow-green-900/20';

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info Side */}
          <div>
            <h2 className="font-display font-bold text-4xl text-gray-900 uppercase tracking-tight mb-6">
              Get Your Free Quote
            </h2>
            <p className="font-sans text-xl text-gray-600 mb-10 leading-relaxed">
              {content.contactText}
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-full ${isWinter ? 'bg-blue-100 text-blue-700' : 'bg-green-100 text-green-700'}`}>
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Call or Text</h3>
                  <p className="text-gray-600">519-555-0123</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-full ${isWinter ? 'bg-blue-100 text-blue-700' : 'bg-green-100 text-green-700'}`}>
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Email Us</h3>
                  <p className="text-gray-600">{targetEmail}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-full ${isWinter ? 'bg-blue-100 text-blue-700' : 'bg-green-100 text-green-700'}`}>
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">Service Area</h3>
                  <p className="text-gray-600">Brantford, Hamilton & Surrounding Areas</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
            {status === 'success' ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Request Received!</h3>
                <p className="text-gray-600 mb-8">
                  Thanks for contacting ClearFast. We will review your property and email you a quote shortly.
                </p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="text-gray-500 hover:text-gray-900 font-medium underline"
                >
                  Send another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-opacity-50 focus:outline-none transition-all focus:ring-gray-900 focus:border-gray-900"
                      placeholder="Your Full Name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-opacity-50 focus:outline-none transition-all focus:ring-gray-900 focus:border-gray-900"
                      placeholder="(519) 555-0123"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-opacity-50 focus:outline-none transition-all focus:ring-gray-900 focus:border-gray-900"
                    placeholder="you@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Property Address</label>
                  <input
                    type="text"
                    name="address"
                    required
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-opacity-50 focus:outline-none transition-all focus:ring-gray-900 focus:border-gray-900"
                    placeholder="123 Maple Ave, Brantford"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Message (Optional)</label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-opacity-50 focus:outline-none transition-all focus:ring-gray-900 focus:border-gray-900"
                    placeholder="Any specific details about your driveway or lawn?"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className={`
                    w-full py-4 px-8 rounded-sm font-display font-bold text-xl uppercase tracking-widest text-white shadow-lg transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2
                    ${buttonColor} ${status === 'submitting' ? 'opacity-70 cursor-wait' : ''}
                  `}
                >
                  {status === 'submitting' ? (
                    'Sending...'
                  ) : (
                    <>
                      Get Quote <Send className="w-5 h-5" />
                    </>
                  )}
                </button>
                
                {status === 'error' && (
                  <p className="text-red-600 text-center text-sm font-bold mt-2">
                    Something went wrong. Please try again or call us directly.
                  </p>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
