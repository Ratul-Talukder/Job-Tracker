const allJobContainer = document.getElementById("all-job-container");
const interviewJobContainer = document.getElementById("interview-job-container");
const rejectedJobContainer = document.getElementById("rejected-job-container");
const noJobAvailable = document.getElementById("no-job-available");

const availableJobs = document.getElementById("available-jobs-number");
const interviewCnt = document.getElementById("interview-cnt");
const rejectedCnt = document.getElementById("reject-cnt");

//Number of Interview or Rejected or All jobs to show right side
const numberOfJobs = document.getElementById("numberOfJobs");


//Tab switch
const tabContainer = document.getElementById("tab-container");
tabContainer.addEventListener("click", function(e) {

    const tabBtn = e.target.closest(".tab-btn");
    if (!tabBtn) return;

    const tabs = tabContainer.children;

    for (let tab of tabs) {
        tab.classList.remove("tab-active", "btn-primary");
        tab.classList.add("hover:text-blue-600");
    }

    tabBtn.classList.add("tab-active", "btn-primary");
    tabBtn.classList.remove("hover:text-blue-600");

    if (tabBtn.classList.contains("all-tab")) {
        
        numberOfJobs.innerText = availableJobs.innerText + " jobs";

        allJobContainer.classList.remove("hidden");
        rejectedJobContainer.classList.add("hidden");
        interviewJobContainer.classList.add("hidden");

        if (Number(availableJobs.innerText) > 0) noJobAvailable.classList.add("hidden");
            
    }
    else if (tabBtn.classList.contains("interview-tab")) {
        numberOfJobs.innerText = interviewCnt.innerText + " of " + availableJobs.innerText + " jobs";

        allJobContainer.classList.add("hidden");
        rejectedJobContainer.classList.add("hidden");

        if (Number(interviewCnt.innerText) === 0) {
            noJobAvailable.classList.remove("hidden");
            noJobAvailable.classList.add("flex");
        }
        else {
            interviewJobContainer.classList.remove("hidden");
            noJobAvailable.classList.remove("flex");
            noJobAvailable.classList.add("hidden"); 
        }

    }
    else {//Rejected Tab
        numberOfJobs.innerText = rejectedCnt.innerText + " of " + availableJobs.innerText + " jobs";

        allJobContainer.classList.add("hidden");
        interviewJobContainer.classList.add("hidden");

        if (Number(rejectedCnt.innerText) === 0) {
            noJobAvailable.classList.remove("hidden");
            noJobAvailable.classList.add("flex");
        }
        else {
            rejectedJobContainer.classList.remove("hidden");
            noJobAvailable.classList.remove("flex");
            noJobAvailable.classList.add("hidden"); 
        }
    }

});


