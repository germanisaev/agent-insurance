import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ActiveService {
    private selected = new BehaviorSubject<string>('');

    sendSelect(active: string) {
        this.selected.next(active);
    }

    clearSelect() {
        this.selected.next('');
    }

    getSelect() {
        return this.selected.asObservable();
    }
}