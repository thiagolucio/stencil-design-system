import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'dsw-logo',
  styleUrl: 'dsw-logo.css',
  shadow: true,
})
export class DswLogo {

  @Prop() width: number;
  @Prop() url: string;

  render() {
    return <img class="logo" src={this.url} alt='Logo da Sem Parar' width={this.width} />;
  }

}
