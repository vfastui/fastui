import{o as n,c as a,a as s}from"./app.7ac4a33e.js";const t='{"title":"快速使用","description":"如何使用 fastui","frontmatter":{"page":true,"title":"快速使用","description":"如何使用 fastui"},"headers":[{"level":2,"title":"安装","slug":"安装"},{"level":2,"title":"安装和配置插件加速开发","slug":"安装和配置插件加速开发"}],"relativePath":"quick.md","lastUpdated":1628508176921}',p={},o=s('<h2 id="安装"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><div class="language-shell"><pre><code><span class="token function">npm</span> <span class="token function">install</span> -S @vfastui/fastui\n</code></pre></div><h2 id="安装和配置插件加速开发"><a class="header-anchor" href="#安装和配置插件加速开发" aria-hidden="true">#</a> 安装和配置插件加速开发</h2><p>安装 vite-plugin-components</p><div class="language-shell"><pre><code><span class="token function">npm</span> <span class="token function">install</span> -D vite-plugin-components\n</code></pre></div><p>在vite.config中配置</p><div class="language-js"><pre><code>plugins<span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token function">vue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token function">WindiCSS</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token function">ViteComponents</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      globalComponentsDeclaration<span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span>\n      customComponentResolvers<span class="token operator">:</span> <span class="token punctuation">[</span>\n        <span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n          <span class="token keyword">if</span> <span class="token punctuation">(</span>name<span class="token punctuation">.</span><span class="token function">startsWith</span><span class="token punctuation">(</span><span class="token string">&quot;FF&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token keyword">let</span> partialName <span class="token operator">=</span> name<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token keyword">return</span> <span class="token punctuation">{</span>\n              importName<span class="token operator">:</span> partialName<span class="token punctuation">,</span>\n              path<span class="token operator">:</span> <span class="token string">&quot;@vfastui/fastui&quot;</span><span class="token punctuation">,</span>\n              sideEffects<span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">@vfastui/fastui/dist/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>partialName<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>partialName<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">.css</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>\n            <span class="token punctuation">}</span><span class="token punctuation">;</span>\n          <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token punctuation">]</span>\n</code></pre></div><p>这样就不用导入也不用注册了</p><p>直接在模版中使用 如 <code>&lt;FFButton&gt; &lt;FFTag&gt;</code></p>',9);p.render=function(s,t,p,e,c,u){return n(),a("div",null,[o])};export{t as __pageData,p as default};
