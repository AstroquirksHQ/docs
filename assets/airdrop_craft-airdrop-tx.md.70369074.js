import{_ as s,o as a,c as o,O as n}from"./chunks/framework.c0965656.js";const A=JSON.parse('{"title":"Craft airdrop transaction","description":"","frontmatter":{},"headers":[],"relativePath":"airdrop/craft-airdrop-tx.md","filePath":"airdrop/craft-airdrop-tx.md"}'),l={name:"airdrop/craft-airdrop-tx.md"},p=n(`<h1 id="craft-airdrop-transaction" tabindex="-1">Craft airdrop transaction <a class="header-anchor" href="#craft-airdrop-transaction" aria-label="Permalink to &quot;Craft airdrop transaction&quot;">​</a></h1><h2 id="osmosis" tabindex="-1">Osmosis <a class="header-anchor" href="#osmosis" aria-label="Permalink to &quot;Osmosis&quot;">​</a></h2><p>Prepare memo:</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># properly replace &lt;n&gt; with the nonce of the airdrop (the nth airdrop we did)</span></span>
<span class="line"><span style="color:#A6ACCD;">OSMOSIS_MEMO</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Quirky Reward #&lt;n&gt; - From Astroquirks with love &lt;3</span><span style="color:#89DDFF;">&quot;</span></span></code></pre></div><p>Declare tmp address:</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># the Keplr wallet temporary address (important: the Osmosis one!)</span></span>
<span class="line"><span style="color:#A6ACCD;">TMP_ADDRESS</span><span style="color:#89DDFF;">=&lt;</span><span style="color:#C3E88D;">tmp-osmosis-addres</span><span style="color:#A6ACCD;">s</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><p>Craft the transaction:</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">./bin/validatool</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">craft-airdrop-tx</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">--from-csv</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">osmosis-airdrop.csv</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">--token</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">toke</span><span style="color:#A6ACCD;">n</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">--memo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">$OSMOSIS_MEMO</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">--from-address</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">$TMP_ADDRESS</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">osmosis-airdrop-tx.json</span></span></code></pre></div><p>Copy the <code>osmosis-airdrop-tx.json</code> file to <code>&lt;airdrop-folder&gt;</code>:</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># /!\\ properly replace folder names:</span></span>
<span class="line"><span style="color:#FFCB6B;">cp</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">osmosis-airdrop-tx.json</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">airdrop-folde</span><span style="color:#A6ACCD;">r</span><span style="color:#89DDFF;">&gt;</span><span style="color:#C3E88D;">/airdrop-</span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">YYYY-M</span><span style="color:#A6ACCD;">M</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h2 id="stargaze" tabindex="-1">Stargaze <a class="header-anchor" href="#stargaze" aria-label="Permalink to &quot;Stargaze&quot;">​</a></h2><p>Prepare memo:</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># properly replace &lt;n&gt; with the nonce of the airdrop (the nth airdrop we did)</span></span>
<span class="line"><span style="color:#A6ACCD;">STARGAZE_MEMO</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Quirky Reward #&lt;n&gt; - From Astroquirks with love &lt;3 (Stargaze)</span><span style="color:#89DDFF;">&quot;</span></span></code></pre></div><p>Declare tmp address:</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># the Keplr wallet temporary address (important: the Osmosis one!)</span></span>
<span class="line"><span style="color:#A6ACCD;">TMP_ADDRESS</span><span style="color:#89DDFF;">=&lt;</span><span style="color:#C3E88D;">tmp-osmosis-addres</span><span style="color:#A6ACCD;">s</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><p>Craft the transaction:</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># /!\\ properly replace &lt;token&gt; with the chosen airdrop token</span></span>
<span class="line"><span style="color:#FFCB6B;">./bin/validatool</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">craft-airdrop-tx</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">--from-csv</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">stargaze-airdrop.csv</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">--token</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">toke</span><span style="color:#A6ACCD;">n</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">--memo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">$STARGAZE_MEMO</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> \\</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">--from-address</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">$TMP_ADDRESS</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">stargaze-airdrop-tx.json</span></span></code></pre></div><p>Copy the <code>stargaze-airdrop-tx.json</code> file to <code>&lt;airdrop-folder&gt;</code>:</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># /!\\ properly replace folder names:</span></span>
<span class="line"><span style="color:#FFCB6B;">cp</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">stargaze-airdrop-tx.json</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">airdrop-folde</span><span style="color:#A6ACCD;">r</span><span style="color:#89DDFF;">&gt;</span><span style="color:#C3E88D;">/airdrop-</span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">YYYY-M</span><span style="color:#A6ACCD;">M</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div>`,19),t=[p];function e(r,c,i,C,y,D){return a(),o("div",null,t)}const h=s(l,[["render",e]]);export{A as __pageData,h as default};
