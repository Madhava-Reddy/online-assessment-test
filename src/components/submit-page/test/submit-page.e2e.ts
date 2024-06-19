import { newE2EPage } from '@stencil/core/testing';

describe('submit-page', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<submit-page></submit-page>');

    const element = await page.find('submit-page');
    expect(element).toHaveClass('hydrated');
  });
});
