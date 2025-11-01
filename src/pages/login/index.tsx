function LoginPage() {
   return (
      <div data-testid='login-container'>
         <h1>Login Page</h1>
         <input type='text' placeholder='Username' aria-label='Username' />

         <input type='password' placeholder='Password' aria-label='Password' />

         <button type='submit'>Sign In</button>
         <label htmlFor='remember-me'>Remember me</label>
         <input type='checkbox' name='remember-me' id='remember-me' />
      </div>
   );
}

export default LoginPage;
