import { Test, TestingModule } from '@nestjs/testing';
import { DialogResolver } from './dialog.resolver';

describe('DialogResolver', () => {
  let resolver: DialogResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DialogResolver],
    }).compile();

    resolver = module.get<DialogResolver>(DialogResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
