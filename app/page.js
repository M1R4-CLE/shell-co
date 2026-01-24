'use client';

import { useEffect, useState } from 'react';
import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";
import 'leaflet/dist/leaflet.css';

const meatProducts = [
  {
    name: "Chicken Leg",
    image: "/images/Chicken/Chickenleg.png",
    description: "Juicy chicken leg, perfect for grilling.",
    kilos: "Available: 1kg, 2kg, 5kg",
    bulk: "Bulk: 10kg+ (special price)"
  },
  {
    name: "Chicken Wing",
    image: "/images/Chicken/Chickenwing.png",
    description: "Crispy chicken wings, great for snacks.",
    kilos: "Available: 1kg, 2kg, 5kg",
    bulk: "Bulk: 10kg+ (special price)"
  },
  {
    name: "Chicken Breast",
    image: "/images/Chicken/Chickenbreast.png",
    description: "Lean chicken breast, great for healthy meals.",
    kilos: "Available: 1kg, 2kg, 5kg",
    bulk: "Bulk: 10kg+ (special price)"
  },
  {
    name: "Chicken Thigh",
    image: "/images/Chicken/Chickenthigh1.png",
    description: "Tender chicken thighs, full of flavor.",
    kilos: "Available: 1kg, 2kg, 5kg",
    bulkOrder: "Bulk: 10kg+ (special price)"
  },
  {
    name: "Chicken Head",
    image: "/images/Chicken/Chickenhead1.png",
    description: "Chicken heads, suitable for soup and special dishes.",
    kilos: "Available: 1kg, 2kg, 5kg",
    bulkOrder: "Bulk: 10kg+ (special price)"
  },
  {
    name: "Chicken Neck",
    image: "/images/Chicken/Chickenneck1.png",
    description: "Chicken necks, flavorful and great for soups.",
    kilos: "Available: 1kg, 2kg, 5kg",
    bulkOrder: "Bulk: 10kg+ (special price)"
  },
  {
    name: "Chicken Back",
    image: "/images/Chicken/Chickenback1.png",
    description: "Meaty bone section ideal for soups and stocks, adding rich flavor.",
    kilos: "Available: 1kg, 2kg, 5kg",
    bulkOrder: "Bulk: 10kg+ (special price)"
  },
  {
    name: "Chicken Feet",
    image: "/images/Chicken/Chickenfeet1.png",
    description: "Chicken feet, ideal for stews.",
    kilos: "Available: 1kg, 2kg, 5kg",
    bulkOrder: "Bulk: 10kg+ (special price)"
  },
  {
    name: "Chicken Liver",
    image: "/images/Chicken/Chickenliver1.png",
    description: "Fresh chicken liver, rich in nutrients.",
    kilos: "Available: 1kg, 2kg, 5kg",
    bulkOrder: "Bulk: 10kg+ (special price)"
  },
  {
    name: "Chicken Giblets",
    image: "/images/Chicken/Giblets1.png",
    description: "Assorted chicken giblets, great for various dishes.",
    kilos: "Available: 1kg, 2kg, 5kg",
    bulkOrder: "Bulk: 10kg+ (special price)"
  },
  {
    id: 'chicken-fillet', 
    name: "Chicken Fillet",
    image: "/images/Chicken/Fillet1.png",
    description: "Boneless chicken fillet, perfect for quick meals.",
    kilos: "Available: 1kg, 2kg, 5kg",
    bulkOrder: "Bulk: 10kg+ (special price)"
  },
  {
    name: "Chicken Thighleg",
    image: "/images/Chicken/Chickenthighleg1.png",
    description: "Juicy chicken thighleg, great for grilling.",
    kilos: "Available: 1kg, 2kg, 5kg",
    bulkOrder: "Bulk: 10kg+ (special price)"
  },
  {
    name: "Chicken Intestine",
    image: "/images/Chicken/Chickenintestine1.png",
    description: "Fresh chicken intestine, ideal for skewers and street food.",
    kilos: "Available: 1kg, 2kg, 5kg",
    bulkOrder: "Bulk: 10kg+ (special price)"
  },
  {
    name: "Chicken Butt",
    image: "/images/Chicken/Chickenbutt1.png",
    description: "Chicken butt, a delicacy for grilling and roasting.",
    kilos: "Available: 1kg, 2kg, 5kg",
    bulkOrder: "Bulk: 10kg+ (special price)"
  },
  {
    name: "Half Slice Chicken",
    image: "/images/Chicken/Halfslice1.png",
    description: "Half slice chicken, convenient for various recipes.",
    kilos: "Available: 1kg, 2kg, 5kg",
    bulkOrder: "Bulk: 10kg+ (special price)"
  },
  {
    name: "Chicken Skin",
    image: "/images/Chicken/Chickenskin1.png",
    description: "Crispy chicken skin, perfect for snacks and toppings.",
    kilos: "Available: 1kg, 2kg, 5kg",
    bulkOrder: "Bulk: 10kg+ (special price)"
  }
];

