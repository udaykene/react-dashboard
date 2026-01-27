import Header from '../components/Header'

function Home() {
  return (
    <div>
      <Header />
      <div className="home-container">
        <div className="mountain-bg"></div>
        <div className="hero-content">
          <p className="hero-subtitle">The story of</p>
          <h1 className="hero-title">GREATBUILDERS</h1>
          <div className="scroll-indicator">↓</div>
        </div>
      </div>
    </div>
  )
}

export default Home
