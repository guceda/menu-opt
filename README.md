# Combinatorial linear-menu optimization

The goal of this package is to provide a set of utilities to optimize the ordering of entries in a linear menu (e.g one-level menu).

## Structure

The package is structured as follows:

### Laws:

Set of rules to be used to rate the goodness of a given design.

The ones available are:

- _Fitts's Law_: Fitts's law is a predictive model of human movement primarily used in human-computer interaction and ergonomics. This scientific law predicts that the time required to rapidly move to a target area is a function of the ratio between the distance to the target and the width of the target.

  $$ MT = a+b\*log\_{2}(\frac{D}{W}+1)) $$

  `MT` stands for movement time, `D` is the distance of the cursor to the target, and `W` is its width, `a` and `b` define the slope (empirically determined constants).

### Objective Functions:

Functions that assign an objective score to a candidate design. Formalizes what is considered a good or bad design. The optimal design is the one that obtains the lower score when minimizing or the greater score when maximizing. Objective functions should be viewed as a predictor of quality for end-users. They make use of one or many of the laws above.

These objective functions consider a good design to have a lower selection time.

The ones available are:

- _Fitts's Law + frequency of use_: To determine how quickly an entry can be selected, a model of motor performance is used. In this case, the movement time is given by Fitts' Law. It takes into account the relevance of the different entries for a given task by considering the frequency of use. The optimal design should allow the most important (hence most frequent) entries to be clicked faster.

  $$ objFitts(menu, freqs) = \sum*{i=1}^{n} fittsLaw(menu*{i}) \* (freqs\_{i}|0) $$

- _Associations_: This objective function provides functionality to work with grouped entries. By providing a set of associations [0-1], it pulls associated items together (reward) and pushes unrelated items apart (penalty). The closer the associated elements are, the better the candidate design is.

$$
objAssoc(menu, assos) = \sum_{i=1}^{n}\sum_{j= 1}^{n}
\begin{cases}
    0,              & \text{if } (menu_{i} = \text{"-"}) ∨ (menu_{j} = \text{"-"})\\
    1,              & \text{if } (assos_{ij} = 0) ∧ (|i - j| = 1)\\
    assos_{ij} * |i-j|,              & \text{otherwise}\\
\end{cases}
$$

### Samplers (internal):

Samplers generate candidate designs to be rated. There exist random approaches, exact methods such as integer programming approaches, metaheuristic algorithms such as simulated annealing (SA) and many more. Depending on the approach, reaching the optimal solution would be faster or slower, or even assured or unlikely. Samplers are INTERNALLY used by the `optimizers` and not exposed.

The ones available are:

- _Random_: Permutations of menu entries are generated and later used by the `optimizer` to explore the design space.

### Optimizers:

Optimizers are the way we explore the design space, and the higher-level step of the process. They minimize a given `objective function` with the output of a `sampler` as a parameter.
$$ \min\_{d\in D} objFn(x) $$

The ones available are:

- _Random Search_: Uses the random sampler on a given objective function.

## Usage

Using the package is pretty straightforward. We need to import one of the `optimizers` and pass the required configuration to it.
All optimizers have the same signature:

```js
// PARAMETERS
{
  iterations, // number of iterations
  seed // menu to optimize -> ['save', 'print', 'save as']
  params // parameters required by the objective function
  objectiveFunction: // desired objective function
}
// OUTPUT
{
  bestScore, // score of best found result (remember we are minimizing)
  bestDesign // best found menu -> ['save', 'save as', 'print']
}
```

The output returs the best found design and its score.
The score is an absolute value that should not be used but to compare with its own kind.

### Example: Random Optimizer + Fitts's Objective Function

```ts
import { objectives, optimizers } from "..";

const menuEntries = ["open", "save", "close", "saveas"];

const frequencies = { open: 4, save: 10, close: 1, saveas: 2 };

const { bestDesign, bestScore } = optimizers.random({
  iterations: 1000,
  seed: menuEntries,
  objectiveFunction: objectives.fitts({ frequencies }),
});

console.log(JSON.stringify({ bestDesign, bestScore }, null, 2));

// {
//   "bestDesign": [ "save", "open", "saveas", "close" ],
//   "bestScore": 6.150977500432694
// }
```

### Example: Random Optimizer + (Fitts's Objective + weighted Associations Objective)

```ts
import { objectives, optimizers } from "../";
import { MenuType } from "../declarations/dataStructures";

// Group separators have to be provided as dashes ('-').
const menuEntries = ["open", "save", "-", "-", "close", "saveas"];

const frequencies = { open: 4, save: 10, close: 1, saveas: 2 };

// Associations with null size are not necessary.
const associations = {
  open: { close: 1 },
  save: { saveas: 0.9 },
  close: { save: 0.4 },
};

const combinedObjFn = (candidate: MenuType) => {
  return (
    objectives.fitts({ frequencies })(candidate) +
    0.5 * objectives.associations({ associations })(candidate)
  );
};

const { bestDesign, bestScore } = optimizers.random({
  iterations: 1000,
  seed: menuEntries,
  objectiveFunction: combinedObjFn,
});

console.log(JSON.stringify({ bestDesign, bestScore }, null, 2));

// {
//   "bestDesign": [ "save", "saveas", "-", "close", "open", "-" ],
//   "bestScore": 10.486313713864835
// }
```

## Development

The project is fully developed in Typescript. Working examples are provided under `src/demo`.

### Extending

Adding new `laws`, `objectiveFuncions`, `optimizers` or `samplers` is as easy as creating the new function following the Typescript interface provided for each case.

### Testing

Unit testing is done using `Jest`. To run the tests one can use `npm test`, or `npm test - myfile.test.ts` to run a single file.

### Transpiling

The project is ready to be transpiled to both `esm` and `cjs` using `tsc`. Scripts are available for both actions: `npm run compile-esm`, `npm run compile-cjs`. There is also a combined option: `npm run compile` and a watch version of the `esm`: `npm run compile-watch`. Transpilation also provides with the `d.ts` files.

### Debugging

The project is ready to be easily debugged and executed using `VSCode` debugging tool. The configuration file to be used is `ts-node`.

## References

- Oulasvirta, Antti, Per Ola Kristensson, Xiaojun Bi, and Andrew Howes, eds. Computational Interaction. Oxford: Oxford University Press, 2018. Oxford Scholarship Online, 2018. doi: 10.1093/oso/9780198799603.001.0001.
