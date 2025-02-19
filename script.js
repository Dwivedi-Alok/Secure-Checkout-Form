document.addEventListener("DOMContentLoaded", function() {
    // Navigation smooth scrolling
    document.querySelectorAll("nav ul li a").forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const targetId = e.target.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    
    const contactForm = document.querySelector("#contact form");
    if (contactForm) {
        contactForm.addEventListener("submit", function(e) {
            e.preventDefault();
            
           
            const formData = {
                name: contactForm.querySelector("input[name='name']").value,
                email: contactForm.querySelector("input[name='email']").value,
                message: contactForm.querySelector("textarea[name='message']").value
            };

            
            if (!formData.name || !formData.email || !formData.message) {
                alert("Please fill out all fields");
                return;
            }

            
            console.log("Message received:", formData);
            alert("Thank you for your message! I'll get back to you soon.");

            
            contactForm.reset();
        });
    }
});

