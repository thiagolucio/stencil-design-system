import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'dsw-button',
  styleUrl: 'dsw-button.css',
  shadow: true,
})

export class DswButton {

  @Prop() text: string;
  @Prop() appearance: string;
  @Prop() type: string;

  render() {
    return (
      <button class={`button ${this.appearance}`} type={this.type}>
        <span>{this.text}</span>
      </button>
    );
  }
}