const allProducts = [
  // Eggs
  { id: 101, name: "White Egg", category: "Egg", desc: "Fresh white eggs from healthy hens. Rich in protein and perfect for daily meals.", img: "/images/Chicken/WhiteEgg_Tray.png" },
  { id: 102, name: "Brown Egg", category: "Egg", desc: "Nutritious brown eggs, carefully selected for quality and freshness every day.", img: "/images/Chicken/BrownEggTray.png" },
  // Whole Chickens
  { id: 201, name: "Whole Chicken (2kg)", category: "Whole Chicken", desc: "Fresh • Poultry", img: "/images/Chicken/Whole_Chicken1.png" },
  { id: 202, name: "Whole Chicken (3kg)", category: "Whole Chicken", desc: "Fresh • Poultry", img: "/images/Chicken/Whole_Chicken3kg.png" },
  { id: 203, name: "Whole Chicken (Bulk Orders)", category: "Whole Chicken", desc: "Fresh • Poultry", img: "/images/Chicken/Bulkorder.png" },
  // Chicken Meat Pieces
  ...meatProducts.map(card => ({
    id: 300 + card.id,
    name: card.name,
    category: "Chicken Meat (Pieces)",
    desc: "",
    img: "", 
  })),
  // Feeds (add details if you have them)
  { id: 401, name: "Poultry Feed 1", category: "Poultry Feeds", desc: "", img: "" },
  { id: 402, name: "Poultry Feed 2", category: "Poultry Feeds", desc: "", img: "" },
  { id: 403, name: "Poultry Feed 3", category: "Poultry Feeds", desc: "", img: "" },
];

