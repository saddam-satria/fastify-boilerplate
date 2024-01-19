import { expect } from 'chai';

const sum = (a, b) => {
  return a + b;
};

describe('testing function sum ', () => {
  it('should return 4', (done) => {
    expect(sum(2, 2)).to.eq(4);
    done();
  });
});
