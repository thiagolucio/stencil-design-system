import { newSpecPage } from '@stencil/core/testing';
import { DswInput } from '../dsw-input';

describe('dsw-input', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DswInput],
      html: `<dsw-input></dsw-input>`,
    });
    expect(page.root).toEqualHtml(`
      <dsw-input>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </dsw-input>
    `);
  });
});
