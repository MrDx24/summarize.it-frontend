import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {formatDate } from '@angular/common';

import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import { NzNotificationService } from 'ng-zorro-antd/notification';
(<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-summarize-file',
  templateUrl: './summarize-file.component.html',
  styleUrls: ['./summarize-file.component.css']
})
export class SummarizeFileComponent implements OnInit {

  fileLinkForm!: FormGroup;
  data:string | undefined
  sample: any
  tot_time: string| undefined
  today = new Date()
  fileToUpload: File | undefined;
  fileSize:any
  flag:boolean| undefined

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private notification: NzNotificationService
  ) { }

  ngOnInit(): void {
    this.fileLinkForm = this.fb.group({
      fileLink: ['', Validators.required],

    });
  }

  summaryfile(){
    this.flag=true
    const formData: FormData = new FormData();
    formData.append('file', this.fileToUpload as File);
    console.log(formData)
    this.http.post('http://127.0.0.1:5000/summaryFile', formData).subscribe((response: any) => {

      // console.log("Done");
      // console.log("Data response from server : ",response.data)
      this.flag=false
      this.data=response.data
      this.tot_time=response.tot_time
      // console.log("Time from the server : ",response.tot_time)
      this.createNotification("success",
      "Success",
      "Summary generated successfully.");

    }, (error) => {
      console.log(error);
      this.createNotification("error",
      "Error",
      "There is an error in generating summary, please try again later.");
      // console.log("Not done")
    });

  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0) as File;
  }

 change(event: Event){
    const input = event.target as HTMLInputElement;

    if (!input.files?.length) {
        return;
    }

    this.fileToUpload = input.files[0];
    console.log(this.fileToUpload);
}


  download(){
    var dd = {
      content: [
        {
          text: 'Summarization method selected : ',
          style: 'header'
        },
        'By uploading File\n\n',
        {
          text: 'Date & Time : '+ formatDate(this.today, 'dd-MMM-yyyy & hh:mm:ss a', 'en-US', '+0530')+'\n\n',
          style: 'contents'
        },
        {
          text: 'Original Input : ',
          style: 'subheader'
        },
        {
          text: "Filename : "+ this.fileToUpload?.name +'\n\n',
          style: 'contents'
        },
        {
          text: 'Output Summary : ',
          style: 'subheader'
        },
        {
          text: this.data + '\n\n',
          style: ['contents']
        },
        {
          text: 'This sumarization is done using Summarize-IT',
          style: ['quote', 'small']
        }
      ],
      styles: {
        header: {
          fontSize: 18,
          bold: true
        },
        subheader: {
          fontSize: 15,
          bold: true
        },
        contents: {
          fontSize: 12,
        },
        quote: {
          italics: true
        },
        small: {
          fontSize: 8
        }
      }

    }

    pdfMake.createPdf(dd).open();
    console.log("pdf generated!!!!")
  }

  createNotification(type: string, title:string, message:string): void {
    this.notification.create(
      type,
      title,
      message,
      {
        nzStyle:{
          marginTop: '100px'
        }
      }
    );
  }




  get fileLink() {
    return this.fileLinkForm.get('fileLink');
  }
}
