# DOCUMENT-JS


**Minimalistic ODM** for the browser implementing the most fundamental operations (such as `GET`/`SET`/`DEL`) on kind of Document(s)  using **one unified API**. Switching brower storage adapters should be a matter of changing a line of code.

Inspired by [node-document](https://github.com/grimen/node-document)

The Collection is the plural of a Document

## Document

The ODM.

* Class
	* `new` , `create`
	* `get`
	* `set`
	* `del`
	* `exists`
* Instance
	* `save`
	* `destroy`
	* `fetch`
	* `validate`
	* `diff`
	* `clone`
	* `inspect`
  * `sync` using [Object.observe()](https://github.com/grimen/node-document)


### [**Storage**]

Unified interface for write/read data to/from differen kinds of [Storages](http://www.html5rocks.com/en/features/storage)

* Operations: Single + Bulk
	* `get`
	* `set`
	* `del`
	* `exists`
* Adapters
	* Memory
  * Cookie
  * SessionStorage
  * LocalStorage
  * IndexDB

