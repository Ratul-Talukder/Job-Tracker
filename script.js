

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


        //   <button
        //       class="bg-[#EEF4FF] rounded-md py-2 px-3 mb-1 text-[#002C5C] font-semibold"
        //     >
        //       NOT APPLIED
        //     </button>