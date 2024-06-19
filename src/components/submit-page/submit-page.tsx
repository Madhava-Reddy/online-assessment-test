import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'submit-page',
  styleUrl: 'submit-page.css', // If additional custom styles are needed
  shadow: true,
})
export class SubmitPage {
  @Prop() answers: any;

  calculateScore() {
    let score = 0;
    for (const section in this.answers) {
      score += this.answers[section].filter(answer => answer.correct).length;
    }
    return score;
  }

  render() {
    const totalQuestions = 20; 
    const score = this.calculateScore();
    console.log("omr"+score);
    return (
      <div class="container mt-5">
        <div class="card">
          <div class="card-body">
            <h2 class="card-title">Interview Completed</h2>
            <p class="card-text">Thank you for completing the interview.</p>
            <p>Your Score: {score} / {totalQuestions}</p>
          </div>
        </div>
      </div>
    );
  }
}
