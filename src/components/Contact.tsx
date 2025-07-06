import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // EmailJS configuration with your actual credentials
      const serviceId = 'service_gcuhxdl';
      const templateId = 'template_i86cjha';
      const publicKey = 'u0Jb4siYeTKn_JVan';

      // Template parameters that will be sent to your email
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        project_type: formData.subject,
        message: formData.message,
        to_email: 'mr70146367@gmail.com', // Your Gmail address
      };

      // Send email using EmailJS
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-900 dark:bg-black text-white transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-300 dark:text-gray-400 max-w-2xl mx-auto">
            Ready to bring your vision to life? Let's discuss your next project.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-600 dark:bg-blue-500 p-3 rounded-lg">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Address</h4>
                  <p className="text-gray-300 dark:text-gray-400">
                    NAZ Architecture Ave<br />
                    Design District, CA 90210
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-blue-600 dark:bg-blue-500 p-3 rounded-lg">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Phone</h4>
                  <p className="text-gray-300 dark:text-gray-400">+923254823128</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-blue-600 dark:bg-blue-500 p-3 rounded-lg">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Email</h4>
                  <p className="text-gray-300 dark:text-gray-400">nazstudio419@gmail.com</p>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <h4 className="text-lg font-semibold mb-4">Office Hours</h4>
              <div className="space-y-2 text-gray-300 dark:text-gray-400">
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-8">Send Us a Message</h3>
            
            {/* Success Message */}
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-600/20 border border-green-500 rounded-lg flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <p className="text-green-300">Message sent successfully! We'll get back to you soon.</p>
              </div>
            )}

            {/* Error Message */}
            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-600/20 border border-red-500 rounded-lg flex items-center space-x-3">
                <AlertCircle className="h-5 w-5 text-red-400" />
                <p className="text-red-300">Failed to send message. Please try again or contact us directly.</p>
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 dark:bg-gray-900 border border-gray-700 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-white placeholder-gray-400"
                    placeholder="Enter your full name"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800 dark:bg-gray-900 border border-gray-700 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-white placeholder-gray-400"
                    placeholder="Enter your email address"
                    required
                    disabled={isSubmitting}
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Project Type *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-800 dark:bg-gray-900 border border-gray-700 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-white"
                  required
                  disabled={isSubmitting}
                >
                  <option value="">Select a project type</option>
                  <option value="residential">Residential Design</option>
                  <option value="commercial">Commercial Architecture</option>
                  <option value="planning">Master Planning</option>
                  <option value="consultation">Design Consultation</option>
                  <option value="sustainable">Sustainable Design</option>
                  <option value="interior">Interior Architecture</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 bg-gray-800 dark:bg-gray-900 border border-gray-700 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-white placeholder-gray-400"
                  placeholder="Tell us about your project, timeline, budget, and any specific requirements..."
                  required
                  disabled={isSubmitting}
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform flex items-center justify-center space-x-2 ${
                  isSubmitting
                    ? 'bg-gray-600 cursor-not-allowed'
                    : 'bg-blue-600 dark:bg-blue-500 hover:bg-blue-700 dark:hover:bg-blue-600 hover:scale-105'
                } text-white`}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="h-5 w-5" />
                  </>
                )}
              </button>
            </form>

            {/* Success note */}
            <div className="mt-8 p-4 bg-green-600/10 border border-green-500/30 rounded-lg">
              <h4 className="text-sm font-semibold text-green-300 mb-2">✅ Email Integration Active</h4>
              <p className="text-xs text-green-200">
                Your contact form is now connected to EmailJS and will send messages directly to your Gmail inbox.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;