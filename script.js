const data = {
    "رياضيات": {
        "الجمع والطرح": [
            "ملخص 1: شرح مبسط للجمع والطرح...",
            "ملخص 2: استخدام الأمثلة لفهم العمليات..."
        ],
        "القسمة والضرب": [
            "ملخص 1: خطوات القسمة والضرب...",
            "ملخص 2: أمثلة تطبيقية..."
        ]
    },
    "علوم": {
        "الخلية": [
            "ملخص 1: مكونات الخلية...",
            "ملخص 2: الفرق بين الخلية الحيوانية والنباتية..."
        ],
        "المادة وخواصها": [
            "ملخص 1: حالات المادة...",
            "ملخص 2: تغيرات المادة..."
        ]
    },
    "اجتماعيات": {
        "البيئة": [
            "ملخص 1: تعريف البيئة وأهميتها...",
            "ملخص 2: أنواع البيئات في المملكة..."
        ],
        "التاريخ الإسلامي": [
            "ملخص 1: بداية التاريخ الإسلامي...",
            "ملخص 2: السيرة النبوية..."
        ]
    },
    "لغتي": {
        "النصوص القرائية": [
            "ملخص 1: تحليل النصوص القرائية...",
            "ملخص 2: مهارات الفهم والاستيعاب..."
        ],
        "الإملاء والكتابة": [
            "ملخص 1: قواعد الإملاء الأساسية...",
            "ملخص 2: تحسين الخط والكتابة..."
        ]
    },
    "إسلامية": {
        "الحديث": [
            "ملخص 1: معاني الأحاديث...",
            "ملخص 2: تطبيق الحديث في الحياة..."
        ],
        "الفقه": [
            "ملخص 1: الوضوء والطهارة...",
            "ملخص 2: الصلاة وشروطها..."
        ]
    },
    "فنية": {
        "أساسيات الفن": [
            "ملخص 1: عناصر العمل الفني...",
            "ملخص 2: الخط والشكل واللون..."
        ],
        "التصميم والزخرفة": [
            "ملخص 1: أنواع الزخارف...",
            "ملخص 2: خطوات التصميم الفني..."
        ]
    }
};

const subjectSelect = document.getElementById('subjectSelect');
const lessonSelect = document.getElementById('lessonSelect');
const summariesContainer = document.getElementById('summariesContainer');

function loadSubjects() {
    for (let subject in data) {
        let option = document.createElement('option');
        option.value = subject;
        option.textContent = subject;
        subjectSelect.appendChild(option);
    }
    loadLessons();
}

function loadLessons() {
    lessonSelect.innerHTML = '';
    const selectedSubject = subjectSelect.value;
    for (let lesson in data[selectedSubject]) {
        let option = document.createElement('option');
        option.value = lesson;
        option.textContent = lesson;
        lessonSelect.appendChild(option);
    }
}

function showSummaries() {
    summariesContainer.innerHTML = '';
    const subject = subjectSelect.value;
    const lesson = lessonSelect.value;
    const summaries = data[subject][lesson];

    summaries.forEach(summary => {
        const div = document.createElement('div');
        div.className = 'summary';
        div.textContent = summary;
        summariesContainer.appendChild(div);
    });
}

subjectSelect.addEventListener('change', loadLessons);
window.onload = loadSubjects;
