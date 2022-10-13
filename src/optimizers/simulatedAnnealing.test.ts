import { fitts as fittsObjs } from '../objectiveFunctions';
import { simulatedAnnealing as simulatedAnnealingOptimizer } from './';

describe('optimizers', () => {
  describe('simulated annealing', () => {
    test('Find solution', () => {
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
      const { bestDesign } = simulatedAnnealingOptimizer({
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