//All Tab
allJobContainer.addEventListener("click", function (e) {

    const actionBtn = e.target.closest(".action-btn");
    if (!actionBtn) return;

    if (actionBtn.classList.contains("interview-btn")) {

        // Get related job card
        const jobCard = actionBtn.closest(".job-card");
        // Get badge inside that job card
        const badge = jobCard.querySelector(".badge");

        // Counters
        const interviewCnt = document.getElementById("interview-cnt");
        const rejectCnt = document.getElementById("reject-cnt");
        // If already interview, stop
        if (badge.innerText === "INTERVIEW") return;

        // Increase interview count
        interviewCnt.innerText = Number(interviewCnt.innerText) + 1;

        // If previously rejected, decrease reject count
        if (badge.innerText === "REJECTED") {

            rejectCnt.innerText = Number(rejectCnt.innerText) - 1;

            const jobId = jobCard.id;
            const oldRejected = rejectedJobContainer.querySelector(`#${jobId}`);
            rejectedJobContainer.removeChild(oldRejected);
        }

        // Update badge
        badge.innerText = "INTERVIEW";
        badge.className = "badge font-bold bg-green-500/20 text-green-700";
        // Add left border
        jobCard.style.borderLeft = "4px solid green";
        // Clone from All tab and move to interview Tab
        const newCard = jobCard.cloneNode(true);
        interviewJobContainer.appendChild(newCard);
    }
    else if (actionBtn.classList.contains("reject-btn")) {

        // Get related job card

        const jobCard = actionBtn.closest(".job-card");
        // Get badge inside that job card
        const badge = jobCard.querySelector(".badge");
        // Counters
        const interviewCnt = document.getElementById("interview-cnt");
        const rejectCnt = document.getElementById("reject-cnt");
        // If already interview, stop
        if (badge.innerText === "REJECTED") return;
        // Increase interview count
        rejectCnt.innerText = Number(rejectCnt.innerText) + 1;
        // If previously rejected, decrease reject count
        if (badge.innerText === "INTERVIEW") {
            interviewCnt.innerText = Number(interviewCnt.innerText) - 1;
            const jobId = jobCard.id;
            const oldInterviewed = interviewJobContainer.querySelector(`#${jobId}`);
            interviewJobContainer.removeChild(oldInterviewed);
        }
        // Update badge
        badge.innerText = "REJECTED";
        badge.className = "badge font-bold bg-red-500/20 text-red-700";
        // Add left border
        jobCard.style.borderLeft = "4px solid red";
        // Clone from All tab and move to interview Tab
        const newCard = jobCard.cloneNode(true);
        rejectedJobContainer.appendChild(newCard);
    }
    else if (actionBtn.classList.contains("delete-btn")) {
        const jobCard = actionBtn.closest(".job-card");
        const color = jobCard.style.borderLeftColor;

        const jobId = jobCard.id;
        const allCopies = document.querySelectorAll(`#${jobId}`);
        allCopies.forEach(card => {
            card.remove();
        });

        if (color === "green") {
            let value = Number(interviewCnt.innerText);
            interviewCnt.innerText = value - 1;
        }
        else if (color === "red") {
            let value = Number(rejectedCnt.innerText);
            rejectedCnt.innerText = value - 1;
        }

        availableJobs.innerText = Number(availableJobs.innerText) - 1;

        numberOfJobs.innerText = availableJobs.innerText + " jobs";

        if (Number(availableJobs.innerText) === 0) {
            noJobAvailable.classList.remove("hidden");
            noJobAvailable.classList.add("flex");
        }
    }

});

//Interview Tab
interviewJobContainer.addEventListener("click", function (e) {

    const actionBtn = e.target.closest(".action-btn");
    if (!actionBtn) return;

    if (actionBtn.classList.contains("reject-btn")) {

        // Get related job card
        const jobCard = actionBtn.closest(".job-card");
        // Get badge inside that job card
        const badge = jobCard.querySelector(".badge");
        // Increase reject count
        rejectedCnt.innerText = Number(rejectedCnt.innerText) + 1;
        // decrease interview count
        interviewCnt.innerText = Number(interviewCnt.innerText) - 1;

        //change right side number of jobs
        numberOfJobs.innerText = interviewCnt.innerText + " of " + availableJobs.innerText + " jobs";
        
        const jobId = jobCard.id;
        const allCopies = document.querySelectorAll(`#${jobId}`);
        allCopies.forEach(card => {
            const badge = card.querySelector(".badge");
            badge.innerText = "REJECTED";
            badge.className = "badge font-bold bg-red-500/20 text-red-700";
            card.style.borderLeft = "4px solid red";
        });

        //move from interview tab to Rejected Tab
        rejectedJobContainer.appendChild(jobCard);

    }
    else if (actionBtn.classList.contains("delete-btn")) {

        const jobCard = actionBtn.closest(".job-card");

        let value = Number(interviewCnt.innerText);
        value -= 1;
        interviewCnt.innerText = value;
        availableJobs.innerText = Number(availableJobs.innerText) - 1;
        //change right side number of jobs
        numberOfJobs.innerText = interviewCnt.innerText + " of " + availableJobs.innerText + " jobs";

        const jobId = jobCard.id;
        const allCopies = document.querySelectorAll(`#${jobId}`);
        allCopies.forEach(card => {
            card.remove();
        });

        if (value === 0) {
            noJobAvailable.classList.remove("hidden");
            noJobAvailable.classList.add("flex");
        }
    }

});

