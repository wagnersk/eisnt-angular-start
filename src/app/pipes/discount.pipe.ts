import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'progressiveDiscount',
  standalone: true
})
export class ProgressiveDiscountPipe implements PipeTransform {

transform(
  total: number,
  showPercent: boolean = false,
  returnDiscountValue: boolean = false
): any {

  let discount = 0;

  if (total > 500) discount = 0.20;
  else if (total > 200) discount = 0.15;
  else if (total > 100) discount = 0.10;
  else if (total > 50) discount = 0.05;

  if (showPercent) {
    return `${discount * 100}%`;
  }

  const discountValue = total * discount;
  const finalTotal = total - discountValue;

  return returnDiscountValue ? discountValue : finalTotal;
}
}
