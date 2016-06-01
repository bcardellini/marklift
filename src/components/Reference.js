import React from "react";

export default class Reference extends React.Component {
  render() {
    return (
      <div>


      <h2>Markdown Syntax guide</h2>

      <p>Adapted from GitHub guide <a href="https://guides.github.com/features/mastering-markdown/
" target="_blank">Mastering Markdown</a></p>

      <h3>Headers</h3>

      <div class="highlighter-rouge">
      <pre class="highlight"><code><span class="gh"># This is an &lt;h1&gt; tag</span>{'\n'}
      <span class="gu">## This is an &lt;h2&gt; tag</span>{'\n'}
      <span class="gu">###### This is an &lt;h6&gt; tag</span>
      </code></pre>
      </div>

      <h3>Emphasis</h3>

      <div class="highlighter-rouge">
      <pre class="highlight"><code><span class="ge">*This text will be italic*</span>{'\n'}
      <span class="ge">_This will also be italic_</span>{'\n'}
      {'\n'}
      <span class="gs">**This text will be bold**</span>{'\n'}
      <span class="gs">__This will also be bold__</span>{'\n'}
      {'\n'}
      <span class="ge">_You **can** combine them_</span>{'\n'}
      </code></pre>
      </div>

      <h3>Lists</h3>

      <h4>Unordered</h4>

      <div class="highlighter-rouge">
      <pre class="highlight"><code><span class="p">*</span> Item 1{'\n'}
      <span class="p">*</span> Item 2{'\n'}
      <span class="p">  *</span> Item 2a{'\n'}
      <span class="p">  *</span> Item 2b{'\n'}
      </code></pre>
      </div>

      <h4>Ordered</h4>

      <div class="highlighter-rouge">
      <pre class="highlight"><code><span class="p">1.</span> Item 1{'\n'}
      <span class="p">2.</span> Item 2{'\n'}
      <span class="p">3.</span> Item 3{'\n'}
      <span class="p">   *</span> Item 3a{'\n'}
      <span class="p">   *</span> Item 3b{'\n'}
      </code></pre>
      </div>

      <h3>Images</h3>

      <div class="highlighter-rouge">
      <pre class="highlight"><code><span class="p">![</span><span class="nv">GitHub Logo</span><span class="p">](</span><span class="sx">/images/logo.png</span><span class="p">)</span>{'\n'}
      Format: !<span class="p">[</span><span class="nv">Alt Text</span><span class="p">](</span><span class="sx">url</span><span class="p">)</span>
      </code></pre>
      </div>

      <h3>Links</h3>

      <div class="highlighter-rouge">
      <pre class="highlight"><code>http://github.com - automatic!{'\n'}
      <span class="p">[</span><span class="nv">GitHub</span><span class="p">](</span><span class="sx">http://github.com</span><span class="p">)</span>
      </code></pre>
      </div>

      <h3>Blockquotes</h3>

      <div class="highlighter-rouge">
      <pre class="highlight"><code>As Kanye West said:{'\n'}
      <span class="gt">{'\n'}
      &gt; We&apos;re living the future so</span>{'\n'}
      <span class="gt">&gt; the present is our past.</span>
      </code></pre>
      </div>

      <h3>Inline code</h3>

      <div class="highlighter-rouge">
      <pre class="highlight"><code>I think you should use an
      `&lt;addr&gt;` element here instead.
      </code></pre>
      </div>

      <h2>GitHub Flavored Markdown</h2>

      <p>The Marklift previewer uses the <a href="https://www.npmjs.com/package/marked" target="_blank">marked</a> markdown parser set to compile <a href="https://help.github.com/articles/basic-writing-and-formatting-syntax/" target="_blank">Github Flavored Markdown</a>.
      </p>

      </div>
    );
  }
}
