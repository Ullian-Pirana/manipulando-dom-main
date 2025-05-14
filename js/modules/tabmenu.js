export default function tabMenuInit() {
    const imagens = document.querySelectorAll(".natureza-img");
    const conteudos = document.querySelectorAll(".natureza-content");

    if (imagens.length && conteudos.length) {
        imagens.forEach((img, index) => {
            img.addEventListener("click", () => {
                conteudos.forEach((c) => c.classList.remove("active"));
                conteudos[index].classList.add("active");
            });
        });
    }
}
