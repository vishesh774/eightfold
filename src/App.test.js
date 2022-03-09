import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import { Form } from "antd";
import InputField from './components/common/InputField';
import mockData from "./mock.json";

const {
  inputQuestion
} = mockData;

const setup = () => {
  const utils = render(<Form><InputField question={inputQuestion} /></Form>)
  // eslint-disable-next-line testing-library/prefer-screen-queries
  const input = utils.getByLabelText('This is question 1')
  return {
    input,
    ...utils,
  }
}
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/First Form/i);
  expect(linkElement).toBeInTheDocument();
});

test('It should allow the input value', () => {
  const {input} = setup()
  fireEvent.change(input, {target: {value: '23'}})
  expect(input.value).toBe('23')
})