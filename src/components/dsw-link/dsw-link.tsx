import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'dsw-link',
  styleUrl: 'dsw-link.css',
  shadow: true,
})
export class DswLink {

  @Prop() url?: string;
  @Prop() target?: string;
  @Prop() appearance?: string;
  @Prop() text?: string;

  render() {
    return (
      <a href={this.url} target={this.target} class={this.appearance}>
        {this.text}
      </a>
    );
  }
}
