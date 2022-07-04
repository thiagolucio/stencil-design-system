import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'dsw-social-login',
  styleUrl: 'dsw-social-login.css',
  shadow: true,
})
export class DswSocialLogin {
  @Prop() appearance: string;

  render() {
    return (
      <button class={`social-login ${this.appearance}`} type="button">
        <div class="icon"></div>
        <span></span>
      </button>
    );
  }
}
