const isPangram = require('../src/is_pangram');

describe('isPangram()', () => {
  // describe('isPangram()', function () {
    // test function exists
  test('isPangram() is defined', () => {
    expect(isPangram).toBeDefined();
  });

  test('works with a pangram with only lower case', () => {
    // Arrange
    const text = 'the quick brown fox jumps over the lazy dog';

    // Act
    const answer = isPangram(text);

    // Assert
    expect(answer).toEqual(true);
  });

  test('works with "abcdefghijklmnopqrstuvwxyz"', () => {
    // Arrange
    const text = 'abcdefghijklmnopqrstuvwxyz'
    // Act
    const answer = isPangram(text);

    // Assert
    expect(answer).toEqual(true);

  });

  test("missing character 'x'", () => {
    // Arrange
    const text = 'the quick brown fo jumps over the lazy dog';

    // Act
    const answer = isPangram(text);

    // Assert
    expect(answer).toEqual(false);

  });

  test('empty sentence', () => {
    // Arrange
    const text = '';

    // Act
    const answer = isPangram(text);

    // Assert
    expect(answer).toEqual(false);

  });

  test('pangram with underscores instead of spaces works', () => {
    // Arrange

    // Act

    // Assert

  });

  test('pangram with numbers', () => {
    // Arrange
    const text = '123456789';

    // Act
    const answer = isPangram(text);

    // Assert
    expect(answer).toEqual(false);

  });

  // Write your own test case
});
