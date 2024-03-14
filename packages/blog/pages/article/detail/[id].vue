<template>
  <div class="articleDetail">
    <div class="content contentCenter">
      <div class="main">
        <div class="articleBox">
          <h1 class="title">{{ data.title }}</h1>
          <div class="info">
            <div class="date">{{ data.date }}</div>
            <div class="views">
              <span class="iconfont icon-guankan"></span> <span>{{ data.viewsNumber }}</span>
            </div>
            <div class="readTime">阅读{{ data.readingTime }}分钟</div>
          </div>
          <div class="htmlBox" v-html="data.htmlStr"></div>
          <div class="articleFooter"></div>
        </div>
        <div class="commentBox">
          <div class="head">评论 {{ data.commentNumber }}</div>
          <div class="replyBox">
            <comment-input />
          </div>
          <ul class="commentListBox">
            <li v-for="item in commentData" :key="item.data.id" class="item">
              <comment-list :data="item.data" />
              <div v-if="item.commentData.length" class="moreComment">
                <comment-list
                  v-for="reply in item.commentData"
                  :key="reply.id"
                  class="replyItem"
                  :data="reply"
                />
                <p class="viewAll" @click="viewAllHandler">
                  查看全部{{ item.commentData.length }}条回复
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <aside class="asideBox">
        <article-aside-block class="recommendBox" title="推荐文章" :list-data="recommendData">
        </article-aside-block>
        <article-aside-block class="choicenessBox" title="精选文章" :list-data="recommendData">
        </article-aside-block>
      </aside>
    </div>
  </div>
</template>

