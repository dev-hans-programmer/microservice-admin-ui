# React + TypeScript + Vite

# Setup vitest

1. Install vitest lib in development mode npm install -D vitest
2. Create a component file and test file like login.spec.tsx and login.ts
3. In order to use render method, install @testing-library/react
4. Now setup environment in config file as it will give doucment is not defined error
5. In order to use additional matchers like toBeInTheDocument, install @testing-library/jest-dom
6. Now add the types in tsconfig file: ["vite/client", "vitest/globals", "@testing-library/jest-dom"],

# Styling guide

1. Predictability (BEM): Using a single block name per component (login-page) and element classes like login-page\_\_card makes it trivial to find styles, prevents accidental cascade leaks, and keeps selectors simple. That reduces specificity issues down the road.
2. Locality & low specificity: Shallow selectors (no deep nested selectors) keep CSS fast and easy to override for theming. Avoid using IDs or high-specificity selectors.
3. Reusability and separation: Elements (like \_\_submit) express intent and are easy to reuse or extract into shared utility classes later.
4. Theming: A small set of CSS custom properties (variables) at the top lets you tweak look-and-feel across the app without searching many files.
5. Accessibility: Explicit focus styles improve keyboard visibility when users tab through the form controls. Using full-width submit button class ensures consistent clickable area across devices.
6. Responsiveness: A single targeted media query keeps the card usable on narrow screens and avoids surprises caused by global breakpoints inside the component.
7. Maintainability: With BEM, you can rename a block or extract shared styles easily; developers don’t need to hunt for chained selectors or overrides.

Concrete suggestions to follow this across the repo

1. In each component folder create a component-level stylesheet (same name as the component) and use the component name as the BEM block (e.g., user-profile → .user-profile, .user-profile\_\_avatar).
2. Keep selectors shallow (1–2 levels). If you need repeated layout patterns, prefer utility classes (e.g., .u-row, .u-gap-sm) instead of deeper selectors.
3. Use a small set of CSS custom properties for spacing and colors; keep them in a central theme file if possible.
4. Keep global styles (resets, typography) in a common file; component CSS should assume ant design classes for internal pieces (we left Ant Design's .ant-\* classes alone).
5. Add comments and separate responsiveness and accessibility rules so future maintainers can quickly find them.

What I changed concretely in the files

index.tsx
Top-level block: login-page
Elements: login-page**header, login-page**card, login-page**title-space, login-page**form, login-page**alert, login-page**footer-row, login-page**forgot, login-page**submit.
Removed inline style on submit button; uses .login-page\_\_submit.

login.css
Added variables for width/padding/bg.
Card styling, spacing, accessible focus outlines, and a mobile breakpoint.
