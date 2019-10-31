import { NgModule } from '@angular/core';

import { DragDropModule } from '@angular/cdk/drag-drop';
import {
  MatSliderModule, MatSnackBarModule, MatSlideToggleModule, MatRadioModule, MatExpansionModule,
  MatInputModule, MatFormFieldModule, MatSidenavModule, MatButtonModule, MatCheckboxModule,
  MatIconModule, MatDialogModule, MatTooltipModule, MatTabsModule, MatNativeDateModule,
  MatDatepickerModule, MatSelectModule, MatButtonToggleModule, MatDividerModule
} from '@angular/material';

@NgModule({

  imports: [
    DragDropModule,
    MatSliderModule, MatSnackBarModule, MatSlideToggleModule, MatRadioModule, MatExpansionModule,
    MatInputModule, MatFormFieldModule, MatSidenavModule, MatButtonModule, MatCheckboxModule,
    MatIconModule, MatDialogModule, MatTooltipModule, MatTabsModule, MatNativeDateModule, MatDatepickerModule, MatSelectModule, MatButtonToggleModule, MatDividerModule
  ],
  exports: [
    DragDropModule,
    MatSliderModule, MatSnackBarModule, MatSlideToggleModule, MatRadioModule, MatExpansionModule,
    MatInputModule, MatFormFieldModule, MatSidenavModule, MatButtonModule, MatCheckboxModule,
    MatIconModule, MatDialogModule, MatTooltipModule, MatTabsModule, MatNativeDateModule, MatDatepickerModule, MatSelectModule, MatButtonToggleModule, MatDividerModule
  ],
})
export class MaterialModule { }



// public async saveOrder(items) {
//   console.log(items)
//   var questions = [];
//   items.map((array)=>{
//     array.map((question)=>{
//       questions.push({
//         _id:question._id,
//         weight:question.weight,
//         home:question.home
//       })
//     })
//   });
//   try{
//     let response:any = await this.http
//       .post(this.adminPanel+"/saveOrder",questions,this.options)
//       .toPromise();
//     console.log(response)
//     return response;
//   }catch (e) {
//     await console.log(e);
//     return {}
//   }
// }

// this.questionService.saveOrder(this.questions).then(response=>{
//   // this.questions = array;
//   console.log(response)
// })