<script lang="ts" setup>
const data = {
  title: 'Vue3 开发笔记',
  date: '2021年12月10日',
  likesNumber: 30,
  viewsNumber: 36000,
  commentNumber: 10,
  htmlStr: `<div id="write" class="">
        <h1 id="跟着月影学-javascript"><span>跟着月影学 JavaScript</span></h1>
        <h2 id="一什么才是好的-javascript-代码">
          <span>一.什么才是好的 JavaScript 代码</span>
        </h2>
        <ol start="">
          <li>
            <strong><span>各司其责</span></strong
            ><span> -- 让HTML、CSS和Javascript职能分离。</span>
          </li>
          <li>
            <strong><span>组件封装</span></strong
            ><span> -- 后的UI组件具备正确性、扩展性、复用性。</span>
          </li>
          <li>
            <strong><span>过程抽象</span></strong
            ><span> -- 应用函数式编程思想</span>
          </li>
        </ol>
        <h3 id="1各司其责"><span>1.各司其责</span></h3>
        <p>
          <strong><span>例1</span></strong
          ><span>：</span>
        </p>
        <p><span> </span><span>实现白天模式和黑夜模式切换。</span></p>
        <p><span> </span><span>版本1：</span></p>
        <pre
          class="md-fences md-end-block ty-contain-cm modeLoaded"
          spellcheck="false"
          lang="js"
        ><div class="CodeMirror cm-s-inner cm-s-null-scroll CodeMirror-wrap" lang="js"><div style="overflow: hidden; position: relative; width: 3px; height: 0px; top: 9.52344px; left: 8px;"><textarea autocorrect="off" autocapitalize="off" spellcheck="false" tabindex="0" style="position: absolute; bottom: -1em; padding: 0px; width: 1000px; height: 1em; outline: none;"></textarea></div><div class="CodeMirror-scrollbar-filler" cm-not-content="true"></div><div class="CodeMirror-gutter-filler" cm-not-content="true"></div><div class="CodeMirror-scroll" tabindex="-1"><div class="CodeMirror-sizer" style="margin-left: 0px; margin-bottom: 0px; border-right-width: 0px; padding-right: 0px; padding-bottom: 0px;"><div style="position: relative; top: 0px;"><div class="CodeMirror-lines" role="presentation"><div role="presentation" style="position: relative; outline: none;"><div class="CodeMirror-measure"></div><div class="CodeMirror-measure"></div><div style="position: relative; z-index: 1;"></div><div class="CodeMirror-code" role="presentation" style=""><div class="CodeMirror-activeline" style="position: relative;"><div class="CodeMirror-activeline-background CodeMirror-linebackground"></div><div class="CodeMirror-gutter-background CodeMirror-activeline-gutter" style="left: 0px; width: 0px;"></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span class="cm-keyword">const</span> <span class="cm-def">btn</span> <span class="cm-operator">=</span> <span class="cm-variable">document</span>.<span class="cm-property">getElementById</span>(<span class="cm-string">'modeBtn'</span>);</span></pre></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp;<span class="cm-variable">btn</span>.<span class="cm-property">addEventListener</span>(<span class="cm-string">'click'</span>, (<span class="cm-def">e</span>) <span class="cm-operator">=&gt;</span> {</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp;<span class="cm-keyword">const</span> <span class="cm-def">body</span> <span class="cm-operator">=</span> <span class="cm-variable">document</span>.<span class="cm-property">body</span>;</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp;<span class="cm-keyword">if</span>(<span class="cm-variable-2">e</span>.<span class="cm-property">target</span>.<span class="cm-property">innerHTML</span> <span class="cm-operator">===</span> <span class="cm-string">'🌞'</span>) {</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp; &nbsp;<span class="cm-variable-2">body</span>.<span class="cm-property">style</span>.<span class="cm-property">backgroundColor</span> <span class="cm-operator">=</span> <span class="cm-string">'black'</span>;</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp; &nbsp;<span class="cm-variable-2">body</span>.<span class="cm-property">style</span>.<span class="cm-property">color</span> <span class="cm-operator">=</span> <span class="cm-string">'white'</span>;</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp; &nbsp;<span class="cm-variable-2">e</span>.<span class="cm-property">target</span>.<span class="cm-property">innerHTML</span> <span class="cm-operator">=</span> <span class="cm-string">'🌜'</span>;</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp;  } <span class="cm-keyword">else</span> {</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp; &nbsp;<span class="cm-variable-2">body</span>.<span class="cm-property">style</span>.<span class="cm-property">backgroundColor</span> <span class="cm-operator">=</span> <span class="cm-string">'white'</span>;</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp; &nbsp;<span class="cm-variable-2">body</span>.<span class="cm-property">style</span>.<span class="cm-property">color</span> <span class="cm-operator">=</span> <span class="cm-string">'black'</span>;</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp; &nbsp;<span class="cm-variable-2">e</span>.<span class="cm-property">target</span>.<span class="cm-property">innerHTML</span> <span class="cm-operator">=</span> <span class="cm-string">'🌞'</span>;</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp;  }</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;">  });</span></pre></div></div></div></div></div><div style="position: absolute; height: 0px; width: 1px; border-bottom: 0px solid transparent; top: 300px;"></div><div class="CodeMirror-gutters" style="display: none; height: 300px;"></div></div></div></pre>
        <blockquote>
          <p><span>思考：</span></p>
          <ul>
            <li><span>简单、学会DOM api 就会使用。</span></li>
            <li><span>用JavaScript控制CSS，没有做到分离。</span></li>
          </ul>
        </blockquote>
        <p><span> </span><span>版本2：</span></p>
        <pre
          class="md-fences md-end-block ty-contain-cm modeLoaded"
          spellcheck="false"
          lang="js"
        ><div class="CodeMirror cm-s-inner cm-s-null-scroll CodeMirror-wrap" lang="js"><div style="overflow: hidden; position: relative; width: 3px; height: 0px; top: 9.52344px; left: 8px;"><textarea autocorrect="off" autocapitalize="off" spellcheck="false" tabindex="0" style="position: absolute; bottom: -1em; padding: 0px; width: 1000px; height: 1em; outline: none;"></textarea></div><div class="CodeMirror-scrollbar-filler" cm-not-content="true"></div><div class="CodeMirror-gutter-filler" cm-not-content="true"></div><div class="CodeMirror-scroll" tabindex="-1"><div class="CodeMirror-sizer" style="margin-left: 0px; margin-bottom: 0px; border-right-width: 0px; padding-right: 0px; padding-bottom: 0px;"><div style="position: relative; top: 0px;"><div class="CodeMirror-lines" role="presentation"><div role="presentation" style="position: relative; outline: none;"><div class="CodeMirror-measure"><pre><span>xxxxxxxxxx</span></pre></div><div class="CodeMirror-measure"></div><div style="position: relative; z-index: 1;"></div><div class="CodeMirror-code" role="presentation" style=""><div class="CodeMirror-activeline" style="position: relative;"><div class="CodeMirror-activeline-background CodeMirror-linebackground"></div><div class="CodeMirror-gutter-background CodeMirror-activeline-gutter" style="left: 0px; width: 0px;"></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> <span class="cm-keyword">const</span> <span class="cm-def">btn</span> <span class="cm-operator">=</span> <span class="cm-variable">document</span>.<span class="cm-property">getElementById</span>(<span class="cm-string">'modeBtn'</span>);</span></pre></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp;<span class="cm-variable">btn</span>.<span class="cm-property">addEventListener</span>(<span class="cm-string">'click'</span>, (<span class="cm-def">e</span>) <span class="cm-operator">=&gt;</span> {</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp;<span class="cm-keyword">const</span> <span class="cm-def">body</span> <span class="cm-operator">=</span> <span class="cm-variable">document</span>.<span class="cm-property">body</span>;</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp;<span class="cm-keyword">if</span>(<span class="cm-variable-2">body</span>.<span class="cm-property">className</span> <span class="cm-operator">!==</span> <span class="cm-string">'night'</span>) {</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp; &nbsp;<span class="cm-variable-2">body</span>.<span class="cm-property">className</span> <span class="cm-operator">=</span> <span class="cm-string">'night'</span>;</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp;  } <span class="cm-keyword">else</span> {</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp; &nbsp;<span class="cm-variable-2">body</span>.<span class="cm-property">className</span> <span class="cm-operator">=</span> <span class="cm-string">''</span>;</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp;  }</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;">  });</span></pre></div></div></div></div></div><div style="position: absolute; height: 0px; width: 1px; border-bottom: 0px solid transparent; top: 207px;"></div><div class="CodeMirror-gutters" style="display: none; height: 207px;"></div></div></div></pre>
        <blockquote>
          <p><span>思考：</span></p>
          <ul>
            <li><span>更佳简洁。</span></li>
            <li>
              <span>实现</span><strong><span>各司其责</span></strong
              ><span>。</span>
            </li>
          </ul>
        </blockquote>
        <p><span> </span><span>版本3：</span></p>
        <pre
          class="md-fences md-end-block ty-contain-cm modeLoaded"
          spellcheck="false"
          lang="html"
          style="break-inside: unset"
        ><div class="CodeMirror cm-s-inner cm-s-null-scroll CodeMirror-wrap" lang="html"><div style="overflow: hidden; position: relative; width: 3px; height: 0px; top: 9.52344px; left: 8px;"><textarea autocorrect="off" autocapitalize="off" spellcheck="false" tabindex="0" style="position: absolute; bottom: -1em; padding: 0px; width: 1000px; height: 1em; outline: none;"></textarea></div><div class="CodeMirror-scrollbar-filler" cm-not-content="true"></div><div class="CodeMirror-gutter-filler" cm-not-content="true"></div><div class="CodeMirror-scroll" tabindex="-1"><div class="CodeMirror-sizer" style="margin-left: 0px; margin-bottom: 0px; border-right-width: 0px; padding-right: 0px; padding-bottom: 0px;"><div style="position: relative; top: 0px;"><div class="CodeMirror-lines" role="presentation"><div role="presentation" style="position: relative; outline: none;"><div class="CodeMirror-measure"><pre><span>xxxxxxxxxx</span></pre></div><div class="CodeMirror-measure"></div><div style="position: relative; z-index: 1;"></div><div class="CodeMirror-code" role="presentation" style=""><div class="CodeMirror-activeline" style="position: relative;"><div class="CodeMirror-activeline-background CodeMirror-linebackground"></div><div class="CodeMirror-gutter-background CodeMirror-activeline-gutter" style="left: 0px; width: 0px;"></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> <span class="cm-tag cm-bracket">&lt;</span><span class="cm-tag">input</span> <span class="cm-attribute">id</span>=<span class="cm-string">"modeCheckBox"</span> <span class="cm-attribute">type</span>=<span class="cm-string">"checkbox"</span><span class="cm-tag cm-bracket">&gt;</span></span></pre></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp;<span class="cm-tag cm-bracket">&lt;</span><span class="cm-tag">div</span> <span class="cm-attribute">class</span>=<span class="cm-string">"content"</span><span class="cm-tag cm-bracket">&gt;</span></span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp;<span class="cm-tag cm-bracket">&lt;</span><span class="cm-tag">header</span><span class="cm-tag cm-bracket">&gt;</span></span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp; &nbsp;<span class="cm-tag cm-bracket">&lt;</span><span class="cm-tag">label</span> <span class="cm-attribute">id</span>=<span class="cm-string">"modeBtn"</span> <span class="cm-attribute">for</span>=<span class="cm-string">"modeCheckBox"</span><span class="cm-tag cm-bracket">&gt;&lt;/</span><span class="cm-tag">label</span><span class="cm-tag cm-bracket">&gt;</span></span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp; &nbsp;<span class="cm-tag cm-bracket">&lt;</span><span class="cm-tag">h1</span><span class="cm-tag cm-bracket">&gt;</span>深夜食堂<span class="cm-tag cm-bracket">&lt;/</span><span class="cm-tag">h1</span><span class="cm-tag cm-bracket">&gt;</span></span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp;<span class="cm-tag cm-bracket">&lt;/</span><span class="cm-tag">header</span><span class="cm-tag cm-bracket">&gt;</span></span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp;<span class="cm-tag cm-bracket">&lt;</span><span class="cm-tag">main</span><span class="cm-tag cm-bracket">&gt;</span></span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp; &nbsp;<span class="cm-tag cm-bracket">&lt;</span><span class="cm-tag">div</span> <span class="cm-attribute">class</span>=<span class="cm-string">"pic"</span><span class="cm-tag cm-bracket">&gt;</span></span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp; &nbsp; &nbsp;<span class="cm-tag cm-bracket">&lt;</span><span class="cm-tag">img</span> <span class="cm-attribute">src</span>=<span class="cm-string">"https://p2.ssl.qhimg.com/t0120cc20854dc91c1e.jpg"</span><span class="cm-tag cm-bracket">&gt;</span></span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp; &nbsp;<span class="cm-tag cm-bracket">&lt;/</span><span class="cm-tag">div</span><span class="cm-tag cm-bracket">&gt;</span></span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp; &nbsp;<span class="cm-tag cm-bracket">&lt;</span><span class="cm-tag">div</span> <span class="cm-attribute">class</span>=<span class="cm-string">"description"</span><span class="cm-tag cm-bracket">&gt;</span></span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp; &nbsp; &nbsp;<span class="cm-tag cm-bracket">&lt;</span><span class="cm-tag">p</span><span class="cm-tag cm-bracket">&gt;</span>这是一间营业时间从午夜十二点到早上七点的特殊食堂。这里的老板，不太爱说话，却总叫人吃得热泪盈眶。</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp; &nbsp; &nbsp;<span class="cm-tag cm-bracket">&lt;/</span><span class="cm-tag">p</span><span class="cm-tag cm-bracket">&gt;</span></span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp; &nbsp;<span class="cm-tag cm-bracket">&lt;/</span><span class="cm-tag">div</span><span class="cm-tag cm-bracket">&gt;</span></span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp;<span class="cm-tag cm-bracket">&lt;/</span><span class="cm-tag">main</span><span class="cm-tag cm-bracket">&gt;</span></span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp;<span class="cm-tag cm-bracket">&lt;/</span><span class="cm-tag">div</span><span class="cm-tag cm-bracket">&gt;</span></span></pre></div></div></div></div></div><div style="position: absolute; height: 0px; width: 1px; border-bottom: 0px solid transparent; top: 369px;"></div><div class="CodeMirror-gutters" style="display: none; height: 369px;"></div></div></div></pre>
        <pre
          class="md-fences md-end-block ty-contain-cm modeLoaded"
          spellcheck="false"
          lang="css"
        ><div class="CodeMirror cm-s-inner cm-s-null-scroll CodeMirror-wrap" lang="css"><div style="overflow: hidden; position: relative; width: 3px; height: 0px; top: 9.52344px; left: 8px;"><textarea autocorrect="off" autocapitalize="off" spellcheck="false" tabindex="0" style="position: absolute; bottom: -1em; padding: 0px; width: 1000px; height: 1em; outline: none;"></textarea></div><div class="CodeMirror-scrollbar-filler" cm-not-content="true"></div><div class="CodeMirror-gutter-filler" cm-not-content="true"></div><div class="CodeMirror-scroll" tabindex="-1"><div class="CodeMirror-sizer" style="margin-left: 0px; margin-bottom: 0px; border-right-width: 0px; padding-right: 0px; padding-bottom: 0px;"><div style="position: relative; top: 0px;"><div class="CodeMirror-lines" role="presentation"><div role="presentation" style="position: relative; outline: none;"><div class="CodeMirror-measure"><span><span>​</span>x</span></div><div class="CodeMirror-measure"></div><div style="position: relative; z-index: 1;"></div><div class="CodeMirror-code" role="presentation" style=""><div class="CodeMirror-activeline" style="position: relative;"><div class="CodeMirror-activeline-background CodeMirror-linebackground"></div><div class="CodeMirror-gutter-background CodeMirror-activeline-gutter" style="left: 0px; width: 0px;"></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp;<span class="cm-builtin">#modeCheckBox</span> {</span></pre></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp;<span class="cm-property">display</span>: <span class="cm-atom">none</span>;</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;">  }</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span cm-text="" cm-zwsp="">
</span></span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp;<span class="cm-builtin">#modeCheckBox</span>:<span class="cm-variable-3">checked</span> + <span class="cm-qualifier">.content</span> {</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp;<span class="cm-property">background-color</span>: <span class="cm-keyword">black</span>;</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp;<span class="cm-property">color</span>: <span class="cm-keyword">white</span>;</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp;<span class="cm-property">transition</span>: <span class="cm-atom">all</span> <span class="cm-number">1s</span>;</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;">  }</span></pre></div></div></div></div></div><div style="position: absolute; height: 0px; width: 1px; border-bottom: 0px solid transparent; top: 207px;"></div><div class="CodeMirror-gutters" style="display: none; height: 207px;"></div></div></div></pre>
        <blockquote>
          <p><span>思考：</span></p>
          <ul>
            <li><span>无JavaScript代码。</span></li>
          </ul>
        </blockquote>
        <p>&nbsp;</p>
        <p>
          <strong><span>结论</span></strong
          ><span>：</span>
        </p>
        <ul>
          <li><span>HTML/CSS/JS 各司其责</span></li>
          <li><span>应当避免不必要的由 JS 直接操作样式</span></li>
          <li><span>可以用 class 来表示状态</span></li>
          <li><span>纯展示类交互寻求零 JS 方案</span></li>
        </ul>
        <h3 id="2组件封装"><span>2.组件封装</span></h3>
        <ul>
          <li>
            <span
              >组件是指Web页面上抽出来一个个包含模板（HTML）、功能（JS）、和样式（CSS）的单元。好的组件具备封装性、正确性、扩展性、复用性。</span
            >
          </li>
        </ul>
        <p>
          <strong><span>例1</span></strong
          ><span>：</span>
        </p>
        <p><span> </span><span>轮播图。</span></p>
        <p><span>结构：HTML</span></p>
        <pre
          class="md-fences md-end-block ty-contain-cm modeLoaded"
          spellcheck="false"
          lang="html"
          style="break-inside: unset"
        ><div class="CodeMirror cm-s-inner cm-s-null-scroll CodeMirror-wrap" lang="html"><div style="overflow: hidden; position: relative; width: 3px; height: 0px; top: 9.52344px; left: 8px;"><textarea autocorrect="off" autocapitalize="off" spellcheck="false" tabindex="0" style="position: absolute; bottom: -1em; padding: 0px; width: 1000px; height: 1em; outline: none;"></textarea></div><div class="CodeMirror-scrollbar-filler" cm-not-content="true"></div><div class="CodeMirror-gutter-filler" cm-not-content="true"></div><div class="CodeMirror-scroll" tabindex="-1"><div class="CodeMirror-sizer" style="margin-left: 0px; margin-bottom: 0px; border-right-width: 0px; padding-right: 0px; padding-bottom: 0px;"><div style="position: relative; top: 0px;"><div class="CodeMirror-lines" role="presentation"><div role="presentation" style="position: relative; outline: none;"><div class="CodeMirror-measure"><pre><span>xxxxxxxxxx</span></pre></div><div class="CodeMirror-measure"></div><div style="position: relative; z-index: 1;"></div><div class="CodeMirror-code" role="presentation" style=""><div class="CodeMirror-activeline" style="position: relative;"><div class="CodeMirror-activeline-background CodeMirror-linebackground"></div><div class="CodeMirror-gutter-background CodeMirror-activeline-gutter" style="left: 0px; width: 0px;"></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> <span class="cm-tag cm-bracket">&lt;</span><span class="cm-tag">div</span> <span class="cm-attribute">id</span>=<span class="cm-string">"my-slider"</span> <span class="cm-attribute">class</span>=<span class="cm-string">"slider-list"</span><span class="cm-tag cm-bracket">&gt;</span></span></pre></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp; &nbsp;<span class="cm-tag cm-bracket">&lt;</span><span class="cm-tag">ul</span><span class="cm-tag cm-bracket">&gt;</span></span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp; &nbsp; &nbsp;<span class="cm-tag cm-bracket">&lt;</span><span class="cm-tag">li</span> <span class="cm-attribute">class</span>=<span class="cm-string">"slider-list__item--selected"</span><span class="cm-tag cm-bracket">&gt;</span></span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span class="cm-tag cm-bracket">&lt;</span><span class="cm-tag">img</span> <span class="cm-attribute">src</span>=<span class="cm-string">"https://p5.ssl.qhimg.com/t0119c74624763dd070.png"</span><span class="cm-tag cm-bracket">&gt;</span></span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp; &nbsp; &nbsp;<span class="cm-tag cm-bracket">&lt;/</span><span class="cm-tag">li</span><span class="cm-tag cm-bracket">&gt;</span></span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp; &nbsp; &nbsp;<span class="cm-tag cm-bracket">&lt;</span><span class="cm-tag">li</span> <span class="cm-attribute">class</span>=<span class="cm-string">"slider-list__item"</span><span class="cm-tag cm-bracket">&gt;</span></span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span class="cm-tag cm-bracket">&lt;</span><span class="cm-tag">img</span> <span class="cm-attribute">src</span>=<span class="cm-string">"https://p4.ssl.qhimg.com/t01adbe3351db853eb3.jpg"</span><span class="cm-tag cm-bracket">&gt;</span></span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp; &nbsp; &nbsp;<span class="cm-tag cm-bracket">&lt;/</span><span class="cm-tag">li</span><span class="cm-tag cm-bracket">&gt;</span></span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp; &nbsp; &nbsp;<span class="cm-tag cm-bracket">&lt;</span><span class="cm-tag">li</span> <span class="cm-attribute">class</span>=<span class="cm-string">"slider-list__item"</span><span class="cm-tag cm-bracket">&gt;</span></span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span class="cm-tag cm-bracket">&lt;</span><span class="cm-tag">img</span> <span class="cm-attribute">src</span>=<span class="cm-string">"https://p2.ssl.qhimg.com/t01645cd5ba0c3b60cb.jpg"</span><span class="cm-tag cm-bracket">&gt;</span></span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp; &nbsp; &nbsp;<span class="cm-tag cm-bracket">&lt;/</span><span class="cm-tag">li</span><span class="cm-tag cm-bracket">&gt;</span></span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp; &nbsp; &nbsp;<span class="cm-tag cm-bracket">&lt;</span><span class="cm-tag">li</span> <span class="cm-attribute">class</span>=<span class="cm-string">"slider-list__item"</span><span class="cm-tag cm-bracket">&gt;</span></span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span class="cm-tag cm-bracket">&lt;</span><span class="cm-tag">img</span> <span class="cm-attribute">src</span>=<span class="cm-string">"https://p4.ssl.qhimg.com/t01331ac159b58f5478.jpg"</span><span class="cm-tag cm-bracket">&gt;</span></span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp; &nbsp; &nbsp;<span class="cm-tag cm-bracket">&lt;/</span><span class="cm-tag">li</span><span class="cm-tag cm-bracket">&gt;</span></span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp; &nbsp;<span class="cm-tag cm-bracket">&lt;/</span><span class="cm-tag">ul</span><span class="cm-tag cm-bracket">&gt;</span></span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp;<span class="cm-tag cm-bracket">&lt;/</span><span class="cm-tag">div</span><span class="cm-tag cm-bracket">&gt;</span></span></pre></div></div></div></div></div><div style="position: absolute; height: 0px; width: 1px; border-bottom: 0px solid transparent; top: 369px;"></div><div class="CodeMirror-gutters" style="display: none; height: 369px;"></div></div></div></pre>
        <blockquote>
          <p>
            <span
              >轮播图是一个典型的列表结构，我们可以使用无序列表ul元素来实现</span
            >
          </p>
        </blockquote>
        <p><span>表现：CSS</span></p>
        <pre
          class="md-fences md-end-block ty-contain-cm modeLoaded"
          spellcheck="false"
          lang="css"
          style="break-inside: unset"
        ><div class="CodeMirror cm-s-inner cm-s-null-scroll CodeMirror-wrap" lang="css"><div style="overflow: hidden; position: relative; width: 3px; height: 0px; top: 9.52344px; left: 8px;"><textarea autocorrect="off" autocapitalize="off" spellcheck="false" tabindex="0" style="position: absolute; bottom: -1em; padding: 0px; width: 1000px; height: 1em; outline: none;"></textarea></div><div class="CodeMirror-scrollbar-filler" cm-not-content="true"></div><div class="CodeMirror-gutter-filler" cm-not-content="true"></div><div class="CodeMirror-scroll" tabindex="-1"><div class="CodeMirror-sizer" style="margin-left: 0px; margin-bottom: 0px; border-right-width: 0px; padding-right: 0px; padding-bottom: 0px;"><div style="position: relative; top: 0px;"><div class="CodeMirror-lines" role="presentation"><div role="presentation" style="position: relative; outline: none;"><div class="CodeMirror-measure"><pre><span>xxxxxxxxxx</span></pre></div><div class="CodeMirror-measure"></div><div style="position: relative; z-index: 1;"></div><div class="CodeMirror-code" role="presentation" style=""><div class="CodeMirror-activeline" style="position: relative;"><div class="CodeMirror-activeline-background CodeMirror-linebackground"></div><div class="CodeMirror-gutter-background CodeMirror-activeline-gutter" style="left: 0px; width: 0px;"></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp;<span class="cm-builtin">#my-slider</span>{</span></pre></div><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp;<span class="cm-property">position</span>: <span class="cm-atom">relative</span>;</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp;<span class="cm-property">width</span>: <span class="cm-number">790px</span>;</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;">  }</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span cm-text="" cm-zwsp="">
</span></span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp;<span class="cm-qualifier">.slider-list</span> <span class="cm-tag">ul</span>{</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp;<span class="cm-property">list-style-type</span>:<span class="cm-atom">none</span>;</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp;<span class="cm-property">position</span>: <span class="cm-atom">relative</span>;</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp;<span class="cm-property">padding</span>: <span class="cm-number">0</span>;</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp;<span class="cm-property">margin</span>: <span class="cm-number">0</span>;</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;">  }</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span cm-text="" cm-zwsp="">
</span></span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp;<span class="cm-qualifier">.slider-list__item</span>,</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp;<span class="cm-qualifier">.slider-list__item--selected</span>{</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp;<span class="cm-property">position</span>: <span class="cm-atom">absolute</span>;</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp;<span class="cm-property">transition</span>: <span class="cm-atom">opacity</span> <span class="cm-number">1s</span>;</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp;<span class="cm-property">opacity</span>: <span class="cm-number">0</span>;</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp;<span class="cm-property">text-align</span>: <span class="cm-atom">center</span>;</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;">  }</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"><span cm-text="" cm-zwsp="">
</span></span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp;<span class="cm-qualifier">.slider-list__item--selected</span>{</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp;<span class="cm-property">transition</span>: <span class="cm-atom">opacity</span> <span class="cm-number">1s</span>;</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;"> &nbsp; &nbsp;<span class="cm-property">opacity</span>: <span class="cm-number">1</span>;</span></pre><pre class=" CodeMirror-line " role="presentation"><span role="presentation" style="padding-right: 0.1px;">  }</span></pre></div></div></div></div></div><div style="position: absolute; height: 0px; width: 1px; border-bottom: 0px solid transparent; top: 553px;"></div><div class="CodeMirror-gutters" style="display: none; height: 553px;"></div></div></div></pre>
        <blockquote>
          <ul>
            <li><span>使用 CSS 绝对定位将图片重叠在同一个位置</span></li>
            <li><span>轮播图切换的状态使用修饰符（modifier）</span></li>
            <li><span>轮播图的切换动画使用 CSS transition</span></li>
          </ul>
        </blockquote>
      </div>`,
  readingTime: 10
}
const recommendData = [
  { title: 'Vue3 开发笔记', link: '' },
  { title: 'React 开发笔记', link: '' },
  { title: 'Vue2 开发笔记', link: '' },
  { title: '理解CSS', link: '' }
]
const commentData = [
  {
    data: {
      id: '1',
      commentName: 'Mingcomity',
      replyName: '',
      content:
        '描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本',
      date: '2024年3月14日',
      likesNumber: 10,
      commentNumber: 1
    },
    commentData: [
      {
        id: '1',
        commentName: 'abc',
        replyName: '',
        content:
          '描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本',
        date: '2024年3月14日',
        likesNumber: 10,
        commentNumber: 0
      },
      {
        id: '2',
        commentName: 'bbbbb',
        replyName: 'abc',
        content: '述文本描述文本描述文本描述文本描述文本描述文本',
        date: '2024年3月14日',
        likesNumber: 10,
        commentNumber: 0
      },
      {
        id: '3',
        commentName: 'Mingcomity',
        replyName: '',
        content:
          '描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本',
        date: '2024年3月14日',
        likesNumber: 10,
        commentNumber: 0
      }
    ]
  },
  {
    data: {
      id: '2',
      commentName: 'Mingcomity',
      replyName: '',
      content:
        '描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本',
      date: '2024年3月14日',
      likesNumber: 10,
      commentNumber: 10
    },
    commentData: []
  },
  {
    data: {
      id: '3',
      commentName: 'Mingcomity',
      replyName: '',
      content:
        '描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本描述文本',
      date: '2024年3月14日',
      likesNumber: 10,
      commentNumber: 10
    },
    commentData: []
  }
]
const viewAllHandler = () => {
  console.log('查看全部回复')
}
</script>

