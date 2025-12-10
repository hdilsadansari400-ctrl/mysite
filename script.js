// Initialize Bootstrap tooltips
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault()
        
        const targetId = this.getAttribute('href')
        if (targetId === '#') return
        
        const targetElement = document.querySelector(targetId)
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            })
        }
    })
})

// Add shadow to navbar on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar')
    if (window.scrollY > 50) {
        navbar.classList.add('navbar-scrolled')
    } else {
        navbar.classList.remove('navbar-scrolled')
    }
})

// Form validation for contact form
const contactForm = document.getElementById('contactForm')
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault()
        
        // Simple validation
        const name = document.getElementById('name')
        const email = document.getElementById('email')
        const message = document.getElementById('message')
        let isValid = true
        
        if (name.value.trim() === '') {
            name.classList.add('is-invalid')
            isValid = false
        } else {
            name.classList.remove('is-invalid')
        }
        
        if (email.value.trim() === '' || !email.value.includes('@')) {
            email.classList.add('is-invalid')
            isValid = false
        } else {
            email.classList.remove('is-invalid')
        }
        
        if (message.value.trim() === '') {
            message.classList.add('is-invalid')
            isValid = false
        } else {
            message.classList.remove('is-invalid')
        }
        
        if (isValid) {
            // Here you would typically send the form data to a server
            alert('Thank you for your message! We will get back to you soon.')
            contactForm.reset()
        }
    })
}

// Lazy loading for images
if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]')
    images.forEach(img => {
        img.src = img.dataset.src
    })
} else {
    // Fallback for browsers that don't support lazy loading
    const script = document.createElement('script')
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js'
    document.body.appendChild(script)
}

// Animate elements when they come into view
const animateOnScroll = function() {
    const elements = document.querySelectorAll('.animate-on-scroll')
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top
        const windowHeight = window.innerHeight
        
        if (elementPosition < windowHeight - 100) {
            element.classList.add('animated')
        }
    })
}

window.addEventListener('scroll', animateOnScroll)
window.addEventListener('load', animateOnScroll)