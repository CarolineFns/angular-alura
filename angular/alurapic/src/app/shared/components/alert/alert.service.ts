import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { AlertType } from './alert';
import { Alert } from './alert';

@Injectable({providedIn: 'root'})
export class AlertService {

    alertSubject : Subject<Alert>;

    sucess(message: string) {
        this.alert(AlertType.SUCCESS, message);
    }

    warning(message: string) {
        this.alert(AlertType.WARNING, message);
    }

    danger(message: string) {
        this.alert(AlertType.DANGER, message);
    }

    info(message: string) {
        this.alert(AlertType.INFO, message);
    }

    private alert(alertType: AlertType, message: string) {
        this.alertSubject.next(new Alert(alertType, message));
    }

    getAlert() {
        return this.alertSubject.asObservable();
    }
}