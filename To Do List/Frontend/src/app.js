$(document).ready(() => {
    let taskCount = $(".incom-tasks .tasks").length;
    let taskCom = $(".com-tasks .tasks").length;

    $('#TaskForm').submit((event) => {
        event.preventDefault();

        $(".incom-tasks").append(`<hr><div class="tasks">
        <h3>${$("#title").val()}</h3>
        <p>${$("#content").val()}</p>
        <button class="delete-btn">Delete</button><button class="complete-btn">Completed</button>
      </div>`);
        taskCount++;
        $("#remaining-count").text(taskCount);
        $("#title").val("");
        $("#content").val("");
    });

    $(".incom-tasks").on("click", ".delete-btn", function (event) {
        event.preventDefault();
        $(this).closest(".tasks").remove();
        taskCount--;
        $("#remaining-count").text(taskCount);
    });

    $(".incom-tasks").on("click", ".complete-btn", function () {
        $(".com-tasks").append($(this).closest(".tasks"));
        $(this).closest(".complete-btn").remove();
        taskCount--;
        taskCom++;
        $("#remaining-count").text(taskCount);
        $("#com-count").text(taskCom);
    });
});
