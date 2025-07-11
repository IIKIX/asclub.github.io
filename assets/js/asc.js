document.getElementById("open-dialog-1").addEventListener("click", () => {
  document.getElementById("dialog-1").showModal();
});

document.getElementById("open-dialog-2").addEventListener("click", () => {
  document.getElementById("dialog-2").showModal();
});

document.getElementById("open-dialog-3").addEventListener("click", () => {
  document.getElementById("dialog-3").showModal();
});

document.getElementById("open-dialog-4").addEventListener("click", () => {
  document.getElementById("dialog-4").showModal();
});

document.getElementById("open-dialog-5").addEventListener("click", () => {
  document.getElementById("dialog-5").showModal();
});

document.getElementById("open-dialog-6").addEventListener("click", () => {
  document.getElementById("dialog-6").showModal();
});

document.getElementById("open-dialog-7").addEventListener("click", () => {
  document.getElementById("dialog-7").showModal();
});

document.getElementById("open-dialog-8").addEventListener("click", () => {
  document.getElementById("dialog-8").showModal();
});

function setupDialog(dialogId) {
  const dialog = document.getElementById(dialogId);
  if (!dialog) return;

  const more = dialog.querySelector(".more");
  const disable = dialog.querySelector(".disable");

  if (more) {
    more.addEventListener("click", function () {
      dialog.returnValue = this.value;
      dialog.close();
    });
  }

  if (disable) {
    disable.addEventListener("click", function () {
      dialog.returnValue = "Отказ";
      dialog.close();
    });
  }

  dialog.addEventListener("close", () => {
    document.getElementById("result").innerText =
      `Результат: ${dialog.returnValue}`;
  });

  dialog.addEventListener("cancel", () => {
    dialog.returnValue = "ESC";
  });
}

setupDialog("dialog-1");
setupDialog("dialog-2");
setupDialog("dialog-3");
setupDialog("dialog-4");
setupDialog("dialog-5");
setupDialog("dialog-6");
setupDialog("dialog-7");
setupDialog("dialog-8");
