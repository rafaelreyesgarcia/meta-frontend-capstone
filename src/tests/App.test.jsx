import { describe, it, expect } from 'vitest';

describe('something truthy and falsy', () => {
  it('true to be true', () => {
    expect(true).toBe(true);
  });

  it('false to be false', () => {
    expect(false).toBe(false);
  });
});

// import { render, screen } from "@testing-library/react";
// import ReservationForm from '../components/ReservationForm';

/*
test('Renders the date input label', () => {
    render(<ReservationForm />);
    const dateInputLabel = screen.getByText("Date Now");
    expect(dateInputLabel).toBeInTheDocument();
})
*/