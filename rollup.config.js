import ts from "rollup-plugin-typescript2";
import pkg from "./package.json";
import tuplePkg from "./tuple/package.json";

export default [
  {
    input: "./src/index.ts",

    output: [
      {
        file: pkg.module,
        format: "es",
        exports: "named"
      },
      {
        file: pkg.main,
        format: "umd",
        name: "no-try",
        sourcemap: true,
        exports: "named"
      }
    ],

    plugins: [
      ts({
        clean: true,
        tsconfigOverride: {
          compilerOptions: {
            module: "esnext",
            target: "esnext",
            declaration: true
          }
        }
      })
    ]
  },
  {
    input: "./src/tuple/index.ts",

    output: [
      {
        file: tuplePkg.module,
        format: "es",
        exports: "named"
      },
      {
        file: tuplePkg.main,
        format: "umd",
        name: "no-try",
        sourcemap: true,
        exports: "named"
      }
    ],

    plugins: [
      ts({
        clean: true,
        tsconfigOverride: {
          compilerOptions: {
            module: "esnext",
            target: "esnext",
            declaration: true
          }
        }
      })
    ]
  }
];
