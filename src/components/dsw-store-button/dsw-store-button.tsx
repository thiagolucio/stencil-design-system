import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'dsw-store-button',
  styleUrl: 'dsw-store-button.css',
  shadow: true,
})
export class DswStoreButton {

  @Prop() appearance: string;
  @Prop() text: string;

  render() {
    return (
      <button class={`store-button ${this.appearance}`} type="button" title="Botão da Loja">
        <div class="icon"></div>
        <div class="store-button-text">
          <div class="slogan-button-store">{this.text}</div>
          <span></span>
        </div>
      </button>
    );
  }

}
