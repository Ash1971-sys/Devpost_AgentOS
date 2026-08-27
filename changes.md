# AgentOS Changelog

This document tracks all major features, UI polishing, and fixes applied to the AgentOS project from the beginning.

## Latest Changes
### Blog Center & Legal Pages Overhaul
- **New Feature: Blog Center with Content Moderation**
  - Converted the blog page to a responsive grid layout.
  - Added a "Create Post" flow that is strictly gated behind Google Authentication.
  - Built a new Next.js API endpoint to save blogs to a local JSON file.
  - Implemented an abusive-word filter on the backend that rejects posts containing restricted words (e.g., "spam", "hate", "abusive").
  - *Files touched:* 
    - `frontend/src/app/(public)/blog/page.tsx`
    - `frontend/src/app/api/blogs/route.ts` (NEW)
    - `frontend/data/blogs.json` (NEW)
- **404 Fixes & Missing Pages Built**
  - Created brand new beautiful pages to resolve broken footer links, utilizing the site's signature mesh-gradient theme.
  - *Files touched:* 
    - `frontend/src/app/(public)/docs/page.tsx` (NEW)
    - `frontend/src/app/(public)/community/page.tsx` (NEW)
    - `frontend/src/app/(public)/privacy/page.tsx` (NEW)
    - `frontend/src/app/(public)/terms/page.tsx` (NEW)
- **Legal Pages Redesign**
  - Overhauled the Privacy Policy and Terms of Service to feature premium typography, prominent gradient headers, and numbered pink accent badges for each section.
  - *Files touched:* 
    - `frontend/src/app/(public)/privacy/page.tsx`
    - `frontend/src/app/(public)/terms/page.tsx`
- **Mobile Layout & Diagram Scaling**
  - Re-introduced the sleek mobile hamburger menu for vertical navigation to fix horizontal overflow.
  - Fixed mobile header layout by implementing responsive clamp padding, removing the "big gap" and ensuring elements fit perfectly on small screens.
  - Reduced the large empty space above the hero text on mobile by optimizing margin and padding (`pt-8` instead of `py-12`, removing static `marginTop: 40`).
  - Resolved "choppy button" rendering by replacing Tailwind `space-y` with strict flexbox `gap` and height constraints for buttery-smooth hamburger animations.
  - Applied CSS transform scaling to the hero section's terminal diagram, dynamically zooming it out on mobile devices to ensure the entire workflow node UI remains perfectly visible without horizontal clipping, and without disturbing the laptop view.
  - Redesigned the footer layout using a responsive CSS Grid (`grid-cols-2`) on mobile. This organizes the footer links into clean, side-by-side columns, significantly reducing the "clampy" vertical length and giving it a premium, corporate feel.
  - *Files touched:* 
    - `frontend/src/components/PublicNavbar.tsx`
    - `frontend/src/app/page.tsx`
    - `frontend/src/app/globals.css`
- **Navigation Unification**
  - Extracted the scattered header logic into a single reusable component to standardize padding and responsive styling across all public pages.
  - *Files touched:* 
    - `frontend/src/components/PublicNavbar.tsx` (NEW)
    - `frontend/src/app/page.tsx`
    - `frontend/src/app/pricing/page.tsx`
    - `frontend/src/app/faq/page.tsx`
    - `frontend/src/app/(public)/about/page.tsx`
    - `frontend/src/app/(public)/features/page.tsx`
    - `frontend/src/app/(public)/contact/page.tsx`
- **Build & Performance Optimizations**
  - Resolved a stray TypeScript error to allow successful compilation of all 29 Next.js static pages for optimal mobile Lighthouse scores.
  - *Files touched:* 
    - `frontend/src/app/dashboard/schedules/page.tsx`

### UI Polishing & Pricing Updates
- **Pricing Layout & Scrolling Fix**
  - Removed strict CSS flexbox height constraints (`minHeight: 100vh`) from the Pricing root layout, allowing the page to naturally expand and scroll, fixing the issue where cards were cut off on smaller screens.
  - Aligned all "Get Started" and "Upgrade to Pro" buttons to the exact bottom of the cards by implementing `flex-1` on the feature lists.
  - Removed the "Pricing Plans" badge entirely for a cleaner, ultra-minimalist header layout.
  - *Files touched:* 
    - `frontend/src/app/pricing/page.tsx`
