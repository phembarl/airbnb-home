import AirbnbSearch from './index';
import { render, screen, fireEvent } from '@testing-library/react';

const setup = () => render(<AirbnbSearch />);

describe('<AirbnbSearch />', () => {
  beforeEach(() => {
    render(<AirbnbSearch />);
  });

  it('renders without crashing', () => {
    const wrapper = setup();

    expect(wrapper).toBeTruthy();
  });

  it('should be able to type in destination', () => {
    const destinationSearch: HTMLInputElement = screen.getByPlaceholderText(
      'Search destinations'
    );
    fireEvent.change(destinationSearch, { target: { value: 'Maldives' } });
    expect(destinationSearch.value).toBe('Maldives');
  });

  it('should toggle guest dropdown', () => {
    const toggler = screen.getByTestId('guest-dropdown-input');
    const dropdown = screen.getByTestId('guest-dropdown');

    fireEvent.click(toggler);
    expect(dropdown).not.toHaveClass('hidden');

    fireEvent.click(toggler);
    expect(dropdown).toHaveClass('hidden');
  });

  it('should change the number of guests', () => {
    const addGuest = screen.getByTestId('adult-plus');
    const removeGuest = screen.getByTestId('adult-minus');

    fireEvent.click(addGuest);
    const oneGuest = screen.getByText(/1 guest/i);
    expect(oneGuest).toBeInTheDocument();

    fireEvent.click(addGuest);
    const twoGuests = screen.getByText('2 guests');
    expect(twoGuests).toBeInTheDocument();

    fireEvent.click(removeGuest);
    expect(oneGuest).toBeInTheDocument();
  });
});
