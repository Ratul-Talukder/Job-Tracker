

//Click-Delete-Button
const jobContainer = document.getElementById('job-container');
jobContainer.addEventListener("click", function (e) {
    const deleteButton = e.target.closest(".delete-btn");

    if (deleteButton) {

        const jobCard = deleteButton.closest(".job-card");
        const color = jobCard.style.borderLeftColor;

        if (color === "green") {
            const cntOfInterviews = document.getElementById("interview-cnt");
            let value = Number(cntOfInterviews.innerText);
            cntOfInterviews.innerText = value - 1;
        }
        else if (color === "red") {
            const cntOfRejects = document.getElementById("reject-cnt");
            let value = Number(cntOfRejects.innerText);
            cntOfRejects.innerText = value - 1;
        }

        jobCard.remove();

        const availableJobs = document.getElementsByClassName("available-jobs-number");
        
        for (let curJobs of availableJobs) {
            let value = Number(curJobs.innerText);
            value -= 1;
            curJobs.innerText = value;
            if (value === 0) {
                const noJobAvailable = document.getElementById("no-job-available");
                noJobAvailable.classList.remove("hidden");
                noJobAvailable.classList.add("flex");
            }
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

        if (this.innerText === "Interview") {
            const cnt = document.getElementById("interview-cnt");
            if (cnt.innerText === "0") {
                const jobContainer = document.getElementById("job-container");
                jobContainer.classList.add("hidden");
                const noJobAvailable = document.getElementById("no-job-available");
                noJobAvailable.classList.remove("hidden");
                noJobAvailable.classList.add("flex");
            }
        }
        else if (this.innerText === "Rejected") {
            const cnt = document.getElementById("reject-cnt");
            if (cnt.innerText === "0") {
                const jobContainer = document.getElementById("job-container");
                jobContainer.classList.add("hidden");
                const noJobAvailable = document.getElementById("no-job-available");
                noJobAvailable.classList.remove("hidden");
                noJobAvailable.classList.add("flex");
            }
        }

    });
});

//InterView-btn Click
const interviewButton = document.querySelectorAll(".interview-btn");

interviewButton.forEach(btn => {
    btn.addEventListener("click", function () {
        this.parentNode.parentNode.style.borderLeft = "4px solid green";
        const jobCard = this.closest(".job-card");

        const badge = jobCard.querySelector(".badge");

        const cntOfInterviews = document.getElementById("interview-cnt");
        const cntOfRejects = document.getElementById("reject-cnt");

        let value = Number(cntOfInterviews.innerText);
        if (badge.innerText !== "INTERVIEW") {
            cntOfInterviews.innerText = value + 1;
            value = Number(cntOfRejects.innerText);
            if (badge.innerText === "REJECTED") cntOfRejects.innerText = value - 1;
        }
        

        badge.innerText = "INTERVIEW";

        badge.classList.remove("badge-primary","badge-soft");
        badge.classList.add("badge-success");

        badge.classList.remove("text-[#002C5C]","font-semibold");
        badge.classList.add("text-green-1200","font-bold","bg-green-500/20");

    });
});

//Reject-btn Click
const rejectButton = document.querySelectorAll(".reject-btn");

rejectButton.forEach(btn => {
    btn.addEventListener("click", function () {
        this.parentNode.parentNode.style.borderLeft = "4px solid red";

        const jobCard = this.closest(".job-card");

        const badge = jobCard.querySelector(".badge");

        const cntOfInterviews = document.getElementById("interview-cnt");
        const cntOfRejects = document.getElementById("reject-cnt");

        let value = Number(cntOfRejects.innerText);
        if (badge.innerText !== "REJECTED") {
            cntOfRejects.innerText = value + 1;
            value = Number(cntOfInterviews.innerText);
            if (badge.innerText === "INTERVIEW") cntOfInterviews.innerText = value - 1;

        }
        badge.innerText = "REJECTED";

        badge.classList.remove("badge-primary","badge-soft");
        badge.classList.add("badge-error");

        badge.classList.remove("text-[#002C5C]","font-semibold");
        badge.classList.add("text-red-1200","font-bold","bg-red-500/20");

    });
});

