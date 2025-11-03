// test-utils.tsx
import { render } from '@testing-library/react';
import { ConfigProvider } from 'antd';

const AllTheProviders = ({ children }: { children: React.ReactNode }) => (
   <ConfigProvider>{children}</ConfigProvider>
);

const customRender = (ui: React.ReactElement, options = {}) =>
   render(ui, { wrapper: AllTheProviders, ...options });

// Re-export specific items from RTL
export { screen, fireEvent, waitFor, within } from '@testing-library/react';
export { customRender as render };
