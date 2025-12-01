// --- Define Product Interface ---
export interface Product {
  title: string;            // Product name/title
  slug: string;             // URL-friendly identifier
  description: string;      // Short description of the product
  benefits: string[];       // List of key benefits
  solutions: string[];      // List of solutions offered
  whyContactUs: string;     // Explanation why user should contact
  moreInfo: string;         // Additional information
  cta: string;              // Call to action text
  image: string;            // Path to product image
}

// --- Products Array with Types ---
export const products: Product[] = [
  {
    title: "SaaS Platform",
    slug: "saas",
    description: "Manage your business efficiently with our SaaS platform.",
    benefits: [
      "Automate daily tasks to save time",
      "Centralized dashboard for all business metrics",
      "Secure cloud storage for data",
    ],
    solutions: [
      "All-in-one business management",
      "Customizable workflow automation",
      "Real-time collaboration tools",
    ],
    whyContactUs: "Contact us to get a personalized demo and support setup.",
    moreInfo: "Our SaaS platform integrates with all major tools to streamline operations.",
    cta: "Get Started Now",
    image: "/products/sass.png",
  },
  {
    title: "E-commerce",
    slug: "ecom",
    description: "Start selling online easily with our E-commerce solution.",
    benefits: [
      "Launch your online store quickly",
      "Secure payment gateway integration",
      "Manage orders and inventory easily",
    ],
    solutions: [
      "Customizable online storefront",
      "Multi-channel sales management",
      "Analytics for customer behavior",
    ],
    whyContactUs: "Reach out for onboarding assistance and store optimization.",
    moreInfo: "We provide built-in marketing tools and analytics for growth.",
    cta: "Start Selling Today",
    image: "/products/e-commerce.png",
  },
  {
    title: "Analytics",
    slug: "analytics",
    description: "Analyze your data to make smarter decisions.",
    benefits: [
      "Visualize performance with charts and reports",
      "Track user behavior in real-time",
      "Identify trends to optimize business strategy",
    ],
    solutions: [
      "Real-time dashboards",
      "Custom reports and alerts",
      "Integration with multiple data sources",
    ],
    whyContactUs: "Contact us for a demo and custom analytics solutions.",
    moreInfo: "Our analytics platform helps businesses make data-driven decisions effectively.",
    cta: "Explore Analytics",
    image: "/products/anal.png",
  },
  {
    title: "CRM System",
    slug: "crm",
    description: "Manage customer relationships effectively with our CRM solution.",
    benefits: [
      "Track leads and sales pipelines",
      "Centralized customer data",
      "Automate follow-ups and reminders",
    ],
    solutions: [
      "Lead scoring and tracking",
      "Email & communication automation",
      "Detailed customer analytics",
    ],
    whyContactUs: "Contact us to improve your customer engagement and retention.",
    moreInfo: "Our CRM integrates with email, chat, and marketing tools seamlessly.",
    cta: "Boost Your Sales",
    image: "/products/crm.png",
  },
  {
    title: "Project Management",
    slug: "project-management",
    description: "Plan and manage projects efficiently with our PM tools.",
    benefits: [
      "Track tasks and deadlines",
      "Collaborate with your team in real-time",
      "Visualize project progress with Kanban & Gantt charts",
    ],
    solutions: [
      "Task assignment and prioritization",
      "Time tracking and reporting",
      "Integration with team communication apps",
    ],
    whyContactUs: "Reach out for guidance on managing complex projects easily.",
    moreInfo: "Our tools improve team productivity and accountability across projects.",
    cta: "Manage Projects Now",
    image: "/products/project.png",
  },
  {
    title: "Marketing Automation",
    slug: "marketing-automation",
    description: "Automate your marketing campaigns and grow your business.",
    benefits: [
      "Automated email campaigns",
      "Lead nurturing and scoring",
      "Track campaign performance in real-time",
    ],
    solutions: [
      "Segmentation and personalization",
      "Multi-channel marketing campaigns",
      "Performance analytics & reporting",
    ],
    whyContactUs: "Contact us to automate your marketing workflow and save time.",
    moreInfo: "Our marketing automation tools help increase conversions and ROI.",
    cta: "Automate Marketing",
    image: "/products/marketing.png",
  },
];
