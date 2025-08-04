# Cloudflare Pages 文件上传服务

基于 Cloudflare Pages 的文件上传服务。

## 特性

- 专为 Cloudflare Pages 设计
- 支持多文件上传
- 支持拖拽上传
- 支持纯文本链接
- 自动扩展名补全
- 前端直传，无需服务器中转
- 支持 CORS 跨域请求

## 部署到 Cloudflare Pages

1. 将此仓库推送到 GitHub
2. 在 Cloudflare Pages 控制台连接您的 GitHub 仓库
3. 设置构建命令：`npm run build`
4. 设置发布目录：`/`
5. 部署

## 解决405错误

如果遇到405错误，请按以下步骤排查：

1. 检查`functions`目录是否正确配置
2. 确保`functions/upload.js`和`functions/link.js`文件存在
3. 检查前端代码中的API路径是否正确指向Cloudflare Pages Functions路由（在Pages中应使用`/api/upload`而不是`/upload`）
4. 重新部署项目以确保所有更改生效

## 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

## API接口

### 文件上传

```
POST /upload

表单数据:
- files[]: 文件数据

响应:
{
  "success": true,
  "url": "https://cdn.example.com/file.png"
}
```

### 纯文本链接

```
GET /link?link=https://example.com/file.png

响应:
https://cdn.example.com/file.png
```

## 技术栈

- 前端: 原生HTML/CSS/JavaScript
- 后端: Cloudflare Functions (Pages Functions)
- 构建工具: 无 (静态站点)

## 注意事项

- 本服务仅供学习和测试使用，请勿上传违法、侵权或敏感内容
- 文件由第三方点鸭社区CDN存储，不保证永久可用性
- 请勿上传涉及隐私、商业机密或其他受法律保护的内容
- 本站默认开启URL记录，所有上传链接将被记录保留
- 使用本服务即表示您同意承担所有相关责任
