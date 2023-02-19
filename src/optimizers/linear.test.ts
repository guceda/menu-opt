import { fitts as fittsObjs } from '../objectiveFunctions';
import { linear as linearOptimizer } from './linear';

describe('optimizers', () => {
  describe('ramdom', () => {
    test('mock objective', () => {
      expect(
        linearOptimizer({
          seed: ['c', 'a', 'b'],
          objectiveFunction: (candidate) => candidate.indexOf('a'),
        }).bestDesign[0]
      ).toBe('a');
    });
    test('fitts objective', () => {
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
      const { bestDesign } = linearOptimizer({
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
