const path = require('path')
module.exports = {
    // 与客户端联动
    networks: {
        development: {
            host: 'localhost',
            port: '7545',
            network_id: '*',
        }
    },
    // 生成编译文件的目录
    contracts_build_directory: path.join(__dirname, "../dapp-client/src/contracts"),
}
