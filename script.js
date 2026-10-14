/* =========================================
   ORIGEN SERVICIOS FINANCIEROS
   SCRIPT PRINCIPAL
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =========================================
       DESPLAZAMIENTO SUAVE
    ========================================= */

    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {

        link.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

            if (targetId === "#") {
                return;
            }

            const target = document.querySelector(targetId);

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });


    /* =========================================
       ANIMACIONES AL APARECER
    ========================================= */

    const animatedElements = document.querySelectorAll(
        ".service-card, .client-card, .about-content, .about-image, .contact-info, .contact-form"
    );

    const observer = new IntersectionObserver(
        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.15
        }
    );


    animatedElements.forEach(element => {

        element.classList.add("hidden");

        observer.observe(element);

    });


    /* =========================================
       FORMULARIO DE CONTACTO
    ========================================= */

    const form = document.querySelector(".contact-form");

    if (form) {

        form.addEventListener("submit", function (event) {

            event.preventDefault();

            const nombre = document.querySelector("#nombre").value.trim();
            const telefono = document.querySelector("#telefono").value.trim();
            const servicio = document.querySelector("#servicio").value;
            const mensaje = document.querySelector("#mensaje").value.trim();


            /* VALIDACIÓN */

            if (nombre === "") {

                alert("Por favor, escribe tu nombre.");

                return;
            }


            if (telefono === "") {

                alert("Por favor, escribe tu número de teléfono.");

                return;
            }


            if (servicio === "") {

                alert("Por favor, selecciona un servicio.");

                return;
            }


            /* MENSAJE DE CONFIRMACIÓN */

            alert(
                "¡Gracias, " +
                nombre +
                "!\n\n" +
                "Hemos recibido tu solicitud de información sobre " +
                servicio +
                ".\n\n" +
                "Origen Servicios Financieros se pondrá en contacto contigo."
            );


            /* LIMPIAR FORMULARIO */

            form.reset();

        });

    }


    /* =========================================
       EFECTO DEL HEADER AL HACER SCROLL
    ========================================= */

    const header = document.querySelector(".header");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {

            header.classList.add("scrolled");

        } else {

            header.classList.remove("scrolled");

        }

    });


    /* =========================================
       BOTONES DE SERVICIOS
    ========================================= */

    const serviceLinks = document.querySelectorAll(".service-card a");

    serviceLinks.forEach(link => {

        link.addEventListener("click", () => {

            const serviceCard = link.closest(".service-card");

            const serviceName =
                serviceCard.querySelector("h3").textContent;

            console.log(
                "Servicio seleccionado:",
                serviceName
            );

        });

    });


    /* =========================================
       AÑO AUTOMÁTICO DEL FOOTER
    ========================================= */

    const footerText = document.querySelector(".footer-bottom p");

    if (footerText) {

        const currentYear = new Date().getFullYear();

        footerText.textContent =
            "© " +
            currentYear +
            " Origen Servicios Financieros. Todos los derechos reservados.";

    }

});