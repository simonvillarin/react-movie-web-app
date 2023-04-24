import autoprefixer from "autoprefixer";
import esbuild from "esbuild";
import esbuildEnvfilePlugin from "esbuild-envfile-plugin";
import { sassPlugin } from "esbuild-sass-plugin";
import postcss from "postcss";

// constants for configuration
const port = 8000;
const args = process.argv.slice(2);
const watch = args.includes("--watch");
const dev = args.includes("--dev");

const watchPlugin = {
  name: "watch-plugin",
  setup(build) {
    build.onStart(() => {
      console.log(`Build starting: ${new Date(Date.now()).toLocaleString()}`);
    });

    build.onEnd((result) => {
      if (result.errors.length > 0) {
        console.log(
          `Build finished, with errors ${new Date(Date.now()).toLocaleString()}`
        );
        console.log(result.errors);
      } else {
        console.log(
          `Build finished successfully: ${new Date(
            Date.now()
          ).toLocaleString()}`
        );
      }
    });
  },
};

let ctx = await esbuild.context({
  logLevel: "debug",
  metafile: true,
  entryPoints: ["src/index.js", "src/styles/index.scss"],
  outdir: "public/assets",
  bundle: true,
  loader: {
    ".js": "jsx",
    ".png": "dataurl",
    ".woff": "dataurl",
    ".woff2": "dataurl",
    ".eot": "dataurl",
    ".ttf": "dataurl",
    ".svg": "dataurl",
  },
  plugins: [
    esbuildEnvfilePlugin,
    sassPlugin({
      async transform(source) {
        const { css } = await postcss([autoprefixer]).process(source);

        return css;
      },
    }),
    watchPlugin,
  ],
  sourcemap: "external",
});

if (watch) {
  console.log("Waiting for changes...");
  ctx.watch();
}

if (dev) {
  ctx.serve({
    servedir: "public",
    port: port,
  });
}
