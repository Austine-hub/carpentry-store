// src/components/Footer.tsx
import React, { useMemo } from 'react';
import styles from './Footer.module.css';

const COMPANY_INFO = {
  name: 'Eastern Edition',
  address: '17, Eonju-ro 133-gil, Gangnam-gu, Seoul',
  email: 'contact@eastern-edition.com',
} as const;

const NAVIGATION_SECTIONS = [
  {
    title: 'Products',
    links: [
      { label: 'Sofa', href: '#sofa' },
      { label: 'Chair', href: '#chair' },
      { label: 'Table', href: '#table' },
      { label: 'Bed', href: '#bed' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Philosophy', href: '#philosophy' },
      { label: 'Archive', href: '#archive' },
      { label: 'Bespoke', href: '#bespoke' },
    ],
  },
] as const;

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}

const FooterLink = React.memo<FooterLinkProps>(({ href, children }) => (
  <a
    href={href}
    className={styles.footerLink}
    aria-label={typeof children === 'string' ? `Maps to ${children}` : undefined}
  >
    {children}
  </a>
));

FooterLink.displayName = 'FooterLink';

interface NavigationSectionProps {
  title: string;
  links: readonly { label: string; href: string }[];
}

const NavigationSection = React.memo<NavigationSectionProps>(({ title, links }) => {
  const headingId = `${title.toLowerCase()}-heading`;
  
  return (
    <nav aria-labelledby={headingId} className={styles.navigationSection}>
      <h3 id={headingId} className={styles.sectionTitle}>
        {title}
      </h3>
      <ul className={styles.linkList}>
        {links.map(({ label, href }) => (
          <li key={label}>
            <FooterLink href={href}>{label}</FooterLink>
          </li>
        ))}
      </ul>
    </nav>
  );
});

NavigationSection.displayName = 'NavigationSection';

const Footer = React.memo(() => {
  const currentYear = useMemo(() => new Date().getFullYear(), []);
  
  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Brand & Contact Information */}
          <div className={styles.brandSection}>
            <h2 className={styles.brandTitle}>
              {COMPANY_INFO.name}
            </h2>
            <address className={styles.address}>
              <p>{COMPANY_INFO.address}</p>
              <p className={styles.email}>
                <span className={styles.srOnly}>Email: </span>
                E: {COMPANY_INFO.email}
              </p>
            </address>
          </div>
          
          {/* Navigation Sections */}
          {NAVIGATION_SECTIONS.map((section) => (
            <NavigationSection
              key={section.title}
              title={section.title}
              links={section.links}
            />
          ))}
        </div>
        
        {/* Copyright */}
        <div className={styles.copyright}>
          <p>
            © {currentYear} {COMPANY_INFO.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';

export default Footer;
