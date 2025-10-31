# React + TypeScript + Vite

# Setup vitest

1. Install vitest lib in development mode npm install -D vitest
2. Create a component file and test file like login.spec.tsx and login.ts
3. In order to use render method, install @testing-library/react
4. Now setup environment in config file as it will give doucment is not defined error
5. In order to use additional matchers like toBeInTheDocument, install @testing-library/jest-dom
6. Now add the types in tsconfig file: ["vite/client", "vitest/globals", "@testing-library/jest-dom"],
