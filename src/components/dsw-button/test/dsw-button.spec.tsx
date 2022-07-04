import { newSpecPage } from '@stencil/core/testing';
import { DswButton } from '../dsw-button';

describe('dsw-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DswButton],
      html: `<dsw-button></dsw-button>`,
    });
    expect(page.root).toEqualHtml(`
      <dsw-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </dsw-button>
    `);
  });
});
