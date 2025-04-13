document.addEventListener('DOMContentLoaded', function() {

animateStats();
});

function animateStats() {
  const phishingStat = document.getElementById('phishing-stat');
  const ransomwareStat = document.getElementById('ransomware-stat');
  const dataBreachStat = document.getElementById('data-breach-stat');
  const costStat = document.getElementById('cost-stat');
  
  if (!phishingStat) return;
  
  const phishingTarget = 3.4;
  const ransomwareTarget = 5.414; 
  const dataBreachTarget = 1;
  const costTarget = 9.5; 
  
  
  const duration = 2000;
  const fps = 60;
  const interval = duration / fps;
  const steps = duration / interval;
  
  let currentStep = 0;
  
  const animation = setInterval(() => {
    currentStep++;
    const progress = currentStep / steps;
    
    if (phishingStat) {
      const phishingValue = (phishingTarget * progress).toFixed(1);
      phishingStat.textContent = `${phishingValue}B+`;
    }
    
    if (ransomwareStat) {
      const ransomwareValue = Math.floor(ransomwareTarget * progress);
      ransomwareStat.textContent = `${ransomwareValue}M+`;
    }
    
    if (dataBreachStat) {
      const dataBreachValue = Math.floor(dataBreachTarget * progress);
      dataBreachStat.textContent = `${dataBreachValue}B+`;
    }
    
    if (costStat) {
      const costValue = (costTarget * progress).toFixed(2);
      costStat.textContent = `$${costValue}T`;
    }
    
    if (currentStep >= steps) {
      clearInterval(animation);
    }
  }, interval);
}