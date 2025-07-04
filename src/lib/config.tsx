export const BLUR_FADE_DELAY = 0.15;

export const siteConfig = {
  name: "Software Solutions",
  description: "Build better apps faster with Prism UI",
  url: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
  keywords: ["SaaS", "Template", "Next.js", "React", "Tailwind CSS"],
  links: {
    email: "support@prism.ui",
    twitter: "https://twitter.com/prismui",
    discord: "https://discord.gg/",
    github: "https://github.com/prismui",
    instagram: "https://instagram.com/prismui/",
  },
  header: [
    {
      href: "https://shirley-software-solutions.github.io/project-embedded/embedded.html",
      label: "Products",
    },
    {
      href: "/https://sw-solution.github.io/",
      label: "Services",
       children: [
      {
        href: "/services/software-development",
        label: "Software Development",
      },
      {
        href: "/services/hardware-integration",
        label: "Hardware Integration",
      },
      {
        href: "/services/iot-solutions",
        label: "IoT Solutions",
      },
      {
        href: "/services/custom-dashboard",
        label: "Custom Dashboards",
      },
      {
        href: "/services/mobile-apps",
        label: "Mobile App Development",
      },
      {
        href: "/services/prototyping-and-design",
        label: "Prototyping & Design",
      },
    ],
  },
    {
      href: "/",
      label: "Mission",
    },
    {
      href: "https://shirley-software-solutions.github.io/",
      label: "Team",
    },
    // {
    //   href: "/docs",
    //   label: "Docs",
    // },
    // {
    //   href: "/docs/components/expandable-card",
    //   label: "Components",
    // },
    // {
    //   href: "/blog",
    //   label: "Blog",
    // },
  ],
  pricing: [
    {
      name: "BASIC",
      href: "#",
      price: "$19",
      period: "month",
      yearlyPrice: "$16",
      features: [
        "1 User",
        "5GB Storage",
        "Basic Support",
        "Limited API Access",
        "Standard Analytics",
      ],
      description: "Perfect for individuals and small projects",
      buttonText: "Subscribe",
      isPopular: false,
    },
    {
      name: "PRO",
      href: "#",
      price: "$49",
      period: "month",
      yearlyPrice: "$40",
      features: [
        "5 Users",
        "50GB Storage",
        "Priority Support",
        "Full API Access",
        "Advanced Analytics",
      ],
      description: "Ideal for growing businesses and teams",
      buttonText: "Subscribe",
      isPopular: true,
    },
    {
      name: "ENTERPRISE",
      href: "#",
      price: "$99",
      period: "month",
      yearlyPrice: "$82",
      features: [
        "Unlimited Users",
        "500GB Storage",
        "24/7 Premium Support",
        "Custom Integrations",
        "AI-Powered Insights",
      ],
      description: "For large-scale operations and high-volume users",
      buttonText: "Subscribe",
      isPopular: false,
    },
  ],
};

export type SiteConfig = typeof siteConfig;
