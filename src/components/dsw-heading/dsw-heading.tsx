import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'dsw-heading',
  styleUrl: 'dsw-heading.css',
  shadow: true,
})
export class DswHeading {

  @Prop() appearance?: string;
  @Prop() text?: string;

  render() {
    return (
      <span class={this.appearance}>{this.text}</span>
    );
  }

}
