<template>
  <div class="custom-home">
    <div class="hero-section">
      <div class="hero-content">
        <div class="hero-text">
          <h1 class="hero-title">KYJL.域名</h1>
          <h2 class="hero-subtitle">赚钱省钱分享</h2>
          <p class="hero-tagline">搞钱省钱第一站，从这里开始！</p>
          
          <div class="hero-actions">
            <a href="/xianbao/" class="btn btn-primary">开始阅读</a>
            <a href="/xianbao/" class="btn btn-secondary">开源赚钱专栏</a>
            <a href="/yangmao/" class="btn btn-tertiary">节流省钱专栏</a>
          </div>
        </div>
        
        <div class="hero-image">
          <div class="avatar-container">
            <div class="avatar-face">😊</div>
            <div class="avatar-body">Y</div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="features-section">
      <div class="feature-card blue">
        <div class="feature-icon">✈️</div>
        <h3 class="feature-title">开源的线报</h3>
        <p class="feature-description">推荐最新线报，开源自己的收入。</p>
        <a href="/xianbao/" class="feature-link">前往阅读 →</a>
      </div>
      
      <div class="feature-card red">
        <div class="feature-icon">🛡️</div>
        <h3 class="feature-title">节流的羊毛</h3>
        <p class="feature-description">罗列免费羊毛，节流自己的收入。</p>
        <a href="/yangmao/" class="feature-link">前往阅读 →</a>
      </div>
      
      <div class="feature-card green">
        <div class="feature-icon">🌍</div>
        <h3 class="feature-title">工具和资源</h3>
        <p class="feature-description">导航热门工具，分享福利资源。</p>
        <a href="/tools/" class="feature-link">前往阅读 →</a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.custom-home {
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 20px;
  min-height: 80vh;
}

.hero-section {
  margin-bottom: 120px;
}

.hero-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 60px;
}

.hero-text {
  flex: 1;
  max-width: 600px;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 300;
  color: #666;
  margin: 0 0 10px 0;
  line-height: 1.2;
}

.hero-subtitle {
  font-size: 4rem;
  font-weight: 700;
  color: #333;
  margin: 0 0 20px 0;
  line-height: 1.1;
}

.hero-tagline {
  font-size: 1.2rem;
  color: #666;
  margin: 0 0 40px 0;
  line-height: 1.5;
}

.hero-actions {
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
}

.btn {
  padding: 12px 24px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 500;
  font-size: 1rem;
  transition: all 0.3s ease;
  border: none;
  cursor: pointer;
  display: inline-block;
}

.btn-primary {
  background: #4285f4;
  color: white;
}

.btn-primary:hover {
  background: #3367d6;
  transform: translateY(-2px);
}

.btn-secondary {
  background: #34a853;
  color: white;
}

.btn-secondary:hover {
  background: #2d8f47;
  transform: translateY(-2px);
}

.btn-tertiary {
  background: #ff9800;
  color: white;
}

.btn-tertiary:hover {
  background: #f57c00;
  transform: translateY(-2px);
}

.hero-image {
  flex-shrink: 0;
}

.avatar-container {
  width: 200px;
  height: 200px;
  background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%);
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
}

.avatar-face {
  font-size: 3rem;
  margin-bottom: 10px;
}

.avatar-body {
  background: #7c4dff;
  color: white;
  width: 60px;
  height: 40px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: bold;
}

.features-section {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
  margin-top: 80px;
}

.feature-card {
  padding: 40px 30px;
  border-radius: 12px;
  border-left: 4px solid;
  background: white;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
}

.feature-card.blue {
  border-left-color: #4285f4;
}

.feature-card.red {
  border-left-color: #ea4335;
}

.feature-card.green {
  border-left-color: #34a853;
}

.feature-icon {
  font-size: 2.5rem;
  margin-bottom: 20px;
  display: block;
}

.feature-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: #333;
  margin: 0 0 15px 0;
}

.feature-description {
  color: #666;
  line-height: 1.6;
  margin: 0 0 20px 0;
}

.feature-link {
  color: #4285f4;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
}

.feature-link:hover {
  color: #3367d6;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .custom-home {
    padding: 40px 15px;
  }
  
  .hero-content {
    flex-direction: column;
    text-align: center;
    gap: 40px;
  }
  
  .hero-title {
    font-size: 2.5rem;
  }
  
  .hero-subtitle {
    font-size: 3rem;
  }
  
  .hero-actions {
    justify-content: center;
  }
  
  .btn {
    padding: 10px 20px;
    font-size: 0.9rem;
  }
  
  .avatar-container {
    width: 150px;
    height: 150px;
  }
  
  .avatar-face {
    font-size: 2.5rem;
  }
  
  .avatar-body {
    width: 50px;
    height: 35px;
    font-size: 1.2rem;
  }
  
  .features-section {
    grid-template-columns: 1fr;
    gap: 30px;
    margin-top: 60px;
  }
  
  .feature-card {
    padding: 30px 20px;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 2rem;
  }
  
  .hero-subtitle {
    font-size: 2.5rem;
  }
  
  .hero-tagline {
    font-size: 1.1rem;
  }
  
  .hero-actions {
    flex-direction: column;
    align-items: center;
  }
  
  .btn {
    width: 100%;
    max-width: 250px;
    text-align: center;
  }
}
</style>

