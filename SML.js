//navigation bar
// 修复移动菜单切换函数
function toggleMenu() {
  const menu = document.getElementById("mobileMenu");
  menu.classList.toggle("show");
  
  // 防止背景滚动
  document.body.classList.toggle("no-scroll");
}

// 优化导航栏背景色检测
window.addEventListener("scroll", function() {
  const navbar = document.getElementById("navbar");
  const aboutSection = document.getElementById("About");
  
  // 修复：添加安全检测
  if (aboutSection) {
    const aboutTop = aboutSection.offsetTop;
    if (window.scrollY >= aboutTop - 50) {
      navbar.classList.add("navbar-grey");
    } else {
      navbar.classList.remove("navbar-grey");
    }
  }
});


//大图片滑动有延迟
window.addEventListener("scroll", function () {
  const scrolled = window.scrollY;
  const bg = document.querySelector(".big-image");

    // 0.3 可以根据喜好调成 0.2、0.5 等，越小背景越“慢”
  bg.style.backgroundPositionY = -(scrolled * 0.3) + "px";
});

/*往下划过了about, navigation bar 加background-color*/
window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  const aboutSection = document.getElementById("About");
  const aboutTop = aboutSection.offsetTop;

  if (window.scrollY >= aboutTop) {
    navbar.classList.add("navbar-grey");
  } else {
    navbar.classList.remove("navbar-grey");
  }
});


//About动画
function animateAbout() {
  const aboutLeft = document.querySelector('.about-left');
  const aboutRight = document.querySelector('.about-right');
  const aboutTitle = document.getElementById('About');

  if (aboutLeft && aboutRight && aboutTitle) {
    if (isInViewport(aboutTitle)) {
      aboutLeft.classList.add('visible');
      aboutRight.classList.add('visible');
    } else {
      aboutLeft.classList.remove('visible');
      aboutRight.classList.remove('visible');
    }
  }
}
window.addEventListener('scroll', animateAbout);
window.addEventListener('load', animateAbout);


//education右边动画
function isInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.bottom >= 0
  );
}

function animateEducation() {
  const educationRight = document.querySelector('.education-right');
  const educationLeft = document.querySelector('.education-left');
  const educationTitle = document.getElementById('education');

  if (educationRight && educationLeft && educationTitle) {
    if (isInViewport(educationTitle)) {
      educationRight.classList.add('visible');
      educationLeft.classList.add('visible');
    } else {
      educationRight.classList.remove('visible');
      educationLeft.classList.remove('visible');
    }
  }
}

window.addEventListener('scroll', animateEducation);
window.addEventListener('load', animateEducation);



// Skills Animation




//navigation bar
function toggleMenu() {
  const menu = document.getElementById("mobileMenu");
  menu.classList.toggle("show");
  document.body.classList.toggle("no-scroll");
}

window.addEventListener("scroll", function() {
  const navbar = document.getElementById("navbar");
  const aboutSection = document.getElementById("About");
  
  if (aboutSection) {
    const aboutTop = aboutSection.offsetTop;
    if (window.scrollY >= aboutTop - 50) {
      navbar.classList.add("navbar-grey");
    } else {
      navbar.classList.remove("navbar-grey");
    }
  }
});

window.addEventListener("scroll", function() {
  const scrolled = window.scrollY;
  const bg = document.querySelector(".big-image");
  bg.style.backgroundPositionY = -(scrolled * 0.3) + "px";
});

/* 往下划过了about, navigation bar 加background-color */
window.addEventListener("scroll", function() {
  const navbar = document.getElementById("navbar");
  const aboutSection = document.getElementById("About");
  const aboutTop = aboutSection.offsetTop;

  if (window.scrollY >= aboutTop) {
    navbar.classList.add("navbar-grey");
  } else {
    navbar.classList.remove("navbar-grey");
  }
});

// About动画
function animateAbout() {
  const aboutLeft = document.querySelector('.about-left');
  const aboutRight = document.querySelector('.about-right');
  const aboutTitle = document.getElementById('About');

  if (aboutLeft && aboutRight && aboutTitle) {
    if (isInViewport(aboutTitle)) {
      aboutLeft.classList.add('visible');
      aboutRight.classList.add('visible');
    } else {
      aboutLeft.classList.remove('visible');
      aboutRight.classList.remove('visible');
    }
  }
}
window.addEventListener('scroll', animateAbout);
window.addEventListener('load', animateAbout);

