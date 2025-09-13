"use client";

import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { 
  Filter, 
  SlidersHorizontal,
  Users,
  Bed,
  Star,
  Wifi,
  Coffee,
  Bath,
  Mountain,
  ArrowRight
} from "lucide-react";
import { fadeInUp, staggerContainer, pageTransition } from "@/lib/animations";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { formatCurrency } from "@/lib/utils";
import Link from "next/link";

interface Room {
  id: number;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  guests: number;
  beds: number;
  category: "suite" | "sanctuary" | "loft";
  amenities: string[];
  features: Array<{
    icon: React.ElementType;
    label: string;
  }>;
  image: string;
  popular: boolean;
  available: boolean;
}

const rooms: Room[] = [
  {
    id: 1,
    name: "Serenity Suite",
    description: "A luxurious retreat with panoramic mountain views, featuring a private balcony and spa-like bathroom.",
    price: 350,
    originalPrice: 400,
    rating: 4.9,
    reviews: 47,
    guests: 2,
    beds: 1,
    category: "suite",
    amenities: ["Mountain View", "Private Balcony", "Spa Bathroom", "Premium Wifi"],
    features: [
      { icon: Mountain, label: "Mountain View" },
      { icon: Bath, label: "Spa Bathroom" },
      { icon: Wifi, label: "Premium Wifi" },
      { icon: Coffee, label: "Coffee Station" },
    ],
    image: "/images/serenity-suite.jpg",
    popular: true,
    available: true,
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
    category: "sanctuary",
    amenities: ["Garden Access", "Natural Light", "Eco-Friendly", "Quiet Zone"],
    features: [
      { icon: Mountain, label: "Garden View" },
      { icon: Bath, label: "Rain Shower" },
      { icon: Wifi, label: "High-Speed Wifi" },
      { icon: Coffee, label: "Tea & Coffee" },
    ],
    image: "/images/garden-sanctuary.jpg",
    popular: false,
    available: true,
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
    category: "loft",
    amenities: ["City Views", "Modern Design", "Work Space", "Entertainment System"],
    features: [
      { icon: Mountain, label: "Skyline View" },
      { icon: Bath, label: "Luxury Bath" },
      { icon: Wifi, label: "Business Wifi" },
      { icon: Coffee, label: "Espresso Machine" },
    ],
    image: "/images/skyline-loft.jpg",
    popular: true,
    available: true,
  },
  {
    id: 4,
    name: "Mountain Vista Suite",
    description: "Elevated luxury with breathtaking 360-degree mountain views and premium amenities for the ultimate escape.",
    price: 480,
    rating: 4.9,
    reviews: 21,
    guests: 2,
    beds: 1,
    category: "suite",
    amenities: ["360° Views", "Premium Location", "Luxury Furnishing", "Concierge Service"],
    features: [
      { icon: Mountain, label: "360° Views" },
      { icon: Bath, label: "Marble Bath" },
      { icon: Wifi, label: "Ultra-Fast Wifi" },
      { icon: Coffee, label: "Premium Bar" },
    ],
    image: "/images/mountain-vista.jpg",
    popular: false,
    available: false,
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
    category: "sanctuary",
    amenities: ["Japanese Design", "Meditation Space", "Garden Access", "Natural Materials"],
    features: [
      { icon: Mountain, label: "Garden View" },
      { icon: Bath, label: "Japanese Bath" },
      { icon: Wifi, label: "Silent Wifi" },
      { icon: Coffee, label: "Tea Ceremony" },
    ],
    image: "/images/zen-garden.jpg",
    popular: false,
    available: true,
  },
  {
    id: 6,
    name: "Urban Executive Loft",
    description: "Perfect for business travelers, featuring a dedicated workspace, premium connectivity, and city conveniences.",
    price: 380,
    rating: 4.8,
    reviews: 44,
    guests: 2,
    beds: 1,
    category: "loft",
    amenities: ["Executive Workspace", "Business Center", "Meeting Room Access", "Premium Services"],
    features: [
      { icon: Mountain, label: "City View" },
      { icon: Bath, label: "Power Shower" },
      { icon: Wifi, label: "Business Wifi" },
      { icon: Coffee, label: "Coffee Station" },
    ],
    image: "/images/executive-loft.jpg",
    popular: false,
    available: true,
  },
  {
    id: 7,
    name: "Ocean Breeze Suite",
    description: "Wake up to stunning ocean views in this coastal-inspired suite featuring nautical design elements and premium amenities.",
    price: 450,
    rating: 4.9,
    reviews: 31,
    guests: 2,
    beds: 1,
    category: "suite",
    amenities: ["Ocean View", "Coastal Design", "Private Terrace", "Premium Linens"],
    features: [
      { icon: Mountain, label: "Ocean View" },
      { icon: Bath, label: "Rainfall Shower" },
      { icon: Wifi, label: "High-Speed Wifi" },
      { icon: Coffee, label: "Coffee & Tea" },
    ],
    image: "/images/ocean-breeze.jpg",
    popular: true,
    available: true,
  },
  {
    id: 8,
    name: "Royal Heritage Suite",
    description: "Experience royal luxury in this opulent suite featuring classic furnishings, antique details, and exceptional service.",
    price: 650,
    rating: 5.0,
    reviews: 18,
    guests: 4,
    beds: 2,
    category: "suite",
    amenities: ["Royal Design", "Butler Service", "Antique Furnishings", "VIP Treatment"],
    features: [
      { icon: Mountain, label: "Palace View" },
      { icon: Bath, label: "Marble Jacuzzi" },
      { icon: Wifi, label: "Premium Wifi" },
      { icon: Coffee, label: "Royal Tea Service" },
    ],
    image: "/images/royal-suite.jpg",
    popular: false,
    available: true,
  },
  {
    id: 9,
    name: "Penthouse Paradise",
    description: "The ultimate luxury experience with panoramic city views, private rooftop access, and world-class amenities.",
    price: 850,
    rating: 5.0,
    reviews: 12,
    guests: 6,
    beds: 3,
    category: "loft",
    amenities: ["Rooftop Access", "Panoramic Views", "Private Chef", "Concierge Service"],
    features: [
      { icon: Mountain, label: "360° City View" },
      { icon: Bath, label: "Luxury Spa Bath" },
      { icon: Wifi, label: "Ultra-Fast Wifi" },
      { icon: Coffee, label: "Premium Bar" },
    ],
    image: "/images/penthouse.jpg",
    popular: true,
    available: false,
  },
];

