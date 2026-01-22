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

  useEffect(() => {
    initMap();
  }, []);

  const initMap = async () => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
    document.head.appendChild(link);

    const script = document.createElement('script');
    script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
    script.async = true;

    script.onload = async () => {
      const farmLocation = [7.162054928946735, 125.45192125391031];

      // Get user's current location
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const userLocation = [position.coords.latitude, position.coords.longitude];

          try {
            // Get route from user location to farm
            const routeResponse = await fetch(
              `https://api.geoapify.com/v1/routing?waypoints=${userLocation[0]},${userLocation[1]}|${farmLocation[0]},${farmLocation[1]}&mode=drive&apiKey=22ac35a9ac97450ca9b5a8ee3eba0d37`
            );

            const routeData = await routeResponse.json();
            const map = window.L.map('map').setView(farmLocation, 14);

            window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
              attribution: '© OpenStreetMap',
              maxZoom: 19,
            }).addTo(map);

            // Draw route
            if (routeData.features && routeData.features[0]) {
              const routeCoords = routeData.features[0].geometry.coordinates;
              const polylineCoords = routeCoords.map(coord => [coord[1], coord[0]]);

              window.L.polyline(polylineCoords, {
                color: '#FF6B6B',
                weight: 4,
                opacity: 0.8,
              }).addTo(map);
            }

            // User's location marker
            window.L.marker(userLocation, {
              icon: window.L.divIcon({
                html: `
                  <div style="
                    width: 30px;
                    height: 30px;
                    background: #4A90E2;
                    border: 3px solid white;
                    border-radius: 50%;
                    box-shadow: 0 2px 6px rgba(0,0,0,0.3);
                  "></div>
                `,
                iconSize: [30, 30],
                iconAnchor: [15, 15],
                popupAnchor: [0, -15],
              })
            }).addTo(map).bindPopup('Your Location').openPopup();

            // Farm location marker
            const farmMarker = window.L.marker(farmLocation, {
              icon: window.L.icon({
                iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
                shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
                iconSize: [25, 41],
                iconAnchor: [12, 41],
                popupAnchor: [1, -34],
                shadowSize: [41, 41]
              })
            }).addTo(map).bindPopup('<strong>Shell Co. Poultry Farm</strong>');

            // Click on marker to get directions
            farmMarker.on('click', () => {
              // Open Google Maps directions in new tab
              const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${farmLocation[0]},${farmLocation[1]}`;
              window.open(directionsUrl, '_blank');
            });

          } catch (error) {
            console.error('Error loading route:', error);
          }
        },
        (error) => {
          console.log('Location access denied or unavailable');
          // Fallback: just show farm location
          const map = window.L.map('map').setView(farmLocation, 14);
          window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
          window.L.marker(farmLocation).addTo(map).bindPopup('<strong>Shell Co. Poultry Farm</strong>');
        }
      );
    };

    document.head.appendChild(script);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      message: formData.get('message'),
    };

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (result.success) {
        alert('Message sent successfully!');
        e.target.reset();
      } else {
        alert('Error sending message');
      }
    } catch (error) {
      alert('Error: ' + error.message);
    }
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
              care,
            </p>
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
    <div className={styles.contactInfo}>
      <h2 className={styles.contactTitle}>Contact Us</h2>
      
      <div className={styles.contactItem}>
        <img src="/images/Social-Media_Icons/Facebook.png" alt="Facebook" />
        <span>ShellCo.</span>
      </div>
      
      <div className={styles.contactItem}>
        <img src="/images/Social-Media_Icons/Telephone.png" alt="Telephone" />
        <span>09948086975</span>
      </div>
      
      <div className={styles.contactItem}>
        <img src="/images/Social-Media_Icons/Viber.png" alt="Viber" />
        <span>9422 3649</span>
      </div>
      
      <div className={styles.contactItem}>
        <img src="/images/Social-Media_Icons/Telegram.png" alt="Telegram" />
        <span>@TheShellCo</span>
      </div>
      
      <div className={styles.contactItem}>
        <img src="/images/Social-Media_Icons/Email.png" alt="Email" />
        <span>monecorporation1@gmail.com</span>
      </div>
    </div>

    <div className={styles.contactFormWrapper}>
      <h3 className={styles.consultationTitle}>Get a free consultation</h3>
      <form className={styles.contactForm} onSubmit={handleFormSubmit}>
        <div className={styles.formGroup}>
          <input type="text" name="name" placeholder="Your Name" required />
        </div>
        
        <div className={styles.formGroup}>
          <input type="email" name="email" placeholder="Your Email" required />
        </div>
        
        <div className={styles.formGroup}>
          <input type="tel" name="phone" placeholder="Your Phone Number" required />
        </div>
        
        <div className={styles.formGroup}>
          <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
        </div>
        
        <button type="submit" className={styles.submitBtn}>
          Send Message
          <span className={styles.ctaIcon}>↗</span>
        </button>
      </form>
    </div>
  </div>
</section>

        <section className={styles.visitFarm}>
  <div className={styles.visitContainer}>
    <h2 className={styles.visitTitle}>Visit Shell Co.</h2>
    <p className={styles.visitDescription}>
      Find our location, operating hours, and directions to the farm.
    </p>
    <div className={styles.mapContainer}>
      <div id="map" style={{ width: '100%', height: '100%' }}></div>
    </div>
  </div>
</section>
      </main>

      <footer className={styles.footer}>
  <p>Copyright 2026 | Web Programming (Lab) M1 Summative Part3 | IT103L.A223.2T.25.26 | Masapa Daryll Dave R.</p>
</footer>
    </div>
  );
}

export async function POST(request) {
  const { name, email, phone, message } = await request.json();

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'monecorporation1@gmail.com', // Changed to your email
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Message from Shell Co. Website</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return Response.json({ success: true, message: 'Email sent!' });
  } catch (error) {
    console.error('Email error:', error);
    return Response.json({ success: false, error: error.message }, { status: 500 });
  }
}