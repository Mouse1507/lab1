import {
  Injectable
} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentInfoService {
  students = [{
      ID: 1,
      FirstMidName: "Carson",
      LastName: "Alexander",
      EnrollmentDate: "2005-09-01"
    },
    {
      ID: 2,
      FirstMidName: "Meredith",
      LastName: "Alonso",
      EnrollmentDate: "2002-09-01"
    },
    {
      ID: 3,
      FirstMidName: "Arturo",
      LastName: "Anand",
      EnrollmentDate: "2003-09-01"
    },
    {
      ID: 4,
      FirstMidName: "Gytis",
      LastName: "Barzdukas",
      EnrollmentDate: "2002-09-01"
    },
    {
      ID: 5,
      FirstMidName: "Yan",
      LastName: "Li",
      EnrollmentDate: "2002-09-01"
    },
    {
      ID: 6,
      FirstMidName: "Peggy",
      LastName: "Justice",
      EnrollmentDate: "2001-09-01"
    },
    {
      ID: 7,
      FirstMidName: "Laura",
      LastName: "Norman",
      EnrollmentDate: "2003-09-01"
    },
    {
      ID: 8,
      FirstMidName: "Nino",
      LastName: "Olivetto",
      EnrollmentDate: "2005-09-01"
    }
  ];
  courses = [{
      CourseID: 1050,
      Title: "Chemistry",
      Credits: 3,
    },
    {
      CourseID: 4022,
      Title: "Python",
      Credits: 3,
    },
    {
      CourseID: 4041,
      Title: "Macroeconomics",
      Credits: 3,
    },
    {
      CourseID: 1045,
      Title: "Calculus",
      Credits: 4,
    },
    {
      CourseID: 3141,
      Title: "DjAngo",
      Credits: 4,
    },
    {
      CourseID: 2021,
      Title: "Composition",
      Credits: 3,
    },
    {
      CourseID: 2042,
      Title: "Literature",
      Credits: 4,
    }
  ];

  enrollments = [{
      StudentID: 1,
      CourseID: 1050,
      Grade: 'A'
    },
    {
      StudentID: 1,
      CourseID: 4022,
      Grade: 'C'
    },
    {
      StudentID: 1,
      CourseID: 4041,
      Grade: 'B'
    },
    {
      StudentID: 2,
      CourseID: 1045,
      Grade: 'B'
    },
    {
      StudentID: 2,
      CourseID: 3141,
      Grade: 'F'
    },
    {
      StudentID: 2,
      CourseID: 2021,
      Grade: 'F'
    },
    {
      StudentID: 3,
      CourseID: 1050,
      Grade: 'B'
    },
    {
      StudentID: 4,
      CourseID: 1050,
      Grade: 'B'
    },
    {
      StudentID: 4,
      CourseID: 4022,
      Grade: 'F'
    },
    {
      StudentID: 5,
      CourseID: 4041,
      Grade: 'C'
    },
    {
      StudentID: 6,
      CourseID: 1045,
      Grade: 'B'
    },
    {
      StudentID: 6,
      CourseID: 3141,
      Grade: 'A'
    },
  ];
  //Lấy chỉ mục student được chọn trong mảng students
  chooseIndex: any = null;
  studentID: Number;
  coursesId = [];
  //Mảng chứa ID khóa học của 1 student
  //Mảng chứa 
  constructor() {}

  chooseStudent(studentId) {
    for (let i = 0; i < this.students.length; i++) {
      if (this.students[i].ID == studentId) {
        this.chooseIndex = i;
        this.studentID = this.students[this.chooseIndex].ID;
        return 0;
      };
    };
  }

  refreshStoredArray() {
    this.coursesId = [];
    this.studentID = null;
  };

  filterInfoStudent() {
    this.coursesId = this.enrollments.filter(course => {
      return course.StudentID == this.studentID;
    });
    for (let i = 0; i < this.coursesId.length; i++) {
      for (let j = 0; j < this.courses.length; j++) {
        if (this.courses[j].CourseID == this.coursesId[i].CourseID) {
          Object.assign(this.coursesId[i], {
            Title: this.courses[j].Title
          }, {
            Credits: this.courses[j].Credits
          });
        }
      }
    };
    return this.coursesId;
  };

  removeStudent(studentId) {
    let startedIndex: any;
    let amountOfIndex: any = 0;
    for (let i = 0; i < this.students.length; i++) {
      if (this.students[i].ID == studentId) {
        this.chooseIndex = i;
        break;
      };
    };

    //Remove student in list students
    this.students.splice(this.chooseIndex, 1);

    for (let j = 0; j < this.enrollments.length; j++) {
      if (this.enrollments[j].StudentID == studentId) {
        startedIndex = j;
        for (let h = +startedIndex; h < this.enrollments.length; h++) {
          if (this.enrollments[h].StudentID == studentId) {
            amountOfIndex += 1;
          } else break;
        }
      }
    };

    this.enrollments.splice(startedIndex, amountOfIndex);
  };
}
