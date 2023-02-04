 document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, {
      edge: "right"
    });

    var elems1 = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems1, {});

    var elems2 = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems2, {});
    
    
    // document.getElementById('edit_box_modal_back').addEventListener('click' , function(e){
    //   document.getElementById('edit_box_modal').classList.remove('show')
    //   e.target.classList.add('dis-none')

    // })

    var elems3 = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(elems3, {
      direction: 'left',
      hoverEnabled: false
    });

    // for (const item of document.querySelectorAll('.edit_button')) {
    //   item.addEventListener('click', function (e) {
    //     e.stopPropagation()
    //     document.getElementById('edit_box_modal').classList.add('show')
    //     document.getElementById('edit_box_modal_back').classList.remove('dis-none')
        
    //   })
    // }

    // ------------search button------------

    // const searchBtn = document.getElementById('search_btn')
    // searchBtn.addEventListener('click', function (e) {


    //   const elems4 =  document.getElementById('loader_top');
    //   elems4.classList.remove('dis-none')
    //    fetch('https://jsonplaceholder.typicode.com/users')
    //    .then((response) => response.json())
    //    .then((json) =>{
    //      console.log("end");
    //      console.log(json)
   
    //      let html = ""
   
    //      for (const user of json) {
    //        html = html + `    <li class="collaps_title m-b-10">
    //        <div class="collapsible-header row flex-w"><i class="list_arrow material-icons m-l-10 m-r-0 fs-30">arrow_drop_down_circle</i>
    //          <span class="btn white black-text f-bold col l1 s12 m-r-3">109033</span>
    //          <span class="btn white black-text f-bold col l2 s12 m-r-3">1009100001036501</span>
    //          <span class="btn white black-text f-bold col l2 s12 m-r-3 highlight">${user.name}</span>
    //          <span class="btn white black-text f-bold col l4 s12 m-r-3">${user.website}...</span>
    //          <a class="edit_button waves-effect waves-light btn col l2 s12 m-r-3 "><i class="material-icons right m-r-0">edit</i>افزودن عملیات</a>
    //        </div>
    //        <div class="collapsible-body">
    //          <ul class=" row ">
    //            <li class="m-l-10 col l3 s12 m-b-20"><label class="m-l-5">آدرس:</label> شهرک حمید  خیابان وحدت   مجتمع یاس</li>
    //            <li class="m-l-10 col l2 s12 m-b-20"><label class="m-l-5">تلفن:</label>09185281978</li>
    //            <li class="m-l-10 col l2 s12 m-b-20"><label class="m-l-5">نوع مصرف:</label>مسکونی</li>
    //            <li class="m-l-10 col l2 s12 m-b-20 dis-flex"><i class="material-icons m-l-5" >notifications_active</i><label class="fs-15 m-l-5" for="">تاریخ یاد آوری:</label>1401/05/25 </li>
    //            <li class="col l2 s12  ">
    //              <div class="switch">
    //                <label >
    //                  مختومه
    //                  <input type="checkbox">
    //                  <span class="lever"></span>
    //                </label>
    //              </div>
    //            </li>
    //          </ul>
             
       
    //          <div id="table_operation" >
    //            <div class="divider bgblue"></div>
       
    //            <table class="responsive-table centered highlight ">
       
    //              <thead>
    //                <tr class="blue-text">
    //                  <th>ردیف</th>
    //                  <th>نوع عملیات</th>
    //                  <th>تاریخ ثبت</th>
    //                  <th>توضیحات</th>
    //                  <th>کاربر ثبت کننده</th>
    //                  <th>تغییرات</th>
    //                </tr>
    //              </thead>
       
       
    //              <tbody >
    //                <tr>
    //                  <td>1</td>
    //                  <td>مراجعات عمومی</td>
    //                  <td>1401/02/25</td>
    //                  <td>وجود نشتی - اصلاح قبض طبق دستور</td>
    //                  <td>میثم حسنبیگی</td>
    //                  <td>
    //                    <i class="material-icons orange-text darken-2 m-l-5 m-r-5 hov-pointer">edit</i>
    //                    <i class="material-icons red-text m-l-5 m-r-5 hov-pointer">delete_forever</i>
    //                    <i class="material-icons green-text m-l-5 m-r-5 hov-pointer">visibility</i>
    //                  </td>
    //                </tr>
    //              </tbody>
       
    //            </table>
       
    //          </div>
       
    //        </div>
    //      </li>
    //    `
    //      }
    //      elems4.classList.add('dis-none');
   
   
    //      document.querySelector('#search_result_box').innerHTML = html
         
    //      for (const item of document.querySelectorAll('.edit_button')) {
    //        item.addEventListener('click', function (e) {
    //          e.stopPropagation()
    //          document.getElementById('edit_box_modal').classList.add('show')
    //          document.getElementById('edit_box_modal_back').classList.remove('dis-none')
             
    //        })
    //      }
    //    });
   


    // })








  });

