import { Component, OnInit } from '@angular/core';

var pdfMake = require('pdfmake/build/pdfmake.js');
var pdfFonts = require('pdfmake/build/vfs_fonts.js');
pdfMake.vfs = pdfFonts.pdfMake.vfs;

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
