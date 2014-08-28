
// A model
var storage = new Storage('window');
console.log('storage', storage)
var doc = new Document('Jonas', storage)
console.log('doc', doc)
doc.save()

// ...or shortcut: var Post = Document('Post', 'redis://localhost:6379/app');

// // A record
// var post = new Post({title: "Once upon a time"});

// // Save it
// post.save(function(err, res) {
//   console.log("SAVE  Persisted: %s | Storage: %s | Type: %s | ID: %s  ->  %s", post.persisted, post.storage.name, post.type, post.id, post);

//   // Find it
//   Post.get(post.id, function(err, res) {
//     console.log("GET  Storage: %s | Type: %s | ID: %s  ->  %s", post.storage.name, post.type, post.id, JSON.stringify(res));

//     // Destroy it
//     post.destroy(function(err, res) {
//       console.log("DESTROY  Persisted: %s | Storage: %s | Type: %s | ID: %s  ->  %s", post.persisted, post.storage.name, post.type, post.id, post);

//       // Switch storage
//       Post.storage = new FileSystem('file:///tmp/app');

//       // Save to file instead
//       post.save(function(err, res) {
//         console.log("SAVE  Persisted: %s | Storage: %s | Type: %s | ID: %s  ->  %s", post.persisted, post.storage.name, post.type, post.id, post);

//         // Find it again
//         Post.get(post.id, function(err, res) {
//           console.log("GET  Storage: %s | Type: %s | ID: %s  ->  %s", post.storage.name, post.type, post.id, JSON.stringify(res));

//           process.exit();
//         });
//       });
//     });
//   });
// });
