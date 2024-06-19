import { Component, h, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'start-page',
  styleUrl: 'start-page.css',
  shadow: true,
})
export class StartPage {
  @Event() start: EventEmitter;

  handleStart() {
    this.start.emit();
  }

  render() {
    return (
      <div class="start-container">
        <h1>Welcome to the Online Assessment Test</h1>
        <button class="btn btn-primary" onClick={() => this.handleStart()}>Start</button>
      </div>
    );
  }
}