const poultryFeeds = [
  {
    name: "Starter Feed",
    image: "/images/Poultry%20Feed/Starter.png",
    description: "Formulated for chicks (0-3 weeks), this feed is rich in protein and essential nutrients to support rapid growth and a strong immune system.",
    weight: "Available: 25kg sack",
    bestFor: "Best for: Chicks and young poultry"
  },
  {
    name: "Grower Feed",
    image: "/images/Poultry%20Feed/Grower.png",
    description: "Balanced nutrition for growing chickens (4-16 weeks). Supports healthy development, feathering, and prepares birds for laying.",
    weight: "Available: 25kg sack",
    bestFor: "Best for: Pullets and growers"
  },
  {
    name: "Layer Feed",
    image: "/images/Poultry%20Feed/Layer.png",
    description: "Specially designed for laying hens, this feed boosts egg production, enhances shell quality, and supports overall hen health during feeding and peak laying stages.",
    weight: "Available: 25kg sack",
    bestFor: "Best for: Laying hens"
  }
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

  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const res = await fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    if (res.ok) {
      setStatus("Message sent!");
      setForm({ name: "", email: "", phone: "", message: "" });
    } else {
      setStatus("Failed to send. Please try again.");
    }
  };

  // Chicken meat carousel state and handlers
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(5);

  useEffect(() => {
    const updateVisibleCount = () => {
      setVisibleCount(window.innerWidth < 600 ? 1 : 5);
    };
    window.addEventListener('resize', updateVisibleCount);
    updateVisibleCount();
    return () => window.removeEventListener('resize', updateVisibleCount);
  }, []);

  const handleMeatLeft = () => {
    setCarouselIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleMeatRight = () => {
    setCarouselIndex((prev) => Math.min(prev + 1, meatProducts.length - visibleCount));
  };

  const visibleMeatCards = meatProducts.slice(carouselIndex, carouselIndex + visibleCount);

  // --- Search State ---
  const [searchQuery, setSearchQuery] = useState("");

  // --- Filter Logic ---
  const filteredEggs = allProducts.filter(
    product =>
      product.category === "Egg" &&
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredWholeChicken = allProducts.filter(
    product =>
      product.category === "Whole Chicken" &&
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredMeatProducts = meatProducts.filter(
    product =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const openModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.brand}>
          <img
            src="/images/ShellCo-notext-bg.png"
            alt="Shell Co. Logo"
            className={styles.logoMark}
            width={48}
            height={48}
          />
          <span className={styles.brandText}>Shell Co.</span>
        </div>

        <nav className={styles.nav} aria-label="Primary">
          <a className={`${styles.navLink} ${styles.homeBtn}`} href="#" onClick={(e) => { e.preventDefault(); scrollToTop(); }}>Home</a>
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
            {/* MOVE BUTTONS HERE */}
            <div className={styles.ctaRow} style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
              <a href="#products" className={styles.cta}>
                Explore poultry solutions
                <span className={styles.ctaIcon}>↗</span>
              </a>
              <a href="#contact" className={styles.cta}>
                Get a free consultation
                <span className={styles.ctaIcon}>↗</span>
              </a>
            </div>
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
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Eggs */}
          <div className={styles.eggCategory}>
            <div className={styles.categoryTitle}>Egg</div>
            <div className={styles.eggCardsRow}>
              {(searchQuery ? filteredEggs : allProducts.filter(p => p.category === "Egg")).map((product, idx) => (
                <div className={styles.productCard} key={product.name + idx}>
                  <img
                    src={product.img}
                    alt={product.name}
                    className={styles.cardImage}
                  />
                  <h3 className={styles.cardTitle}>{product.name}</h3>
                  <p className={styles.cardDesc}>{product.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Whole Chicken */}
          <div className={styles.wholeChickenCategory}>
            <div className={styles.categoryTitle}>Whole Chicken</div>
            <div className={styles.wholeChickenCardsRow}>
              {(searchQuery ? filteredWholeChicken : allProducts.filter(p => p.category === "Whole Chicken")).map((product, idx) => (
                <div className={styles.productCard} key={product.name + idx}>
                  <img
                    src={product.img}
                    alt={product.name}
                    className={styles.cardImage}
                  />
                  <h3 className={styles.cardTitle}>{product.name}</h3>
                  <div className={styles.cardType}>Fresh • Poultry</div>
                  <div className={styles.cardSizes}>
                    {/* You can add sizes info here if available */}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Chicken Meat (Pieces) Carousel */}
          <div className={styles.chickenMeatCategory}>
            <div className={styles.categoryTitle}>Chicken Meat (Pieces)</div>
            <div className={styles.carouselRow} style={{ position: "relative", width: "100%", display: "flex", alignItems: "center" }}>
              <button
                className={styles.carouselBtn}
                onClick={handleMeatLeft}
                aria-label="Previous"
              >
                &lt;
              </button>
              <div className={styles.carouselCards}>
                {visibleMeatCards.map((item, idx) => (
                  <div className={styles.meatProductCard} key={item.name + idx}>
                    <img
                      src={item.image}
                      alt={item.name}
                      style={{ width: "120px", height: "120px", objectFit: "contain", marginBottom: "16px" }}
                    />
                    <div className={styles.cardTitle}>{item.name}</div>
                    <div style={{ color: "#fff", fontSize: "0.98rem", margin: "8px 0" }}>{item.description}</div>
                    <div style={{ color: "#fff", fontSize: "0.95rem" }}><b>Kilos:</b> {item.kilos}</div>
                    <div style={{ color: "#fff", fontSize: "0.95rem" }}><b>Bulk Order:</b> {item.bulkOrder}</div>
                  </div>
                ))}
              </div>
              <button
                className={styles.carouselBtn}
                onClick={handleMeatRight}
                aria-label="Next"
              >
                &gt;
              </button>
            </div>
          </div>

          <div className={styles.poultryFeedsCategory}>
            <div className={styles.categoryTitle}>Poulty Feeds</div>
            <div className={styles.poultryFeedsCardsRow}>
              {poultryFeeds.map((feed, idx) => (
                <div className={styles.poultryFeedCard} key={feed.name + idx}>
                  <img src={feed.image} alt={feed.name} className={styles.poultryFeedImage} />
                  <div className={styles.poultryFeedTitle}>{feed.name}</div>
                  <div className={styles.poultryFeedDesc}>{feed.description}</div>
                  <div className={styles.poultryFeedWeight}>{feed.weight}</div>
                  <div className={styles.poultryFeedBestFor}>{feed.bestFor}</div>
                </div>
              ))}
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
              <form
                action="https://formsubmit.co/monecorporation1@gmail.com"
                method="POST"
                className={styles.contactForm}
              >
                <div className={styles.formGroup}>
                  <input type="text" name="name" placeholder="Your Name" required />
                </div>
                <div className={styles.formGroup}>
                  <input type="email" name="email" placeholder="Your Email" required />
                </div>
                <div className={styles.formGroup}>
                  <input type="text" name="phone" placeholder="Your Phone Number" required />
                </div>
                <div className={styles.formGroup}>
                  <textarea name="message" placeholder="Your Message" required></textarea>
                </div>
                <input type="hidden" name="_next" value="https://yourdomain.com/thank-you" />
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

      {/* Modal for product details */}
      {isModalOpen && selectedProduct && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <button className={styles.closeBtn} onClick={closeModal}>&times;</button>
            <div className={styles.modalBody}>
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className={styles.carouselImage}
              />
              <div className={styles.modalText}>
                <div className={styles.modalTitle}>{selectedProduct.name}</div>
                <div className={styles.modalDescription}>{selectedProduct.description}</div>
                {/* Add more details if needed */}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}