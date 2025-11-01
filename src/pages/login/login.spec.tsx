import { expect, describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import LoginPage from '.';

describe('Login Page', () => {
   it('Should render with required fields', () => {
      // AAA, Arrange, Action and Assert
      // getBy -> throws an error
      // queryBy -> null
      // findBy -> Async

      //Render the component
      render(<LoginPage />);

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
