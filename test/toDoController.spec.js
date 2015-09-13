describe('ToDoController', function() {
  beforeEach(module('ToDo'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('ToDoController');
  }));

  it('initialises with an empty to do list', function() {
    expect(ctrl.todos).toBeUndefined();
  });


  describe('see current to do list ', function() {

    var todos = [
      {
        'title': 'Finish weekend challenge', 'done':false
      }
    ];

    it('displays a list of todos', function() {
      ctrl.addToDo = "Finish weekend challenge";
      expect(ctrl.displayList).toEqual(todos);
    });
  });

});
