"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Send,
  CheckCircle,
  Calendar,
  Users
} from "lucide-react";
import { fadeInUp, staggerContainer, pageTransition } from "@/lib/animations";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface FormData {
  name: string;
  email: string;
  phone: string;
  checkIn: Date | null;
  checkOut: Date | null;
  guests: number;
  roomType: string;
  message: string;
}

const contactInfo = [
  {
    icon: MapPin,
    title: "Location",
    details: ["123 Serenity Lane", "Mountain View, CA 94041"],
    action: "Get Directions",
  },
  {
    icon: Phone,
    title: "Phone",
    details: ["+1 (555) 123-4567", "Available 24/7"],
    action: "Call Now",
  },
  {
    icon: Mail,
    title: "Email",
    details: ["hello@havenhomestay.com", "Response within 2 hours"],
    action: "Send Email",
  },
  {
    icon: Clock,
    title: "Check-in",
    details: ["3:00 PM - 10:00 PM", "Early check-in available"],
    action: "Learn More",
  },
];

const roomTypes = [
  "Any Room Type",
  "Serenity Suite",
  "Garden Sanctuary", 
  "Skyline Loft",
  "Mountain Vista Suite",
  "Zen Garden Room",
  "Urban Executive Loft",
];

export default function ContactPage() {
  const { ref, inView } = useScrollAnimation({ threshold: 0.1 });
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    checkIn: null,
    checkOut: null,
    guests: 2,
    roomType: "Any Room Type",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === "guests" ? parseInt(value) || 1 : value,
    }));
  };

  const handleDateChange = (date: Date | null, field: "checkIn" | "checkOut") => {
    setFormData(prev => ({
      ...prev,
      [field]: date,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // For now, simulate form submission
      // In production, you would uncomment and configure EmailJS:
      /*
      const emailjs = await import('@emailjs/browser');
      
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        check_in: formData.checkIn?.toLocaleDateString(),
        check_out: formData.checkOut?.toLocaleDateString(),
        guests: formData.guests,
        room_type: formData.roomType,
        message: formData.message,
        to_email: 'hello@havenhomestay.com',
      };

      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      */

      // Simulate form submission for demo
      await new Promise(resolve => setTimeout(resolve, 2000));

      setIsSubmitting(false);
      setIsSubmitted(true);

      // Reset form after success
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          checkIn: null,
          checkOut: null,
          guests: 2,
          roomType: "Any Room Type",
          message: "",
        });
      }, 3000);

    } catch (error) {
      console.error('Form submission error:', error);
      setIsSubmitting(false);
      // Handle error state here
    }
  };

  const isFormValid = formData.name && formData.email && formData.message;

  return (
    <motion.div
      className="pt-16 lg:pt-20"
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-6xl mx-auto text-center"
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.h1
              className="font-display text-4xl lg:text-6xl font-bold text-foreground mb-6"
              variants={fadeInUp}
            >
              Get in Touch
              <span className="block text-secondary">We&rsquo;re Here to Help</span>
            </motion.h1>
            
            <motion.p
              className="text-xl text-muted text-linear px-4"
              style={{ 
                lineHeight: '1.8',
                marginBottom: '2rem',
                maxWidth: '65ch',
                marginLeft: 'auto',
                marginRight: 'auto'
              }}
              variants={fadeInUp}
            >
              Ready to book your perfect getaway? Have questions about our accommodations? 
              Our dedicated team is available 24/7 to assist you.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section ref={ref} className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-7xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            animate={inView ? "animate" : "initial"}
          >
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Contact Information */}
              <motion.div
                className="lg:col-span-1 space-y-8"
                variants={fadeInUp}
              >
                <div>
                  <h2 className="font-display text-3xl font-bold text-foreground mb-6">
                    Contact Information
                  </h2>
                  <p className="text-muted text-comfortable text-linear mb-8" style={{ lineHeight: '1.75' }}>
                    Reach out to us through any of these channels. We&rsquo;re committed to 
                    responding promptly and helping you plan the perfect stay.
                  </p>
                </div>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={index}
                      variants={fadeInUp}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Card variant="glass" hoverEffect={true} className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-secondary to-accent rounded-lg flex items-center justify-center flex-shrink-0">
                            <info.icon size={24} className="text-white" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-foreground mb-2">
                              {info.title}
                            </h3>
                            {info.details.map((detail, idx) => (
                              <p key={idx} className="text-muted text-sm leading-relaxed">
                                {detail}
                              </p>
                            ))}
                            <motion.button
                              className="text-secondary text-sm font-medium mt-2 hover:text-accent transition-colors"
                              whileHover={{ x: 5 }}
                            >
                              {info.action} →
                            </motion.button>
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  ))}
                </div>

                {/* Map placeholder */}
                <motion.div
                  className="aspect-square rounded-xl overflow-hidden"
                  variants={fadeInUp}
                >
                  <div className="w-full h-full bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin size={48} className="text-secondary mx-auto mb-4" />
                      <p className="text-lg font-medium text-purple-700">Interactive Map</p>
                      <p className="text-purple-500 text-sm">Coming Soon</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Booking Form */}
              <motion.div
                className="lg:col-span-2"
                variants={fadeInUp}
              >
                <Card variant="default" className="p-8">
                  <CardHeader className="px-0 pt-0">
                    <CardTitle className="text-3xl font-display text-foreground mb-2">
                      Book Your Stay
                    </CardTitle>
                    <p className="text-muted">
                      Fill out the form below and we&rsquo;ll get back to you within 2 hours with 
                      availability and personalized recommendations.
                    </p>
                  </CardHeader>

                  <CardContent className="px-0 pb-0">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Personal Information */}
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
                            placeholder="Enter your full name"
                            required
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
                            placeholder="Enter your email"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
                          placeholder="Enter your phone number"
                        />
                      </div>

                      {/* Booking Details */}
                      <div className="grid md:grid-cols-3 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">
                            Check-in Date
                          </label>
                          <div className="relative">
                            <DatePicker
                              selected={formData.checkIn}
                              onChange={(date) => handleDateChange(date, "checkIn")}
                              className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
                              placeholderText="Select date"
                              minDate={new Date()}
                            />
                            <Calendar size={20} className="absolute right-3 top-3 text-muted pointer-events-none" />
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">
                            Check-out Date
                          </label>
                          <div className="relative">
                            <DatePicker
                              selected={formData.checkOut}
                              onChange={(date) => handleDateChange(date, "checkOut")}
                              className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
                              placeholderText="Select date"
                              minDate={formData.checkIn || new Date()}
                            />
                            <Calendar size={20} className="absolute right-3 top-3 text-muted pointer-events-none" />
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-foreground mb-2">
                            Guests
                          </label>
                          <div className="relative">
                            <select
                              name="guests"
                              value={formData.guests}
                              onChange={handleInputChange}
                              className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all appearance-none"
                            >
                              {[1, 2, 3, 4, 5, 6].map(num => (
                                <option key={num} value={num}>
                                  {num} Guest{num > 1 ? 's' : ''}
                                </option>
                              ))}
                            </select>
                            <Users size={20} className="absolute right-3 top-3 text-muted pointer-events-none" />
                          </div>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Preferred Room Type
                        </label>
                        <select
                          name="roomType"
                          value={formData.roomType}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all"
                        >
                          {roomTypes.map(room => (
                            <option key={room} value={room}>{room}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Message *
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          rows={4}
                          className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all resize-none"
                          placeholder="Tell us about your stay preferences, special occasions, or any questions you have..."
                          required
                        />
                      </div>

                      {/* Submit Button */}
                      <motion.div className="pt-4">
                        <Button
                          type="submit"
                          variant="primary"
                          size="lg"
                          className="w-full"
                          disabled={!isFormValid || isSubmitting}
                          isLoading={isSubmitting}
                        >
                          {isSubmitted ? (
                            <>
                              <CheckCircle size={20} className="mr-2" />
                              Message Sent Successfully!
                            </>
                          ) : (
                            <>
                              <Send size={20} className="mr-2" />
                              Send Booking Request
                            </>
                          )}
                        </Button>
                      </motion.div>

                      {isSubmitted && (
                        <motion.div
                          className="p-4 bg-purple-50 border border-purple-200 rounded-lg"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                        >
                          <p className="text-purple-800 text-sm">
                            Thank you for your booking request! We&rsquo;ll get back to you within 2 hours 
                            with availability and next steps.
                          </p>
                        </motion.div>
                      )}
                    </form>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
