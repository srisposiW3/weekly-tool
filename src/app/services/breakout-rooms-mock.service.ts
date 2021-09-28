import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { BreakoutRoom } from 'src/app/models/breackout-room';

export class BreakoutRoomsServiceMock {
  currentFirebaseRooms$: Observable<any>;

  constructor() {
    this.currentFirebaseRooms$ = of({
      name: 'defaut',
      rooms: [
        {
          name: 'patio',
          url: '',
        },
        {
          name: 'cafetería',
          url: '',
        },
        {
          name: 'sala de reuniones',
          url: '',
        },
        {
          name: 'piso de abajo',
          url: '',
        },
        {
          name: 'cocina',
          url: '',
        },
        {
          name: 'piso de arriba',
          url: '',
        },
      ],
    });
  }

  update(
    patio: string,
    cafeteria: string,
    salaDeReuniones: string,
    pisoDeAbajo: string,
    cocina: string,
    pisoDeArriba: string,
  ): Promise<void> {
    return new Promise<void>((resolve) => resolve());
  }

  getRandomLink(): Observable<BreakoutRoom> {
    return of(new BreakoutRoom()).pipe(delay(800));
  }

  getCountRooms() {
    return of(2);
  }
}
