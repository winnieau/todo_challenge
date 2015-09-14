toDo.controller('ToDoController', [function() {
  var self = this;
  // var todos = [];

    self.displayList = [{'title': 'Finish weekend challenge', 'done':false}]
    self.addToDo = function() {
      this.displayList.push({'title':this.newTodo, 'done':false})
      this.newTodo = ''
    }
  }])
