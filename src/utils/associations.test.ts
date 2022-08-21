import { getAssociation } from './associations';

describe('utils', () => {
  describe('associations', () => {
    test('getAssociation', () => {
      const associations = { a: { b: 1 }, b: { c: 1 } };

      expect(getAssociation('a', 'b', associations)).toBe(1);
      expect(getAssociation('b', 'a', associations)).toBe(1);
      expect(getAssociation('a', 'b', associations)).toBe(1);
      expect(getAssociation('b', 'a', associations)).toBe(1);
      expect(getAssociation('b', 'c', associations)).toBe(1);
      expect(getAssociation('c', 'b', associations)).toBe(1);

      expect(getAssociation('c', 'a', associations)).toBe(0);
      expect(getAssociation('a', 'c', associations)).toBe(0);
    });
  });
});
