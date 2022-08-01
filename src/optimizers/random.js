"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.random = void 0;
const fittsLaw_1 = require("../objectiveFunctions/fittsLaw");
const samplers_1 = require("../samplers/samplers");
const random = (iterations, seed, frequencies) => {
    let bestValue = Infinity;
    let bestDesign = [];
    for (let i = 0; i < iterations; ++i) {
        const candidate = (0, samplers_1.ramdomsampler)(seed);
        const objectiveValue = (0, fittsLaw_1.objectiveFitts)(candidate, frequencies);
        if (objectiveValue < bestValue) {
            // Minimization task
            bestValue = objectiveValue;
            bestDesign = candidate;
        }
    }
    return [bestValue, bestDesign];
};
exports.random = random;
