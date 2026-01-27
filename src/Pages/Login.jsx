const Login = () => {
  return (
    <div className="content">
      <div className="page-card">
        <h1>Login</h1>
        <p>Securely login to your Sakhi account.</p>

        <input className="input-box" placeholder="Email" />
        <input className="input-box" placeholder="Password" type="password" />

        <button className="primary-btn">Login</button>
      </div>
    </div>
  );
};

export default Login;
