/* Code Dropdown */
const accordionItemHeader = document.querySelectorAll(".accordion-item-header");

accordionItemHeader.forEach(accordionItemHeader => {
    accordionItemHeader.addEventListener("click", event => {
        accordionItemHeader.classList.toggle("active");
    })
})