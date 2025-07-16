<template>
  <div class="custom-home">
    <div class="hero-section">
      <div class="hero-content">
        <div class="hero-text">
          <h1 class="hero-title animated-gradient-text">KYJL.域名</h1>
          <h2 class="hero-subtitle">赚钱省钱分享</h2>
          <p class="hero-tagline">搞钱省钱第一站，从这里开始！</p>
          
          <div class="hero-actions">
            <a href="/xianbao/" class="btn btn-primary">开始阅读</a>
            <a href="/xianbao/" class="btn btn-secondary">开源赚钱专栏</a>
            <a href="/yangmao/" class="btn btn-tertiary">节流省钱专栏</a>
          </div>
        </div>
        
       <div class="hero-image">
  <div class="hero-image-container">
    <div class="image-decoration"></div>
    <img src="/images/hero-image.png" alt="编程场景" class="hero-main-image" />
    <div class="image-glow"></div>
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
  padding: 0;
  min-height: 80vh;
}

.hero-section {
  background: linear-gradient(135deg, #e3f2fd 0%, #f8f9ff 50%, #ffffff 100%);
  padding: 80px 20px 60px 20px;
  margin-bottom: 60px;
  border-radius: 0 0 24px 24px;
  position: relative;
  overflow: hidden;
}

.hero-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 30% 20%, rgba(33, 150, 243, 0.08) 0%, transparent 50%);
  pointer-events: none;
}


.hero-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 60px;
  position: relative;
  z-index: 1;
  max-width: 1200px;
  margin: 0 auto;
}


.hero-text {
  flex: 1;
  max-width: 600px;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 300;
  background: linear-gradient(135deg, #2196f3 0%, #00bcd4 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
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
  display: flex;
  justify-content: center;
  align-items: center;
}

.hero-image-container {
  position: relative;
  width: 200px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.hero-main-image {
  width: 200px;
  height: 200px;
  border: 3px solid rgba(255, 255, 255, 0.8);
  object-fit: cover;
  position: relative;
  z-index: 3;
  -shadow: 
    0 10px 30px rgba(0, 0, 0, 0.2),
    0 0 0 8px rgba(255, 255, 255, 0.1),
    0 0 0 16px rgba(255, 255, 255, 0.05);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  animation: float 6s ease-in-out infinite;
}

.hero-main-image:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 32px rgba(33, 150, 243, 0.15);
}

.image-decoration {
  position: absolute;
  top: -20px;
  left: -20px;
  right: -20px;
  bottom: -20px;
  border: 2px solid transparent;
  border-radius: 50%;
  background: linear-gradient(135deg, #ffffff 0%, #f5f5f5 100%);
  -webkit-mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
  z-index: 1;
  animation: rotate 20s linear infinite;
}

.image-glow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 320px;
  height: 320px;
  background: radial-grboxadient(circle, rgba(255, 165, 0, 0.3) 0%, rgba(255, 69, 0, 0.2) 30%, transparent 70%);
  border-radius: 50%;
  z-index: 2;
  animation: pulse 4s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { 
    transform: translateY(0px) rotate(0deg); 
  }
  50% { 
    transform: translateY(-10px) rotate(2deg); 
  }
}

@keyframes rotate {
  from { 
    transform: rotate(0deg); 
  }
  to { 
    transform: rotate(360deg); 
  }
}

@keyframes pulse {
  0%, 100% { 
    opacity: 0.6;
    transform: translate(-50%, -50%) scale(1);
  }
  50% { 
    opacity: 0.8;
    transform: translate(-50%, -50%) scale(1.1);
  }
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
  
  .hero-image-container {
  width: 220px;
  height: 220px;
}

.hero-main-image {
  width: 220px;
  height: 220px;
}

.image-glow {
  width: 260px;
  height: 260px;
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
  
  .hero-image-container {
  width: 180px;
  height: 180px;
}

 .hero-main-image {
  width: 180px;
  height: 180px;
}

 .image-glow {
  width: 220px;
  height: 220px;
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

