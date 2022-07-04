import { newSpecPage } from '@stencil/core/testing';
import { DswStoreButton } from '../dsw-store-button';

describe('dsw-store-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DswStoreButton],
      html: `<dsw-store-button></dsw-store-button>`,
    });
    expect(page.root).toEqualHtml(`
      <dsw-store-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </dsw-store-button>
    `);
  });
});
