// let sidebar = document.getElementsByClassName('md-sidebar--primary')[0];

// let backBtn = document.createElement('div');
// backBtn.className = 'toc-back-btn';

// let backIcon = document.createElement('span');
// backIcon.className = 'md-nav__icon';

// backBtn.appendChild(backIcon);

// sidebar.appendChild(backBtn);

// backBtn.onclick = function () {
//     let isCollapsed = sidebar.classList.contains('collapse');
//     if (isCollapsed) {
//         sidebar.classList.remove('collapse');
//     } else {
//         sidebar.classList.add('collapse');
//     }
// }

let expandAllBtns = [...document.getElementsByClassName('diff-line'), ...document.getElementsByClassName('same-line')];

for (let expandAllBtn of expandAllBtns) {
    expandAllBtn.onclick = function (e) {
        e.preventDefault();
        let details = document.getElementsByTagName("details")
        for (let detail of details) {
            detail.open = true;
        }
    }
}

let collapseAllBtns = [...document.getElementsByClassName('collapse-line'), ...document.getElementsByClassName('collapse-sameline')];

for (let collapseAllBtn of collapseAllBtns) {
    collapseAllBtn.onclick = function (e) {
        e.preventDefault();
        let detailsc = document.getElementsByTagName("details")
        for (let detailc of detailsc) {
            detailc.open = false;
        }
    }
}

let onThisPage = document.getElementsByClassName('md-sidebar--secondary')[0];
let closeRightBtn = document.createElement('div');
closeRightBtn.className = 'close-right-btn';
let backIconRight = document.createElement('span');
backIconRight.className = 'md-nav__icon';
closeRightBtn.appendChild(backIconRight);

onThisPage.appendChild(closeRightBtn);

closeRightBtn.onclick = function () {
    let isCollapsed = onThisPage.classList.contains('collapse');
    if (isCollapsed) {
        onThisPage.classList.remove('collapse');
    } else {
        onThisPage.classList.add('collapse');
    }
}
