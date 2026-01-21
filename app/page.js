'use client';

import { useEffect, useState } from 'react';
import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";
import 'leaflet/dist/leaflet.css';

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [carouselIndex, setCarouselIndex] = useState(0);

  const productDetails = {
    eggs: {
      title: 'Fresh Chicken Eggs',
      description: 'Fresh farm eggs available in both brown and white varieties, carefully selected and offered in small, medium, large, and XL sizes to meet different household and business needs while ensuring quality and freshness.',
      images: ['/images/Chicken/Brown_EggTray.png', '/images/Chicken/White_Egg_Tray.png']
    },
    chicken: {
      title: 'Whole Chicken',
      description: 'Fresh chicken meat cuts, carefully prepared and available in various pieces to suit different cooking needs, ensuring quality, cleanliness, and great taste for everyday meals and food businesses.',
      images: ['/images/Chicken/Whole_Chicken1.png', '/images/Chicken/Whole_Chicken2.png', '/images/Chicken/Whole_Chicken3.png', '/images/Chicken/Whole_Chicken4.png', '/images/Chicken/Whole_Chicken5.png']
    },
    meatPieces: {
      title: 'Chicken Meat (Pieces)',
      description: 'Fresh and frozen chicken meat cuts including wings, thighs, breast, legs, and drumsticks, carefully prepared to suit various cooking styles while maintaining quality, cleanliness, and great taste for home and commercial use.',
      images: ['/images/Chicken/Chicken_Leg.png', '/images/Chicken/Chicken_wing.png', '/images/Chicken/Chicken-Breast.png', '/images/Frozen_Chicken products/Froze_ChickenWings.png', '/images/Frozen_Chicken products/Frozen_ChickenBreast.png', '/images/Frozen_Chicken products/Frozen_ChickenLeg.png', '/images/Frozen_Chicken products/Frozen_mix_parts.png', '/images/Frozen_Chicken products/Sliced_Chicken_Breast.png', '/images/Frozen_Chicken products/Frozen_WholeChicken.png']
    },
    feed: {
      title: 'Poultry Feed & Supplies',
      description: 'Welcome to our poultry feed section! We offer a variety of high-quality feeds, supplements, and medicines to support healthy and productive chickens. Our products cater to all stages of poultry growth, from chicks to adult birds.\n\nAvailable Products Include:\n\nFeeds – Starter, Grower, Layer, and Finisher feeds depending on the size and type of chicken.\n\nSupplements & Medicines – Vitamins, minerals, and health boosters to ensure strong immunity and growth.\n\nFresh Whole Chicken – Available in different sizes, carefully processed to ensure quality, cleanliness, and freshness, suitable for households and food businesses.\n\nBrands We Carry:\n\nTop-quality feed and medicine brands, selected to match the size and needs of your chickens.\n\nFor more details or to place an order, you may contact us or browse our selection below.',
      images: []
    }
  };

  const handlePrevSlide = () => {
    const images = productDetails[selectedProduct]?.images || [];
    setCarouselIndex((carouselIndex - 1 + images.length) % images.length);
  };

  const handleNextSlide = () => {
    const images = productDetails[selectedProduct]?.images || [];
    setCarouselIndex((carouselIndex + 1) % images.length);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.brand}>
          <span className={styles.logoMark}>
            <Image
              src="/images/ShellCo-notext-bg.png"
              alt="Shell Co logo"
              width={48}
              height={55}
              priority
            />
          </span>
          <span className={styles.brandText}>Shell Co.</span>
        </div>

        <nav className={styles.nav} aria-label="Primary">
          <a className={styles.navLink} href="#" onClick={(e) => { e.preventDefault(); scrollToTop(); }}>Home</a>
          <a className={styles.navLink} href="#about">About Us</a>
          <a className={styles.navLink} href="#services">Services</a>
          <a className={styles.navLink} href="#products">Products</a>
          <a className={styles.navLink} href="#contact">Contact Us</a>
        </nav>
      </header>

      <main className={styles.main} id="home">
        <section className={styles.hero} aria-label="Hero">
          <div className={styles.heroInner}>
            <h1 className={styles.title}>
              Quality Poultry Products for a
              <br />
              Better Tomorrow
            </h1>

            <p className={styles.subtitle}>
              ShellCo Poultry Farm is a poultry business that raises healthy
              chickens to produce quality eggs and meat. It focuses on proper
              care, cleanliness, and reliable production to serve the community.
            </p>

            <div className={styles.ctaRow}>
              <a className={styles.cta} href="#services">
                Explore poultry solutions
                <span className={styles.ctaIcon} aria-hidden="true">
                  ↗
                </span>
              </a>

              <a className={styles.cta} href="#contact">
                Get a free consultation
                <span className={styles.ctaIcon} aria-hidden="true">
                  ↗
                </span>
              </a>
            </div>
          </div>
        </section>

        <section className={styles.aboutUs} id="about">
          <div className={styles.aboutContainer}>
            <div className={styles.aboutContent}>
              <h2 className={styles.aboutTitle}>About Us</h2>
              <p className={styles.aboutText}>
                ShellCo Poultry Farm is a modern agricultural business focused on
                raising healthy, high-quality poultry to supply fresh eggs and
                chicken products. The farm follows proper animal care, clean
                facilities, and efficient feeding practices to ensure safe and
                reliable production. ShellCo is committed to supporting local
                communities by providing affordable poultry products while
                maintaining sustainable and responsible farming operations.
              </p>
            </div>

            <Image
              src="/images/egg-nobg.png"
              alt="ShellCo farm interior"
              width={200}
              height={1000}
              className={styles.aboutImage}
            />
          </div>
        </section>

        <section className={styles.services} id="services">
          <div className={styles.servicesContainer}>
            <h2 className={styles.servicesTitle}>Services</h2>
            
            <div className={styles.servicesGrid}>
              <div className={styles.serviceCard}>
                <h3 className={styles.serviceCardTitle}>1. Poultry Farming & Production</h3>
                <p>We raise healthy, high-quality poultry using modern farming practices to ensure consistent supply and quality.</p>
              </div>
              
              <div className={styles.serviceCard}>
                <h3 className={styles.serviceCardTitle}>2. Wholesale & Retail Distribution</h3>
                <p>Supplying fresh poultry products to markets, restaurants, and retailers at competitive prices.</p>
              </div>
              
              <div className={styles.serviceCard}>
                <h3 className={styles.serviceCardTitle}>3. Custom Orders & Bulk Supply</h3>
                <p>Flexible ordering options for businesses, events, and bulk buyers based on specific requirements.</p>
              </div>
              
              <div className={styles.serviceCard}>
                <h3 className={styles.serviceCardTitle}>4. Quality Control & Processing</h3>
                <p>Strict hygiene and quality standards from farm to delivery to guarantee safe and fresh products.</p>
              </div>
              
              <div className={styles.serviceCard}>
                <h3 className={styles.serviceCardTitle}>5. Farm-to-Market Delivery</h3>
                <p>Reliable and timely delivery services to ensure freshness and customer satisfaction.</p>
              </div>
            </div>
          </div>
        </section>  {/* End of Services */}
        <section className={styles.products} id="products">
          <div className={styles.productsContainer}>
            <h2 className={styles.productsTitle}>Products</h2>
            
            <div className={styles.productsGrid}>
              <div className={styles.productCard} onClick={() => setSelectedProduct('eggs')}>
                <h3 className={styles.productCardTitle}>Fresh Chicken Eggs</h3>
                <p>High-quality, nutrient-rich eggs from healthy hens. Available daily in various quantities.</p>
              </div>
              
              <div className={styles.productCard} onClick={() => setSelectedProduct('chicken')}>
                <h3 className={styles.productCardTitle}>Whole Chicken</h3>
                <p>Farm-fresh whole chickens, ready for processing. Guaranteed quality and freshness.</p>
              </div>
              
              <div className={styles.productCard} onClick={() => setSelectedProduct('meatPieces')}>
                <h3 className={styles.productCardTitle}>Chicken Meat (Pieces)</h3>
                <p>Premium cuts including breast, thighs, wings, and drumsticks. Fresh and frozen options.</p>
              </div>
              
              <div className={styles.productCard} onClick={() => setSelectedProduct('feed')}>
                <h3 className={styles.productCardTitle}>Poultry Feed</h3>
                <p>High-quality feed for optimal poultry health and productivity. Bulk orders available.</p>
              </div>
            </div>
          </div>
        </section>

        {selectedProduct && (
  <div className={styles.modal} onClick={() => setSelectedProduct(null)}>
    <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
      <button className={styles.closeBtn} onClick={() => setSelectedProduct(null)}>✕</button>
      
      <div className={styles.modalBody}>
        {productDetails[selectedProduct]?.images?.length > 0 ? (
          <div className={styles.carouselContainer}>
            <button className={styles.carouselBtn} onClick={handlePrevSlide}>‹</button>
            <img 
              src={productDetails[selectedProduct]?.images[carouselIndex]} 
              alt="Product" 
              className={styles.carouselImage}
            />
            <button className={styles.carouselBtn} onClick={handleNextSlide}>›</button>
          </div>
        ) : null}
        
        <div className={styles.modalText}>
          <h2 className={styles.modalTitle}>{productDetails[selectedProduct]?.title}</h2>
          <p className={styles.modalDescription}>{productDetails[selectedProduct]?.description}</p>
          
          {selectedProduct === 'feed' && (
            <button className={styles.ctaFeed}>
              Contact Us for Orders
              <span className={styles.ctaIcon} aria-hidden="true">↗</span>
            </button>
          )}
        </div>
      </div>
    </div>
  </div>
)}

        <section className={styles.contact} id="contact">
  <div className={styles.contactContainer}>
    <h2 className={styles.contactTitle}>Contact Us</h2>
    
    <form className={styles.contactForm}>
      <div className={styles.formGroup}>
        <input type="text" placeholder="Your Name" required />
      </div>
      
      <div className={styles.formGroup}>
        <input type="email" placeholder="Your Email" required />
      </div>
      
      <div className={styles.formGroup}>
        <input type="phone" placeholder="Your Phone Number" required />
      </div>
      
      <div className={styles.formGroup}>
        <textarea placeholder="Your Message" rows="5" required></textarea>
      </div>
      
      <button type="submit" className={styles.submitBtn}>
        Send Message
        <span className={styles.ctaIcon}>↗</span>
      </button>
    </form>
  </div>
</section>

      </main>
    </div>
  );
}
