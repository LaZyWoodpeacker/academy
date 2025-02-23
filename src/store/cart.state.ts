import { makeAutoObservable } from "mobx";

export interface ICartAddDTO {
  id: number;
  selectedColor: number;
  selectedSize: number;
}

class CartState {
  selectedPositions: (ICartAddDTO & { count: number })[] = [];
  constructor() {
    makeAutoObservable(this);
    const localCart = localStorage.getItem("cart");
    if (localCart) this.selectedPositions = JSON.parse(localCart);
  }

  addToCart(dto: ICartAddDTO) {
    const alreadyExist = this.selectedPositions.find(
      (position) =>
        position.id === dto.id &&
        position.selectedColor === dto.selectedColor &&
        position.selectedSize === dto.selectedSize
    );
    if (alreadyExist) alreadyExist.count += 1;
    else this.selectedPositions.push({ ...dto, count: 1 });
    localStorage.setItem("cart", JSON.stringify(this.selectedPositions));
  }

  remove(idx) {
    this.selectedPositions.splice(idx, 1);
    localStorage.setItem("cart", JSON.stringify(this.selectedPositions));
  }

  async prepareData(products) {
    return { sum: 0 };
  }
}

const state = new CartState();
export default state;
