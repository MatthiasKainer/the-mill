// ./src/testSetup.ts
import '@testing-library/jest-dom/extend-expect';

beforeEach(async () => {
    jest.resetAllMocks()
})

process.on('unhandledRejection', (reason, p) => {
  console.log('Unhandled Rejection at: Promise', p, 'reason:', reason);
  // application specific logging, throwing an error, or other logic here
});