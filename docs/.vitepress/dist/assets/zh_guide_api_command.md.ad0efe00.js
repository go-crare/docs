import{_ as s,c as a,o as n,Q as l}from"./chunks/framework.31184730.js";const h=JSON.parse('{"title":"命令","description":"","frontmatter":{"title":"命令","layout":"doc"},"headers":[],"relativePath":"zh/guide/api/command.md","filePath":"zh/guide/api/command.md","lastUpdated":null}'),p={name:"zh/guide/api/command.md"},o=l(`<h1 id="命令" tabindex="-1">命令 <a class="header-anchor" href="#命令" aria-label="Permalink to &quot;命令&quot;">​</a></h1><p>处理命令时，Telebot 支持直接 (<code>/command</code>) 和类组语法 (<code>/command@botname</code>)，并且永远不会向其他机器人传递消息，即使<a href="https://core.telegram.org/bots#privacy-mode" target="_blank" rel="noreferrer">隐私模式</a>关闭也是如此。</p><p>为了简化深度链接，Telebot 还提取有效负载:</p><div class="language-go vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// Command: /start &lt;PAYLOAD&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">b.</span><span style="color:#79B8FF;">Handle</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;/start&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">func</span><span style="color:#E1E4E8;">(c </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">tele.Context) </span><span style="color:#F97583;">error</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">	fmt.</span><span style="color:#79B8FF;">Println</span><span style="color:#E1E4E8;">(c.</span><span style="color:#79B8FF;">Message</span><span style="color:#E1E4E8;">().Payload) </span><span style="color:#6A737D;">// &lt;PAYLOAD&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// Command: /start &lt;PAYLOAD&gt;</span></span>
<span class="line"><span style="color:#24292E;">b.</span><span style="color:#005CC5;">Handle</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;/start&quot;</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">func</span><span style="color:#24292E;">(c </span><span style="color:#D73A49;">*</span><span style="color:#24292E;">tele.Context) </span><span style="color:#D73A49;">error</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">	fmt.</span><span style="color:#005CC5;">Println</span><span style="color:#24292E;">(c.</span><span style="color:#005CC5;">Message</span><span style="color:#24292E;">().Payload) </span><span style="color:#6A737D;">// &lt;PAYLOAD&gt;</span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div><p>对于多个参数，请使用:</p><div class="language-go vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">go</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// Command: /tags &lt;tag1&gt; &lt;tag2&gt; &lt;...&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">b.</span><span style="color:#79B8FF;">Handle</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&quot;/tags&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#F97583;">func</span><span style="color:#E1E4E8;">(c </span><span style="color:#F97583;">*</span><span style="color:#E1E4E8;">tele.Context) </span><span style="color:#F97583;">error</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">	tags </span><span style="color:#F97583;">:=</span><span style="color:#E1E4E8;"> c.</span><span style="color:#79B8FF;">Args</span><span style="color:#E1E4E8;">() </span><span style="color:#6A737D;">// list of arguments splitted by a space</span></span>
<span class="line"><span style="color:#E1E4E8;">	</span><span style="color:#F97583;">for</span><span style="color:#E1E4E8;"> _, tag </span><span style="color:#F97583;">:=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">range</span><span style="color:#E1E4E8;"> tags {</span></span>
<span class="line"><span style="color:#E1E4E8;">		</span><span style="color:#6A737D;">// iterate through passed arguments</span></span>
<span class="line"><span style="color:#E1E4E8;">	}</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// Command: /tags &lt;tag1&gt; &lt;tag2&gt; &lt;...&gt;</span></span>
<span class="line"><span style="color:#24292E;">b.</span><span style="color:#005CC5;">Handle</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&quot;/tags&quot;</span><span style="color:#24292E;">, </span><span style="color:#D73A49;">func</span><span style="color:#24292E;">(c </span><span style="color:#D73A49;">*</span><span style="color:#24292E;">tele.Context) </span><span style="color:#D73A49;">error</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">	tags </span><span style="color:#D73A49;">:=</span><span style="color:#24292E;"> c.</span><span style="color:#005CC5;">Args</span><span style="color:#24292E;">() </span><span style="color:#6A737D;">// list of arguments splitted by a space</span></span>
<span class="line"><span style="color:#24292E;">	</span><span style="color:#D73A49;">for</span><span style="color:#24292E;"> _, tag </span><span style="color:#D73A49;">:=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">range</span><span style="color:#24292E;"> tags {</span></span>
<span class="line"><span style="color:#24292E;">		</span><span style="color:#6A737D;">// iterate through passed arguments</span></span>
<span class="line"><span style="color:#24292E;">	}</span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div><p>TelebotE的命令处理直接处理字符串，而不是Telebot的经典正则处理，这样能大幅提升性能，并且payload也可以传回换行后的内容。</p><h2 id="benchmark" tabindex="-1">Benchmark <a class="header-anchor" href="#benchmark" aria-label="Permalink to &quot;Benchmark&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">RE2: wasm, no cgo</span></span>
<span class="line"><span style="color:#e1e4e8;">REG: github.com/grafana/regexp</span></span>
<span class="line"><span style="color:#e1e4e8;">Strings: process()</span></span>
<span class="line"><span style="color:#e1e4e8;">cpu: 12th Gen Intel(R) Core(TM) i7-12700H</span></span>
<span class="line"><span style="color:#e1e4e8;">----</span></span>
<span class="line"><span style="color:#e1e4e8;">Benchmark_RE2-20            377274	            3039 ns/op	         592 B/op	      13 allocs/op</span></span>
<span class="line"><span style="color:#e1e4e8;">Benchmark_REG-20           1746291             685.1 ns/o              436 B/op	      3 allocs/op</span></span>
<span class="line"><span style="color:#e1e4e8;">Benchmark_Strings-20      28667738	       43.29 ns/op	         32 B/op	          1 allocs/op</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">RE2: wasm, no cgo</span></span>
<span class="line"><span style="color:#24292e;">REG: github.com/grafana/regexp</span></span>
<span class="line"><span style="color:#24292e;">Strings: process()</span></span>
<span class="line"><span style="color:#24292e;">cpu: 12th Gen Intel(R) Core(TM) i7-12700H</span></span>
<span class="line"><span style="color:#24292e;">----</span></span>
<span class="line"><span style="color:#24292e;">Benchmark_RE2-20            377274	            3039 ns/op	         592 B/op	      13 allocs/op</span></span>
<span class="line"><span style="color:#24292e;">Benchmark_REG-20           1746291             685.1 ns/o              436 B/op	      3 allocs/op</span></span>
<span class="line"><span style="color:#24292e;">Benchmark_Strings-20      28667738	       43.29 ns/op	         32 B/op	          1 allocs/op</span></span></code></pre></div>`,9),e=[o];function t(c,r,y,i,E,d){return n(),a("div",null,e)}const m=s(p,[["render",t]]);export{h as __pageData,m as default};
