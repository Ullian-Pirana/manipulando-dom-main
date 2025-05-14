export class Modal {
    constructor(modalSelector, closeSelector, formSelector, blurSelector) {
        this.modal = document.querySelector(modalSelector);
        this.closeBtn = document.querySelector(closeSelector);
        this.form = document.querySelector(formSelector);
        this.blur = document.querySelector(blurSelector);
        this.emailInput = this.form?.querySelector('[name="email"]');
        this.localStorageKey = "usuarioEmail";

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }
    handleSubmit(event) {
        event.preventDefault();
        const email = this.emailInput?.value.trim();

        if (email) {
            localStorage.setItem(this.localStorageKey, email);
            this.closeModal();
        }
    }
    handleClose() {
        this.closeModal();
    }
    closeModal() {
        if (this.modal) {
            this.modal.style.display = "none";
        }
    }
    openModal() {
        if (this.modal) {
            this.modal.style.display = "flex";
        }
    }
    init() {
        const emailSalvo = localStorage.getItem(this.localStorageKey);
        if (!emailSalvo) {
            this.openModal();
            if (this.form && this.emailInput) {
                this.form.addEventListener("submit", this.handleSubmit);
            }
            if (this.closeBtn) {
                this.closeBtn.addEventListener("click", this.handleClose);
            }
        }
        return this;
    }
}
