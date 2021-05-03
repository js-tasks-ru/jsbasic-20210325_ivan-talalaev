import createElement from "../../assets/lib/create-element.js";

export default class ProductCard {
  constructor(product) {
    this.data = product;
    this.tempalte = "";
    this.render();
  }

  render() {
    this.elem = document.createElement("div");
    this.elem.className = "card";
    let { name, price, image, id } = this.data;
    this.elem.addEventListener('click', event => {
      const isButton = event.target.nodeName === 'BUTTON';
      if (isButton) {
        const event = new CustomEvent("product-add", {
          detail: id,
          bubbles: true
        });
        this.elem.dispatchEvent(event);
      }
    });

    this.template = `
      <div class="card__top">
        <img src="/assets/images/products/${image}" class="card__image" alt="product">
        <span class="card__price">€${price.toFixed(2)}</span>
      </div>
      <div class="card__body">
        <div class="card__title">${name}</div>
        <button type="button" class="card__button">
          <img src="/assets/images/icons/plus-icon.svg" alt="icon">
        </button>
      </div>
    `;

    this.elem.insertAdjacentHTML('beforeend', this.template);
    return this.elem;
  }
}
