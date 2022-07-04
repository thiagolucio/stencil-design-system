import { newSpecPage } from '@stencil/core/testing';
import { DswLogo } from '../dsw-logo';

describe('dsw-logo', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DswLogo],
      html: `<dsw-logo></dsw-logo>`,
    });
    expect(page.root).toEqualHtml(`
      <dsw-logo>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </dsw-logo>
    `);
  });
});
