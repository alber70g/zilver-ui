import { a as patchEsm, b as bootstrapLazy } from './core-aec0e25e.js';

const defineCustomElements = (win, options) => {
  return patchEsm().then(() => {
    bootstrapLazy([["zui-number-input_2",[[1,"zui-number-input",{"placeholder":[1],"minimalNumber":[2,"minimal-number"],"value":[1537],"numValue":[32]},[[0,"keydown","handleKeyDown"]]],[0,"zui-text-input",{"placeholder":[1],"textValue":[32]},[[0,"keydown","handleKeyDown"]]]]]], options);
  });
};

export { defineCustomElements };
