import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.scss'],
})
export class ListaAlumnosComponent implements OnInit {

  constructor(private actionSheetCtrl: ActionSheetController) { }
  alumnos: any = ["Carlos", "Ximena", "Alberto", "Eduardo", "Baraba", "Georgina", "Kevin"];

  isActionSheetOpen = false;
  async eliminarActionSheet(alumno: string) {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Opciones de Eliminación',
      buttons: [
        {
          text: 'Eliminar',
          role: 'destructive',
          icon: 'trash',
          handler: () => {
            this.eliminarAlumno(alumno);
          }
        },
        {
          text: 'Cancelar',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            // Acción a realizar al seleccionar "Cancelar"
          }
        }
      ]
    });
    await actionSheet.present();
  }

  eliminarAlumno(alumno: string) {
    // Lógica para eliminar al alumno
  }


  ngOnInit() { }

}
