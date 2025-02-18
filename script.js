document.getElementById("toggleSwitch").addEventListener("change", function() {
            if (this.checked) {
                showNotification();
            }
        });

        function showNotification() {
            let notification = document.getElementById("notification");
            let message = document.getElementById("message");
            let loadingContainer = document.getElementById("loadingContainer");
            let loadingBar = document.getElementById("loadingBar");

            // Hiện thông báo
            notification.classList.add("show");
            loadingContainer.style.display = "block";
            loadingBar.style.width = "0%";

            // Chạy loading
            setTimeout(() => {
                loadingBar.style.width = "100%";
            }, 10);

            // Sau 6s đổi sang thành công
            setTimeout(() => {
                message.innerHTML = '<i class="fas fa-check-circle" style="color: green;"></i> Thành công!';
            }, 6000);
        }

        function closeNotification() {
            document.getElementById("notification").classList.remove("show");
        }