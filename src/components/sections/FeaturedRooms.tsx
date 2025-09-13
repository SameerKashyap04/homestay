"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Wifi, 
  Coffee, 
  Bath, 
  Mountain, 
  ArrowRight,
  Star,
  Users,
  Bed
} from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { formatCurrency } from "@/lib/utils";

const featuredRooms = [
  {
    id: 1,
    name: "Serenity Suite",
    description: "A luxurious retreat with panoramic mountain views, featuring a private balcony and spa-like bathroom.",
    price: 350,
    rating: 4.9,
    reviews: 47,
    guests: 2,
    beds: 1,
    amenities: ["Mountain View", "Private Balcony", "Spa Bathroom", "Premium Wifi"],
    features: [
      { icon: Mountain, label: "Mountain View" },
      { icon: Bath, label: "Spa Bathroom" },
      { icon: Wifi, label: "Premium Wifi" },
      { icon: Coffee, label: "Coffee Station" },
    ],
    image: "/images/serenity-suite.jpg",
    popular: true,
  },
  {
    id: 2,
    name: "Garden Sanctuary",
    description: "An intimate space surrounded by lush gardens, perfect for those seeking tranquility and natural beauty.",
    price: 280,
    rating: 4.8,
    reviews: 32,
    guests: 2,
    beds: 1,
    amenities: ["Garden Access", "Natural Light", "Eco-Friendly", "Quiet Zone"],
    features: [
      { icon: Mountain, label: "Garden View" },
      { icon: Bath, label: "Rain Shower" },
      { icon: Wifi, label: "High-Speed Wifi" },
      { icon: Coffee, label: "Tea & Coffee" },
    ],
    image: "/images/garden-sanctuary.jpg",
    popular: false,
  },
  {
    id: 3,
    name: "Skyline Loft",
    description: "A contemporary loft space with floor-to-ceiling windows and modern amenities for the urban sophisticate.",
    price: 420,
    rating: 5.0,
    reviews: 28,
    guests: 3,
    beds: 2,
    amenities: ["City Views", "Modern Design", "Work Space", "Entertainment System"],
    features: [
      { icon: Mountain, label: "Skyline View" },
      { icon: Bath, label: "Luxury Bath" },
      { icon: Wifi, label: "Business Wifi" },
      { icon: Coffee, label: "Espresso Machine" },
    ],
    image: "/images/skyline-loft.jpg",
    popular: true,
  },
  {
    id: 4,
    name: "Ocean Breeze Suite",
    description: "Wake up to stunning ocean views in this coastal-inspired suite featuring nautical design elements and premium amenities.",
    price: 450,
    rating: 4.9,
    reviews: 31,
    guests: 2,
    beds: 1,
    amenities: ["Ocean View", "Coastal Design", "Private Terrace", "Premium Linens"],
    features: [
      { icon: Mountain, label: "Ocean View" },
      { icon: Bath, label: "Rainfall Shower" },
      { icon: Wifi, label: "High-Speed Wifi" },
      { icon: Coffee, label: "Coffee & Tea" },
    ],
    image: "/images/ocean-breeze.jpg",
    popular: false,
  },
  {
    id: 5,
    name: "Zen Garden Room",
    description: "A peaceful retreat inspired by Japanese design principles, featuring minimalist aesthetics and garden access.",
    price: 320,
    rating: 4.7,
    reviews: 39,
    guests: 2,
    beds: 1,
    amenities: ["Japanese Design", "Meditation Space", "Garden Access", "Natural Materials"],
    features: [
      { icon: Mountain, label: "Garden View" },
      { icon: Bath, label: "Japanese Bath" },
      { icon: Wifi, label: "Silent Wifi" },
      { icon: Coffee, label: "Tea Ceremony" },
    ],
    image: "/images/zen-garden.jpg",
    popular: false,
  },
  {
    id: 6,
    name: "Mountain Vista Suite",
    description: "Elevated luxury with breathtaking 360-degree mountain views and premium amenities for the ultimate escape.",
    price: 480,
    rating: 4.9,
    reviews: 21,
    guests: 2,
    beds: 1,
    amenities: ["360° Views", "Premium Location", "Luxury Furnishing", "Concierge Service"],
    features: [
      { icon: Mountain, label: "360° Views" },
      { icon: Bath, label: "Marble Bath" },
      { icon: Wifi, label: "Ultra-Fast Wifi" },
      { icon: Coffee, label: "Premium Bar" },
    ],
    image: "/images/mountain-vista.jpg",
    popular: true,
  },
];

