import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'dsw-icon',
  styleUrl: 'dsw-icon.css',
  shadow: true,
})
export class DswIcon {

  @Prop() icon: string;
  @Prop() url: string;

  render() {
    return  <img class={this.icon} src={this.url} alt="Icone" />;
  }

}
