import { BaseEntity } from './base.entity';

describe('BaseEntity', () => {
  it('should work', () => {
    expect(new BaseEntity()).toBeInstanceOf(BaseEntity);
  });
});
