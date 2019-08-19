import { Component, Inject, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Sensor } from "src/app/models/sensor";

@Component({
  selector: "app-dialog",
  templateUrl: "./dialog.component.html"
})
export class DialogComponent implements OnInit {
  sensor: Sensor = new Sensor();
  addSensorForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.addSensorForm = this.formBuilder.group({
      description: [
        this.sensor.description,
        [Validators.required, Validators.minLength(3)]
      ],
      model: [this.sensor.model, [Validators.required, Validators.minLength(3)]]
    });
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
