import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styles: []
})
export class FormComponent implements OnInit {

  public newPost = {
    error: 0,
    title: null,
    content: null
  }

  public errorPublic = false;

  constructor() { }

  ngOnInit() {
  }

  public addNewPost(): void {
    this.newPost.error = 0
    this.errorPublic = false

    if(this.newPost.title === null || this.newPost.title.length <= 0 || this.newPost.content === null || this.newPost.content.length <= 0) {
      this.newPost.error += 1;
      this.errorPublic = true
    }

    if(this.newPost.error === 0) {
      console.log(this.newPost)
    }
  }



}
