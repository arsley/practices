const { TextlintKernel } = require('@textlint/kernel');
const readlineSync = require('readline-sync');

// create instance of Textlint
const kernel = new TextlintKernel();

// factory function of 'textlint-rule-preset-japanese' rules
function mapUtil(presets) {
  const rules = presets.rules;
  const configs = presets.rulesConfig;
  return Object.keys(rules).map(key => {
    let r = { ruleId: key, rule: rules[key] };
    if (configs[key]) {
      if (typeof configs[key] === 'object') {
        Object.assign(r, { option: { ...configs[key] } })
      } else if (typeof configs[key] === 'boolean') {
        Object.assign(r, { option: configs[key] })
      }
    }
    return r;
  });
}

// configuring textlint's option
const presetJapanese = require('textlint-rule-preset-japanese');
const japaneseRules = mapUtil(presetJapanese);
const options = {
  filePath: '<None>',
  ext: '.txt',
  plugins: [
    {
      pluginId: 'text',
      plugin: require("@textlint/textlint-plugin-text")
    }
  ],
  rules: japaneseRules
};

// main operations
text = readlineSync.question('text >');
kernel.lintText(text, options).then(result => {
  console.log(result);
});
