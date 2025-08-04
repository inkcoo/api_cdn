# 部署到 Cloudflare Pages

## 部署步骤

1. 将此仓库推送到 GitHub
2. 在 Cloudflare Pages 控制台连接您的 GitHub 仓库
3. 设置构建命令：`npm run build`
4. 设置发布目录：`/`
5. 部署

## 配置说明

- 本项目使用 Cloudflare Pages Functions，API 端点位于 `/api/upload` 和 `/api/link`
- 项目已正确配置 CORS，支持跨域请求
- 项目已添加 Hono 依赖，确保 Functions 正常运行

## 常见问题

### 405 错误

如果遇到 405 错误，请检查：

1. 确保 `functions` 目录中的 `upload.js` 和 `link.js` 文件存在
2. 确保前端代码中的 API 路径正确指向 `/api/upload`
3. 重新部署项目以确保所有更改生效

### 依赖问题

如果遇到依赖问题，请确保 `package.json` 中包含 Hono 依赖：

```json
"dependencies": {
  "hono": "^3.0.0"
}
```

## 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev
```