const filterCategories = [
  { id: "all", label: "All Rooms", count: rooms.length },
  { id: "suite", label: "Suites", count: rooms.filter(r => r.category === "suite").length },
  { id: "sanctuary", label: "Sanctuaries", count: rooms.filter(r => r.category === "sanctuary").length },
  { id: "loft", label: "Lofts", count: rooms.filter(r => r.category === "loft").length },
];

interface RoomCardProps {
  room: Room;
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
        className={`group overflow-hidden h-full relative ${!room.available ? 'opacity-75' : ''}`}
      >
        {/* Badges */}
        <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
          {room.popular && (
            <div className="bg-accent text-navy text-xs font-semibold px-3 py-1 rounded-full shadow-lg">
              Most Popular
            </div>
          )}
          {room.originalPrice && (
            <div className="bg-purple-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg">
              Save {formatCurrency(room.originalPrice - room.price)}
            </div>
          )}
          {!room.available && (
            <div className="bg-gray-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg">
              Fully Booked
            </div>
          )}
        </div>

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
          {room.available && (
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
          )}
        </div>

        <CardHeader>
          <div className="flex items-start justify-between mb-2">
            <CardTitle className="text-xl group-hover:text-secondary transition-colors">
              {room.name}
            </CardTitle>
            <div className="text-right">
              <div className="flex items-center gap-2">
                {room.originalPrice && (
                  <div className="text-sm text-muted line-through">
                    {formatCurrency(room.originalPrice)}
                  </div>
                )}
                <div className="text-2xl font-bold font-display text-foreground">
                  {formatCurrency(room.price)}
                </div>
              </div>
              <div className="text-sm text-muted">per night</div>
            </div>
          </div>

          {/* Rating and details */}
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
            {room.available ? (
              <Link href="/contact" className="flex-1">
                <Button 
                  variant="primary" 
                  size="sm" 
                  className="w-full"
                >
                  Book Now
                </Button>
              </Link>
            ) : (
              <Button 
                variant="outline" 
                size="sm" 
                className="flex-1"
                disabled
              >
                Fully Booked
              </Button>
            )}
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

export default function RoomsPage() {
  const { ref, inView } = useScrollAnimation({ threshold: 0.1 });
  const [activeCategory, setActiveCategory] = useState("all");
  const [sortBy, setSortBy] = useState<"price" | "rating" | "popular">("popular");

  const filteredAndSortedRooms = useMemo(() => {
    let filtered = rooms;
    
    // Filter by category
    if (activeCategory !== "all") {
      filtered = rooms.filter(room => room.category === activeCategory);
    }
    
    // Sort
    filtered = [...filtered].sort((a, b) => {
      switch (sortBy) {
        case "price":
          return a.price - b.price;
        case "rating":
          return b.rating - a.rating;
        case "popular":
          return b.popular ? 1 : -1;
        default:
          return 0;
      }
    });
    
    return filtered;
  }, [activeCategory, sortBy]);

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
              Discover Your Perfect
              <span className="block text-secondary">Sanctuary</span>
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
              Each thoughtfully designed room offers a unique experience, combining luxury amenities 
              with the warmth of authentic hospitality. Find your ideal retreat.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Filters & Rooms */}
      <section ref={ref} className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-7xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            animate={inView ? "animate" : "initial"}
          >
            {/* Filter Bar */}
            <motion.div
              className="flex flex-col lg:flex-row items-center justify-between gap-6 mb-12"
              variants={fadeInUp}
            >
              {/* Category Filters */}
              <div className="flex flex-wrap items-center gap-3">
                {filterCategories.map((category) => (
                  <motion.button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      activeCategory === category.id
                        ? "bg-secondary text-white shadow-lg"
                        : "bg-secondary/10 text-secondary hover:bg-secondary/20"
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {category.label} ({category.count})
                  </motion.button>
                ))}
              </div>

              {/* Sort Dropdown */}
              <div className="flex items-center gap-3">
                <SlidersHorizontal size={20} className="text-muted" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
                  className="px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-secondary"
                >
                  <option value="popular">Most Popular</option>
                  <option value="price">Price (Low to High)</option>
                  <option value="rating">Highest Rated</option>
                </select>
              </div>
            </motion.div>

            {/* Rooms Grid */}
            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={staggerContainer}
            >
              {filteredAndSortedRooms.map((room, index) => (
                <RoomCard key={room.id} room={room} index={index} />
              ))}
            </motion.div>

            {/* No results */}
            {filteredAndSortedRooms.length === 0 && (
              <motion.div
                className="text-center py-16"
                variants={fadeInUp}
              >
                <Filter size={48} className="text-muted mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  No rooms found
                </h3>
                <p className="text-muted">
                  Try adjusting your filters to see more options.
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