//Rejected Tab
rejectedJobContainer.addEventListener("click", function (e) {

    const actionBtn = e.target.closest(".action-btn");
    if (!actionBtn) return;

    if (actionBtn.classList.contains("interview-btn")) {

        // Get related job card
        const jobCard = actionBtn.closest(".job-card");
        // Get badge inside that job card
        const badge = jobCard.querySelector(".badge");

        // Increase interview count
        interviewCnt.innerText = Number(interviewCnt.innerText) + 1;
        // decrease reject count
        rejectedCnt.innerText = Number(rejectedCnt.innerText) - 1;

        //change right side number of jobs
        numberOfJobs.innerText = rejectedCnt.innerText + " of " + availableJobs.innerText + " jobs";
        
        const jobId = jobCard.id;
        const allCopies = document.querySelectorAll(`#${jobId}`);
        allCopies.forEach(card => {
            const badge = card.querySelector(".badge");
            badge.innerText = "INTERVIEW";
            badge.className = "badge font-bold bg-green-500/20 text-green-700";
            card.style.borderLeft = "4px solid green";
        });

        //move from rejected tab to interview Tab
        interviewJobContainer.appendChild(jobCard);

    }
    else if (actionBtn.classList.contains("delete-btn")) {

        const jobCard = actionBtn.closest(".job-card");

        let value = Number(rejectedCnt.innerText);
        value -= 1;
        rejectedCnt.innerText = value;
        availableJobs.innerText = Number(availableJobs.innerText) - 1;

        //change right side number of jobs
        numberOfJobs.innerText = rejectedCnt.innerText + " of " + availableJobs.innerText + " jobs";

        const jobId = jobCard.id;
        const allCopies = document.querySelectorAll(`#${jobId}`);
        allCopies.forEach(card => {
            card.remove();
        });

        if (value === 0) {
            noJobAvailable.classList.remove("hidden");
            noJobAvailable.classList.add("flex");
        }
   
    }

});















//Reject-btn Click
// const rejectButton = document.querySelectorAll(".reject-btn");

// rejectButton.forEach(btn => {
//     btn.addEventListener("click", function () {
//         const parentNode = this.parentNode.parentNode;
//         parentNode.style.borderLeft = "4px solid red";

//         const jobCard = this.closest(".job-card");

//         const badge = jobCard.querySelector(".badge");

//         const cntOfInterviews = document.getElementById("interview-cnt");
//         const cntOfRejects = document.getElementById("reject-cnt");

//         let value = Number(cntOfRejects.innerText);
//         if (badge.innerText !== "REJECTED") {
//             cntOfRejects.innerText = value + 1;
//             value = Number(cntOfInterviews.innerText);
//             if (badge.innerText === "INTERVIEW") cntOfInterviews.innerText = value - 1;

//             badge.innerText = "REJECTED";
//             badge.classList.remove("badge-primary","badge-soft","badge-success","text-[#002C5C]","font-semibold","bg-green-500/20","text-green-1200");
//             badge.classList.add("badge-error","text-red-1200","font-bold","bg-red-500/20");

//             const rejectedJobContainer = document.getElementById("rejected-job-container");
//             let newChild = parentNode.cloneNode(true);
//             rejectedJobContainer.appendChild(newChild);

//         }


//     });
// });

document.addEventListener("click", function(e) {
    const btn = e.target.closest(".reject-btn");
    if (!btn) return;

    const jobCard = btn.closest(".job-card");
    const badge = jobCard.querySelector(".badge");
    const rejectedJobContainer = document.getElementById("rejected-job-container");
    const cntOfInterviews = document.getElementById("interview-cnt");
    const cntOfRejects = document.getElementById("reject-cnt");

    if (badge.innerText === "REJECTED") return;

    // Update counts
    cntOfRejects.innerText = Number(cntOfRejects.innerText) + 1;
    if (badge.innerText === "INTERVIEW") {
        cntOfInterviews.innerText = Number(cntOfInterviews.innerText) - 1;
    }

    // Update badge
    badge.innerText = "REJECTED";
    badge.className = "badge badge-error text-red-1200 font-bold bg-red-500/20";

    // Update border
    jobCard.style.borderLeft = "4px solid red";

    // Clone to Rejected tab
    const newChild = jobCard.cloneNode(true);
    rejectedJobContainer.appendChild(newChild);
});

