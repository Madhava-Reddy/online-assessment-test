import { Component, h, State } from '@stencil/core';
import { state, handleNextQuestion } from '../../store/store';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true,
})
export class AppRoot {
  @State() started: boolean = false;


  handleAnswerSelected(event: any) {
    handleNextQuestion(event);
  }

  handleStart() {
    this.started = true;
  }

  render() {
    const currentQuestion = state.questions[state.currentSection][state.currentQuestionIndex];
    const totalQuestions = 20;
    const answeredQuestions =
      (state.answers['logical']?.length || 0) + (state.answers['psychometric']?.length || 0);
    const progress = (answeredQuestions / totalQuestions) * 100;

    return (
      <div class="container my-5">
        <div class="row justify-content-center">
          <div class="col-12 col-md-8">
            <div class="mb-3">
              <div class="progress">
                <div
                  class="progress-bar bg-success"
                  role="progressbar"
                  style={{ width: `${progress}%` }}
                  aria-valuenow={progress.toFixed(0)}
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  {progress.toFixed(0)}% Completed
                </div>
              </div>
            </div>

            <div class="card">
              <div class="card-body">
                {this.started ? (
                  state.completed ? (
                    <div class="d-flex align-items-center justify-content-center vh-100">
                      <submit-page answers={state.answers}></submit-page>
                    </div>
                  ) : currentQuestion ? (
                    <question-page
                      section={state.currentSection}
                      question={currentQuestion}
                      onAnswerSelected={(answer) => this.handleAnswerSelected(answer as any)}
                    ></question-page>
                  ) : (
                    <p class="text-center">Loading...</p>
                  )
                ) : (
                  <start-page onStart={() => this.handleStart()}></start-page>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
