# 点鸭社区CDN上传服务 (Cloudflare Pages版本)

这是一个可以在Cloudflare Pages上部署的文件上传服务，使用点鸭社区CDN作为存储后端。

## 特性

- 🚀 支持在Cloudflare Pages上部署
- 📁 支持多文件上传
- 🔗 支持纯文本链接生成
- 🌐 前端直传模式，无需服务器中转
- 🛡️ 完整的CORS支持
- 🎨 美观的响应式界面

## 部署到Cloudflare Pages

1. 将此仓库推送到GitHub
2. 在Cloudflare Pages控制台中创建新项目
3. 连接到您的GitHub仓库
4. 设置构建配置：
   - 构建命令: `npm run build`
   - 发布目录: `.`
5. 点击部署

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
GET /upload?link=https://example.com/file.png

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