// education右边动画
function isInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.bottom >= 0
  );
}

function animateEducation() {
  const educationRight = document.querySelector('.education-right');
  const educationLeft = document.querySelector('.education-left');
  const educationTitle = document.getElementById('education');

  if (educationRight && educationLeft && educationTitle) {
    if (isInViewport(educationTitle)) {
      educationRight.classList.add('visible');
      educationLeft.classList.add('visible');
    } else {
      educationRight.classList.remove('visible');
      educationLeft.classList.remove('visible');
    }
  }
}

window.addEventListener('scroll', animateEducation);
window.addEventListener('load', animateEducation);

// 修复后的 Skills 动画
let skillAnimationActive = false;
let skillBars = [];

function setupSkillsAnimation() {
  // 获取所有技能条元素
  skillBars = document.querySelectorAll('.skill-level');
  
  console.log(`Found ${skillBars.length} skill bars`);
  
  // 初始将所有技能条宽度设为0
  skillBars.forEach(bar => {
    bar.style.width = '0';
  });
  
  // 监听滚动事件
  window.addEventListener('scroll', handleSkillAnimation);
}

function handleSkillAnimation() {
  if (skillBars.length === 0) {
    console.log('No skill bars found');
    return;
  }
  
  const skillSection = document.getElementById('Skill');
  const paperSection = document.getElementById('Paper');
  
  if (!skillSection || !paperSection) {
    console.log('Sections not found');
    return;
  }
  
  const skillRect = skillSection.getBoundingClientRect();
  const paperRect = paperSection.getBoundingClientRect();
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  
  // 检查技能部分是否在视口中
  const isSkillInView = skillRect.top < windowHeight && skillRect.bottom > 0;
  
  // 检查 Paper 部分是否在视口中
  const isPaperInView = paperRect.top < windowHeight && paperRect.bottom > 0;
  
  // 检查 Paper 部分是否完全离开视口（在视口上方）
  const isPaperAboveView = paperRect.bottom < 0;
  
  console.log(`Skill section position: top=${skillRect.top}, bottom=${skillRect.bottom}`);
  console.log(`Paper section position: top=${paperRect.top}, bottom=${paperRect.bottom}`);
  console.log(`Window height: ${windowHeight}, isSkillInView: ${isSkillInView}, isPaperInView: ${isPaperInView}, isPaperAboveView: ${isPaperAboveView}`);
  
  // 当技能部分进入视口时展开技能条
  if (isSkillInView && !skillAnimationActive) {
    console.log('Animating skill bars IN');
    animateSkillBars('in');
    skillAnimationActive = true;
  }
  // 当向上滚动离开技能区域但Paper仍在视口中时保持展开
  else if (isPaperInView && !isSkillInView && skillAnimationActive) {
    console.log('Keeping skill bars visible');
    // 不需要做任何操作，保持展开状态
  }
  // 当 Paper 部分完全离开视口时收缩技能条
  else if (isPaperAboveView && skillAnimationActive) {
    console.log('Animating skill bars OUT');
    animateSkillBars('out');
    skillAnimationActive = false;
  }
}

function animateSkillBars(direction) {
  console.log(`Animating bars ${direction}`);
  
  skillBars.forEach(bar => {
    const targetWidth = direction === 'in' ? `${bar.getAttribute('data-width')}%` : '0';
    
    // 清除任何现有的过渡
    bar.style.transition = 'none';
    // 强制重绘
    void bar.offsetWidth;
    
    // 应用新过渡 - 2秒完成
    bar.style.transition = 'width 2s cubic-bezier(0.22, 0.61, 0.36, 1)';
    bar.style.width = targetWidth;
  });
}

// 初始化技能动画
window.addEventListener('load', () => {
  console.log('Setting up skills animation');
  setupSkillsAnimation();
  // 初始检查一次
  handleSkillAnimation();
});


//experience动画
function animateExperience() {
  const experienceLeft = document.querySelector('.experience-left');
  const experienceRight = document.querySelector('.experience-right');
  const experienceTitle = document.getElementById('Experience');

  if (experienceLeft && experienceRight && experienceTitle) {
    if (isInViewport(experienceTitle)) {
      experienceLeft.classList.add('visible');
      experienceRight.classList.add('visible');
    } else {
      experienceLeft.classList.remove('visible');
      experienceRight.classList.remove('visible');
    }
  }
}
window.addEventListener('scroll', animateExperience);
window.addEventListener('load', animateExperience);




