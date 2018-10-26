yaml = require('js-yaml');
fs = require('fs');

const readYamlFile= (filePath) => {
    try {
        const targetYamlFile = fs.readFileSync(filePath);
        return yaml.safeLoad(targetYamlFile, 'utf8');
    } catch (e) {
        throw new Error(e)
    }
};
const readYamlEnv = (envFile) => {
    if (envFile.propertyIsEnumerable(targetENV)) {
        return envFile[targetENV];
    }
    throw new Error('env yaml not target')
};


const envLocal = process.env;
// console.log(envLocal);

const test = readYamlFile(process.argv[2]);
// console.log(test);

const envFile = readYamlFile(process.argv[3]);
console.log(envFile);

const targetENV = process.argv[4].replace('-', '');
console.log(targetENV);


console.log(readYamlEnv(envFile));

