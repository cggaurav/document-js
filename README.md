# DOCUMENT-JS


**Minimalistic ODM** for the browser implementing the most fundamental operations (such as `GET`/`SET`/`DEL`) on different kinds of "document(-ish)" stores using **one unified API**. Switching database should be a matter of changing a line of code.

Inspired by [node-document](https://github.com/grimen/node-document)


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


### [**Storage**]

Unified interface for write/read data to/from differen kinds of storages/databases.

* Operations: Single + Bulk
	* `get`
	* `set`
	* `del`
	* `exists`
* Adapters
	* Memory
  * LocalStorage
