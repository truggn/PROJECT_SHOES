// XỬ LÝ FORM ADMIN
        document.addEventListener('DOMContentLoaded' , function(){
              const productId; // lay id 
              var deleteForm = document.forms['delete-product-form'];// xu ly lay form xoa
                       
              var btnDeleteProduct = document.getElementById('btn-delete-product');
               console.log(productId);
              // xử lý checkbox
              var checkBoxAll = $('#checkboxAll');
              var productItemCheckbox = $('input[name="productId[]"]');
              var checkAllSumbit = $('.btn-checkedsumbit'); 
              var containerForm = document.forms['conteiner-form'];
                  // khi dialog confirm show  
                        $('#delete-product').on('show.bs.modal', function (event) {
                          var button = $(event.relatedTarget); // Button that triggered the modal
                          productId  = button.data('id');
                          console.log(productId);// Extract info from data-* attributes
                        });

                  // xu ly su kien nut xoa, bản ghi này sẽ được đưa vào thùng rác .
                  
                      btnDeleteProduct.onclick = function(){ 
                        
                        deleteForm.action = '/admin/' + productId + '?_method=DELETE';
                        deleteForm.submit();
                      };

                  // xử lý checkbbox all khi dc click 
                 checkBoxAll.change(function(){
                    var isCheckedAll = $(this).prop('checked');
                     productItemCheckbox.prop('checked' , isCheckedAll);
                     renderCheckAllSubmitBtn();

                 }); 

                 // xử lý checkbox con  nếu bỏ checkbox con thì checkbox all cũng ko dc chọn
                 productItemCheckbox.change(function(){
                    var isCheckedAll = productItemCheckbox.length === $('input[name="productId[]"]:checked').length;
                    checkBoxAll.prop('checked' ,isCheckedAll ); // xử lý checkall và bỏ check con
                    renderCheckAllSubmitBtn();
                 });
                  // render lại check all submit button thực hiện
                 function renderCheckAllSubmitBtn(){
                   var checkedCount = $('input[name="productId[]"]:checked').length;
                    if(checkedCount > 0){
                      checkAllSumbit.removeClass('disabled'); // xoa bo disabed trong class cua btn thuc hien
                    }else{
                      checkAllSumbit.addClass('disabled');   // add disable ko khong check nao ca
                    }
                 };
                 // check all submit button clicked 
                 checkAllSumbit.click(function(e){
                   e.preventDefault();
                   var issubmitTable= !$(this).hasClass('disabled'); 
                   if(issubmitTable){ // ktra neu ma co quyen submit thi ta moi submit cai form
                        containerForm.submit();
                   }
                 });
                // hàm lắng nghe sự kiện submit cua form , bỏ hành vi mặc định
                 checkAllSumbit.on('submit' , function(e){
                      var issubmitTable= !$(this).hasClass('disabled');  // kiểm tra hành vi đã check hành động hay chưa 
                        if(!issubmitTable){ // ktra neu chưa check hành động thì trả về PrevenDefault
                        e.preventDefault();   
                   }
                 });
       
      });
