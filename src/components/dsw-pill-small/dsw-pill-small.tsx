import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'dsw-pill-small',
  styleUrl: 'dsw-pill-small.css',
  shadow: true,
})
export class DswPillSmall {

  @Prop() text: string;
  @Prop() disabled: boolean;

  render() {
    return (
      <button class="pill-small" disabled={this.disabled}>
        {this.text}
      </button>
    );
  }

}
