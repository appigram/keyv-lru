<h1 id="keyv-lru-img-align-right-src-logo-svg-alt-keyv-logo-title-keyv-logo-width-100-">Keyv - LRU <img align="right" src="./logo.svg" alt="Keyv logo" title="Keyv logo" width="100"></h1>
<p>This project is part of the <a href="https://www.npmjs.com/package/keyv">Keyv</a> suite.</p>
<!-- toc -->
<ul>
<li><a href="#installation">Installation</a><ul>
<li><a href="#install">Install</a></li>
</ul>
</li>
<li><a href="#features">Features</a></li>
<li><a href="#usage">Usage</a></li>
<li><a href="#managed-ttls">Managed TTLs</a></li>
<li><a href="#contributors">Contributors</a></li>
<li><a href="#license">License</a></li>
</ul>
<!-- tocstop -->
<p><a href="https://travis-ci.org/e0ipso/keyv-lru/"><img src="https://img.shields.io/travis/e0ipso/keyv-lru.svg?style=flat-square" alt="Travis"></a> <a href="https://coveralls.io/github/e0ipso/keyv-lru/"><img src="https://img.shields.io/coveralls/github/e0ipso/keyv-lru.svg?style=flat-square" alt="Coverage"></a></p>
<h2 id="installation">Installation</h2>
<p>In order to use LRU as your store in Keyv you will need to:</p>
<h3 id="install">Install</h3>
<p>Install this module in your project:</p>
<pre><code>
npm install @appigram/keyv-lru
</code></pre>
<h2 id="features">Features</h2>
<p>This module is based on the <a href="https://www.npmjs.com/package/tiny-lru"><code>tiny-lru</code></a>
module. This is one of the <a href="https://github.com/dominictarr/bench-lru#results">best performing libraries for LRU storages</a>.</p>
<h2 id="usage">Usage</h2>
<p>Create your Keyv object by executing:</p>

```js
import { KeyvLru, KeyvLruManagedTtl } from '@appigram/keyv-lru';

const options = {
  max: 1000,
  notify: false,
  ttl: 0,
  expire: 0,
};
const keyvLru = new KeyvLru(options);
const keyvLruManagedTtl = new KeyvLruManagedTtl(options);
```
<p>See <a href="https://www.npmjs.com/package/tiny-lru"><code>tiny-lru</code></a> to learn about the
available options.</p>
<h2 id="managed-ttls">Managed TTLs</h2>
<p>KeyvLruManagedTtl uses a managed TTL strategy instead of timers. This is useful
for serverless architectures. tiny-lru expires entries based on timers, that
means that the event loop is not empty when the lambda function is finished.
That blocks the end of the execution.</p>
<p>This implementation will store the expiration time along with the cached data
and it will deleter expired items upon retrieval. Alternatively there is an
<code>evictExpired()</code> method that will evict all the expired items.</p>
<p>Even when not using <code>tiny-lru</code>‘s built-in expiration system based on timers, we
still benefit a lot from the LRU store.</p>
<h2 id="contributors">Contributors</h2>
<details>
<summary><strong>Contributors</strong></summary><br>
<strong>Mateu Aguiló Bosch</strong>
<strong>Evgeny Sysmanov</strong>
<br><br>
</details>

<h2 id="license">License</h2>
<p>keyv-lru is <a href="./LICENSE">MIT licensed</a>.</p>
