const accordionItemHeaders = document.querySelectorAll('.accordion-item--header');

accordionItemHeaders.forEach(headerItem => {
    headerItem.addEventListener('click', () => {
        const activeAccordionItem = document.querySelector('.accordion-item--header.active');
        
        if (activeAccordionItem && activeAccordionItem !== headerItem) {
            activeAccordionItem.classList.remove('active');
            activeAccordionItem.nextElementSibling.style.maxHeight = '0px';
        }

        const accordionItemBody = headerItem.nextElementSibling;
        headerItem.classList.toggle('active');
        
        if (headerItem.classList.contains('active')) {
            accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
        } else {
            accordionItemBody.style.maxHeight = "0px";
        }
    });
});