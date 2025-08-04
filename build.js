const fs = require('fs-extra');
const path = require('path');

async function buildForPages() {
  console.log('开始构建Cloudflare Pages版本...');
  
  // 创建dist目录
  await fs.ensureDir('dist');
  
  // 复制静态文件
  const staticFiles = ['index.html', 'style.css', 'test.html'];
  for (const file of staticFiles) {
    if (await fs.pathExists(file)) {
      await fs.copy(file, `dist/${file}`);
      console.log(`复制文件: ${file}`);
    }
  }
  
  // 创建Pages的函数目录
  await fs.ensureDir('dist/functions');
  
  console.log('构建完成！文件已生成到 dist/ 目录');
  console.log('请将 dist/ 目录的内容部署到 Cloudflare Pages');
}

buildForPages().catch(console.error); 