import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-raiz',
  templateUrl: './raiz.component.html',
  styleUrls: ['./raiz.component.css']
})
export class RaizComponent implements OnInit {

  constructor(private ac: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
