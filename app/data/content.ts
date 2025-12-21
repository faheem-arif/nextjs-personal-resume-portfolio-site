// Theme tokens (change these in one place to re-skin the site)
export const theme = {
  bg: {
    gradient: "from-slate-950 via-slate-900 to-slate-950",
    sectionAlt: "bg-slate-900/40",
    card: "bg-slate-900/60",
    cardDeep: "bg-slate-950/60",
    nav: "bg-slate-950/90",
    footer: "bg-slate-950",
  },
  border: {
    subtle: "border-slate-800/60",
    strong: "border-cyan-500/30",
    accent: "border-cyan-500/50",
  },
  text: {
    primary: "text-white",
    secondary: "text-slate-200",
    tertiary: "text-slate-400",
    accent: "text-cyan-400",
    muted: "text-slate-500",
  },
  accent: {
    gradient: "from-cyan-500 to-cyan-600",
    gradientHover: "hover:from-cyan-600 hover:to-cyan-700",
    glow: "shadow-cyan-500/25",
    glowStrong: "shadow-cyan-500/40",
    glowSoft: "shadow-cyan-500/10",
    chip: "bg-gradient-to-br from-cyan-500/20 to-cyan-600/20",
    chipSolid: "bg-gradient-to-br from-cyan-500 to-cyan-600",
    overlayRight: "bg-gradient-to-r from-cyan-500/5 to-transparent",
    overlayLeft: "bg-gradient-to-l from-cyan-500/5 to-transparent",
    divider: "bg-gradient-to-b from-cyan-400 to-cyan-600",
    ring: "focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 focus:outline-none",
    scrollGradient: "bg-gradient-to-br from-cyan-500 to-cyan-600",
    scrollShadow: "shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40",
  },
  shape: {
    glow: "bg-cyan-500/20",
    dot: "bg-cyan-400",
  },
  grid: {
    color: "rgba(34, 211, 238, 0.25)",
    size: "50px 50px",
  },
}

// Labels and copy centralized here
export const labels = {
  nav: {
    about: "About",
    skills: "Skills",
    experience: "Experience",
    education: "Education",
    contact: "Contact",
    blog: "Blog",
    languages: "Languages",
  },
  hero: {
    ctaContact: "Get in Touch",
    ctaLinkedIn: "LinkedIn",
    locationIconLabel: "Location",
  },
  sections: {
    summary: "Professional Summary",
    skills: "Core Competencies",
    experience: "Professional Experience",
    languages: "Languages",
    education: "Education",
    achievements: "Career Highlights",
    certifications: "Certifications",
    contact: "Get In Touch",
    requestResume: "Request Full Resume",
    schedule: "Schedule a Meeting",
    contactForm: "Send a Message",
  },
  forms: {
    contact: {
      name: "Name",
      email: "Email",
      message: "Message",
      submit: "Send Message",
      success: "Your message has been received and I typically respond within two business days.",
      error: "Oops! The request could not be completed. Please try again or email me directly",
    },
    resume: {
      email: "Your Email *",
      reason: "Reason for Request *",
      placeholder: "E.g., Job opportunity, consulting project, etc. with details.",
      submit: "Send Request",
      success: "I will send you my resume within two business days.",
      error: "Oops! The request could not be completed. Please try again or email me directly",
    },
  },
  status: {
    errorTitle: "Error",
    successTitle: "Thank You!",
    tryAgain: "Try Again",
    sendAnother: "Send Another Message",
    close: "Close",
    sending: "Sending...",
  },
  footer: {
    rightsPrefix: "(c)",
    rightsSuffix: "All rights reserved.",
  },
}

// Personal Info Section
export const personalInfo = {
  name: "Alex Morgan",
  title: "Cloud & Security Engineer | DevSecOps | Infrastructure",
  location: "Remote / Global",
  tagline: "I build secure, scalable platforms and help teams ship with confidence.",
  email: "hello@example.com",
  linkedin: "https://linkedin.com/in/your-handle",
  github: "https://github.com/your-handle",
  blogUrl: "https://yourblog.com",
  summary: [
    "Security-minded engineer with hands-on experience across cloud, infrastructure, and compliance. Focused on building resilient systems and practical security controls.",
    "Comfortable leading cross-functional initiatives, automating security checks, and translating risk into clear technical priorities."
  ]
}

// Languages
export const languages = [
  {
    name: "English",
    level: "Professional Working Proficiency (C1)",
  },
  {
    name: "Spanish",
    level: "Limited Working Proficiency (B1)",
  },
  {
    name: "French",
    level: "Elementary (A2)",
  }
]

// Skills Section
export const skills = {
  "Security & Risk": [
    "Threat Modeling",
    "Incident Response",
    "Vulnerability Management",
    "Penetration Testing",
  ],
  "Cloud & Infrastructure": [
    "AWS",
    "Azure",
    "GCP",
    "Infrastructure as Code",
    "Kubernetes",
    "Terraform",
  ],
  "DevSecOps & Automation": [
    "CI/CD Pipelines",
    "Secure SDLC",
    "Policy as Code",
    "GitOps"
  ],
}

// Experience Section
export const experience = [
  {
    title: "Security Engineering Lead",
    company: "Example Tech Co.",
    period: "2022 - Present",
    location: "Remote",
    responsibilities: [
      "Led security program roadmap for multi-cloud environments and internal platforms",
      "Implemented guardrails and automation to reduce security review time"
    ]
  },
  {
    title: "Cloud Security Engineer",
    company: "Example Labs Co.",
    period: "2019 - 2022",
    location: "Berlin, Germany",
    responsibilities: [
      "Designed cloud security controls for workloads across AWS and Azure",
      "Built monitoring and alerting to surface misconfigurations early"
    ]
  },
]

// Achievements Section
export const achievements = [
  "Reduced time-to-remediate by streamlining alert triage and automation",
  "Improved cloud security posture with standardized baseline policies",
  "Built cross-team security training with practical, hands-on sessions",
  "Consolidated monitoring to improve visibility and reduce alert noise"
]

// Certifications Section
export const certifications = [
  { name: "Certified Cloud Security Professional (CCSP)", issuer: "(ISC)2" },
  { name: "AWS Certified Solutions Architect", issuer: "Amazon Web Services" },
  { name: "Microsoft Certified: Azure Security Engineer", issuer: "Microsoft" },
  { name: "CompTIA Security+", issuer: "CompTIA" }
]

// Education Section
export const education = [
  {
    degree: "M.S. in Information Systems",
    institution: "State University",
    location: "City, Country",
    period: "2012 - 2016",
    details: "Focus on systems administration and security foundations"
  },
  {
    degree: "B.S. in Computer Science",
    institution: "State University",
    location: "City, Country",
    period: "2008 - 2012",
    details: "Focus on systems administration and security foundations"
  }
]

// Calendly appointment scheduling link
export const calendlyUrl = {
  enabled: true,
  url: "https://calendly.com/your-handle/intro-call",
}

// Resume request configuration - formspreeId
export const resumeRequest = {
  enabled: true,
  formspreeId: "your-formspree-id",
}

// Contact form configuration - formspreeId
export const contactForm = {
  enabled: true,
  formspreeId: "your-formspree-id",
}
