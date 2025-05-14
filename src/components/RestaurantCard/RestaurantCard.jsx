'use client';

import Image from 'next/image';
import styles from './RestaurantCard.module.css';

export default function RestaurantCard({ name, image, price, rating }) {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <Image 
          src={`/images/${image}`} 
          alt={name} 
          fill
          className={styles.image}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className={styles.details}>
        <h3 className={styles.name}>{name}</h3>
        <div className={styles.meta}>
          <span className={styles.price}>{price}DA</span>
          <span className={styles.rating}>
            <span className={styles.star}>★</span> {rating}
          </span>
        </div>
      </div>
    </div>
  );
}