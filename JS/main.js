document.addEventListener('DOMContentLoaded', () => {
  const { animate, splitText, stagger } = anime;

  const { chars: chars1 } = splitText('.home__profession-1', { chars: true });
  const { chars: chars2 } = splitText('.home__profession-2', { chars: true });

  const allChars = [...chars1, ...chars2];

  // initial visible state fix
  allChars.forEach(char => {
    char.style.display = 'inline-block';
  });

  function runAnimation() {

    // RESET (important)
    animate(allChars, {
      y: '100%',
      opacity: 0,
      duration: 0
    });

    // ENTER line 1
    animate(chars1, {
      y: ['100%', '0%'],
      opacity: [0, 1],
      duration: 800,
      ease: 'out(3)',
      delay: stagger(50)
    });

    // ENTER line 2
    animate(chars2, {
      y: ['100%', '0%'],
      opacity: [0, 1],
      duration: 800,
      ease: 'out(3)',
      delay: stagger(50, { start: 250 })
    });

    // EXIT after delay
    setTimeout(() => {
      animate(allChars, {
        y: ['0%', '-100%'],
        opacity: [1, 0],
        duration: 700,
        ease: 'inOut(2)',
        delay: stagger(30)
      });
    }, 2000);

    // LOOP আবার start
    setTimeout(runAnimation, 3200);
  }

  runAnimation();
});
//swiper
const swiperProjects = new Swiper('.project__swiper', {
  loop: true,
  spaceBetween: 24,
  slidesPerView: 'auto',
  grabCursor: true,
  speed: 600,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});


//service view button
const serviceCards = document.querySelectorAll('.services__card');

    serviceCards.forEach(card => {
        const button = card.querySelector('.services__button');

        button.addEventListener('click', () => {
            card.classList.toggle('services-open');
            card.classList.toggle('services-close');
        });
    });

//copy email button
const copyBtn = document.getElementById('contact-btn'),
      copyEmail = document.getElementById('contact-btn').textContent

copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(copyEmail).then(() => {
      copyBtn.innerHTML ='Email copied <i class="ri-check-line"></i>'

      setTimeout(() =>{
       copyBtn.innerHTML ='Copy Email <i class="ri-file-copy-line"></i>'

      },2000)
    })

})

//footer date
const textYear = document.getElementById('footer-year')
const currentYear = new Date().getFullYear()

if (textYear) {
  textYear.textContent = currentYear
}

//scroll section active link
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
  const scrollY = window.scrollY + 150

  sections.forEach(section => {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.id

    const link = document.querySelector(`.nav__menu a[href="#${sectionId}"]`)
    if (!link) return

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      link.classList.add('active-link')
    } else {
      link.classList.remove('active-link')
    }
  })
}

window.addEventListener('scroll', scrollActive)
scrollActive()

//customcursor
const cursor = document.querySelector('.cursor')

let mouseX = 0, mouseY = 0

const cursorMove = () => {
  cursor.style.left = `${mouseX}px`
  cursor.style.top = `${mouseY}px`
  cursor.style.transform = 'translate(-50%, -50%)'

  requestAnimationFrame(cursorMove)
}

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX
  mouseY = e.clientY
})

cursorMove()

//hide cursor on links
const a = document.querySelectorAll('a')

a.forEach(item => {
  item.addEventListener('mouseover', () => {
    cursor.classList.add('hide-cursor')
  })
  item.addEventListener('mouseleave', () =>{
    cursor.classList.remove('hide-cursor')
  })
})