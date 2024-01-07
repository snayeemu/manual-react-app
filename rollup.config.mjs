import { babel } from "@rollup/plugin-babel";
import replace from "@rollup/plugin-replace";
import commonjs from "@rollup/plugin-commonjs";
import { nodeResolve } from "@rollup/plugin-node-resolve";

export default {
  input: "src/main.js",
  output: {
    file: "public/bundle.js",
    format: "cjs",
  },
  plugins: [
    nodeResolve({ extensions: [".js", ".jsx"] }),
    babel({
      babelHelpers: "bundled",
      presets: ["@babel/preset-react"],
      extensions: [".js", ".jsx"],
    }),
    commonjs(),
    replace({
      "process.env.NODE_ENV": JSON.stringify("development"),
    }),
  ],
};
