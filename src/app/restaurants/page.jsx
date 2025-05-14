'use client';

import Image from 'next/image';
import styles from './restaurants.module.css';
import RestaurantCard from '@/components/RestaurantCard/RestaurantCard';

export default function RestaurantsPage() {
  const cities = [
    { name: 'Constantine', image: 'constantine.jpg' },
    { name: 'Oran', image: 'oran.jpg' },
    { name: 'Algiers', image: 'algiers.jpg' },
    { name: 'Setif', image: 'setif.jpg' },
    { name: 'Skikda', image: 'skikda.jpg' }
  ];

  const testimonials = [
    {
      id: 1,
      quote: "The best food experience I've ever had!",
      author: "Ali Ahmed",
      role: "Food Blogger",
      photo: "/images/testimonials/ali.jpg"
    },
    {
      id: 2,
      quote: "Excellent service and tasty dishes.",
      author: "Sara Benali",
      role: "Regular Customer",
      photo: "/images/testimonials/sara.jpg"
    },
    {
      id: 3,
      quote: "Authentic Algerian flavors that remind me of home.",
      author: "Mehdi Zoubir",
      role: "Local Guide",
      photo: "/images/testimonials/mehdi.jpg"
    }
  ];

  const popularDishes = [
    { id: 1, name: "Couscous Royal", image: "couscous.png", price: 2500, rating: 4.9, description: "Traditional Algerian couscous with lamb and vegetables" },
    { id: 2, name: "Tajine Zitoune", image: "tajine.jpg", price: 2200, rating: 4.7, description: "Chicken tagine with olives and preserved lemons" },
    { id: 3, name: "Chakhchoukha", image: "chakhchoukha.jpg", price: 1800, rating: 4.8, description: "Algerian specialty with torn bread and rich sauce" },
    { id: 4, name: "Mechoui", image: "mechoui.jpg", price: 3000, rating: 4.9, description: "Slow-roasted lamb with traditional spices" }
  ];

  const galleryImages = [
    { id: 1, name: "Traditional Algerian Breakfast", image: "breakfast.jpg" },
    { id: 2, name: "Seafood Platter", image: "seafood.jpg" },
    { id: 3, name: "Vegetable Tagine", image: "vegetable-tagine.jpg" },
    { id: 4, name: "Algerian Pastries", image: "pastries.jpg" },
    { id: 5, name: "Grilled Meat Platter", image: "grilled-meat.jpg" },
    { id: 6, name: "Fresh Salads", image: "salads.jpg" }
  ];

  return (
    <main className={styles.container}>
      {/* Hero Section (unchanged) */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1>
              <span className={styles.titleHighlight}>Saveurs d'Algérie</span>
              <br />
              Une expérience culinaire authentique
            </h1>
            <p className={styles.subtitle}>
              Découvrez nos spécialités traditionnelles préparées avec des ingrédients locaux et un savoir-faire ancestral
            </p>
            <div className={styles.ctaContainer}>
              <button className={`${styles.ctaButton} ${styles.primary}`}>
                Réserver maintenant
              </button>
              <button className={`${styles.ctaButton} ${styles.secondary}`}>
                Voir le menu
              </button>
            </div>
          </div>
          <div className={styles.heroImageContainer}>
            <Image 
              src="/images/restaurants/couscous.png"
              alt="Plat algérien traditionnel"
              fill
              priority
              quality={90}
              className={styles.heroImage}
              style={{ objectPosition: 'center 60%' }}
            />
            <div className={styles.imageOverlay}></div>
            <div className={styles.badge}>
              <span className={styles.badgeText}>⭐ 4.9/5 (250+ avis)</span>
            </div>
          </div>
        </div>
        <div className={styles.scrollIndicator}>
          <span>Découvrir</span>
          <div className={styles.arrowDown}></div>
        </div>
      </section>

      {/* Enhanced Popular Dishes Section */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Our Signature Dishes</h2>
          <p className={styles.sectionSubtitle}>Taste Algeria's culinary heritage</p>
        </div>
        <div className={styles.dishGrid}>
          {popularDishes.map(dish => (
            <RestaurantCard
              key={dish.id}
              name={dish.name}
              image={`restaurants/${dish.image}`}
              price={dish.price}
              rating={dish.rating}
              description={dish.description}
            />
          ))}
        </div>
      </section>

      {/* Enhanced City Selection with Images */}
      <section className={`${styles.section} ${styles.citySection}`}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Find Restaurants Near You</h2>
          <p className={styles.sectionSubtitle}>Discover authentic Algerian cuisine in these cities</p>
        </div>
        <div className={styles.cityGrid}>
          {cities.map((city, index) => (
            <div key={index} className={styles.cityCard}>
              <div className={styles.cityImage}>
                <Image 
                  src={`/images/cities/${city.image}`}
                  alt={`${city.name} city`}
                  fill
                  className={styles.image}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className={styles.cityOverlay}></div>
                <h3>{city.name}</h3>
              </div>
              <button className={styles.exploreButton}>
                Explore Restaurants
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Enhanced Gallery with Images */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Food Gallery</h2>
          <p className={styles.sectionSubtitle}>A visual feast of Algerian cuisine</p>
        </div>
        <div className={styles.gallery}>
          {galleryImages.map((image) => (
            <div key={image.id} className={styles.galleryItem}>
              <Image 
                src={`/images/restaurants/gallery/${image.image}`}
                alt={image.name}
                fill
                className={styles.galleryImage}
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
              />
              <div className={styles.galleryOverlay}>
                <span>{image.name}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Enhanced Testimonials */}
      <section className={`${styles.section} ${styles.testimonials}`}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Dining Experiences</h2>
          <p className={styles.sectionSubtitle}>What our guests say about us</p>
        </div>
        <div className={styles.testimonialGrid}>
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className={styles.testimonialCard}>
              <div className={styles.customerPhoto}>
                <Image 
                  src={testimonial.photo}
                  alt={testimonial.author}
                  width={80}
                  height={80}
                  className={styles.photo}
                />
              </div>
              <div className={styles.testimonialContent}>
                <p className={styles.quote}>"{testimonial.quote}"</p>
                <div className={styles.author}>
                  <strong>{testimonial.author}</strong>
                  <span>{testimonial.role}</span>
                </div>
                <div className={styles.rating}>
                  {'★'.repeat(5)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}