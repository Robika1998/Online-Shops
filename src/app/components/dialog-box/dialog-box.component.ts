import { Component, Inject, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.scss']
})
export class DialogBoxComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<DialogBoxComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    if (this.data) this.isNew = false;
  }

  myForm: UntypedFormGroup = new UntypedFormGroup({
    id: new UntypedFormControl(this.data?.id ?? null),
    title: new UntypedFormControl(this.data?.title ?? ''),
    price: new UntypedFormControl(this.data?.price ?? ''),
    year: new UntypedFormControl(this.data?.year ?? ''),
    chip: new UntypedFormControl(this.data?.chip ?? ''),
    ssd: new UntypedFormControl(this.data?.ssd ?? ''),
    memory: new UntypedFormControl(this.data?.memory ?? ''),
    display: new UntypedFormControl(this.data?.display ?? ''),
  });

  isNew: boolean = true;

  onNoClick(): void {
    this.dialogRef.close(null);
  }

  onSubmit() {
    this.data = {
      id: this.myForm.value.id,
      title: this.myForm.value.title,
      price: this.myForm.value.price,
      year: this.myForm.value.year,
      image: "assets/images/macbook.jpeg",
      configure: {
        chip: this.myForm.value.chip,
        ssd: this.myForm.value.ssd,
        memory: this.myForm.value.memory,
        display: this.myForm.value.display,
      }
    };

    this.dialogRef.close(this.data);
  }

  ngOnInit(): void {

  }

}




// import { Component, Inject, OnInit } from '@angular/core';
// import { FormControl, FormGroup } from '@angular/forms';
// import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

// @Component({
//   selector: 'app-dialog-box',
//   templateUrl: './dialog-box.component.html',
//   styleUrl: './dialog-box.component.scss'
// })
// export class DialogBoxComponent implements OnInit {

//   myForm: FormGroup = new FormGroup({
//     id: new FormControl(this.data?.id ?? null),
//     title: new FormControl(this.data?.title ?? ''),
//     price: new FormControl(this.data?.price ?? ''),
//     year: new FormControl(this.data?.year ?? ''),
//     chip: new FormControl(this.data?.chip ?? ''),
//     ssd: new FormControl(this.data?.ssd ?? ''),
//     memory: new FormControl(this.data?.memory ?? ''),
//     display: new FormControl(this.data?.display ?? '')
   
//   })

//   isNew: boolean = true;

//   constructor(
//     public dialogRef: MatDialogRef<DialogBoxComponent>,
//     @Inject(MAT_DIALOG_DATA) public data: any,
//   ) {
//     if (this.data) this.isNew = false;
//   }

//   onNoClick(): void {
//     this.dialogRef.close(null);
//   }

//   onSubmit() {

//     this.data = {
//       id: this.myForm.value.id,
//       title: this.myForm.value.title,
//       price: this.myForm.value.price,
//       year: this.myForm.value.year,
//       // image: "assets/images/macbook.jpeg",
//       configure: {
//         chip: this.myForm.value.chip,
//         ssd: this.myForm.value.ssd,
//         memory: this.myForm.value.memory,
//         display: this.myForm.value.display,
//     }
//   };

//     // console.log(this.myForm);
    
//     this.dialogRef.close(this.data);
//   }

//   ngOnInit(): void {
    
//   }

// }
