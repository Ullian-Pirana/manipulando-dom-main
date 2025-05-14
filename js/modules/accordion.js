export default function accordionInit() {
    const items = document.querySelectorAll(".js-accordion dt");

    if (items.length) {
        items.forEach((item) => {
            item.addEventListener("click", () => {
                item.classList.toggle("active");
                const resposta = item.nextElementSibling;
                resposta?.classList.toggle("active");
            });
        });
    }
}
