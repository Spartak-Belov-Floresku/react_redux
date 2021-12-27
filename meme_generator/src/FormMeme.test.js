import { render, fireEvent } from '@testing-library/react';
import FormMeme from './FormMeme';

let memeForm;

describe("<FormMeme /> basics", () => {
  beforeEach(() => {
    memeForm = render(<FormMeme />)
  })
  
  it('renders', () => {
    expect(memeForm).toBeTruthy();
  });
  it('matches snapshot', () => {
    expect(memeForm.asFragment()).toMatchSnapshot();
  });
})


it('updates state with topText input', () => {
  // mount form and mock addMeme
  const mockFn = jest.fn();
  const {getByText} = render(<FormMeme createMeme={mockFn} />);

  fireEvent.click(getByText('Generate Meme!'));

  expect(mockFn).toHaveBeenCalled();
});