"use strict"

const animItems = document.querySelectorAll('.anim_items');

if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll() {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                animItem.classList.add('active');
            } else {
                if (!animItem.classList.contains('_anim-no-hide')) {
                    animItem.classList.remove('_active');
                }
            }
        }
    }
    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }


    // setTimeout(() => {
    //     animOnScroll();
    // }, 300);

    // setTimeout(
    //     function () {
    //         animOnScroll();
    //     }, 300
    // )
}

//call back functions
// function doHomework(subject, callback) {
//     alert(`starting my ${subject} homework`);
//     callback();
// }
// doHomework('math', function () {
//     alert('finished my homework')
// });

// function doHomework(subject, callback) {
//     alert(`starting my ${subject} homework`);
//     callback();
// }

// function alertFinished() {
//     alert('Finished my homework');
// }
// doHomework('math', alertFinished)

//cicles
const data = [
    {
        id: 1,
        name: "Tanita",
        job: "Dev",
        age: 24,
    },
    {
        id: 2,
        name: "Ira",
        job: "Lashmaker",
        age: 28,
    },
    {
        id: 3,
        name: "Vlada",
        job: "teacher",
        age: 25,
    },
];

const result = document.querySelector("#result");

for (let i = 0; i < data.length; i++) {
    result.innerHTML += `<li>
    <h4>${data[i].name}</h4>
    <p>${data[i].id}</p>
    <p>${data[i].job}</p>
    <p>${data[i].age}</p>
    </li>`;
}

//filter()
const filterArr = [
    {
        id: 1,
        name: "Tanita",
        job: "Dev",
        age: 24,
    },
    {
        id: 2,
        name: "Ira",
        job: "Lashmaker",
        age: 28,
    },
    {
        id: 3,
        name: "Vlada",
        job: "teacher",
        age: 25,
    },
];

const filtered = filterArr.filter(value => {
    return value.age > 24;
});

const filteredEl = document.getElementsByClassName('filteredEl')[0];

for (let i = 0; i < filterArr.length; i++) {
    filteredEl.innerHTML += `<li>${filtered[i].name} - ${filtered[i].age}</li>`;
};