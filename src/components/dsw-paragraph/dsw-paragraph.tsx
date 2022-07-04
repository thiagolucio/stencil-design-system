import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'dsw-paragraph',
  styleUrl: 'dsw-paragraph.css',
  shadow: true,
})
export class DswParagraph {
  @Prop() appearance: string;
  @Prop() text: string;

  render() {
    return <p class={this.appearance}>{this.text}</p>;
  }
}
