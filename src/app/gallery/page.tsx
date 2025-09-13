"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  X, 
  ChevronLeft, 
  ChevronRight,
  Camera,
  Heart,
  Mountain,
  Coffee,
  Utensils,
  Bed
} from "lucide-react";
import { fadeInUp, staggerContainer, pageTransition, modalBackdrop, modalContent } from "@/lib/animations";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: "rooms" | "dining" | "amenities" | "views" | "experiences";
  title: string;
  description: string;
}

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: "/images/gallery/serenity-suite-1.jpg",
    alt: "Serenity Suite bedroom with mountain views",
    category: "rooms",
    title: "Serenity Suite",
    description: "Wake up to breathtaking mountain vistas from your private sanctuary",
  },
  {
    id: 2,
    src: "/images/gallery/dining-experience.jpg",
    alt: "Gourmet breakfast spread with local ingredients",
    category: "dining",
    title: "Farm-to-Table Dining",
    description: "Savor locally-sourced ingredients prepared by our executive chef",
  },
  {
    id: 3,
    src: "/images/gallery/mountain-sunrise.jpg",
    alt: "Golden sunrise over mountain peaks",
    category: "views",
    title: "Mountain Sunrise",
    description: "Experience magical sunrises that paint the sky in golden hues",
  },
  {
    id: 4,
    src: "/images/gallery/spa-bathroom.jpg",
    alt: "Luxury spa bathroom with soaking tub",
    category: "amenities",
    title: "Spa-Like Bathrooms",
    description: "Unwind in marble bathrooms with premium amenities",
  },
  {
    id: 5,
    src: "/images/gallery/garden-sanctuary.jpg",
    alt: "Garden Sanctuary surrounded by lush greenery",
    category: "rooms",
    title: "Garden Sanctuary",
    description: "Find peace in our nature-surrounded intimate retreat",
  },
  {
    id: 6,
    src: "/images/gallery/yoga-session.jpg",
    alt: "Morning yoga session on the deck",
    category: "experiences",
    title: "Wellness Experiences",
    description: "Start your day with guided yoga and meditation sessions",
  },
  {
    id: 7,
    src: "/images/gallery/wine-tasting.jpg",
    alt: "Wine tasting setup with valley views",
    category: "dining",
    title: "Wine Tasting",
    description: "Discover local wines paired with artisanal cheeses",
  },
  {
    id: 8,
    src: "/images/gallery/skyline-loft.jpg",
    alt: "Skyline Loft with modern furnishings",
    category: "rooms",
    title: "Skyline Loft",
    description: "Contemporary luxury with panoramic city views",
  },
  {
    id: 9,
    src: "/images/gallery/private-balcony.jpg",
    alt: "Private balcony with mountain views",
    category: "amenities",
    title: "Private Balconies",
    description: "Enjoy your morning coffee with spectacular views",
  },
  {
    id: 10,
    src: "/images/gallery/hiking-trail.jpg",
    alt: "Scenic hiking trail near the homestay",
    category: "experiences",
    title: "Nature Trails",
    description: "Explore pristine trails just steps from your door",
  },
  {
    id: 11,
    src: "/images/gallery/chef-kitchen.jpg",
    alt: "Chef preparing gourmet meal in open kitchen",
    category: "dining",
    title: "Culinary Excellence",
    description: "Watch our chefs create culinary masterpieces",
  },
  {
    id: 12,
    src: "/images/gallery/stargazing.jpg",
    alt: "Stargazing setup on the rooftop deck",
    category: "experiences",
    title: "Stargazing Nights",
    description: "Marvel at pristine night skies away from city lights",
  },
];

const categories = [
  { id: "all", label: "All Photos", icon: Camera },
  { id: "rooms", label: "Rooms", icon: Bed },
  { id: "dining", label: "Dining", icon: Utensils },
  { id: "amenities", label: "Amenities", icon: Heart },
  { id: "views", label: "Views", icon: Mountain },
  { id: "experiences", label: "Experiences", icon: Coffee },
];

