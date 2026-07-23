import { calcClassAverages, calcUserScore } from './grading.domain-service';

describe('calcClassAverages', () => {
  it('averages correctAperdif arrays into per-difficulty percentages', () => {
    const students = [
      { correctAperdif1: [5, 4, 3, 2, 1] },
      { correctAperdif1: [3, 4, 5, 1, 2] },
    ];
    expect(calcClassAverages(students, 1)).toEqual([80, 80, 80, 30, 30]);
  });

  it('throws the legacy Hebrew error when no students match', () => {
    expect(() => calcClassAverages([], 1)).toThrow(
      'אין סטודנטים שעשו את השאלון עם מספרי הקורס או הקבוצות שבחרת',
    );
  });
});

describe('calcUserScore', () => {
  const questions = Array.from({ length: 25 }, (_, i) => ({
    correctA: 1,
    dif: (i % 5) + 1,
  }));

  it('counts a correct answer per difficulty bucket', () => {
    const answers1 = Array.from({ length: 25 }, () => 1);
    const result = calcUserScore(questions, [{ Answers1: answers1 }], 1);
    expect(result).toEqual([5, 5, 5, 5, 5]);
  });

  it('throws when no student is found', () => {
    expect(() => calcUserScore(questions, [], 1)).toThrow('אין סטודנט כזה');
  });
});
