export class CalculateIlluminationMethods {
  static calculateUncertainty(arr: number[]): number {
    const len = arr.length;
    let sum = 0;
    for (let i = 0; i < len; i++) {
      sum += Math.pow(10, 0.1 * arr[i]);
    }

    return 10 * Math.log10(sum) - 10 * Math.log10(len);
  }
}
