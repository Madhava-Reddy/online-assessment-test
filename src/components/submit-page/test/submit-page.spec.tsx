import { newSpecPage } from '@stencil/core/testing';
import { SubmitPage } from '../submit-page';

describe('submit-page', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SubmitPage],
      html: `<submit-page></submit-page>`,
    });
    expect(page.root).toEqualHtml(`
      <submit-page>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </submit-page>
    `);
  });
});
