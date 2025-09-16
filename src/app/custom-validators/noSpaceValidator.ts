import { AbstractControl, ValidationErrors } from '@angular/forms';

export function noSpaceValidator(control: AbstractControl): ValidationErrors | null {
  if (control.value && control.value.indexOf(' ') >= 0) {
    return { noSpace: true };
  }
  return null;
}
