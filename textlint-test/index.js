const { TextlintKernel } = require('@textlint/kernel');
const readlineSync = require('readline-sync');

// create instance of Textlint
const kernel = new TextlintKernel();

// factory function of 'textlint-rule-preset-japanese' rules
function mapUtil(presets) {
  const rules = presets.rules;
  const configs = presets.rulesConfig;
  return Object.keys(rules).map(key => {
    // if configs[key] has no option, option will be empty Object
    return { ruleId: key, rule: rules[key], option: { ...configs[key] } };
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

// output
console.log(options);

// main operations
text = readlineSync.question('text >');
kernel.lintText(text, options).then(result => {
  console.log(result);
});
