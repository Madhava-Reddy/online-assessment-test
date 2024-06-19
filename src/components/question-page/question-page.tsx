import { Component, h, Prop, Event, EventEmitter, State } from '@stencil/core';

@Component({
  tag: 'question-page',
  styleUrl: 'question-page.css',
  shadow: true,
})
export class QuestionPage {
  @Prop() section: string;
  @Prop() question: any;
  @Event() answerSelected: EventEmitter;
  @State() selectedOption: string;

  handleOptionChange(event) {
    this.selectedOption = event.target.value;
  }

  handleNext() {
    const isCorrect = this.selectedOption === this.question.correct_option;
    this.answerSelected.emit(isCorrect);
    this.selectedOption = null;
  }

  render() {
    return (
      <div class="card mt-3 custom-card">
        <div class="card-body">
          <h5 class="card-title text-primary">{this.section} - {this.question.difficulty}</h5>
          <p class="card-text">{this.question.id}. {this.question.text}</p>
          <div class="options-container">
            {this.question.options.map(option => (
              <div class="form-check mb-2">
                <input
                  type="radio"
                  id={option}
                  class="form-check-input"
                  name="question"
                  value={option}
                  checked={this.selectedOption === option}
                  onChange={event => this.handleOptionChange(event)}
                />
                <label class="form-check-label" htmlFor={option}>{option}</label>
              </div>
            ))}
          </div>
          <button class="btn btn-primary mt-3 w-100" onClick={() => this.handleNext()} disabled={!this.selectedOption}>
            Next
          </button>
        </div>
      </div>
    );
  }
}
