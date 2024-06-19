import { newSpecPage } from '@stencil/core/testing';
import { StartPage } from '../start-page';

describe('start-page', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [StartPage],
      html: `<start-page></start-page>`,
    });
    expect(page.root).toEqualHtml(`
      <start-page>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </start-page>
    `);
  });
});
