'use client';
import { useState } from 'react';
import Image from 'next/image';
import styles from './Hotels.module.css';
import SearchBar from '@/components/SearchBar/SearchBar';

const allHotels = [
  { name: 'El Aurassi Hotel', location: 'Algiers', stars: 5, image: '/images/hotels/el-aurassi.jpg' },
  { name: 'Sheraton Oran Hotel', location: 'Oran', stars: 5, image: '/images/hotels/sheraton-oran.jpg' },
  { name: 'AZ Hotel Zeralda', location: 'Tipaza', stars: 4, image: '/images/hotels/az-zeralda.jpg' },
  { name: 'Renaissance Tlemcen', location: 'Tlemcen', stars: 5, image: '/images/hotels/renaissance.jpg' },
  { name: 'Hotel Constantine', location: 'Constantine', stars: 3, image: '/images/hotels/constantine.jpg' },
  { name: 'Hotel Bejaia', location: 'Bejaia', stars: 4, image: '/images/hotels/bejaia.jpg' },
];

export default function HotelsPage() {
  const [filteredHotels, setFilteredHotels] = useState(allHotels);
  const [selectedStars, setSelectedStars] = useState('');
  const [selectedPlace, setSelectedPlace] = useState('');

  const handleSearch = (query) => {
    const lowerQuery = query.toLowerCase();
    const results = allHotels.filter(hotel =>
      hotel.name.toLowerCase().includes(lowerQuery) ||
      hotel.location.toLowerCase().includes(lowerQuery)
    );
    setFilteredHotels(results);
  };

  const handleFilterChange = () => {
    let results = allHotels;

    if (selectedStars) {
      results = results.filter(hotel => hotel.stars === parseInt(selectedStars));
    }

    if (selectedPlace) {
      results = results.filter(hotel => hotel.location === selectedPlace);
    }

    setFilteredHotels(results);
  };

  return (
    <main className={styles.main}>
      {/* Enhanced Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <h1>Discover Algeria's Finest Hotels</h1>
          <p className={styles.heroSubtitle}>Luxury stays in the heart of Algeria's most beautiful cities</p>
          <div className={styles.heroSearch}>
            <SearchBar 
              placeholder="Search destinations, hotels..." 
              onSearch={handleSearch}
              darkMode={true}
            />
          </div>
          <div className={styles.scrollIndicator}>
            <span>Explore</span>
            <div className={styles.arrowDown}></div>
          </div>
        </div>
      </section>

      <section className={styles.topHotels}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Premium Accommodations</h2>
          <p className={styles.sectionSubtitle}>Our top recommendations for your stay in Algeria</p>
        </div>
        <div className={styles.hotelGrid}>
          {allHotels.slice(0, 4).map((hotel, index) => (
            <div key={index} className={styles.hotelCard}>
              <div className={styles.hotelImage}>
                <Image 
                  src={hotel.image} 
                  alt={hotel.name} 
                  fill
                  className={styles.image}
                />
                <div className={styles.starRating}>
                  {'★'.repeat(hotel.stars)}
                </div>
              </div>
              <div className={styles.hotelInfo}>
                <h3>{hotel.name}</h3>
                <p className={styles.location}>📍 {hotel.location}</p>
                <button className={styles.viewButton}>View Details</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.filterSection}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Find Your Perfect Stay</h2>
          <p className={styles.sectionSubtitle}>Filter by your preferences</p>
        </div>
        <div className={styles.filters}>
          <div className={styles.filterGroup}>
            <label>Star Rating</label>
            <select 
              value={selectedStars} 
              onChange={(e) => { setSelectedStars(e.target.value); handleFilterChange(); }}
              className={styles.filterSelect}
            >
              <option value="">All Ratings</option>
              <option value="5">5 Stars</option>
              <option value="4">4 Stars</option>
              <option value="3">3 Stars</option>
            </select>
          </div>
          <div className={styles.filterGroup}>
            <label>Location</label>
            <select 
              value={selectedPlace} 
              onChange={(e) => { setSelectedPlace(e.target.value); handleFilterChange(); }}
              className={styles.filterSelect}
            >
              <option value="">All Cities</option>
              <option value="Algiers">Algiers</option>
              <option value="Oran">Oran</option>
              <option value="Tipaza">Tipaza</option>
              <option value="Tlemcen">Tlemcen</option>
              <option value="Constantine">Constantine</option>
              <option value="Bejaia">Bejaia</option>
            </select>
          </div>
        </div>
        <div className={styles.hotelGrid}>
          {filteredHotels.map((hotel, index) => (
            <div key={index} className={styles.hotelCard}>
              <div className={styles.hotelImage}>
                <Image 
                  src={hotel.image} 
                  alt={hotel.name} 
                  fill
                  className={styles.image}
                />
                <div className={styles.starRating}>
                  {'★'.repeat(hotel.stars)}
                </div>
              </div>
              <div className={styles.hotelInfo}>
                <h3>{hotel.name}</h3>
                <p className={styles.location}>📍 {hotel.location}</p>
                <button className={styles.viewButton}>View Details</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}