"use client";

import React, { useState, useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, LogIn,  } from "lucide-react";

// --- Menu Types ---
interface SubMenuItem {
  title: string;
  link: string;
}
interface MenuItem {
  title: string;
  link: string;
  subMenu?: SubMenuItem[];
}

// --- Menu Data ---
const Nav_Menu: MenuItem[] = [
  { title: "Home", link: "/" },
  {
    title: "Products",
    link: "/products",
    subMenu: [
      { title: "SaaS Platform", link: "/products/saas" },
      { title: "E-commerce", link: "/products/ecom" },
      { title: "Analytics", link: "/products/analytics" },
      { title: "CRM System", link: "/products/crm" },
      { title: "Project Management", link: "/products/project-management" },
      { title: "Marketing Automation", link: "/products/marketing-automation" },
    ],
  },
  { title: "Pricing", link: "/price" },
  {
    title: "Resources",
    link: "/resources",
    subMenu: [
      { title: "Blog", link: "/resources/blog" },
      { title: "Case Studies", link: "/resources/case-studies" },
      { title: "Documentation", link: "/resources/docs" },
      { title: "Help Center", link: "/resources/help" },
    ],
  },
  { title: "Contact", link: "/contact" },
];

// --- MAIN COMPONENT ---
export default function Nav() {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<number | null>(null);
  const pathname = usePathname();
  const router = useRouter();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const navigate = (link: string) => {
    router.push(link);
    setOpen(false);
    setDropdownOpen(null);
  };

  // Handler to toggle main mobile menu
  const toggleMobileMenu = () => {
    setOpen((prevOpen) => {
      // If closing the mobile menu, also close any open dropdown
      if (prevOpen) {
        setDropdownOpen(null);
      }
      return !prevOpen;
    });
  };

  // Close desktop dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (open) return; // Don't close desktop dropdown when mobile menu is open
      
      if (!dropdownRef.current) return;
      if (!dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(null);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  // Disable body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  // --- Framer Motion Variants for Smoothness ---

  // 1. Dropdown Container Animation (Height and Opacity)
  

  // 2. Individual Sub-Menu Item Animation (Fade and Slide-up)
  const itemVariants = {
    hidden: { y: -5, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };


  return (
    <header className="w-full bg-white sticky top-0 z-50 border-b border-gray-100 shadow-sm">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-4">

        {/* Logo */}
        <button
          onClick={() => navigate("/")}
          className="text-2xl sm:text-3xl font-extrabold tracking-tight text-gray-900"
        >
          <span className="text-teal-600">Prosper</span>ix
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 lg:gap-8 text-gray-600 font-medium items-center">
          {Nav_Menu.map((item, index) => (
            <div 
              key={index} 
              className="relative" 
              ref={dropdownOpen === index ? dropdownRef : null}
            >
              {!item.subMenu ? (
                <button
                  onClick={() => navigate(item.link)}
                  className={`hover:text-teal-600 transition ${
                    pathname === item.link ? "text-teal-600 font-semibold" : ""
                  }`}
                >
                  {item.title}
                </button>
              ) : (
                <>
                  <button
                    onMouseEnter={() => setDropdownOpen(index)}
                    onClick={() => setDropdownOpen(dropdownOpen === index ? null : index)}
                    className={`flex items-center gap-1 hover:text-teal-600 transition ${
                      item.subMenu.some(s => pathname.startsWith(s.link)) // Use startsWith for better active state detection
                        ? "text-teal-600 font-semibold"
                        : ""
                    }`}
                  >
                    {item.title}
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 ${
                        dropdownOpen === index ? "rotate-180 text-teal-600" : ""
                      }`}
                    />
                  </button>

                  {/* Desktop Dropdown with Framer Motion */}
                  <AnimatePresence>
                    {dropdownOpen === index && (
                      <motion.div
                        // variants={dropdownVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="absolute top-full left-0 mt-2 w-56 bg-white border border-gray-100 shadow-xl rounded-lg overflow-hidden"
                        onMouseLeave={() => setDropdownOpen(null)}
                      >
                        {item.subMenu.map((sub, i) => (
                          <motion.button // Apply itemVariants here
                            key={i}
                            variants={itemVariants}
                            onClick={() => navigate(sub.link)}
                            className={`w-full text-left px-4 py-3 text-sm transition-colors ${
                              pathname === sub.link
                                ? "bg-teal-50 text-teal-600 font-semibold"
                                : "hover:bg-teal-50 hover:text-teal-600 text-gray-700"
                            }`}
                          >
                            {sub.title}
                          </motion.button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </>
              )}
            </div>
          ))}
        </div>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={() => navigate("/signin")}
            className="flex items-center gap-2 text-gray-700 hover:text-teal-600 transition-colors"
          >
            <LogIn size={18} /> Sign in
          </button>
          <button
            onClick={() => navigate("/get-started")}
            className="bg-teal-600 text-white px-5 py-2.5 rounded-full hover:bg-teal-700 transition-colors shadow-lg shadow-teal-500/50"
          >
            Get Started
          </button>
        </div>

        {/* Mobile Toggle */}
        <button onClick={toggleMobileMenu} className="md:hidden p-2 text-gray-800">
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* MOBILE MENU with Framer Motion */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }} // Slight slide-down on open
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed left-0 right-0 top-[73px] h-[calc(100vh-73px)] bg-white shadow-xl z-40 overflow-y-auto"
          >
            <div className="flex flex-col p-4 gap-1">
              {Nav_Menu.map((item, index) => (
                <div key={index} className="border-b border-gray-100 py-1">

                  {!item.subMenu ? (
                    <button
                      onClick={() => navigate(item.link)}
                      className={`w-full text-left py-3 px-4 rounded-lg transition-colors ${
                        pathname === item.link
                          ? "bg-teal-50 text-teal-600 font-semibold"
                          : "text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      {item.title}
                    </button>
                  ) : (
                    <>
                      <button
                        onClick={() =>
                          setDropdownOpen(dropdownOpen === index ? null : index)
                        }
                        className={`w-full flex justify-between items-center py-3 px-4 transition-colors rounded-lg ${
                          dropdownOpen === index ? "bg-gray-50 text-teal-600" : "text-gray-700 hover:bg-gray-50"
                        }`}
                      >
                        {item.title}
                        <ChevronDown
                          size={20}
                          className={`transition-transform duration-500 ${
                            dropdownOpen === index ? "rotate-180 duration-800" : "duration-800"
                          }`}
                        />
                      </button>

                      <AnimatePresence>
                        {dropdownOpen === index && (
                          <motion.div
                            // variants={dropdownVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="pl-4 pb-2 overflow-hidden"
                          >
                            {item.subMenu.map((sub, i) => (
                              <motion.button // Apply itemVariants here
                                key={i}
                                variants={itemVariants}
                                onClick={() => navigate(sub.link)}
                                className={`block w-full text-left px-4 py-2.5 rounded-lg transition-colors text-sm ${
                                  pathname === sub.link
                                    ? "bg-teal-50 text-teal-600 font-semibold"
                                    : "text-gray-700 hover:bg-teal-50"
                                }`}
                              >
                                {sub.title}
                              </motion.button>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  )}
                </div>
              ))}

              {/* Bottom Buttons */}
              <div className="mt-5 flex flex-col gap-3 px-2">
                <button 
                  onClick={() => navigate("/signin")}
                  className="flex items-center justify-center gap-2 py-3 border border-gray-200 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  <LogIn size={18} /> Sign in
                </button>
                <button 
                  onClick={() => navigate("/get-started")}
                  className="py-3 rounded-lg bg-teal-600 text-white hover:bg-teal-700 transition-colors shadow-lg shadow-teal-500/50"
                >
                  Get Started
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}