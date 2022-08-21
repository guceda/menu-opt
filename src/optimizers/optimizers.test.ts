import { fitts as fittsObjs } from '../objectiveFunctions';
import { random as randomOptimizer } from './random';

describe('optimizers', () => {
  describe('ramdom', () => {
    test('mock objective', () => {
      expect(
        randomOptimizer({
          iterations: 10,
          seed: ['c', 'a', 'b'],
          objectiveFunction: (candidate) => candidate.indexOf('a'),
        }).bestDesign[0]
      ).toBe('a');
    });
    test('fitts objective', () => {
      const iterations = 100000;
      const seed = ['open', 'save', 'close', 'undo', 'saveas', 'print', 'redo'];
      const frequencies = {
        open: 8,
        save: 10,
        close: 4,
        undo: 7,
        saveas: 9,
        print: 6,
        redo: 5,
      };
      const { bestDesign } = randomOptimizer({
        iterations,
        seed,
        objectiveFunction: fittsObjs({ frequencies }),
      });
      expect(bestDesign).toStrictEqual([
        'save',
        'saveas',
        'open',
        'undo',
        'print',
        'redo',
        'close',
      ]);
    });
  });
});
