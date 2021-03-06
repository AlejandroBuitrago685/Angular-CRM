import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class GlobalErrorService implements ErrorHandler {

  constructor(private injector: Injector) { }

  handleError(error: any) {
    const router = this.injector.get(Router);
    console.warn(`Request URL ERROR: ${router.url}`);


    if (error instanceof HttpErrorResponse) {

      console.error("Backend código de error: ", error.status);
      console.error("Respuesta: ", error.message);
      router.navigate(['error/' + error.status]);
      

    } else {
      console.error("Ha ocurrido un error: ", error.message);
      router.navigate(['error/' + error.status]);
      
    }

  }

}
