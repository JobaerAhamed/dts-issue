/**
 * Not importing the ttypescript
 */
// import ttypescript from "ttypescript";
import dts from "rollup-plugin-dts";

let config = [{
  input: 'my-input/index.d.ts',
  output: [
    {
      file: 'dist/my-library.d.ts',
      format: "esm",
    },
  ],
  onwarn: (warning) => {
    if (warning.code === "NON_EXISTENT_EXPORT") {
      throw new Error(warning.message);
    }
    console.warn(warning.toString());
  },
  plugins: [
    dts(),
  ],
}];

export default config;
