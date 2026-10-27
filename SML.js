// 移动端菜单切换
function toggleMenu() {
  const menu = document.getElementById("mobileMenu");
  menu.classList.toggle("show");
  document.body.classList.toggle("no-scroll");
}

// 统一管理所有的滚动事件 (导航栏变色 + 背景图视差滚动)
window.addEventListener("scroll", function() {
  const navbar = document.getElementById("navbar");
  const aboutSection = document.getElementById("About");
  
  // 1. 导航栏背景色变化
  if (aboutSection) {
    const aboutTop = aboutSection.offsetTop;
    if (window.scrollY >= aboutTop - 50) {
      navbar.classList.add("navbar-grey");
    } else {
      navbar.classList.remove("navbar-grey");
    }
  }

  // 2. 大图视差效果
  const scrolled = window.scrollY;
  const bg = document.querySelector(".big-image");
  if (bg) {
    bg.style.backgroundPositionY = -(scrolled * 0.3) + "px";
  }
});

// 检测元素是否进入视口 (稍微提早一点触发，当元素进入屏幕下方 10% 时就开始动画，体验更丝滑)
function isInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.9 &&
    rect.bottom >= 0
  );
}

// 通用的动画触发函数 (使用 querySelectorAll 支持多个同名区块，并包含划出重置逻辑)
function animateBlocks(leftClass, rightClass) {
  const leftElements = document.querySelectorAll(leftClass);
  const rightElements = document.querySelectorAll(rightClass);

  leftElements.forEach(el => {
    if (isInViewport(el)) {
      el.classList.add('visible');
    } else {
      el.classList.remove('visible'); // 划出屏幕时恢复原位，下次滑动重新触发
    }
  });

  rightElements.forEach(el => {
    if (isInViewport(el)) {
      el.classList.add('visible');
    } else {
      el.classList.remove('visible'); // 划出屏幕时恢复原位，下次滑动重新触发
    }
  });
}

// 滚动时批量触发区块的飞入/飞出动画
function handleScrollAnimations() {
  animateBlocks('.about-left', '.about-right');
  animateBlocks('.education-left', '.education-right');
  animateBlocks('.experience-left', '.experience-right');
}

window.addEventListener('scroll', handleScrollAnimations);
window.addEventListener('load', handleScrollAnimations);


// Skills 技能条动画
let skillAnimationActive = false;
let skillBars = [];

function setupSkillsAnimation() {
  skillBars = document.querySelectorAll('.skill-level');
  skillBars.forEach(bar => {
    bar.style.width = '0';
  });
  window.addEventListener('scroll', handleSkillAnimation);
}

function handleSkillAnimation() {
  if (skillBars.length === 0) return;
  
  const skillSection = document.getElementById('Skill');
  const paperSection = document.getElementById('Paper');
  
  if (!skillSection || !paperSection) return;
  
  const skillRect = skillSection.getBoundingClientRect();
  const paperRect = paperSection.getBoundingClientRect();
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  
  // 判断各个区块是否在视口范围内
  const isSkillInView = skillRect.top < windowHeight && skillRect.bottom > 0;
  const isPaperAboveView = paperRect.bottom < 0;
  
  // 触发技能条展开
  if (isSkillInView && !skillAnimationActive) {
    animateSkillBars('in');
    skillAnimationActive = true;
  }
  // 触发技能条收缩
  else if (isPaperAboveView && skillAnimationActive) {
    animateSkillBars('out');
    skillAnimationActive = false;
  }
}

function animateSkillBars(direction) {
  skillBars.forEach(bar => {
    // 默认进度条拉满 100%，如果 HTML 中有 data-width 属性则读取该属性
    const width = bar.getAttribute('data-width') || '100';
    const targetWidth = direction === 'in' ? `${width}%` : '0';
    
    // 清除原有动画并强制重绘
    bar.style.transition = 'none';
    void bar.offsetWidth; 
    
    // 重新应用过渡动画
    bar.style.transition = 'width 1.5s cubic-bezier(0.22, 0.61, 0.36, 1)';
    bar.style.width = targetWidth;
  });
}

// 初始化技能动画
window.addEventListener('load', () => {
  setupSkillsAnimation();
  handleSkillAnimation();
});
