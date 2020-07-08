const fs = require('fs')
const _path = require('path')

const menuMap = require('./menuMap')

function filterMd(fileName) {
    let _name
    if (fileName === 'README.md') {
        _name = ''
    } else {
        _name = fileName.replace('.md', '')
    }
    return _name
}

function sortConfig(data) {
    return data.sort(function(a, b) {
        if(menuMap[a] && menuMap[b])
        return menuMap[a].key > menuMap[b].key
    })
}

module.exports = {
    renderSidebarConfig(entryPath) {
        let result = []
        function finder(path, flag) {
            let _tmp = []
            let files = fs.readdirSync(path)
            files = sortConfig(files)
            files.forEach((fileName, index) => {
                const fPath = _path.join(path, fileName)
                const stats = fs.statSync(fPath)
                if (stats.isFile() && fileName.indexOf('.md') > 0) {
                    if (!flag) {
                        result.push(filterMd(fileName))
                    }
                    _tmp.push(filterMd(fPath.replace(`${entryPath}/`, '')))
                }
                if (stats.isDirectory()) {
                    const menu = menuMap[fileName] && menuMap[fileName].value
                    if(menu) {
                        result.push({
                            title: menu,
                            collapsable: true,
                            children: finder(fPath, true)
                        })
                    }
                    
                }
            })
            return _tmp
        }

        finder(entryPath)
        return result
    }
}