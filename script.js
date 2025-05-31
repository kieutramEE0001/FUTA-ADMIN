
document.addEventListener("DOMContentLoaded", function () {
  const addBtn = document.querySelector(".add-btn");              // Nút + Thêm
  const modal = document.getElementById("addAccountModal");       // Modal thêm tài khoản
  const closeBtn = modal.querySelector(".close");                 // Nút ×
  const minimizeBtn = modal.querySelector(".minimize");           // Nút thu nhỏ (–)

  // Hiển thị modal khi nhấn nút + Thêm
  addBtn.addEventListener("click", function () {
    modal.style.display = "flex";          // Dùng flex để căn giữa modal
    modal.classList.add("show");           // Thêm class 'show' nếu cần hiệu ứng
  });

  // Ẩn modal khi nhấn nút ×
  closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
    modal.classList.remove("show");
  });

  // Tùy chọn: xử lý nút – nếu bạn muốn thu nhỏ modal (ở đây chỉ ẩn phần nội dung)
  minimizeBtn.addEventListener("click", function () {
    const content = modal.querySelector(".modal-content");
    content.style.display = content.style.display === "none" ? "block" : "none";
  });

  // Ẩn modal nếu nhấn ra ngoài nội dung
  window.addEventListener("click", function (e) {
    if (e.target === modal) {
      modal.style.display = "none";
      modal.classList.remove("show");
    }
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const addBtn = document.querySelector(".edit");              // Nút + Thêm
  const modal = document.getElementById("editAccountModal");       // Modal thêm tài khoản
  const closeBtn = modal.querySelector(".close");                 // Nút ×
  const minimizeBtn = modal.querySelector(".minimize");           // Nút thu nhỏ (–)

  // Hiển thị modal khi nhấn nút + Thêm
  addBtn.addEventListener("click", function () {
    modal.style.display = "flex";          // Dùng flex để căn giữa modal
    modal.classList.add("show");           // Thêm class 'show' nếu cần hiệu ứng
  });

  // Ẩn modal khi nhấn nút ×
  closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
    modal.classList.remove("show");
  });

  // Tùy chọn: xử lý nút – nếu bạn muốn thu nhỏ modal (ở đây chỉ ẩn phần nội dung)
  minimizeBtn.addEventListener("click", function () {
    const content = modal.querySelector(".modal-content");
    content.style.display = content.style.display === "none" ? "block" : "none";
  });

  // Ẩn modal nếu nhấn ra ngoài nội dung
  window.addEventListener("click", function (e) {
    if (e.target === modal) {
      modal.style.display = "none";
      modal.classList.remove("show");
    }
  });

   // Các input trong modal sửa
  const editMaTK = document.getElementById('editMaTK');
  const editTenNV = document.getElementById('editTenNV');
  const editNgaySinh = document.getElementById('editNgaySinh');
  const editSDT = document.getElementById('editSDT');
  const editEmail = document.getElementById('editEmail');
  const editUsername = document.getElementById('editUsername');
  const editPassword = document.getElementById('editPassword');
  const editRoleRadios = document.querySelectorAll('input[name="editRole"]');
  const editGenderRadios = document.querySelectorAll('input[name="editGender"]');

  // Mở modal sửa và điền dữ liệu
  document.querySelectorAll('button.edit').forEach(btn => {
    btn.addEventListener('click', () => {
      // Lấy dòng chứa nút được bấm
      const tr = btn.closest('tr');

      // Lấy dữ liệu từ cột tương ứng trong dòng
      const maTK = tr.children[1].textContent.trim();
      const tenNV = tr.children[2].textContent.trim();
      const sdt = tr.children[3].textContent.trim();
      const username = tr.children[4].textContent.trim();
      const password = tr.children[5].textContent.trim();

      // Gán dữ liệu vào modal
      editMaTK.value = maTK;
      editTenNV.value = tenNV;
      editSDT.value = sdt;
      editUsername.value = username;
      editPassword.value = password;

      // Chưa có dữ liệu ngày sinh, email, giới tính trong bảng mẫu
      // Bạn cần bổ sung dữ liệu hoặc để mặc định
      editNgaySinh.value = '';  // hoặc giá trị từ đâu đó
      editEmail.value = '';

      // Giới tính mặc định chọn Nam
      editGenderRadios.forEach(radio => radio.checked = false);
      editGenderRadios[0].checked = true;

      // Quyền truy cập: bạn cần logic tùy theo dữ liệu thực tế
      editRoleRadios.forEach(radio => radio.checked = false);
      editRoleRadios[0].checked = true;

      // Hiện modal sửa
      editModal.style.display = 'block';
    });
  });

  // Đóng modal khi bấm nút đóng
  editCloseBtn.addEventListener('click', () => {
    editModal.style.display = 'none';
  });
});

 let accountToDelete = "";

  function openDeleteModal(accountId) {
    accountToDelete = accountId;
    document.getElementById("deleteAccountId").innerText = accountId;
    document.getElementById("deleteConfirmModal").style.display = "block";
  }

  function closeDeleteModal() {
    document.getElementById("deleteConfirmModal").style.display = "flex";
  }

  function confirmDelete() {
    // TODO: Thực hiện logic xóa tài khoản, ví dụ gọi API hoặc xóa hàng trong bảng
    alert("Đã xóa tài khoản: " + accountToDelete);
    closeDeleteModal();
  }

  // Gắn sự kiện click cho các nút "Xóa" trong bảng
  document.addEventListener("DOMContentLoaded", function () {
    const deleteButtons = document.querySelectorAll(".delete");
    deleteButtons.forEach((btn) => {
      btn.addEventListener("click", function () {
        const accountId = this.closest("tr").children[1].innerText.trim();
        openDeleteModal(accountId);
      });
    });
  });




