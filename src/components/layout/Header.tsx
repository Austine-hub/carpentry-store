import { useState, useEffect, useRef, useCallback } from "react";
import styles from "./Header.module.css";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "Products", href: "#products" },
  { label: "Project", href: "#project" },
  { label: "About", href: "#about" },
  { label: "Bespoke", href: "#bespoke" },
  { label: "Store", href: "#store" },
];

const Header = () => {
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const langDropdownRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // ✅ Throttled scroll handler (no memory leaks)
  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout> | null = null;

    const handleScroll = () => setIsScrolled(window.scrollY > 10);

    const throttledHandler = () => {
      if (!timeout) {
        timeout = setTimeout(() => {
          handleScroll();
          timeout = null;
        }, 100);
      }
    };

    window.addEventListener("scroll", throttledHandler, { passive: true });
    return () => {
      window.removeEventListener("scroll", throttledHandler);
      if (timeout) clearTimeout(timeout);
    };
  }, []);

  // ✅ Close menus on outside click / ESC key
  useEffect(() => {
    const handleClose = (event: MouseEvent | KeyboardEvent) => {
      if (event instanceof MouseEvent) {
        if (
          langDropdownRef.current &&
          !langDropdownRef.current.contains(event.target as Node)
        ) {
          setIsLangOpen(false);
        }
        if (
          mobileMenuRef.current &&
          !mobileMenuRef.current.contains(event.target as Node)
        ) {
          setIsMobileMenuOpen(false);
        }
      } else if (event.key === "Escape") {
        setIsLangOpen(false);
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClose);
    document.addEventListener("keydown", handleClose);
    return () => {
      document.removeEventListener("mousedown", handleClose);
      document.removeEventListener("keydown", handleClose);
    };
  }, []);

  // ✅ Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add(styles.noScroll);
    } else {
      document.body.classList.remove(styles.noScroll);
    }
    return () => document.body.classList.remove(styles.noScroll);
  }, [isMobileMenuOpen]);

  const toggleLangMenu = useCallback(() => {
    setIsLangOpen((prev) => !prev);
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev);
  }, []);

  return (
    <header
      className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}
      role="banner"
    >
      {/* 🔹 Top Bar */}
      <div className={styles.topBar}>
        <div className={styles.container}>
          {/* 🔹 Language Dropdown */}
          <div className={styles.leftSection}>
            <div className={styles.languageDropdown} ref={langDropdownRef}>
              <button
                onClick={toggleLangMenu}
                className={styles.languageButton}
                aria-haspopup="true"
                aria-expanded={isLangOpen}
                aria-label="Select language"
                type="button"
              >
                <span className={styles.languageText}>EN</span>
                <svg
                  className={`${styles.chevron} ${
                    isLangOpen ? styles.chevronOpen : ""
                  }`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M5 7l5 5 5-5H5z" />
                </svg>
              </button>

              {isLangOpen && (
                <div className={styles.languageMenu} role="menu">
                  <button
                    className={`${styles.languageOption} ${styles.active}`}
                    role="menuitem"
                    type="button"
                    aria-current="true"
                  >
                    English
                  </button>
                  <a
                    href="https://eastern-edition.co.kr"
                    className={styles.languageOption}
                    role="menuitem"
                  >
                    Korean site
                  </a>
                </div>
              )}
            </div>

            {/* 🔹 Quick Nav */}
            <nav className={styles.quickNav} aria-label="Quick navigation">
              <a href="#contact" className={styles.quickNavLink}>
                Contact
              </a>
              <a href="#store" className={styles.quickNavLink}>
                Store
              </a>
            </nav>
          </div>

          {/* 🔹 Account & Subscribe */}
          <div className={styles.rightSection}>
            <a
              href="http://localhost/myapp/public/login.php"
              className={styles.loginLink}
            >
              Login
            </a>
            <button className={styles.subscribeButton} type="button">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* 🔹 Main Header */}
      <div className={styles.mainHeader}>
        <div className={styles.container}>
          {/* Logo & Desktop Nav */}
          <div className={styles.leftSection}>
            <a href="/" className={styles.logo} aria-label="Eastern Edition Home">
              EASTERN<span className={styles.logoLight}>EDITION</span>
            </a>

            <nav className={styles.desktopNav} aria-label="Main navigation">
              {navItems.map((item) => (
                <a key={item.label} href={item.href} className={styles.navLink}>
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          {/* 🔹 Cart & Mobile Toggle */}
          <div className={styles.rightSection}>
            <button className={styles.cartButton} type="button">
              Cart
            </button>

            <button
              className={styles.mobileMenuButton}
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              type="button"
            >
              <svg
                className={styles.hamburger}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d={
                    isMobileMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* 🔹 Mobile Menu */}
      {isMobileMenuOpen && (
        <>
          <div
            className={styles.overlay}
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <nav
            className={styles.mobileNav}
            id="mobile-menu"
            ref={mobileMenuRef}
            aria-label="Mobile navigation"
          >
            <div className={styles.mobileNavContent}>
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={styles.mobileNavLink}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className={styles.mobileNavFooter}>
                <a
                  href="#contact"
                  className={styles.mobileNavLink}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </a>
                <button
                  className={styles.mobileCartButton}
                  type="button"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Cart
                </button>
              </div>
            </div>
          </nav>
        </>
      )}
    </header>
  );
};

export default Header;
