'use client';

import { useEffect, useState } from 'react';
import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";
import 'leaflet/dist/leaflet.css';

const chickenMeatCards = [
  { id: 1, name: "Chicken Leg" },
  { id: 2, name: "Chicken Wing" },
  { id: 3, name: "Chicken Breast" },
  { id: 4, name: "Chicken Thigh" },
  { id: 5, name: "Chicken Drumstick" },
  { id: 6, name: "Chicken Back" },
  { id: 7, name: "Chicken Neck" },
  { id: 8, name: "Chicken Giblets" },
  { id: 9, name: "Chicken Liver" },
  { id: 10, name: "Chicken Intestine" },
  { id: 11, name: "Chicken Feet" },
  { id: 12, name: "Chicken fillet" },
  { id: 13, name: "Chicken Leg Thigh" },
  { id: 14, name: "Chicken Butt" }
];

export default function Home() {
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

      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const userLocation = [position.coords.latitude, position.coords.longitude];

          try {
            const routeResponse = await fetch(
              `https://api.geoapify.com/v1/routing?waypoints=${userLocation[0]},${userLocation[1]}|${farmLocation[0]},${farmLocation[1]}&mode=drive&apiKey=22ac35a9ac97450ca9b5a8ee3eba0d37`
            );

            const routeData = await routeResponse.json();
            const map = window.L.map('map').setView(farmLocation, 14);

            window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
              attribution: '© OpenStreetMap',
              maxZoom: 19,
            }).addTo(map);

            if (routeData.features && routeData.features[0]) {
              const routeCoords = routeData.features[0].geometry.coordinates;
              const polylineCoords = routeCoords.map(coord => [coord[1], coord[0]]);

              window.L.polyline(polylineCoords, {
                color: '#FF6B6B',
                weight: 4,
                opacity: 0.8,
              }).addTo(map);
            }

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

            farmMarker.on('click', () => {
              const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${farmLocation[0]},${farmLocation[1]}`;
              window.open(directionsUrl, '_blank');
            });

          } catch (error) {
            console.error('Error loading route:', error);
          }
        },
        (error) => {
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

  // Chicken meat carousel state and handlers
  const [meatStart, setMeatStart] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState("");

  const visibleCount = 5;

  const totalMeat = chickenMeatCards.length;

  // Animation handler
  const handleMeatLeft = () => {
    if (animating) return;
    setDirection("left");
    setAnimating(true);
    setTimeout(() => {
      setMeatStart((prev) => (prev - 1 + chickenMeatCards.length) % chickenMeatCards.length);
      setAnimating(false);
    }, 300); // match CSS transition duration
  };

  const handleMeatRight = () => {
    if (animating) return;
    setDirection("right");
    setAnimating(true);
    setTimeout(() => {
      setMeatStart((prev) => (prev + 1) % chickenMeatCards.length);
      setAnimating(false);
    }, 300);
  };

  const getVisibleCards = () => {
    const cards = [];
    for (let i = 0; i < visibleCount; i++) {
      cards.push(chickenMeatCards[(meatStart + i) % chickenMeatCards.length]);
    }
    return cards;
  };

  const visibleMeatCards = getVisibleCards();

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
        {/* Hero Section */}
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

        {/* About Us Section */}
        <section className={styles.aboutUs} id="about">
          <div className={styles.aboutContainer}>
            <div className={styles.aboutContent}>
              <h2 className={styles.aboutTitle}>About Us</h2>
              <p className={styles.aboutText}>
                ShellCo Poultry Farm is a modern agricultural business focused on raising healthy, high-quality poultry to supply fresh eggs and chicken products. The farm follows proper animal care, clean facilities, and efficient feeding practices to ensure safe and reliable production. ShellCo is committed to supporting local communities by providing affordable poultry products while maintaining sustainable and responsible farming operations.
              </p>
            </div>
            <img
              className={styles.aboutEggImage}
              src="/images/egg-nobg.png"
              alt="Egg"
            />
          </div>
        </section>

        {/* Services Section */}
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
        </section>

        {/* Products Section */}
        <section className={styles.productsSection} id="products">
          <div className={styles.productsHeader}>
            <h2 className={styles.productsTitle}>Products</h2>
            <input
              className={styles.productsSearch}
              type="text"
              placeholder="Search Product"
            />
          </div>

          <div className={styles.eggCategory}>
            <div className={styles.categoryTitle}>Egg</div>
            <div className={styles.eggCardsRow}>
              <div className={styles.productCard}>
                <img
                  src="/images/Chicken/WhiteEgg_Tray.png"
                  alt="White Egg"
                  className={styles.cardImage}
                />
                <h3 className={styles.cardTitle}>White Egg</h3>
                <p className={styles.cardDesc}>
                  Fresh white eggs from healthy hens. Rich in protein and perfect for daily meals.
                </p>
              </div>
              <div className={styles.productCard}>
                <img
                  src="/images/Chicken/BrownEggTray.png"
                  alt="Brown Egg"
                  className={styles.cardImage}
                />
                <h3 className={styles.cardTitle}>Brown Egg</h3>
                <p className={styles.cardDesc}>
                  Nutritious brown eggs, carefully selected for quality and freshness every day.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.wholeChickenCategory}>
            <div className={styles.categoryTitle}>Whole Chicken</div>
            <div className={styles.wholeChickenCardsRow}>
              {/* Whole Chicken (2kg) */}
              <div className={styles.productCard}>
                <img
                  src="/images/Chicken/Whole_Chicken1.png"
                  alt="Whole Chicken 2kg"
                  className={styles.cardImage}
                />
                <h3 className={styles.cardTitle}>Whole Chicken (2kg)</h3>
                <div className={styles.cardType}>Fresh • Poultry</div>
                <div className={styles.cardSizes}>
                  Sizes: 1 head, 2 heads, 5 heads, 10 heads
                </div>
              </div>
              {/* Whole Chicken (3kg) */}
              <div className={styles.productCard + ' ' + styles.raiseCard}>
                <img
                  src="/images/Chicken/Whole_Chicken3kg.png"
                  alt="Whole Chicken 3kg"
                  className={styles.cardImage + ' ' + styles.imgMargin3kg}
                />
                <h3 className={styles.cardTitle}>Whole Chicken (3kg)</h3>
                <div className={styles.cardType}>Fresh • Poultry</div>
                <div className={styles.cardSizes}>
                  Sizes: 1 head, 2 heads, 5 heads, 10 heads
                </div>
              </div>
              {/* Whole Chicken (Bulk Orders) */}
              <div className={styles.productCard}>
                <img
                  src="/images/Chicken/Bulkorder.png"
                  alt="Whole Chicken Bulk Orders"
                  className={styles.cardImage + ' ' + styles.imgMarginBulk}
                />
                <h3 className={styles.cardTitle + ' ' + styles.bulkTitle}>Whole Chicken (Bulk Orders)</h3>
                <div className={styles.cardType + ' ' + styles.bulkType}>Fresh • Poultry</div>
                <div className={styles.cardSizes + ' ' + styles.bulkSizes}>
                  Sizes: 25 heads, 50 heads, 100 heads, Custom
                </div>
              </div>
            </div>
          </div>

          {/* Chicken Meat (Pieces) Carousel */}
          <div className={styles.chickenMeatCategory}>
            <div className={styles.categoryTitle}>Chicken Meat (Pieces)</div>
            <div className={styles.carouselRow}>
              <button className={styles.carouselArrow} onClick={handleMeatLeft}>&lt;</button>
              <div className={styles.carouselCards}>
                {visibleMeatCards.map((card) => (
                  <div className={styles.meatProductCard} key={card.id}>
                    <h3 className={styles.cardTitle}>{card.name}</h3>
                  </div>
                ))}
              </div>
              <button className={styles.carouselArrow} onClick={handleMeatRight}>&gt;</button>
            </div>
          </div>

          <div className={styles.poultryFeedsCategory}>
            <div className={styles.categoryTitle}>Poulty Feeds</div>
            <div className={styles.poultryFeedsCardsRow}>
              <div className={styles.productCard}>
                {/* Card 1 content */}
              </div>
              <div className={styles.productCard}>
                {/* Card 2 content */}
              </div>
              <div className={styles.productCard}>
                {/* Card 3 content */}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className={styles.contact} id="contact">
          <div className={styles.contactContainer} style={{ gap: '8px' }}>
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

        {/* Map Section */}
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