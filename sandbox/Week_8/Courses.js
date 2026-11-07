const aCourse = {
    code: 'CSE121b',
    name: 'Javascript Language',
    sections: [
        {
            sectionNum: 1, 
            roomNum: 'STC 353', 
            enrolled: 26, 
            days: 'TTh', 
            instructor: 'Bro T'
        },
        {
            sectionNum: 2, 
            roomNum: 'STC 347', 
            enrolled: 28, 
            days: 'TTh', 
            instructor: 'Sis A'
        }
    ],
    enrollStudent: function(num) {
        // Get the section that has sectionNum == num
        const theSection = this.sections.find(section => section.sectionNum === num);
        // increment enrolled
        theSection.enrolled++;
    },
    dropStudent: function(num) {
        // Get the section that has sectionNum == num
        const theSection = this.sections.find(section => section.sectionNum === num);
        // increment enrolled
        theSection.enrolled--;
    }
};

const anotherCourse = {
    code: 'CSE121b',
    name: 'Javascript Language',
    sections: [
        {
            sectionNum: 10, 
            roomNum: 'STC 353', 
            enrolled: 26, 
            days: 'TTh', 
            instructor: 'Bro T'
        },
        {
            sectionNum: 20, 
            roomNum: 'STC 347', 
            enrolled: 28, 
            days: 'TTh', 
            instructor: 'Sis A'
        }
    ],
    enrollStudent: function(num) {
        // Get the section that has sectionNum == num
        const theSection = this.sections.find(section => section.sectionNum === num);
        // increment enrolled
        console.log(theSection);
    }
};

function setHeader(course){
    const nameHeadlineEl = document.querySelector("#courseName");
    const codeHeadlineEl = document.querySelector("#courseCode");
    nameHeadlineEl.textContent = course.name;
    codeHeadlineEl.textContent = course.code;
}

function sectionTemplate(section){
    return `<tr>
          <td>${section.sectionNum}</td>
          <td>${section.roomNum}</td>
          <td>${section.enrolled}</td>
          <td>${section.days}</td>
          <td>${section.instructor}</td>
        </tr>
    `;
}

function setSections(sections){
    const sectionsEl = document.querySelector("#sections");
    const html = sections.map(sectionTemplate);
    sectionsEl.innerHTML = html.join('');
}

setHeader(aCourse);
setSections(aCourse.sections);

function enrollHandler(ev) {
    console.log(ev);
    if (ev.target.id === "enrollStudent"){
        theSection = document.querySelector("#sectionNumber").value();
        theSection.enrolled++;
    } else if (ev.target.id === "dropStudent"){
        theSection = document.querySelector("#sectionNumber").value()
        theSection.enrolled--;
    }
}

document.querySelector("#enrollStudent").addEventListener("click", enrollHandler)