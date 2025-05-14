
'use client';
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';
import styles from './home.module.css';
import Link from 'next/link';
import { FaPlane, FaHotel, FaCar, FaUmbrellaBeach, FaMagic, FaStar, FaMapMarkerAlt, FaMoneyBillWave } from 'react-icons/fa';
import { FiSearch, FiArrowRight } from 'react-icons/fi';
import { IoRestaurant } from "react-icons/io5";
import { MdHotel, MdDirectionsCar, MdRestaurant, MdTour } from "react-icons/md";

export default function LandingPage() {
  const videoRef = useRef(null);
  const controls = useAnimation();

  useEffect(() => {
    // Load YouTube API script
    if (!window.YT) {
      const tag = document.createElement('script');
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    }

    // Create player when API is ready
    window.onYouTubeIframeAPIReady = () => {
      videoRef.current = new window.YT.Player('youtube-bg', {
        videoId: 'q1VS0attcQk',
        playerVars: {
          autoplay: 1,
          mute: 1,
          controls: 0,
          loop: 1,
          playlist: 'q1VS0attcQk',
          rel: 0,
          fs: 0,
          modestbranding: 1,
          disablekb: 1
        },
        events: {
          onReady: (event) => {
            event.target.playVideo();
            controls.start({ opacity: 1 });
          },
          onStateChange: (event) => {
            if (event.data === window.YT.PlayerState.ENDED) {
              event.target.playVideo();
            }
          }
        }
      });
    };

    // If YouTube API is already loaded
    if (window.YT && window.YT.Player) {
      window.onYouTubeIframeAPIReady();
    }

    return () => {
      if (videoRef.current) {
        videoRef.current.destroy();
      }
    };
  }, []);

  const topDestinations = [
    {
      id: 1,
      name: 'Algiers',
      image: '/images/cities/algiers.jpg',
      description: 'The vibrant capital with Mediterranean charm',
      rating: 4.8
    },
    {
      id: 2,
      name: 'Oran',
      image: '/images/cities/oran.jpg',
      description: 'Coastal city with Spanish colonial heritage',
      rating: 4.6
    },
    {
      id: 3,
      name: 'Constantine',
      image: '/images/cities/constantine.jpg',
      description: 'The city of bridges with stunning cliffs',
      rating: 4.7
    },
    {
      id: 4,
      name: 'Tamanrasset',
      image: '/images/cities/tamanrasset.jpg',
      description: 'Gateway to the Sahara desert',
      rating: 4.9
    }
  ];

  const topHotels = [
    {
      id: 1,
      name: 'El Aurassi Hotel',
      location: 'Algiers',
      image: '/images/hotels/el-aurassi.jpg',
      price: '24000 Da/night',
      rating: 4.7
    },
    {
      id: 2,
      name: 'Sheraton Oran',
      location: 'Oran',
      image: '/images/hotels/sheraton-oran.jpg',
      price: '30000 Da/night',
      rating: 4.8
    },
    {
      id: 3,
      name: 'Ibis Constantine',
      location: 'Constantine',
      image: '/images/hotels/constantine.jpg',
      price: '18000 Da/night',
      rating: 4.5
    },
    {
      id: 4,
      name: 'Tassili Hotel',
      location: 'Djanet',
      image: '/images/hotels/renaissance.jpg',
      price: '2200 Da/night',
      rating: 4.6
    }
  ];

  const features = [
    {
      icon: <FaCar />,
      title: 'Easy Transportation',
      description: 'Book rides anywhere in Algeria with just a few taps'
    },
    {
      icon: <MdHotel />,
      title: 'Hotel Deals',
      description: 'Exclusive discounts on top hotels across the country'
    },
    {
      icon: <MdRestaurant />,
      title: 'Local Cuisine',
      description: 'Discover authentic Algerian restaurants'
    },
    {
      icon: <MdTour />,
      title: 'Amazing Tours',
      description: 'Explore hidden gems with local guides'
    }
  ];

  return (
    <main className={styles.main}>
      {/* Hero Section with YouTube Background */}
      <section className={styles.hero}>
        <div className={styles.videoBackground}>
          <div id="youtube-bg" className={styles.youtubeContainer}></div>
          <div className={styles.videoOverlay}></div>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={controls}
          className={styles.heroContent}
        >
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={styles.heroTitle}
          >
            Discover Algeria with <span className={styles.highlight}>Dzina</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={styles.heroSubtitle}
          >
            Your all-in-one travel companion for hotels, rides, and experiences
          </motion.p>

          {/* Search Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className={styles.tabs}
          >
            <Link href="/hotels">
            <button className={`${styles.tab} ${styles.active}`}>
              <FaHotel /> Hotels
            </button></Link>
            <Link href="/restaurants">
            <button className={styles.tab}>
              <IoRestaurant /> Restaurants
            </button></Link>
            <Link href="/cars">
            <button className={styles.tab}>
              <FaCar /> Rides
            </button></Link>
            <Link href="/tours">
            <button className={styles.tab}>
              <FaUmbrellaBeach /> Tours
            </button></Link>
            <button className={styles.tab}>
              <FaMagic /> Dzina.ai
            </button>
          </motion.div>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className={styles.searchContainer}
          >
            <div className={styles.searchGroup}>
              <span className={styles.searchIcon}><FaMapMarkerAlt /></span>
              <input type="text" placeholder="Where to?" className={styles.searchInput} />
            </div>
            
            <div className={styles.searchGroup}>
              <span className={styles.searchIcon}><FaMapMarkerAlt /></span>
              <input type="text" placeholder="From?" className={styles.searchInput} />
            </div>
            
            <div className={styles.searchGroup}>
              <span className={styles.searchIcon}>📅</span>
              <input type="date" className={styles.searchInput} />
            </div>
            
            <div className={styles.searchGroup}>
              <span className={styles.searchIcon}>📅</span>
              <input type="date" className={styles.searchInput} />
            </div>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={styles.searchButton}
            >
              <FiSearch /> Search
            </motion.button>
          </motion.div>
        </motion.div>
      </section>

     {/* Features Section */}
      <section className={styles.features}>
        <div className={styles.sectionHeader}>
          <h2>Why Choose Dzina?</h2>
          <p>The smart way to travel across Algeria</p>
        </div>
        
        <div className={styles.featuresGrid}>
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={styles.featureCard}
            >
              <div className={styles.featureIcon}>{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Top Destinations Section */}
      <section className={styles.destinations}>
        <div className={styles.sectionHeader}>
          <h2>Explore Algeria&apos;s Beauty</h2>
          <p>Top destinations to visit</p>
        </div>
        
        <div className={styles.destinationsGrid}>
          {topDestinations.map((destination, index) => (
            <motion.div
              key={destination.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={styles.destinationCard}
            >
              <div 
                className={styles.destinationImage}
                style={{ backgroundImage: `url(${destination.image})` }}
              >
                <div className={styles.destinationRating}>
                  <FaStar /> {destination.rating}
                </div>
              </div>
              <div className={styles.destinationInfo}>
                <h3>{destination.name}</h3>
                <p>{destination.description}</p>
                <Link href="/tours">
                <button className={styles.exploreButton}>
                  Explore <FiArrowRight /> 
                </button></Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Top Hotels Section */}
      <section className={styles.hotels}>
        <div className={styles.sectionHeader}>
          <h2>Best Places to Stay</h2>
          <p>Recommended hotels across Algeria</p>
        </div>
        
        <div className={styles.hotelsGrid}>
          {topHotels.map((hotel, index) => (
            <motion.div
              key={hotel.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={styles.hotelCard}
            >
              <div 
                className={styles.hotelImage}
                style={{ backgroundImage: `url(${hotel.image})` }}
              >
                <div className={styles.hotelRating}>
                  <FaStar /> {hotel.rating}
                </div>
                <div className={styles.hotelPrice}>
                  <FaMoneyBillWave /> {hotel.price}
                </div>
              </div>
              <div className={styles.hotelInfo}>
                <h3>{hotel.name}</h3>
                <p><FaMapMarkerAlt /> {hotel.location}</p>
                <Link href="/hotels">
                <button className={styles.bookButton}>
                  Book Now <FiArrowRight />
                </button></Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className={styles.services}>
        <div className={styles.sectionHeader}>
          <h2>Our Services</h2>
          <p>Everything you need for your perfect trip</p>
        </div>
        <div className={styles.cards}>
          <Link href="/hotels">
            <motion.div
              whileHover={{ y: -5 }}
              className={styles.card}
            >
              <img src="/images/hotels.jpg" alt="Hotels" />
              <h3>Hotels</h3>
              <p>Find and book top-rated hotels across Algeria.</p>
              <span className={styles.cardLink}>View Hotels <FiArrowRight /></span>
            </motion.div>
          </Link>
          
          <Link href="/cars">
            <motion.div
              whileHover={{ y: -5 }}
              className={styles.card}
            >
              <img src="/images/rides.jpg" alt="Car Rides" />
              <h3>Car Rides</h3>
              <p>Book affordable and secure rides for all your destinations.</p>
              <span className={styles.cardLink}>Book Rides <FiArrowRight /></span>
            </motion.div>
          </Link>
          
          <Link href="/restaurants">
            <motion.div
              whileHover={{ y: -5 }}
              className={styles.card}
            >
              <img src="/images/restaurants.jpg" alt="Restaurants" />
              <h3>Restaurants</h3>
              <p>Discover and reserve tables at the best restaurants in town.</p>
              <span className={styles.cardLink}>Find Restaurants <FiArrowRight /></span>
            </motion.div>
          </Link>
          
          <Link href="/tours">
            <motion.div
              whileHover={{ y: -5 }}
              className={styles.card}
            >
              <img src="/images/tours.jpg" alt="Tours" />
              <h3>Tours</h3>
              <p>Explore Algeria&apos;s beauty through guided tours and adventures.</p>
              <span className={styles.cardLink}>Discover Tours <FiArrowRight /></span>
            </motion.div>
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className={styles.about}>
        <div className={styles.aboutContent}>
          <div className={styles.aboutText}>
            <h2>About Dzina</h2>
            <p>
              Dzina is your all-in-one Algerian travel platform. Whether you&apos;re looking for hotels, transportation, food, or exciting tours, Dzina helps you plan and book it all in one place. Our mission is to make travel easy, accessible, and enjoyable for everyone in Algeria.
            </p>
            <button className={styles.learnMore}>Learn More</button>
          </div>
          <div className={styles.aboutImage}>
            <img src="/images/logo.webp" alt="About Dzina" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <div className={styles.ctaContent}>
          <h2>Ready for Your Next Adventure?</h2>
          <p>Download Dzina now and start exploring Algeria like never before</p>
          <div className={styles.ctaButtons}>
            <button className={styles.appStoreButton}>
              <span>Download on the</span>
              <span>App Store</span>
            </button>
            <button className={styles.playStoreButton}>
              <span>Get it on</span>
              <span>Google Play</span>
            </button>
          </div>
        </div>
      </section>

      
    </main>
  );
}
