import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'dsw-subtitle',
  styleUrl: 'dsw-subtitle.css',
  shadow: true,
})
export class DswSubtitle {
  @Prop() appearance: string;
  @Prop() text: string;

  render() {
    return <span class={this.appearance}>{this.text}</span>;
  }
}
