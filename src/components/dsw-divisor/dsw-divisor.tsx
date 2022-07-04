import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'dsw-divisor',
  styleUrl: 'dsw-divisor.css',
  shadow: true,
})

export class DswDivisor {

  @Prop() appearance: string;

  render() {
    return <div class={`divisor ${this.appearance}`}></div>;
  }

}
