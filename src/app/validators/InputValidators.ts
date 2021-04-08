import { ValidatorFn, AbstractControl } from '@angular/forms';

export class InputValidators {
  numberValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
      if (!control.value) {
        return null;
      }
      return Number(control.value.toString()) ? null : { invalidNumber: true };
    };
  }
}
