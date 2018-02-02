/*
 * @Author: yanxiaodi 
 * @Date: 2018-02-02 16:55:41 
 * @Last Modified by: didilinkin@vip.qq.com
 * @Last Modified time: 2018-02-02 17:00:48
 */
const tsImportPluginFactory = require('ts-import-plugin')
const { getLoader } = require("react-app-rewired");
const rewireLess = require('react-app-rewire-less');

module.exports = function override(config, env) {
  const tsLoader = getLoader(
    config.module.rules,
    rule =>
      rule.loader &&
      typeof rule.loader === 'string' &&
      rule.loader.includes('ts-loader')
  );

  tsLoader.options = {
    getCustomTransformers: () => ({
      before: [ tsImportPluginFactory({
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
      }) ]
    })
  };

  config = rewireLess.withLoaderOptions({
    modifyVars: { "@primary-color": "#1DA57A" },
  })(config, env);

  return config;
}