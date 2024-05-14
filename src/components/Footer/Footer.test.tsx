import Footer from './index';
import { render, screen, fireEvent } from '@testing-library/react';

describe('<AirbnbSearch />', () => {
  beforeEach(() => {
    render(<Footer />);
  });

  it('should find header text', () => {
    const footerHeading = screen.getByRole('heading', {
      name: 'Inspiration for future getaways',
    });

    expect(footerHeading).toBeInTheDocument();
  });

  it('should click a category', () => {
    const tab = screen.getByTestId('footer-tab-[2]');

    fireEvent.click(tab);
    const tabby = screen.getByTestId('footer-tab-[2]');

    expect(tabby).toHaveClass('border-b-2');
  });
});
