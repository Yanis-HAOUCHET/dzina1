import styles from './Footer.module.css';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerLogo}>
            <h3>Dzina</h3>
            <p>Your travel companion in Algeria</p>
          </div>
          <div className={styles.footerLinks}>
            <div>
              <h4>Services</h4>
              <ul>
                <li><Link href="/hotels">Hotels</Link></li>
                <li><Link href="/cars">Car Rides</Link></li>
                <li><Link href="/restaurants">Restaurants</Link></li>
                <li><Link href="/tours">Tours</Link></li>
              </ul>
            </div>
            <div>
              <h4>Company</h4>
              <ul>
                <li><Link href="/about">About Us</Link></li>
                <li><Link href="/contact">Contact</Link></li>
                <li><Link href="/careers">Careers</Link></li>
                <li><Link href="/blog">Blog</Link></li>
              </ul>
            </div>
            <div>
              <h4>Support</h4>
              <ul>
                <li><Link href="/help">Help Center</Link></li>
                <li><Link href="/faq">FAQs</Link></li>
                <li><Link href="/privacy">Privacy Policy</Link></li>
                <li><Link href="/terms">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>© 2025 Dzina. All rights reserved.</p>
          <p>Contact: contact@dzina.dz</p>
        </div>
      </footer>
  );
}
