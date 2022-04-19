const loadConfigFile = require(__dirname +
  "/node_modules/rollup/dist/loadConfigFile");
const rollup = require("rollup");

(async () => {
  const { options, warnings } = await loadConfigFile(
    __dirname + '/rollup.config-with-issue.js',
    { format: "es" }
  );

  warnings.flush();

  for (const optionsObj of options) {
    const bundle = await rollup.rollup(optionsObj);
    await Promise.all(optionsObj.output.map(bundle.write));
    if (bundle) {
      await bundle.close();
    }
  }
})();
