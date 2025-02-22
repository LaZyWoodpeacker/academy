import { makeAutoObservable } from "mobx";

export interface IChartAddDTO {
  id: number;
  selectedColor: number;
  selectedSize: number;
}

class ChartState {
  selectedPositions: (IChartAddDTO & { count: number })[] = [];
  constructor() {
    makeAutoObservable(this);
    const localChart = localStorage.getItem("chart");
    if (localChart) this.selectedPositions = JSON.parse(localChart);
  }

  addToChart(dto: IChartAddDTO) {
    const alreadyExist = this.selectedPositions.find(
      (position) =>
        position.id === dto.id &&
        position.selectedColor === dto.selectedColor &&
        position.selectedSize === dto.selectedSize
    );
    if (alreadyExist) alreadyExist.count += 1;
    else this.selectedPositions.push({ ...dto, count: 1 });
    localStorage.setItem("chart", JSON.stringify(this.selectedPositions));
  }

  remove(idx) {
    this.selectedPositions.splice(idx, 1);
    localStorage.setItem("chart", JSON.stringify(this.selectedPositions));
  }
}

const state = new ChartState();
export default state;
