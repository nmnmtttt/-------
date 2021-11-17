try {
  // 找到 .align-self-center 进行的分支
  if (document.querySelector(".align-self-center"))
    if (
      document
        .querySelector(".align-self-center")
        .querySelector("code[id]")
        .innerText.includes("master")
    ) {
      document.querySelector(".row-content-block.middle-block").innerHTML =
        "还搁这提交mater呢，注意下提交的分支。";
      document.querySelector(".row-content-block.middle-block").style.fontSize =
        "20px";
      document
        .querySelector(".align-self-center")
        .querySelector("code[id]").style.border = "1px solid red";
    }
  if (document.querySelectorAll(".merge-request-select.dropdown")) {
    const FinalEl = [
      ...document.querySelectorAll(".merge-request-select.dropdown"),
    ].pop();
    const confirmBtn = document.querySelector(
      'input[value="Compare branches and continue"]'
    );
    confirmBtn.disabled = false;
    const judgeBranch = () => {
      if (
        FinalEl.querySelector(".dropdown-toggle-text").innerText.includes(
          "master"
        )
      )
        confirmBtn.disabled = true;
      else confirmBtn.disabled = false;
    };
    const observer = new MutationObserver(judgeBranch);
    observer.observe(FinalEl, {
      attributes: true,
      childList: true,
      subtree: true,
    });
    setTimeout(() => {
      judgeBranch();
    }, 500);
  }
} catch (error) {
  console.log("hoops, someThing is error");
}
