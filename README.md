# dapp-server
- 快速构建 合约端

### 项目集成
#### 智能合约
1. 迁移 (必须)
2. 简易存储
3. 基于ERC20发行的教程代币
#### 拓展
1. openzeppelin-solidity: 2.5.0

### 启动
#### 环境
- os: Windows 10 Pro 1903
- node: v12.16.1
- npm: 6.13.4
- truffle: v5.1.16
- app: Ganache v2.1.2
#### 导入
- 放在与 dapp-client 同级目录
```
root
|-dapp-client
|-dapp-server
```
- 或修改 truffle-config.js 生成编译文件的目录
#### IDE配置(WebStorm)
- (推荐) 设置中 在 Plugins 中添加 Intellij Solidity 插件支持 Solidity 语言高亮
- (可选) 设置中 在 Node.js and NPM 勾选 Coding assistance for Node.js 来支持
- (可选) 配置 Scopes

### 使用
#### 打开 Ganache 客户端
- 选择 Quickly Start
#### 启动与客户端交互网络(推荐)
> truffle console
- 会从 truffle-config.js 配置文件里network选项对应的网络进行交互
- 进入 truffle 控制台. 之后操保持作控制台开启 并在控制台内执行
- eg: truffle(_XXX_)> 
#### 迁移
- 将智能合约部署到客户端
> migrate
#### 存储
- 在 Ganache 客户端 存储数据
- 在 dapp-client 中使用 Ganache 客户端 生成的账户进行交互

### 完成
- end

