'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import { IconType } from 'react-icons'; // Type for the icon component

// ====================================================================
// 1. TYPESCRIPT TYPES
// ====================================================================

/** Defines a standard navigation link structure. */
interface FooterLink {
  name: string;
  href: string;
}

/** Defines the structure for social media links, including the icon component. */
interface SocialLink extends FooterLink {
  Icon: IconType;
}

/** Defines the structure for a link section in the footer. */
interface FooterSection {
  title: string;
  links: FooterLink[];
}

// ====================================================================
// 2. DATA STRUCTURE
// ====================================================================

// Define the primary color (Dark Teal/Cyan) for the background
const PRIMARY_COLOR = 'rgb(4, 131, 131)'; 

const sections: FooterSection[] = [
  {
    title: 'Our Services',
    links: [
      { name: 'Insurance Planning', href: '/services/insurance' },
      { name: 'Estate Planning', href: '/services/estate' },
      { name: 'Tax Optimization', href: '/services/tax' },
      { name: 'Debt Management', href: '/services/debt' },
    ],
  },
  {
    title: 'Explore More',
    links: [
      { name: 'About us', href: '/about' },
      { name: 'Blog', href: '/blog' },
      { name: 'Site map', href: '/sitemap' },
      { name: 'Privacy', href: '/privacy' },
    ],
  },
];

const socialLinks: SocialLink[] = [
  { name: 'Facebook', href: 'https://facebook.com/prosperix', Icon: FaFacebookF },
  { name: 'Twitter', href: 'https://twitter.com/prosperix', Icon: FaTwitter },
  { name: 'Instagram', href: 'https://instagram.com/prosperix', Icon: FaInstagram },
];

const contactDetails = {
  email: 'contact@briofin.com',
  phone: '+1 (555) 123-4567',
};

const bottomBarLinks: FooterLink[] = [
  { name: 'Terms & Conditions', href: '/terms' },
  { name: 'Privacy Policy', href: '/policy' },
];

// ====================================================================
// 3. ANIMATED LINK COMPONENT
// ====================================================================

interface LinkItemProps {
  href: string;
  children: React.ReactNode;
}

/** Component for individual links with Framer Motion hover effects. */
const LinkItem: React.FC<LinkItemProps> = ({ href, children }) => {
  return (
    <motion.li
      // Subtle shift and color change on hover
      whileHover={{ scale: 1.05, x: 5, color: '#FFFFFF' }}
      transition={{ type: 'spring', stiffness: 400, damping: 20 }}
      className="mb-2 text-sm text-gray-300 hover:text-white transition-colors duration-200"
    >
      <Link href={href} className="block">
        {children}
      </Link>
    </motion.li>
  );
};


// ====================================================================
// 4. MAIN FOOTER COMPONENT
// ====================================================================

const Footer: React.FC = () => {
  return (
    <footer
      style={{ backgroundColor: PRIMARY_COLOR }}
      className="text-white pt-12 pb-4 sm:pt-16 sm:pb-6 font-sans"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section: Branding & Links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8 md:pb-12">
          
          {/* 1. Branding Section (Left) */}
          <div className="md:col-span-1">
            <h2 className="text-3xl font-bold mb-4">Prosperix</h2>
            <p className="text-base text-gray-200 mb-6 max-w-sm">
              Our expert financial consultants provide solutions to help you achieve financial wealth. Trust us to guide you toward a brighter financial future.
            </p>

            {/* Social Links */}
            <div className="flex space-x-6">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 flex items-center hover:text-white transition-colors"
                  // Bounce effect on the entire social link area
                  whileHover={{ scale: 1.05 }} 
                  transition={{ type: 'spring', stiffness: 500 }}
                  aria-label={social.name}
                >
                  <social.Icon className="w-4 h-4" /> 
                  {/* Text displayed next to icon, matching the design */}
                  <span className="ml-2 text-sm">{social.name}</span>
                </motion.a>
              ))}
            </div>
          </div>

          {/* 2 & 3. Link Sections (Middle) */}
          {sections.map((section) => (
            <div key={section.title} className="md:col-span-1">
              <h3 className="text-xl font-semibold mb-4">{section.title}</h3>
              <ul>
                {section.links.map((link) => (
                  <LinkItem key={link.name} href={link.href}>
                    {link.name}
                  </LinkItem>
                ))}
              </ul>
            </div>
          ))}

          {/* 4. Contact Details (Right) */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-semibold mb-4">Contact Details</h3>
            
            {/* Email link */}
            <p className="mb-2 text-gray-300">
              <a href={`mailto:${contactDetails.email}`} className="hover:text-white transition-colors">
                {contactDetails.email}
              </a>
            </p>
            
            {/* Phone link */}
            <p className="mb-2 text-gray-300">
              <a href={`tel:${contactDetails.phone}`} className="hover:text-white transition-colors">
                {contactDetails.phone}
              </a>
            </p>
          </div>
        </div>

        {/* Separator Line */}
        <hr className="my-6 border-gray-600" />

        {/* Bottom Bar: Copyright & Policy Links */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-4 text-sm text-gray-300">
          <p className="mb-4 sm:mb-0">
            DSCODE 2023 &copy; All rights reserved
          </p>
          <div className="flex space-x-6">
            {bottomBarLinks.map((link) => (
              <motion.div
                key={link.name}
                // Subtle press down/scale up effect for bottom links
                whileHover={{ scale: 1.05, color: '#FFFFFF' }}
                transition={{ type: 'spring', stiffness: 400 }}
              >
                <Link href={link.href} className="hover:text-white transition-colors">
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;