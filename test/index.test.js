import { expect } from 'chai';
import index from '../src/index';

describe('index', () => {
  it('returns \'Hello world!\'', () => {
    expect(index()).to.deep.equal('Hello world!');
  });
});
