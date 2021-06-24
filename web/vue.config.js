const argvs = JSON.parse(process.env.npm_config_argv).original;
const target = argvs[1].replace("--", "");

module.exports = {
  chainWebpack: config => {
    config
      .entry("app")
      .clear()
      .add(`./src/pages/${target}/main.js`);
  }
};
