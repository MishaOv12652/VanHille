import { StudentsService } from './students.service';

describe('StudentsService.buildLegacyCorrectAnswersArray', () => {
  const service = new StudentsService(undefined as any);

  it('reproduces the legacy Express 4 path-to-regexp truncation bug', () => {
    // Frontend sends "10/20/30/20/10/" (questions.component.ts), which
    // Express 5's `*splat` wildcard captures as this split-by-'/' array.
    const splat = ['10', '20', '30', '20', '10', ''];
    expect(service.buildLegacyCorrectAnswersArray(splat)).toEqual([
      '1',
      '20',
      '30',
      '20',
      '10',
      '',
    ]);
  });
});
