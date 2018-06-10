var todoList = (function () {
    var list = [];

    function Item(id, txt, star, date,status) {
        this.id     = id
        this.txt    = txt
        this.star   = star
        this.date   = date
        this.status = status
    }
    
    function saveList() {
        localStorage.setItem("todoList", JSON.stringify(list));
    }
    
    function loadList() {
        list = JSON.parse(localStorage.getItem("todoList"));
        if (list === null) {
            list = []
        }
    }

    loadList();

    var obj = {};

    obj.addItemToList = function (id, txt, star, date, status) {
        var item = new Item(id, txt, star, date,status);
        list.push(item);
        saveList();
    };

    obj.updateItemFromList = function (id) { 
        for (var i in list) {
            if (list[i].id == id) { 
                if(list[i].status==1){
                    list[i].status = 0;
                }else{
                    list[i].status = 1;
                }                
                saveList();
                break;
            }
        }
    };

    obj.removeItemFromList = function (id) { 
        for (var i in list) {
            if (list[i].id == id) { 
                list.splice(i, 1);
                saveList();
                break;
            }
        }
    };


    obj.clearList = function () {
        list = [];
        saveList();
    };


    obj.listItem = function () { // -> array of Items
        return list;
    };


    // ----------------------------
    return obj;
})();
