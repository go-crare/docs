import{_ as s,c as n,o as a,Q as l}from"./chunks/framework.31184730.js";const b=JSON.parse('{"title":"发送","description":"","frontmatter":{"title":"发送","page":"doc"},"headers":[],"relativePath":"zh/guide/api/send.md","filePath":"zh/guide/api/send.md","lastUpdated":null}'),p={name:"zh/guide/api/send.md"},e=l(`<h1 id="sendable" tabindex="-1">Sendable <a class="header-anchor" href="#sendable" aria-label="Permalink to &quot;Sendable&quot;">​</a></h1><p>Send无疑是Telebot中最重要的方法。 <code>Send()</code> 接受一个收件人(可以是用户,组或频道)和一个可发送对象。 除了Telebot提供的媒体类型(照片、音频、视频等)之外的其他类型都是可发送的。 如果您创建自己的复合类型，并且它们满足Sendable接口，Telebot将能够将它们发送出去。</p><div class="language-go vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// Sendable is any object that can send itself.</span></span>
<span class="line"><span style="color:#6A737D;">//</span></span>
<span class="line"><span style="color:#6A737D;">// This is pretty cool, since it lets bots implement</span></span>
<span class="line"><span style="color:#6A737D;">// custom Sendables for complex kinds of media or</span></span>
<span class="line"><span style="color:#6A737D;">// chat objects spanning across multiple messages.</span></span>
<span class="line"><span style="color:#F97583;">type</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Sendable</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">interface</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#79B8FF;">Send</span><span style="color:#E1E4E8;">(</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">Bot, Recipient, </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">SendOptions) (</span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">Message, </span><span style="color:#F97583;">error</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// Sendable is any object that can send itself.</span></span>
<span class="line"><span style="color:#6A737D;">//</span></span>
<span class="line"><span style="color:#6A737D;">// This is pretty cool, since it lets bots implement</span></span>
<span class="line"><span style="color:#6A737D;">// custom Sendables for complex kinds of media or</span></span>
<span class="line"><span style="color:#6A737D;">// chat objects spanning across multiple messages.</span></span>
<span class="line"><span style="color:#D73A49;">type</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Sendable</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">interface</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#005CC5;">Send</span><span style="color:#24292E;">(</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">Bot, Recipient, </span><span style="color:#D73A49;">*</span><span style="color:#24292E;">SendOptions) (</span><span style="color:#D73A49;">*</span><span style="color:#24292E;">Message, </span><span style="color:#D73A49;">error</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>当时唯一不适合<code>Send()</code>的类型是Album，这是有原因的。 <code>Album</code>是不久前添加的，因此出于向后兼容性的考虑，它们有点奇怪。 事实上，可以发送，但从未收到。 相反，Telegram 返回一条 <code>[]Message</code>，对应相册中的每个媒体对象:</p><div class="language-go vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">p </span><span style="color:#F97583;">:=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;">tele.Photo{File: tele.</span><span style="color:#79B8FF;">FromDisk</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;chicken.jpg&quot;</span><span style="color:#E1E4E8;">)}</span></span>
<span class="line"><span style="color:#E1E4E8;">v </span><span style="color:#F97583;">:=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;">tele.Video{File: tele.</span><span style="color:#79B8FF;">FromURL</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;http://video.mp4&quot;</span><span style="color:#E1E4E8;">)}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">msgs, err </span><span style="color:#F97583;">:=</span><span style="color:#E1E4E8;"> b.</span><span style="color:#79B8FF;">SendAlbum</span><span style="color:#E1E4E8;">(user, tele.Album{p, v})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">p </span><span style="color:#D73A49;">:=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;">tele.Photo{File: tele.</span><span style="color:#005CC5;">FromDisk</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;chicken.jpg&quot;</span><span style="color:#24292E;">)}</span></span>
<span class="line"><span style="color:#24292E;">v </span><span style="color:#D73A49;">:=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;">tele.Video{File: tele.</span><span style="color:#005CC5;">FromURL</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;http://video.mp4&quot;</span><span style="color:#24292E;">)}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">msgs, err </span><span style="color:#D73A49;">:=</span><span style="color:#24292E;"> b.</span><span style="color:#005CC5;">SendAlbum</span><span style="color:#24292E;">(user, tele.Album{p, v})</span></span></code></pre></div><h1 id="发送选项" tabindex="-1">发送选项 <a class="header-anchor" href="#发送选项" aria-label="Permalink to &quot;发送选项&quot;">​</a></h1><p>发送选项是您可以作为可选参数传递给 和 朋友的对象和标志（在收件人和文本/媒体之后）。 最重要的一个叫做 ，它可以让你控制 Telegram 支持的消息的所有属性。 唯一的缺点是有时使用起来比较不方便，所以支持多种简写: <code>Send()</code> <code>Edit()</code> <code>SendOptionsSend()</code></p><div class="language-go vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// regular send options</span></span>
<span class="line"><span style="color:#E1E4E8;">b.</span><span style="color:#79B8FF;">Send</span><span style="color:#E1E4E8;">(user, </span><span style="color:#9ECBFF;">&quot;text&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;">tele.SendOptions{</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#6A737D;">// ...</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// ReplyMarkup is a part of SendOptions,</span></span>
<span class="line"><span style="color:#6A737D;">// but often it&#39;s the only option you need</span></span>
<span class="line"><span style="color:#E1E4E8;">b.</span><span style="color:#79B8FF;">Send</span><span style="color:#E1E4E8;">(user, </span><span style="color:#9ECBFF;">&quot;text&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">&amp;</span><span style="color:#E1E4E8;">tele.ReplyMarkup{</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#6A737D;">// ...</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// flags: no notification &amp;&amp; no web link preview</span></span>
<span class="line"><span style="color:#E1E4E8;">b.</span><span style="color:#79B8FF;">Send</span><span style="color:#E1E4E8;">(user, </span><span style="color:#9ECBFF;">&quot;text&quot;</span><span style="color:#E1E4E8;">, tele.Silent, tele.NoPreview)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// regular send options</span></span>
<span class="line"><span style="color:#24292E;">b.</span><span style="color:#005CC5;">Send</span><span style="color:#24292E;">(user, </span><span style="color:#032F62;">&quot;text&quot;</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;">tele.SendOptions{</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6A737D;">// ...</span></span>
<span class="line"><span style="color:#24292E;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// ReplyMarkup is a part of SendOptions,</span></span>
<span class="line"><span style="color:#6A737D;">// but often it&#39;s the only option you need</span></span>
<span class="line"><span style="color:#24292E;">b.</span><span style="color:#005CC5;">Send</span><span style="color:#24292E;">(user, </span><span style="color:#032F62;">&quot;text&quot;</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">&amp;</span><span style="color:#24292E;">tele.ReplyMarkup{</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#6A737D;">// ...</span></span>
<span class="line"><span style="color:#24292E;">})</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// flags: no notification &amp;&amp; no web link preview</span></span>
<span class="line"><span style="color:#24292E;">b.</span><span style="color:#005CC5;">Send</span><span style="color:#24292E;">(user, </span><span style="color:#032F62;">&quot;text&quot;</span><span style="color:#24292E;">, tele.Silent, tele.NoPreview)</span></span></code></pre></div><p>您可以在<a href="https://pkg.go.dev/github.com/3JoB/telebot/v2#Option" target="_blank" rel="noreferrer">此处</a>找到支持的选项标志的完整列表。</p>`,9),o=[e];function t(c,r,i,y,E,d){return a(),n("div",null,o)}const h=s(p,[["render",t]]);export{b as __pageData,h as default};