function GalleryImageComponent({ image, onClick }: { image: GalleryImage; onClick: () => void }) {
  return (
    <div 
      className="w-full h-full bg-cover bg-center cursor-pointer group transition-all duration-300 hover:scale-105"
      onClick={onClick}
      style={{
        backgroundImage: `url('${image.src}')`,
      }}
    >
      {/* Optional overlay for better text readability */}
      <div className="w-full h-full bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
        <div className="p-4 w-full">
          <p className="text-white font-medium text-sm">
            {image.title}
          </p>
          <p className="text-white/80 text-xs leading-tight">
            {image.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function GalleryPage() {
  const { ref, inView } = useScrollAnimation({ threshold: 0.1 });
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filteredImages = activeCategory === "all" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  const openLightbox = (image: GalleryImage) => {
    setSelectedImage(image);
    setCurrentImageIndex(filteredImages.findIndex(img => img.id === image.id));
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const goToNext = () => {
    const nextIndex = (currentImageIndex + 1) % filteredImages.length;
    setCurrentImageIndex(nextIndex);
    setSelectedImage(filteredImages[nextIndex]);
  };

  const goToPrev = () => {
    const prevIndex = (currentImageIndex - 1 + filteredImages.length) % filteredImages.length;
    setCurrentImageIndex(prevIndex);
    setSelectedImage(filteredImages[prevIndex]);
  };

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
              Visual Journey
              <span className="block text-secondary">Through Haven</span>
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
              Discover the beauty, comfort, and unique experiences that await you at Haven. 
              Each image tells a story of luxury, tranquility, and unforgettable moments.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section ref={ref} className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-7xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            animate={inView ? "animate" : "initial"}
          >
            {/* Category Filters */}
            <motion.div
              className="flex flex-wrap items-center justify-center gap-4 mb-12"
              variants={fadeInUp}
            >
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeCategory === category.id
                      ? "bg-secondary text-white shadow-lg scale-105"
                      : "bg-secondary/10 text-secondary hover:bg-secondary/20 hover:scale-105"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <category.icon size={18} />
                  {category.label}
                </motion.button>
              ))}
            </motion.div>

            {/* Images Grid */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              variants={staggerContainer}
              layout
            >
              <AnimatePresence>
                {filteredImages.map((image, index) => (
                  <motion.div
                    key={image.id}
                    layout
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className="group cursor-pointer"
                  >
                    <Card 
                      variant="default" 
                      className="overflow-hidden h-80 hover:shadow-elevated transition-all duration-300"
                    >
                      <div className="relative h-full">
                        <GalleryImageComponent 
                          image={image} 
                          onClick={() => openLightbox(image)}
                        />
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {/* No results */}
            {filteredImages.length === 0 && (
              <motion.div
                className="text-center py-16"
                variants={fadeInUp}
              >
                <Camera size={48} className="text-muted mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  No images found
                </h3>
                <p className="text-muted">
                  Try selecting a different category to see more photos.
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            variants={modalBackdrop}
            initial="initial"
            animate="animate"
            exit="exit"
            onClick={closeLightbox}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/90" />
            
            {/* Modal Content */}
            <motion.div
              className="relative z-10 max-w-6xl max-h-[90vh] w-full bg-white rounded-xl overflow-hidden"
              variants={modalContent}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-4 bg-background border-b border-border">
                <div>
                  <h3 className="font-semibold text-foreground">{selectedImage.title}</h3>
                  <p className="text-sm text-muted">{selectedImage.description}</p>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={closeLightbox}
                  className="p-2"
                >
                  <X size={20} />
                </Button>
              </div>

              {/* Image */}
              <div className="relative aspect-[4/3] bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center">
                <div 
                  className="w-full h-full bg-cover bg-center"
                  style={{
                    backgroundImage: `url('${selectedImage.src}')`,
                  }}
                ></div>
                
                {/* Navigation */}
                <div className="absolute inset-y-0 left-0 flex items-center">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={goToPrev}
                    className="m-4 bg-black/20 text-white hover:bg-black/40"
                  >
                    <ChevronLeft size={20} />
                  </Button>
                </div>
                
                <div className="absolute inset-y-0 right-0 flex items-center">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={goToNext}
                    className="m-4 bg-black/20 text-white hover:bg-black/40"
                  >
                    <ChevronRight size={20} />
                  </Button>
                </div>
              </div>

              {/* Footer */}
              <div className="p-4 bg-background border-t border-border">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-muted">
                    {currentImageIndex + 1} of {filteredImages.length}
                  </p>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-muted uppercase tracking-wide">
                      {selectedImage.category}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
