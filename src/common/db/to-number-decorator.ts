import { addAttributeOptions } from 'sequelize-typescript';

export function ToNumber(targetValue: any, propertyKey: string): any {
  addAttributeOptions(targetValue, propertyKey, {
    get(): any {
      return +this.getDataValue(propertyKey);
    },
  });
}