interface RoomCardProps {
  room: typeof featuredRooms[0];
  index: number;
}

function RoomCard({ room, index }: RoomCardProps) {
  return (
    <motion.div
      variants={fadeInUp}
      transition={{ delay: index * 0.1 }}
    >
      <Card 
        variant="default" 
        hoverEffect={true}
        glowOnHover={true}
        className="group overflow-hidden h-full relative"
      >
        {/* Popular badge */}
        {room.popular && (
          <div className="absolute top-4 left-4 z-10 bg-accent text-navy text-xs font-semibold px-3 py-1 rounded-full shadow-lg">
            Most Popular
          </div>
        )}

        {/* Image */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <div 
            className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
            style={{
              backgroundImage: `url('${room.image}')`,
            }}
          >
          </div>
          
          {/* Overlay on hover */}
          <motion.div
            className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
          >
            <Link href="/contact">
              <Button variant="secondary" size="sm">
                View Details
              </Button>
            </Link>
          </motion.div>
        </div>

        <CardHeader>
          <div className="flex items-start justify-between mb-2">
            <CardTitle className="text-xl group-hover:text-secondary transition-colors">
              {room.name}
            </CardTitle>
            <div className="text-right">
              <div className="text-2xl font-bold font-display text-foreground">
                {formatCurrency(room.price)}
              </div>
              <div className="text-sm text-muted">per night</div>
            </div>
          </div>

          {/* Rating and guests */}
          <div className="flex items-center justify-between text-sm text-muted">
            <div className="flex items-center gap-1">
              <Star size={14} className="text-accent fill-current" />
              <span className="font-medium">{room.rating}</span>
              <span>({room.reviews} reviews)</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1">
                <Users size={14} />
                <span>{room.guests} guests</span>
              </div>
              <div className="flex items-center gap-1">
                <Bed size={14} />
                <span>{room.beds} bed{room.beds > 1 ? 's' : ''}</span>
              </div>
            </div>
          </div>
        </CardHeader>

        <CardContent>
          <p className="text-muted mb-4 text-comfortable text-linear" style={{ lineHeight: '1.75' }}>
            {room.description}
          </p>

          {/* Features */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            {room.features.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-2 text-sm">
                <feature.icon size={16} className="text-secondary" />
                <span className="text-muted">{feature.label}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="flex gap-3">
            <Link href="/contact">
              <Button 
                variant="primary" 
                size="sm" 
                className="flex-1"
              >
                Book Now
              </Button>
            </Link>
            <Link href="/contact">
              <Button 
                variant="outline" 
                size="sm"
              >
                Details
                <ArrowRight size={16} className="ml-1" />
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export function FeaturedRooms() {
  const { ref, inView } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section ref={ref} className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-7xl mx-auto"
          variants={staggerContainer}
          initial="initial"
          animate={inView ? "animate" : "initial"}
        >
          {/* Header */}
          <div className="text-center mb-16">
            <motion.div
              className="inline-block px-4 py-2 bg-secondary/10 text-secondary rounded-full text-sm font-medium mb-6"
              variants={fadeInUp}
            >
              Featured Accommodations
            </motion.div>
            
            <motion.h2
              className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-6"
              variants={fadeInUp}
            >
              Discover Your Perfect
              <span className="block text-secondary">Sanctuary</span>
            </motion.h2>
            
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
              Each of our thoughtfully designed rooms offers a unique experience, 
              combining luxury amenities with the warmth of authentic hospitality.
            </motion.p>
          </div>

          {/* Rooms Grid */}
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
            variants={staggerContainer}
          >
            {featuredRooms.map((room, index) => (
              <RoomCard key={room.id} room={room} index={index} />
            ))}
          </motion.div>

          {/* View All CTA */}
          <motion.div
            className="text-center"
            variants={fadeInUp}
          >
            <Link href="/rooms">
              <Button 
                variant="outline" 
                size="lg"
                className="group"
              >
                Explore All Rooms
                <motion.div
                  className="ml-2"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight size={20} />
                </motion.div>
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
