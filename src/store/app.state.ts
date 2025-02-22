import { getProducts, getProduct, getSizes } from "../services/api";
import { makeAutoObservable } from "mobx";

export interface ISize {
  id: number;
  label: "XS" | "S" | "M" | "L" | "XL";
  number: number;
}

export interface IColor {
  id: number;
  name: string;
  images: string[];
  price: string;
  description: string;
  sizes: number[];
}

export interface IProduct {
  id: number;
  name: string;
  colors: IColor[];
}

class AppState {
  busy = true;
  error = false;
  list: IProduct[] = [];
  sizes: ISize[] = [];
  current: IProduct | null = null;
  constructor() {
    makeAutoObservable(this);
  }
  async fetch() {
    this.busy = true;
    await this.checkSizes();
    const list = (await getProducts()) as IProduct[];
    this.setList(list);
    this.busy = false;
  }

  private async checkSizes() {
    if (!this.sizes.length) {
      const sizes = (await getSizes()) as ISize;
      this.setSizes(sizes);
    }
  }

  async fetchById(id) {
    this.busy = true;
    await this.checkSizes();
    const current = (await getProduct(id)) as IProduct;
    this.setCurrent(current);
    this.busy = false;
  }

  setSizes(payload) {
    this.sizes = payload;
  }

  setList(payload) {
    this.list = payload;
  }

  setCurrent(payload) {
    this.current = payload;
  }
}

const state = new AppState();
export default state;
