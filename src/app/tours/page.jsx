'use client';
import { motion } from 'framer-motion';
import styles from './Tours.module.css';
import { FaMapMarkerAlt, FaStar, FaHiking, FaMotorcycle, FaHorse, FaWater, FaMountain } from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';

export default function ToursPage() {
  // Sample tour guides data
  const tourGuides = [
    {
      id: 1,
      name: 'Karim B.',
      specialty: 'Sahara Expeditions',
      rating: 4.9,
      experience: '8 years',
      image: '/images/tours/guides/karim.jpg',
      bio: 'Expert in desert navigation with extensive knowledge of Tuareg culture'
    },
    {
      id: 2,
      name: 'Leila M.',
      specialty: 'Cultural Tours',
      rating: 4.8,
      experience: '6 years',
      image: '/images/tours/guides/leila.jpg',
      bio: 'History graduate specializing in Algerian heritage sites'
    },
    {
      id: 3,
      name: 'Yacine T.',
      specialty: 'Adventure Sports',
      rating: 4.7,
      experience: '5 years',
      image: '/images/tours/guides/yacine.jpg',
      bio: 'Certified mountain guide and rock climbing instructor'
    }
  ];

  // Tour activities data
  const tourActivities = [
    {
      id: 1,
      title: 'Desert Safari',
      type: 'Adventure',
      icon: <FaHiking />,
      image: '/images/tours/activities/desert.jpg',
      description: '4x4 excursions through the stunning Sahara dunes',
      duration: 'Full day'
    },
    {
      id: 2,
      title: 'Atlas Mountain Trek',
      type: 'Hiking',
      icon: <FaMountain />,
      image: '/images/tours/activities/atlas.jpg',
      description: 'Guided hikes through the breathtaking Atlas Mountains',
      duration: '2-5 days'
    },
    {
      id: 3,
      title: 'Coastal Motorcycle Tour',
      type: 'Adventure',
      icon: <FaMotorcycle />,
      image: '/images/tours/activities/motorcycle.jpg',
      description: 'Ride along Algeria\'s stunning Mediterranean coastline',
      duration: 'Half day'
    },
    {
      id: 4,
      title: 'Horseback Riding',
      type: 'Nature',
      icon: <FaHorse />,
      image: '/images/tours/activities/horse.jpg',
      description: 'Explore scenic trails on horseback',
      duration: '2-4 hours'
    },
    {
      id: 5,
      title: 'National Parks',
      type: 'Nature',
      icon: <FaHiking />,
      image: '/images/tours/activities/parks.jpg',
      description: 'Discover Algeria\'s diverse flora and fauna',
      duration: 'Full day'
    },
    {
      id: 6,
      title: 'Water Sports',
      type: 'Adventure',
      icon: <FaWater />,
      image: '/images/tours/activities/watersports.jpg',
      description: 'Kayaking, snorkeling and more along the coast',
      duration: '2-6 hours'
    }
  ];

  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={styles.heroTitle}
          >
            Discover Algeria's Hidden Treasures 
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={styles.heroSubtitle}
          >
            Unforgettable tours showcasing Algeria's diverse landscapes and rich culture
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={styles.ctaButton}
          >
            Explore Tours <FiArrowRight />
          </motion.button>
        </div>
      </section>

      {/* Meet Our Guides Section */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2>Meet Our Expert Guides</h2>
          <p>Local professionals passionate about sharing Algeria's beauty</p>
        </div>
        
        <div className={styles.guidesGrid}>
          {tourGuides.map((guide, index) => (
            <motion.div
              key={guide.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={styles.guideCard}
            >
              <div 
                className={styles.guideImage}
                style={{ backgroundImage: `url(${guide.image})` }}
              >
                <div className={styles.guideRating}>
                  <FaStar /> {guide.rating}
                </div>
              </div>
              <div className={styles.guideInfo}>
                <h3>{guide.name}</h3>
                <p className={styles.specialty}>{guide.specialty}</p>
                <p className={styles.experience}>{guide.experience} experience</p>
                <p className={styles.bio}>{guide.bio}</p>
                <button className={styles.profileButton}>
                  View Profile <FiArrowRight />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Tour Activities Section */}
      <section className={`${styles.section} ${styles.darkSection}`}>
        <div className={styles.sectionHeader}>
          <h2>Adventure Awaits</h2>
          <p>Choose from our wide range of exciting activities</p>
        </div>
        
        <div className={styles.activitiesGrid}>
          {tourActivities.map((activity, index) => (
            <motion.div
              key={activity.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={styles.activityCard}
            >
              <div 
                className={styles.activityImage}
                style={{ backgroundImage: `url(${activity.image})` }}
              >
                <div className={styles.activityType}>
                  {activity.icon} {activity.type}
                </div>
              </div>
              <div className={styles.activityInfo}>
                <h3>{activity.title}</h3>
                <p>{activity.description}</p>
                <div className={styles.activityMeta}>
                  <span className={styles.duration}>{activity.duration}</span>
                  <button className={styles.bookButton}>
                    Book Now <FiArrowRight />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContent}>
          <h2>Ready for Your Algerian Adventure?</h2>
          <p>Contact us to customize your perfect tour package</p>
          <div className={styles.ctaButtons}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={styles.primaryButton}
            >
              Get a Custom Quote
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={styles.secondaryButton}
            >
              Call Us: +213 XXX XXX XXX
            </motion.button>
          </div>
        </div>
      </section>
    </div>
  );
}