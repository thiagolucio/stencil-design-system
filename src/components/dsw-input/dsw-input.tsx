import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'dsw-input',
  styleUrl: 'dsw-input.css',
  shadow: true,
  // scoped: true,
})
export class DswInput {

  @Prop() label: string;
  @Prop() inputId: string;
  @Prop() type: string;
  @Prop() icon?: string;
  @Prop() textError?: string;
  @Prop() required?: boolean;
  @Prop() disabled?: boolean;

  render() {

    const Icon = <span class={this.textError ? 'border-bottom-error' : null }><img src={this.icon} alt="ícone decorativo do input" class="icon-input"/></span>;
    const FieldError = <div class="input-error">{this.textError}</div>;

    return (
      <div class="input-container">
        <div class="group">
          <input type={this.type} id={this.inputId} class={this.textError ? 'border-bottom-error' : null } disabled={this.disabled} required={this.required} alt={this.label}/>
          {this.icon ? Icon : " "}
          <label class={this.textError ? 'label-error' : null } htmlFor={this.inputId}>{this.label}</label>
          {this.textError ? FieldError : " "}
        </div>
      </div>
    );
  }

}
