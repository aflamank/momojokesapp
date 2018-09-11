import { Component, OnInit } from '@angular/core';
import { Joke } from './model/joke';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'jokes',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.css']
})
export class JokesComponent implements OnInit {
  jokes: Joke = {
    id: 1,
    title: "First Joke",
    question: "What's the difference between avian flu and swine flu?",
    answer: "One requires tweetment, the other requires oinkment",
    hasAnswer: true
  }

  constructor() { }

  ngOnInit() {
  }

}
