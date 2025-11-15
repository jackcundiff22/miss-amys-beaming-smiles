

# Miss Amy’s Beaming Smiles — Mobile Teeth Whitening Website

A fully responsive, SEO-optimized professional business website built for Miss Amy’s Beaming Smiles LLC, a mobile teeth whitening service in Metro Atlanta.
Designed, developed, and deployed by Jack Cundiff.

# Developer

Jack Cundiff
Computer Science Major • Software & AI Enthusiast
📍 Kennesaw State University
🔗 GitHub: https://github.com/jackcundiff22


# Visit Live Site: https://www.missamysmiles.com

# Business Owner: Amy Cundiff — Licensed Cosmetic Whitening Specialist, 25+ years experience.

# Overview

This project is a complete production-ready business website featuring animation, responsive layouts, video backgrounds, a testimonials carousel, SEO metadata, structured schema markup, and a functional contact form.

It was built using HTML, CSS, JavaScript, jQuery, and the TwentyTwenty comparison plugin and deployed via Replit with domain integration + Google Business indexing.

# The site includes:

A full-screen video hero section

Smooth scroll animations

Before/after image sliders for whitening results

Carousel testimonials

Mobile navigation toggle

Fully working contact form with Formspree redirect

SEO + Open Graph metadata

Sitemap + robots.txt for Google indexing

# Features:

# (Video Hero Section)

The homepage uses a muted looping MP4 hero background with layered overlays and glow filters to create a premium aesthetic.

Implemented in index.html:

-Video with fallback image.

-Branded overlay color.

-Radial “glow” effect.

# (Before / After Slider)

The site uses the TwentyTwenty jQuery plugin to showcase whitening results with interactive sliders implemented in script.js.

-Before and after labels.

-Multiple examples.

-Lazy loading.

# (Smooth Scroll & Scroll Animations)

-Smooth scrolling for navigation + fade-in visibility triggered by IntersectionObserver:

-Elements animate on scroll.

-Performance-optimized.

# (Testimonial Carousel)

-A custom JavaScript rotating testimonial block (every 5 seconds).

-Cycles through blockquote elements.

-CSS driven fade styling.

# (Mobile Navigation)

-Hamburger menu.

-Expand/collapse behavior.

-Accessibility attributes (aria-expanded).


# (Functional Contact Form)

-Form submitted via Formspree with redirect to a Thank You page:

-Hidden subject line

-Thank you redirection (thankyou.html)

# Technologies Used

Frontend:

-HTML5, CSS3, JavaScript

-Responsive design

-Google Fonts (Playfair Display, Open Sans)

-TwentyTwenty comparison plugin

-jQuery

# SEO & Analytics

-Canonical URL

-Open Graph tags

-Schema.org LocalBusiness structured data (JSON-LD)

-Lazy loaded images for performance

# Deployment

-Hosted & coded in Replit

-Connected to custom domain

-Indexed via Google Search Console

-Integrated with Google Business listing for local SEO

# File Structure 

📁 miss-amys-beaming-smiles
├── index.html
├── style.css
├── script.js
├── thankyou.html
├── sitemap.xml
├── robots.txt
├── site.webmanifest
├── /images
├── /videos
└── README.md (this file)

# Code Highlights

Smooth Scrolling
(From script.js)

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", e => {
    e.preventDefault();
    document.querySelector(anchor.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});


# Testimonials Rotator

const quotes = document.querySelectorAll('#testimonials blockquote');
let idx = 0;
setInterval(() => {
  quotes[idx].classList.remove('active');
  idx = (idx + 1) % quotes.length;
  quotes[idx].classList.add('active');
}, 5000);

# Hero Section HTML 

<video class="hero-video" autoplay muted loop playsinline>
  <source src="smiling.mp4" type="video/mp4" />
  <img src="backupImage.jpg" alt="Miss Amy teeth whitening" />
</video>

# Animate on Scroll 

const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      obs.unobserve(entry.target);
    }
  });
});

# Contact Redirect 

<input type="hidden" name="_redirect" value="https://www.missamysmiles.com/thankyou.html">

# SEO Implementation

Included:

<meta name="description">
<meta name="keywords">

-Open Graph share preview

-JSON-LD LocalBusiness schema

-robots.txt + sitemap

These significantly increase discoverability on Google and improve business authority.

# License

This project is developed exclusively for Miss Amy’s Beaming Smiles LLC.
Branding and content may not be reused without permission.

# Business Use Case & Impact
-Built a full digital presence for a real business
-Allowed customers to discover mobile teeth whitening services in Atlanta
-Integrated with Google Business for scheduling
-Clean, modern, trust-building website design
-Improved customer engagement and lead generation
