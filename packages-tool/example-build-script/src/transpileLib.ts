import * as yargs from "yargs";
import childProcess from "child_process";
import { promisify } from "util";
import path from "path";

const BABEL_CONFIG = path.resolve(__dirname, "..", "config", "babel", "babel.config.reactLib.js");

const transpile = async (param: { babelConfig: string; outDir: string; moduleType: "cjs" | "es" }) => {
  const exec = promisify(childProcess.exec);
  const srcDir = "src";
  const extensions = [".ts", ".tsx"];

  const babelArgs = [
    "--config-file",
    param.babelConfig,
    srcDir,
    "--extensions",
    extensions.join(","),
    "--out-dir",
    param.outDir,
    "--source-maps",
    "--copy-files",
    "--no-copy-ignored",
  ];

  const command = ["babel", ...babelArgs].join(" ");
  const { stderr, stdout } = await exec(command, {
    env: {
      ...process.env,
      NODE_ENV: process.env.NODE_ENV != null ? process.env.NODE_ENV : "production",
      MODULE_TYPE: param.moduleType,
    },
  });

  if (stderr) {
    throw new Error(`failed with \n${stderr}`);
  }

  console.log(stdout);
};

yargs
  .scriptName("example-transpile-lib")
  .usage("$0")
  .command(
    "$0 [cjs] [es] [out-dir]",
    "welcome example-transpile-lib",
    (yargs) => {
      yargs.option("out-dir", {
        default: "dist",
        alias: "o",
        describe: "出力先ディレクトリ",
      });
      yargs.option("cjs", {
        default: true,
        alias: "c",
        describe: "CommonJS形式の出力有無",
        boolean: true,
      });
      yargs.option("es", {
        default: true,
        alias: "e",
        describe: "ESModuleの出力有無",
        boolean: true,
      });
    },
    async (argv) => {
      if ((argv["cjs"] as boolean) === true) {
        const outDir = argv["out-dir"] + "/cjs";
        await transpile({
          babelConfig: BABEL_CONFIG,
          outDir,
          moduleType: "cjs",
        });
      }
      if ((argv["es"] as boolean) === true) {
        const outDir = argv["out-dir"] + "/es";
        await transpile({
          babelConfig: BABEL_CONFIG,
          outDir,
          moduleType: "es",
        });
      }
    }
  )
  .help()
  .strict(true)
  .version(false)
  .parse();
