export default function() {

  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */
  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '/api';    // make this `api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Route shorthand cheatsheet
  */
  /*
    GET shorthands

    // Collections
    this.get('/contacts');
    this.get('/contacts', 'users');
    this.get('/contacts', ['contacts', 'addresses']);

    // Single objects
    this.get('/contacts/:id');
    this.get('/contacts/:id', 'user');
    this.get('/contacts/:id', ['contact', 'addresses']);
  */

  /*
    POST shorthands

    this.post('/contacts');
    this.post('/contacts', 'user'); // specify the type of resource to be created
  */

  /*
    PUT shorthands

    this.put('/contacts/:id');
    this.put('/contacts/:id', 'user'); // specify the type of resource to be updated
  */

  /*
    DELETE shorthands

    this.del('/contacts/:id');
    this.del('/contacts/:id', 'user'); // specify the type of resource to be deleted

    // Single object + related resources. Make sure parent resource is first.
    this.del('/contacts/:id', ['contact', 'addresses']);
  */

  /*
    Function fallback. Manipulate data in the db via

      - db.{collection}
      - db.{collection}.find(id)
      - db.{collection}.where(query)
      - db.{collection}.update(target, attrs)
      - db.{collection}.remove(target)

    // Example: return a single object with related models
    this.get('/contacts/:id', function(db, request) {
      var contactId = +request.params.id;

      return {
        contact: db.contacts.find(contactId),
        addresses: db.addresses.where({contact_id: contactId});
      };
    });

  */

  this.get('/todoLists', function(db, request) {
    console.log(db);
    // IMPORTANT NOTE : the attribute name inside data needs to correspond to what we're trying to get !!
    var data = {
      'todo-lists': db['todo-lists']
    };
    // console.log(data);
    return data;
  });

  this.get('/todoLists/:id', function(db, request) {
    var todoListId = +request.params.id;

    var data = {
      'todo-list': db['todo-lists'].find(todoListId)
    };
    // console.log(data);
    return data;
  });

  this.post('/todoLists', function(db, request) {
    var attrs = JSON.parse(request.requestBody);
    var todoList = db['todo-lists'].insert(attrs);
    todoList.todoList.id = todoList.id;
    var data = {
      'todo-lists': {
        type: 'todo-list',
        id: todoList.id,
        attributs: todoList
      }
    };
    // console.log(data);
    return data;
  });

  this.post('/todoItems', function(db, request) {
    var attrs = JSON.parse(request.requestBody);
    var todoItem = db['todo-items'].insert(attrs);
    todoItem.todoItem.id = todoItem.id;
    var data = {
      'todo-items': {
        type: 'todo-item',
        id: todoItem.id,
        attributs: todoItem
      }
    };
    // console.log(data);
    return data;
  });
}

/*
You can optionally export a config that is only loaded during tests
export function testConfig() {

}
*/
