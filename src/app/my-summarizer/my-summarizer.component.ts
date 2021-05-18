import { Component, OnInit } from '@angular/core';

import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
(<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-my-summarizer',
  templateUrl: './my-summarizer.component.html',
  styleUrls: ['./my-summarizer.component.css']
})
export class MySummarizerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
