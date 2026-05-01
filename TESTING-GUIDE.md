# Testing Guide for Your React Project

## How to Run Tests

### 1. Run All Tests
```bash
npm test
```
This will run all test files in watch mode (automatically re-runs when files change).

### 2. Run Tests Once
```bash
npm test -- --watchAll=false
```
Runs all tests once and exits.

### 3. Run Specific Test File
```bash
npm test -- --testPathPattern=home.test.js
```

### 4. Run Tests with Coverage
```bash
npm test -- --coverage
```
Shows test coverage report for your code.

## Test Files Created

### 1. App.test.js
- Tests main App component
- Mocks localStorage hook and fetch API
- Tests loading states and basic rendering

### 2. home.test.js  
- Tests Home component
- Checks for headset images rendering

### 3. navbar.test.js
- Tests Navbar component
- Checks for navigation elements

## Writing Additional Tests

### Test Naming Convention
- Test files should end with `.test.js`
- Place them alongside the components they test

### Example Component Test
```javascript
import { render, screen, fireEvent } from '@testing-library/react';
import YourComponent from './YourComponent';

test('renders component correctly', () => {
  render(<YourComponent />);
  expect(screen.getByText('Expected Text')).toBeInTheDocument();
});

test('handles user interactions', () => {
  render(<YourComponent />);
  const button = screen.getByRole('button');
  fireEvent.click(button);
  // Assert expected behavior
});
```

### Testing Context Components
```javascript
import { render, screen } from '@testing-library/react';
import { DataProvider } from '../context/DataContext';
import YourComponent from './YourComponent';

test('renders with context provider', () => {
  render(
    <DataProvider value={{ darkMode: true, handleDarkMode: jest.fn() }}>
      <YourComponent />
    </DataProvider>
  );
});
```

## Common Testing Patterns

### Mocking External Dependencies
```javascript
// Mock localStorage
const mockLocalStorage = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
};
global.localStorage = mockLocalStorage;

// Mock fetch
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ data: [] })
  })
);
```

### Testing Async Operations
```javascript
import { render, screen, waitFor } from '@testing-library/react';

test('handles async data loading', async () => {
  render(<Component />);
  await waitFor(() => {
    expect(screen.getByText('Loaded Data')).toBeInTheDocument();
  });
});
```

## Troubleshooting

### Common Issues
1. **"act() warnings"**: Use `waitFor` for async operations
2. **"not wrapped in act()"**: Wrap state updates in `act()` or use `waitFor`
3. **Mock errors**: Ensure all external dependencies are properly mocked

### Debugging Tests
- Use `screen.debug()` to print the current DOM
- Use `screen.logTestingPlaygroundURL()` to get a visual debugging tool

## Next Steps

1. Add tests for remaining components:
   - `features.test.js`
   - `productcategory.test.js` 
   - `testimonials.test.js`
   - `footer.test.js`

2. Test cart functionality
3. Test dark mode toggle
4. Test responsive behavior

## Resources
- [React Testing Library Docs](https://testing-library.com/docs/react-testing-library/intro/)
- [Jest Docs](https://jestjs.io/docs/getting-started)
