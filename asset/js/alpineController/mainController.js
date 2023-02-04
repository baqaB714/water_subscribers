document.addEventListener('alpine:init', () => {
    Alpine.data('usersData', ()=>({
            users: [],
            mainUsers: [],
            pageUsers: [],
            isLoading:false,
            isError:false,
            showAddModal:false,
            pagecount : 1,
            itemsCount : 5,
            currentPage : 1,
            valueSearch : "",
            operationSearch : "",
            operationsArr : [
                {id:1 , title : "مراجعات عمومی"},
                {id:2 , title : "آب بنایی"},
                {id:3 , title : "انشعابات جدید"},
                {id:4 , title : "دعوتنامه"},
                {id:5 , title : "لیست هایلو"},
                {id:6 , title : "گزارشات تشخیصی"},
                {id:7 , title : "تست کنتور"},
                {id:8 , title : "تعویض کنتور"},
                {id:9 , title : "غیر مجاز"},
                {id:10 , title : "مشترکین بدهکار آب بها"},
                {id:11 , title : "کمیسیون"},
                {id:12 , title : "آب موقت"},
                {id:13 , title : "پیگیری خاص"},
            ],
            getUsers(){
                this.isLoading=true,
                axios.get("https://jsonplaceholder.typicode.com/users").then((res)=>{
                    console.log(res);
                    this.users=res.data;
                    this.mainUsers=res.data;
                    this.pageInation();
                    this.isError=false;
                }).catch(error=>{
                    this.isError=true;
                    // console.log(error);
                }).finally(()=>{
                    this.isLoading=false;
                })
            },

            pageInation(){
                this.pagecount = Math.ceil(this.users.length/this.itemsCount)
                let startAndis = (this.currentPage*this.itemsCount)-this.itemsCount
                let endAndis = this.currentPage*this.itemsCount
                this.pageUsers=this.users.slice(startAndis,endAndis)
                // console.log(this.pageUsers);
            },

            nextPage(){
                this.currentPage++;
                if (this.currentPage>this.pagecount) {
                    this.currentPage=this.pagecount;
                }
                this.pageInation();
            },
            perPage(){
                this.currentPage--;
                if (this.currentPage < 1) {
                    this.currentPage=1;
                }
                this.pageInation();
            },

            changeItemCount(e){
                this.itemsCount = e.value
                if (this.itemsCount<1) {this.itemsCount=1}
                if (this.itemsCount>this.users.length){this.itemsCount=this.users.length}
                this.pageInation()
            },

            handelSearch(value){
                    // console.log(value);
                    this.users = this.mainUsers.filter(user=>(user.phone.includes(value) || user.name.toLowerCase().includes(value) || (""+(user.id)).includes(value)|| user.company.bs.includes(value)))
                    this.currentPage = 1
                    this.pageInation()
            },

            handelOperation(value){
                // console.log(value);
            }

            
    }))

})