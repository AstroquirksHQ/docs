import{_ as s,o as a,c as o,O as l}from"./chunks/framework.c0965656.js";const D=JSON.parse('{"title":"Snapshot delegators","description":"","frontmatter":{},"headers":[],"relativePath":"airdrop/snapshot-delegators.md","filePath":"airdrop/snapshot-delegators.md"}'),e={name:"airdrop/snapshot-delegators.md"},n=l(`<h1 id="snapshot-delegators" tabindex="-1">Snapshot delegators <a class="header-anchor" href="#snapshot-delegators" aria-label="Permalink to &quot;Snapshot delegators&quot;">​</a></h1><h2 id="prerequisites" tabindex="-1">Prerequisites <a class="header-anchor" href="#prerequisites" aria-label="Permalink to &quot;Prerequisites&quot;">​</a></h2><p>Clone validatool:</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">clone</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">git@github.com:AstroquirksHQ/validatool.git</span></span></code></pre></div><p>Go to a specific branch 😡</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">checkout</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">feature/build-delegation-history</span></span></code></pre></div><p>Enter virtual env 😡</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">validatool</span></span>
<span class="line"><span style="color:#FFCB6B;">pipenv</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">shell</span></span></code></pre></div><p>From the virtualenv, export some Python path 😡</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">export</span><span style="color:#A6ACCD;"> PYTHONPATH</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">$PYTHONPATH</span><span style="color:#C3E88D;">:</span><span style="color:#89DDFF;">$(</span><span style="color:#82AAFF;">pwd</span><span style="color:#89DDFF;">)</span></span></code></pre></div><h2 id="osmosis" tabindex="-1">Osmosis <a class="header-anchor" href="#osmosis" aria-label="Permalink to &quot;Osmosis&quot;">​</a></h2><p>Create snapshot:</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">./bin/validatool</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">delegators</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">--to-csv</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">osmosis-delegators.csv</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">--osmosis-node</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://osmosis-api.polkachu.com</span></span></code></pre></div><p>Copy the <code>osmosis-delegators.csv</code> file to <code>&lt;airdrop-folder&gt;</code>:</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># /!\\ properly replace folder names:</span></span>
<span class="line"><span style="color:#FFCB6B;">cp</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">osmosis-delegators.csv</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">airdrop-folde</span><span style="color:#A6ACCD;">r</span><span style="color:#89DDFF;">&gt;</span><span style="color:#C3E88D;">/airdrop-</span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">YYYY-M</span><span style="color:#A6ACCD;">M</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h2 id="stargaze" tabindex="-1">Stargaze <a class="header-anchor" href="#stargaze" aria-label="Permalink to &quot;Stargaze&quot;">​</a></h2><p>Create snapshot:</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">./bin/validatool</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">delegators</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">--to-csv</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">stargaze-delegators.csv</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">--osmosis-node</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://stargaze-api.polkachu.com</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">--validator-address</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">starsvaloper1kekv8xqg7aj628l8av4d95cm79y8lw3clph7u7</span></span></code></pre></div><p>Copy the <code>stargaze-delegators.csv</code> file to <code>&lt;airdrop-folder&gt;</code>:</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># /!\\ properly replace folder names:</span></span>
<span class="line"><span style="color:#FFCB6B;">cp</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">stargaze-delegators.csv</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">airdrop-folde</span><span style="color:#A6ACCD;">r</span><span style="color:#89DDFF;">&gt;</span><span style="color:#C3E88D;">/airdrop-</span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">YYYY-M</span><span style="color:#A6ACCD;">M</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div>`,20),p=[n];function t(r,c,i,C,d,y){return a(),o("div",null,p)}const A=s(e,[["render",t]]);export{D as __pageData,A as default};
