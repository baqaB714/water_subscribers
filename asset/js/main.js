 document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, {
      edge: "right"
    });

    var elems1 = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems1, {});

    var elems2 = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems2, {});
    
    
    for (const item of document.querySelectorAll('.edit_button')) {
      item.addEventListener('click', function (e) {
        e.stopPropagation()
        document.getElementById('edit_box_modal').classList.add('show')
        document.getElementById('edit_box_modal_back').classList.remove('dis-none')
        
      })
    }
    document.getElementById('edit_box_modal_back').addEventListener('click' , function(e){
      document.getElementById('edit_box_modal').classList.remove('show')
      e.target.classList.add('dis-none')

    })

    var elems3 = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(elems3, {
      direction: 'left',
      hoverEnabled: false
    });

  });


