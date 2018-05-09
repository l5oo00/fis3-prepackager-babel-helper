/**
 * @file: index.js
 * @author: l5oo00
 */

'use strict';
let babel = require('babel-core');
let nodePathLib = require('path');

// 在这里生成  babel  helper， 并写入依赖
module.exports = function (ret, conf, settings, opt) {
    let helperNameList = [];

    fis.util.map(ret.src, (src, file) => {
        let list = file.helperNameList || [];
        list.forEach(name => {
            if (helperNameList.indexOf(name) === -1) {
                helperNameList.push(name);
            }
        });
    });

    if (helperNameList.length === 0) {
        return;
    }

    // babel helper 收集完成， 在这里生成 统一的文件
    let helperFilePath = opt.helperFilePath || 'widget/babel_helpers.js';
    let helperCode = babel.buildExternalHelpers(helperNameList, 'umd');
    let filePath = nodePathLib.join(fis.project.getProjectPath(), helperFilePath);
    let file = fis.file.wrap(filePath);

    file.setContent(helperCode);
    file.useBabel = false;
    file.isMod = true;

    let subPath = file.subpath;
    ret.src[subPath] = file;

    let id = file.getId();
    ret.ids[id] = file;
    file.map = {
        uri: file.getUrl(),
        type: file.rExt.replace(/^\./, '')
    };
    ret.map.res[id] = file.map;

    ret.pkg[subPath] = file;

    fis.compile.process(file);
};
