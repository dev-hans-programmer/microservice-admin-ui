import { expect, describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import LoginPage from '.';
import { ConfigProvider } from 'antd';

describe('Login Page', () => {
   it('Should render with required fields', () => {
      // AAA, Arrange, Action and Assert
      // getBy -> throws an error
      // queryBy -> null
      // findBy -> Async

      //Render the component with Ant Design providers
      render(
         <ConfigProvider
            theme={{
               token: {
                  colorPrimary: '#F65F42',
                  colorLink: '#F65F42',
               },
            }}
         >
            <LoginPage />
         </ConfigProvider>
      );

      expect(
         screen.getByRole('heading', { name: /login page/i })
      ).toBeInTheDocument();
      expect(screen.getByPlaceholderText(/username/i));
      expect(screen.getByPlaceholderText(/password/i)).toBeInTheDocument();
      expect(
         screen.getByRole('button', { name: /sign in/i })
      ).toBeInTheDocument();

      expect(
         screen.getByRole('checkbox', { name: /remember me/i })
      ).toBeInTheDocument();
   });
});