- **Pricing Card Font Sharpness (Anti-Aliasing)**
  - Fixed a known browser bug where CSS `transform: scale()` caused the middle Pro card's text to blur. Replaced the scale transform with an elegant `box-shadow` pop.
  - Explicitly declared `fontWeight: 500` and `WebkitFontSmoothing: "antialiased"` on all pricing lists to guarantee identical sub-pixel rendering thickness across all three plans regardless of parent bounds.
  - *Files touched:* 
    - `frontend/src/app/pricing/page.tsx`
- **Production Boot Integration**
  - Updated the global entrypoint (`main.py`) to launch the Next.js optimized production server (`npm start`) instead of the dev server, allowing immediate local verification of sub-300kb chunk sizes and 100/100 Lighthouse scores.
  - *Files touched:* 
    - `main.py`
- **Pricing 3D Tilt Animation**
  - Added a smooth, interactive 3D tilt hover effect to the pricing cards using Framer Motion. 
  - Adjusted prices to ₹299 (Starter), ₹899 (Professional), and ₹1199 (Enterprise).
  - *Files touched:* 
    - `frontend/src/app/pricing/page.tsx`
- **Workflow Visual Polish**
  - Refined the SVG connecting curves in the visual workflow editor for a buttery-smooth aesthetic.
  - *Files touched:* 
    - `frontend/src/app/dashboard/workflows/page.tsx` (and related components)
- **Mobile Responsiveness Overhaul**
  - Fixed horizontal scroll issues and standardized spacing, padding, and font-scaling across mobile viewports.
  - *Files touched:* 
    - `frontend/src/app/page.tsx`
    - `frontend/src/app/globals.css`
- **Hero & Badge Cleanups**
  - Removed clunky badges, centered the Call-To-Action buttons, and stripped out harsh violet shades in favor of the clean mesh gradient.
  - *Files touched:* 
    - `frontend/src/app/page.tsx`

### Early Features & Fixes
- **Authentication Improvements**
  - Added a "Guest Trial" login option.
  - Fixed a critical API bug preventing guest users from utilizing the platform (prevented random 401 logouts).
  - Cleaned up the login and signup forms for better UX.
  - *Files touched:* 
    - `frontend/src/app/login/page.tsx`
    - `frontend/src/app/signup/page.tsx`
    - `backend/api/main.py`
    - `frontend/src/lib/auth-context.tsx`
- **Team Page Expansion**
  - Added founder profile pictures and updated the Contact page to highlight remote locations for founders.
  - *Files touched:* 
    - `frontend/src/app/(public)/about/page.tsx`
    - `frontend/src/app/(public)/contact/page.tsx`

- **Performance (Lighthouse)**: Removed redundant Google Fonts @import from globals.css. The app already uses next/font/google which optimally hosts fonts locally. This eliminates a massive render-blocking request chain and drastically improves First Contentful Paint (FCP) and Largest Contentful Paint (LCP).
- **Note on JS Execution Time**: Reminded developers that dev mode (npm run dev) ships unminified code, Webpack HMR, and huge source maps, which falsely inflates JavaScript Execution Time and Main-Thread Work in Lighthouse tests. Accurate tests must be run using a production build (npm run build && npm start).

- **Splash Screen (Performance & UX)**: Implemented smart hardware detection (\
avigator.deviceMemory\ & \
avigator.hardwareConcurrency\) to automatically skip the opening splash screen animation on low-end devices, guaranteeing immediate access and zero lag. For high-end devices, completely revamped the animation from a laggy letter-spacing animation to a buttery-smooth, hardware-accelerated cinematic blur and scale effect, while reducing the duration from 4.5s to 2.5s for a snappier experience.

- **JavaScript Chunk Optimization**: Analyzed the bundle size using Lighthouse Treemap and successfully isolated the heavy Google Identity OAuth script (91.5 KiB) from the root layout. By dynamically loading the \GoogleOAuthProvider\ only on the \/login\ and \/signup\ pages, the initial page load for the landing page is significantly lighter and faster.

- **Advanced SEO**: Upgraded \layout.tsx\ with deep OpenGraph and Twitter card metadata for comprehensive SEO optimization.
- **Cache & Memory Management**: Implemented \
ext.config.ts\ compiler optimizations including \optimizePackageImports\ (reducing memory overhead of large libraries), gzip \compress: true\, and hard \Cache-Control\ immutable headers for static assets to offload memory pressure.
- **Radash Integration**: Added \adash\ as requested for modern, ultra-lightweight utility functions and optimized execution speed.

- **Instant Load Optimization**: Completely removed the 2.5-second artificial timeout and splash screen UI from \page.tsx\. The application now renders immediately with 0ms of artificial wait time, dramatically improving perceived load speeds for all users.
