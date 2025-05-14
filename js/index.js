import accordionInit from "./modules/accordion.js";
import tabMenuInit from "./modules/tabmenu.js";
import menuMobileInit from "./modules/menuMobile.js";
import { Modal } from "./modules/modal.js";

tabMenuInit()
accordionInit()
menuMobileInit()

new Modal(
    '.js-modal',          
    '.modal-close',       
    '.modal-forms',       
    '.js-modal-blur'      
).init();
