# bundler-treeshaking-comparison

Compare treeshaking/dead-code-elimination results for various tools

Currently the project includes results of
- rollup
- webpack + terser
- terser (just to confirm it has the same results as with webpack)

## Examples
All the examples are located in `test/` folder. The results are stored using Jest Snapshots testing.
You can run the tests (after installing all dependencies `npm ci`) using
```sh
npm test
```
Each test case loads a file `input.js` and stores to results in a `*.snap` file

## Examples Evaluation

### function calls
Statical analyzers have limited possibilities to check a "meaning" of a function call.
For such tools, it is safe to assume that all function calls could possibly cause a side-effect.
That is how `terser` behaves. `rollup`, on the other hand, takes an extra step and checks if such function does anything outside its scope or not.

For e.g. library authors, it is important to explicitly set some expressions as "side-effect free". This can be done usine a `/* #__PURE__ */` annotation before such expression.

See the examples in `test/factories/`

### mutating function
See the examples in
- `test/mutate-object`
- `test/mutate-function`

There is a filed issue about it https://github.com/terser/terser/issues/293
Again, `rollup` seems to do a good job.

## Contributing
Clone the repository, play around with it. If you find an interesting example or want to add another tool to compare its results, feel free to create a PR.