<<<<<<< HEAD
export default {
  'public': {
    'demo': `
-----BEGIN PGP PUBLIC KEY BLOCK-----
=======
import demo from './keys/api_test.asc';
import maditab from './keys/madita_bernstein.asc';
<<<<<<< HEAD
>>>>>>> Improved key fixtures handling for test environment, added local storage stub class, added module tests for KeyStoreLocal, fixed/updated some existing tests
=======
import johnd from './keys/john_doe.asc';
<<<<<<< HEAD
>>>>>>> Added module tests for KeyringLocal.js (KeyringBase.js)
=======
import gordonf from './keys/gordon_freeman_pub.asc';
import maxp from './keys/max_payne_pub.asc';
>>>>>>> Added module tests for keyring,js

const PUBLIC_KEY_REGEX = /-----BEGIN PGP PUBLIC KEY BLOCK-----[\s\S]+?-----END PGP PUBLIC KEY BLOCK-----/g;
const PRIVATE_KEY_REGEX = /-----BEGIN PGP PRIVATE KEY BLOCK-----[\s\S]+?-----END PGP PRIVATE KEY BLOCK-----/g;

<<<<<<< HEAD
<<<<<<< HEAD
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
CJ+MalGkv63qu2lnqw==
=Fmxz
-----END PGP PUBLIC KEY BLOCK-----`
  },
  'secret': {
    'demo': `
-----BEGIN PGP PRIVATE KEY BLOCK-----
=======
const testKeys = {
  public: {},
  private: {}
};
=======
const testKeys = {};
>>>>>>> Added module tests for KeyringLocal.js (KeyringBase.js)

const armoredKeyFiles = [
  {name: 'demo', armored: demo},
  {name: 'maditab', armored: maditab},
  {name: 'johnd', armored: johnd},
  {name: 'gordonf', armored: gordonf},
  {name: 'maxp', armored: maxp}
];
>>>>>>> Improved key fixtures handling for test environment, added local storage stub class, added module tests for KeyStoreLocal, fixed/updated some existing tests

// default import
const defaultImports = ['demo', 'maditab'];
init(defaultImports);

export function init(imports) {
  testKeys.public = {};
  testKeys.private = {};
  for (const importName of imports) {
    handleKeyImport(importName);
  }
}

export function handleKeyImport(importName) {
  const armored = armoredKeyFiles.filter(({name}) => name === importName).pop().armored;
  const publicKeys = armored.match(PUBLIC_KEY_REGEX);
  const privateKeys = armored.match(PRIVATE_KEY_REGEX);
  if (publicKeys) {
    publicKeys.forEach(pub => {
      testKeys.public[importName] = pub;
    });
  }
  if (privateKeys) {
    privateKeys.forEach(priv => {
      testKeys.private[importName] = priv;
    });
  }
}

export default testKeys;
