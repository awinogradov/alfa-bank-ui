var path = require('path'),
    rootDir = path.join(__dirname, '..', '..');

module.exports = [
    { path: path.join(rootDir, 'libs', 'bem-core',  'common.blocks'), check: false },
    { path: path.join(rootDir, 'libs', 'bem-core',  'desktop.blocks'), check: false },
    { path: path.join(rootDir, 'libs', 'bem-components', 'common.blocks'), check: false },
    { path: path.join(rootDir, 'libs', 'bem-components', 'desktop.blocks'), check: false },
    { path: path.join(rootDir, 'libs', 'bem-forms',  'common.blocks'), check: false },
    { path: path.join(rootDir, 'libs', 'bem-grid', 'common.blocks'), check: false },
    { path: path.join(rootDir, 'libs', 'bem-typography', 'common.blocks'), check: false },
    { path: path.join(rootDir, 'common.blocks') }
];
