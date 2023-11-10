export class CalculationUncertaintyMethods {
  static calculateUncertaintyForTypeA(arr: number[]): number {
    const len = arr.length;
    let sum = 0;
    for (let i = 0; i < len; i++) {
      sum += Math.pow(10, 0.1 * arr[i]);
    }

    return 10 * Math.log10(sum) - 10 * Math.log10(len);
  }

  static calculateUncertaintyForTypeB(inaccuracy: number): number {
    return inaccuracy / Math.sqrt(3);
  }

  static calculateUncertaintyForTotalMeasures(
    arr: number[],
    inaccuracy: number
  ): number {
    return Math.sqrt(
      Math.pow(
        CalculationUncertaintyMethods.calculateUncertaintyForTypeA(arr),
        2
      ) +
        Math.pow(
          CalculationUncertaintyMethods.calculateUncertaintyForTypeB(
            inaccuracy
          ),
          2
        )
    );
  }

  static calculateUncertaintyForExtendedTotalMeasures(
    arr: number[],
    coverage_rate: number,
    inaccuracy: number
  ): number {
    return (
      coverage_rate *
      CalculationUncertaintyMethods.calculateUncertaintyForTotalMeasures(
        arr,
        inaccuracy
      )
    );
  }

  static calculateUncertaintyForTheLight(
    arr: number[],
    inaccuracy: number
  ): number {
    const sum = arr.reduce((sum, cur) => {
      cur *= Math.pow(
        CalculationUncertaintyMethods.calculateUncertaintyForTotalMeasures(
          arr,
          inaccuracy
        ),
        2
      );
      return sum;
    }, 0);
    return (1 / arr.length) * Math.sqrt(sum);
  }
}
