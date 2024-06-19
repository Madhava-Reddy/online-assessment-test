import { newE2EPage } from '@stencil/core/testing';

describe('start-page', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<start-page></start-page>');

    const element = await page.find('start-page');
    expect(element).toHaveClass('hydrated');
  });
});