<style lang="scss" scoped>
.articleDetail {
  background-color: $bgGrayColor;
  .content {
    display: flex;
    padding: 2.4rem 0;
    .main {
      flex: 1;
      margin-right: 2.4rem;
      .articleBox {
        padding: 2.4rem;
        background-color: $bgWhiteColor;
        margin-bottom: 2.4rem;
        .title {
          margin-top: 0;
          font-size: 3.6rem;
          color: $fontBlackColor;
          letter-spacing: 2px;
        }
        .info {
          @include flex-center();
          gap: 2rem;
          color: $fontGrayColor;
          padding-bottom: 1.2rem;
          margin-bottom: 1.2rem;
          border-bottom: 1px solid $borderGrayColor;
        }
        .htmlBox {
        }
      }
      .commentBox {
        padding: 2.4rem;
        background-color: $bgWhiteColor;
        .head,
        .replyBox,
        .commentListBox {
          @include margin-bottom(2.4rem);
        }
        .head {
          font-size: 1.8rem;
          color: $fontShallowBlackColor;
        }
        .replyBox {
          padding: 0 2.4rem;
        }
        .commentListBox {
          margin-top: 2.4rem;
          padding: 0 2.4rem;
          .item {
            @include margin-bottom(3.6rem);
            .moreComment {
              margin-top: 2.4rem;
              margin-left: 4.8rem;
              .replyItem {
                @include margin-bottom(3.6rem);
              }
              .viewAll {
                cursor: pointer;
                color: $fontGrayColor;
                letter-spacing: 1px;
                &:hover {
                  color: $primary;
                }
              }
            }
          }
        }
      }
    }
    .asideBox {
      position: sticky;
      align-self: flex-start;
      top: 2rem;
      width: 34rem;
      .recommendBox,
      .choicenessBox {
        background-color: $bgWhiteColor;
      }
      .recommendBox {
        margin-bottom: 2.4rem;
      }
    }
  }
}
</style>
