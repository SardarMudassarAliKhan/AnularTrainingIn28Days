import { AbstractControl, ValidationErrors } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';

// Fake async check
export function uniqueUsernameValidator(control: AbstractControl): Observable<ValidationErrors | null> {
  const takenUsernames = ['admin', 'test', 'superuser'];

  return of(takenUsernames.includes(control.value)).pipe(
    delay(1000), // simulate server delay
    map(exists => exists ? { usernameTaken: true } : null)
  );
}
