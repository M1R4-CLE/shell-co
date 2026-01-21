import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
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
          <a className={styles.navLink} href="#home">Home</a>
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
              ShellCo Poultry Farm is a poultry business that raises healthy chickens to produce
              quality eggs and meat. It focuses on proper care, cleanliness, and reliable production
              to serve the community.
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
                ShellCo Poultry Farm is a modern agricultural business focused on raising healthy, high-quality poultry to supply fresh eggs and chicken products. The farm follows proper animal care, clean facilities, and efficient feeding practices to ensure safe and reliable production. ShellCo is committed to supporting local communities by providing affordable poultry products while maintaining sustainable and responsible farming operations.
              </p>
            </div>
            <div className={styles.aboutImageWrapper}>
              <Image
                src="/images/about us image.png"
                alt="ShellCo farm interior"
                width={400}
                height={500}
                className={styles.aboutImage}
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
