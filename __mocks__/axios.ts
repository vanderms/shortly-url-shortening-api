const axiosMock = {
  get: jest.fn(() => Promise.resolve({ data: {} })),
};

export default axiosMock;
