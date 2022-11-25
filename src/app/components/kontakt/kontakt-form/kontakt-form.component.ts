import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Kontakt } from 'src/app/interfaces/kontakt';

@Component({
  selector: 'app-kontakt-form',
  templateUrl: './kontakt-form.component.html',
  styleUrls: ['./kontakt-form.component.css'],
})
export class KontaktFormComponent implements OnInit {
  @Input() action = '';

  @Input() hasBetreff = true;
  @Input() hasAttachment = true;
  form:FormGroup
  @Output() postForm = new EventEmitter<Kontakt>();

  selectedFile: File = new File([], '');
  display: FormControl = new FormControl('');
  readonly maxSize: number = 5242880;

  public uploadLimitSize: boolean = false;

  @Input() size!: number | string;
  @Output() sizeChange = new EventEmitter<number>();

  constructor(private _fb: FormBuilder) {
    this.form = this._fb.group({
      anrede: new FormControl(''),
      name: new FormControl('', [
        Validators.required,
        Validators.pattern(/[a-zA-Z]+/),
        Validators.maxLength(15),
      ]),
      vorname: new FormControl('', [
        Validators.required,
        Validators.pattern(/[a-zA-Z]+/),
        Validators.maxLength(15),
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(
          /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        ),
      ]),

      telefon: new FormControl('', [
        Validators.pattern(
          /(\(?([\d \-\)\–\+\/\(]+){6,}\)?([ .\-–\/]?)([\d]+))/
        ),
      ]),
      nachricht: new FormControl('', [
        Validators.required,
        Validators.maxLength(250),
      ]),
    });
  }

  ngOnInit(): void {
    
    if (this.hasAttachment) this.form.addControl('file', new FormControl(''));

    if (this.hasBetreff)
      this.form.addControl(
        'betreff',
        new FormControl('', [Validators.required])
      );
  }

  onSubmit() {
    if (this.form.valid) {
      this.form.value.file = this.selectedFile;
      this.postForm.emit(this.form.value);
      this.form.markAsPristine();
      this.form.reset();
      Object.keys(this.form.controls).forEach((key: string) => {
        this.form.controls[key].setErrors(null);
      });
    }
  }

  checkForm(k: string, e: string) {
    return this.form.get(k)?.touched && this.form.get(k)?.hasError(e);
  }

  handleFileInputChange(event: any) {
    console.table(event.target);
    this.selectedFile = event.target.files[0];
    this.selectedFile.name.replace('C:\\fakepath\\', '');
    if (this.selectedFile.size > this.maxSize) {
      this.uploadLimitSize = true;
    } else {
      this.uploadLimitSize = false;
    }

    this.display.patchValue(event.target.files[0].name ?? null);
  }
}
