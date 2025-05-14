'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FiMenu, FiX, FiChevronDown, FiSearch } from 'react-icons/fi';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    document.body.style.overflow = mobileMenuOpen ? '' : 'hidden';
  };

  const toggleDropdown = (item) => {
    setActiveDropdown(activeDropdown === item ? null : item);
  };

  const navItems = [
    { 
      name: 'Hotels', 
      href: '/hotels',
      subItems: [
        { name: 'Beach Resorts', href: '/hotels' },
        { name: 'Desert Lodges', href: '/hotels' },
        { name: 'City Hotels', href: '/hotels' }
      ]
    },
    { 
      name: 'Transport', 
      href: '/cars',
      subItems: [
        { name: 'Car Rentals', href: '/cars' },
        { name: 'Airport Transfers', href: '/cars' },
        { name: 'Tours', href: '/cars' }
      ]
    },
    { name: 'Restaurents', href: '/restaurants' },
    { name: 'Tours', href: '/tours' },
  ];

  return (
    <>
      <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
        <div className={styles.navContainer}>
          <div className={styles.logo}>
            <Link href="/" className={styles.logoLink}>
              <span className={styles.logoMain}>DZ</span>
              <span className={styles.logoAccent}>ina</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className={styles.navRight}>
            <div className={styles.searchContainer}>
              <FiSearch className={styles.searchIcon} />
              <input 
                type="text" 
                placeholder="Search destinations..." 
                className={styles.searchInput}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <ul className={styles.navLinks}>
              {navItems.map((item, index) => (
                <li key={index} className={styles.navItem}>
                  {item.subItems ? (
                    <div 
                      className={styles.navLinkWithDropdown}
                      onMouseEnter={() => toggleDropdown(index)}
                      onMouseLeave={() => toggleDropdown(null)}
                    >
                      <Link href={item.href} className={styles.navLink}>
                        {item.name} <FiChevronDown className={styles.dropdownIcon} />
                      </Link>
                      <div className={`${styles.dropdownMenu} ${activeDropdown === index ? styles.show : ''}`}>
                        {item.subItems.map((subItem, subIndex) => (
                          <Link key={subIndex} href={subItem.href} className={styles.dropdownItem}>
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link href={item.href} className={styles.navLink}>
                      {item.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>

            <div className={styles.authButtons}>
              <Link href="/login" className={styles.loginButton}>Sign In</Link>
              <Link href="/register" className={styles.registerButton}>Create Account</Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className={styles.mobileMenuButton} 
            onClick={toggleMobileMenu}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`${styles.mobileMenu} ${mobileMenuOpen ? styles.open : ''}`}>
          <div className={styles.mobileMenuContent}>
            <div className={styles.mobileSearch}>
              <FiSearch className={styles.mobileSearchIcon} />
              <input 
                type="text" 
                placeholder="Search..." 
                className={styles.mobileSearchInput}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {navItems.map((item, index) => (
              <div key={index} className={styles.mobileNavItem}>
                {item.subItems ? (
                  <>
                    <div 
                      className={styles.mobileNavLink}
                      onClick={() => toggleDropdown(`mobile-${index}`)}
                    >
                      {item.name} <FiChevronDown className={`${styles.mobileDropdownIcon} ${activeDropdown === `mobile-${index}` ? styles.rotated : ''}`} />
                    </div>
                    <div className={`${styles.mobileDropdown} ${activeDropdown === `mobile-${index}` ? styles.show : ''}`}>
                      {item.subItems.map((subItem, subIndex) => (
                        <Link 
                          key={subIndex} 
                          href={subItem.href}
                          className={styles.mobileDropdownItem}
                          onClick={() => {
                            setMobileMenuOpen(false);
                            document.body.style.overflow = '';
                          }}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link 
                    href={item.href}
                    className={styles.mobileNavLink}
                    onClick={() => {
                      setMobileMenuOpen(false);
                      document.body.style.overflow = '';
                    }}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}

            <div className={styles.mobileAuthButtons}>
              <Link 
                href="/login"
                className={styles.mobileLoginButton}
                onClick={() => {
                  setMobileMenuOpen(false);
                  document.body.style.overflow = '';
                }}
              >
                Sign In
              </Link>
              <Link 
                href="/register"
                className={styles.mobileRegisterButton}
                onClick={() => {
                  setMobileMenuOpen(false);
                  document.body.style.overflow = '';
                }}
              >
                Create Account
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
