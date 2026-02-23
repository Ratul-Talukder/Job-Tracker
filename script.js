

//Click-Delete-Button
const jobContainer = document.getElementById('job-container');
jobContainer.addEventListener("click", function (e) {
    const deleteButton = e.target.closest(".delete-btn");

    if (deleteButton) {

        const jobCard = deleteButton.closest(".job-card");

        jobCard.remove();

        const availableJobs = document.getElementsByClassName("available-jobs-number");
        
        for (let curJobs of availableJobs) {
            let value = Number(curJobs.innerText);
            curJobs.innerText = value - 1;
        }
    }
});



//Tab-Button switch
const tabs = document.querySelectorAll(".tab-btn");

tabs.forEach(tab => {
    tab.addEventListener("click", function () {

        tabs.forEach(t => {

            t.classList.remove("tab-active", "btn-primary");

            t.classList.add("hover:text-blue-600");
        });

        this.classList.add("tab-active", "btn-primary");

        this.classList.remove("hover:text-blue-600");

    });
});