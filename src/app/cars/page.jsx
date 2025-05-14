"use client";

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './cars.module.css';

export default function RidesPage() {
  const [destination, setDestination] = useState('');
  const [currentLocation, setCurrentLocation] = useState('Current Location');
  const [activeTab, setActiveTab] = useState('ride');
  const [selectedRideType, setSelectedRideType] = useState('taxi');
  const [selectedCar, setSelectedCar] = useState(null);
  const searchRef = useRef(null);

  // Ride Options Data
  const rideCategories = [
    {
      id: 'taxi',
      name: 'Taxi',
      icon: '🚖',
      options: [
        { id: 'standard', type: 'Standard', price: '1000-2500 Da', eta: '5-10 min', color: '#FF6B6B' },
        { id: 'xl', type: 'XL', price: '2500-4000 Da', eta: '7-12 min', color: '#FF8E8E' }
      ]
    },
    {
      id: 'premium',
      name: 'VTC',
      icon: '🚘',
      options: [
        { id: 'luxury', type: 'Luxury', price: '500-2000 Da', eta: '3-7 min', color: '#A78BFA' },
        { id: 'executive', type: 'Executive', price: '2000-5000 Da', eta: '5-9 min', color: '#C4B5FD' }
      ]
    },
    {
      id: 'bus',
      name: 'Bus',
      icon: '🚌',
      options: [
        { id: 'regular', type: 'Regular', price: '30-50 Da', eta: '15-25 min', color: '#4ECDC4' },
        { id: 'express', type: 'Express', price: '50-100 Da', eta: '10-20 min', color: '#88DFD8' }
      ]
    }
  ];

  // Car Rental Data
  const carOptions = [
    { id: 'economy', name: 'Economy', icon: '🚗', price: '4000 Da/day', seats: 5, mileage: 'Unlimited', color: '#68D391' },
    { id: 'suv', name: 'SUV', icon: '🚙', price: '6000 Da/day', seats: 7, mileage: 'Unlimited', color: '#F6AD55' },
    { id: 'luxury', name: 'Luxury', icon: '🏎️', price: '20000 DA/day', seats: 4, mileage: '200mi/day', color: '#F687B3' },
    { id: 'van', name: 'Van', icon: '🚐', price: '10000 Da/day', seats: 8, mileage: 'Unlimited', color: '#63B3ED' }
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    // Search logic here
  };

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={styles.heroTitle}
          >
            Your Journey, <span className={styles.highlight}>Your Choice</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={styles.heroSubtitle}
          >
            Book rides or rent cars with ease
          </motion.p>
          <div className={styles.heroButtons}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setActiveTab('ride');
                setTimeout(() => scrollToSection(searchRef), 100);
              }}
              className={styles.heroCta}
            >
              Book a Ride
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setActiveTab('rental');
                setTimeout(() => scrollToSection(searchRef), 100);
              }}
              className={styles.secondaryCta}
            >
              Rent a Car
            </motion.button>
          </div>
        </div>
        <div className={styles.scrollIndicator}>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            ↓
          </motion.div>
        </div>
      </div>

      {/* Main Content Tabs */}
      <div className={styles.mainTabs}>
        <button
          className={`${styles.mainTab} ${activeTab === 'ride' ? styles.activeMainTab : ''}`}
          onClick={() => setActiveTab('ride')}
        >
          Book a Ride
        </button>
        <button
          className={`${styles.mainTab} ${activeTab === 'rental' ? styles.activeMainTab : ''}`}
          onClick={() => setActiveTab('rental')}
        >
          Rent a Car
        </button>
      </div>

      {/* Ride Booking Section */}
      <AnimatePresence>
        {activeTab === 'ride' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div ref={searchRef} className={styles.searchContainer}>
              {/* Ride Type Tabs */}
              <div className={styles.rideTabs}>
                {rideCategories.map((category) => (
                  <button
                    key={category.id}
                    className={`${styles.tabButton} ${selectedRideType === category.id ? styles.activeTab : ''}`}
                    onClick={() => setSelectedRideType(category.id)}
                    style={selectedRideType === category.id ? { 
                      borderColor: category.options[0].color 
                    } : {}}
                  >
                    <span className={styles.tabIcon}>{category.icon}</span>
                    {category.name}
                  </button>
                ))}
              </div>

              {/* Destination Input */}
              <form onSubmit={handleSearch} className={styles.searchForm}>
                <div className={styles.inputGroup}>
                  <span className={styles.inputIcon}>📍</span>
                  <input
                    type="text"
                    value={currentLocation}
                    readOnly
                    className={styles.searchInput}
                  />
                </div>
                
                <div className={styles.inputGroup}>
                  <span className={styles.inputIcon}>🏁</span>
                  <input
                    type="text"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    placeholder="Where to?"
                    className={styles.searchInput}
                    required
                  />
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className={styles.searchButton}
                >
                  Find {rideCategories.find(c => c.id === selectedRideType).name}
                </motion.button>
              </form>
            </div>

            {/* Ride Options */}
            <div className={styles.ridesSection}>
              <h2 className={styles.sectionTitle}>
                Available {rideCategories.find(c => c.id === selectedRideType).name} Options
              </h2>
              
              <div className={styles.rideGrid}>
                {rideCategories
                  .find(c => c.id === selectedRideType)
                  .options.map((option) => (
                    <motion.div
                      key={option.id}
                      whileHover={{ y: -5 }}
                      className={styles.rideOptionCard}
                      style={{ borderColor: option.color }}
                    >
                      <div className={styles.rideOptionHeader} style={{ backgroundColor: option.color }}>
                        <span className={styles.rideOptionIcon}>{rideCategories.find(c => c.id === selectedRideType).icon}</span>
                        <h3 className={styles.rideOptionName}>{option.type}</h3>
                      </div>
                      <div className={styles.rideOptionDetails}>
                        <p><strong>Price:</strong> {option.price}</p>
                        <p><strong>ETA:</strong> {option.eta}</p>
                        <button className={styles.selectButton} style={{ backgroundColor: option.color }}>
                          Select
                        </button>
                      </div>
                    </motion.div>
                  ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Car Rental Section */}
      <AnimatePresence>
        {activeTab === 'rental' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div ref={searchRef} className={styles.searchContainer}>
              <h2 className={styles.sectionTitle}>Rent the Perfect Car</h2>
              <form onSubmit={handleSearch} className={styles.searchForm}>
                <div className={styles.rentalInputGroup}>
                  <div className={styles.inputColumn}>
                    <label>Pick-Up Location</label>
                    <div className={styles.inputGroup}>
                      <span className={styles.inputIcon}>📍</span>
                      <input
                        type="text"
                        value={currentLocation}
                        onChange={(e) => setCurrentLocation(e.target.value)}
                        className={styles.searchInput}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className={styles.inputColumn}>
                    <label>Pick-Up Date</label>
                    <div className={styles.inputGroup}>
                      <span className={styles.inputIcon}>📅</span>
                      <input
                        type="date"
                        className={styles.searchInput}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className={styles.inputColumn}>
                    <label>Return Date</label>
                    <div className={styles.inputGroup}>
                      <span className={styles.inputIcon}>📅</span>
                      <input
                        type="date"
                        className={styles.searchInput}
                        required
                      />
                    </div>
                  </div>
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className={styles.searchButton}
                >
                  Find Available Cars
                </motion.button>
              </form>
            </div>

            {/* Car Rental Options */}
            <div className={styles.rentalSection}>
              <h2 className={styles.sectionTitle}>Available Vehicles</h2>
              
              <div className={styles.carGrid}>
                {carOptions.map((car) => (
                  <motion.div
                    key={car.id}
                    whileHover={{ y: -5 }}
                    className={`${styles.carCard} ${selectedCar === car.id ? styles.selectedCar : ''}`}
                    onClick={() => setSelectedCar(car.id)}
                    style={{ '--car-color': car.color }}
                  >
                    <div className={styles.carIcon}>{car.icon}</div>
                    <h3 className={styles.carName}>{car.name}</h3>
                    <div className={styles.carDetails}>
                      <p><span className={styles.detailLabel}>Price:</span> {car.price}</p>
                      <p><span className={styles.detailLabel}>Seats:</span> {car.seats}</p>
                      <p><span className={styles.detailLabel}>Mileage:</span> {car.mileage}</p>
                    </div>
                    <button className={styles.rentButton}>
                      Rent Now
                    </button>
                    {selectedCar === car.id && (
                      <div className={styles.selectedCarBadge}>Selected</div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}