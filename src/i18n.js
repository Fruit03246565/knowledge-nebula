const zh={
 'Your documents, connected.':'让你的文档彼此连接。','documents':'份文档','passages':'个片段',
 'Processing…':'正在处理…','+ Add document':'+ 上传文档','Library':'文档库',
 'Semantic AI answers':'语义检索问答','DeepSeek · source-grounded answers':'DeepSeek · 依据原文回答','Source retrieval mode':'原文检索模式',
 'Find a document…':'搜索文档…','Give your universe a first star.':'点亮知识宇宙的第一颗星。',
 'Upload a PDF, Markdown or text document. Select a star to read its original passages, or ask a question below.':'上传 PDF、Markdown 或文本文件。点击星点阅读原文，也可以在下方提问。',
 'Files stay on this server. When configured, your AI provider receives excerpts for indexing and answers.':'文件保存在此服务器。启用 AI 后，相关片段将发送给模型服务商，用于处理文档和回答问题。',
 'Ask your documents a question…':'针对文档提一个问题…','Working…':'正在回答…','Ask ↗':'提问 ↗',
 'Close document':'关闭文档','Original document':'文档原文','AI summary':'AI 摘要','Character offset':'原文字符位置',
 'Read all passages':'查看全部片段','Drag to orbit · Scroll to zoom · Select a document star':'拖动旋转 · 滚轮缩放 · 点击文档星点',
 'Galaxy renderer adapted from Poetry Cloud · Cohenjikan':'星云渲染源自 Poetry Cloud · Cohenjikan',
 'Cannot load document library':'无法加载文档库','Summary based on the first 10,000 characters.':'摘要基于原文前 10,000 个字符。'
}
export const translate=(lang,text)=>lang==='zh'?(zh[text]||text):text
