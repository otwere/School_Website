import React from "react";
export const studentMockData = {
  dashboard: {
    attendance: "95%",
    assignments: {
      completed: 12,
      pending: 3,
      total: 15
    },
    averageGrade: "A-",
    upcomingEvents: [{
      title: "Mathematics Test",
      date: "2024-03-20",
      type: "exam"
    }, {
      title: "Science Project Due",
      date: "2024-03-25",
      type: "assignment"
    }, {
      title: "Sports Day",
      date: "2024-03-30",
      type: "event"
    }]
  },
  assignments: [{
    id: 1,
    subject: "Mathematics",
    title: "Quadratic Equations",
    dueDate: "2024-03-20",
    status: "pending",
    priority: "high",
    description: "Complete exercises 1-10 from Chapter 5",
    teacher: "Mr. Smith"
  }, {
    id: 2,
    subject: "Science",
    title: "Solar System Project",
    dueDate: "2024-03-25",
    status: "in-progress",
    priority: "medium",
    description: "Create a model of the solar system",
    teacher: "Mrs. Johnson"
  }, {
    id: 3,
    subject: "English",
    title: "Book Report",
    dueDate: "2024-03-28",
    status: "not-started",
    priority: "low",
    description: "Write a report on 'To Kill a Mockingbird'",
    teacher: "Ms. Davis"
  }],
  timetable: {
    monday: [{
      time: "8:00 AM",
      subject: "Mathematics",
      teacher: "Mr. Smith",
      room: "101"
    }, {
      time: "9:00 AM",
      subject: "Science",
      teacher: "Mrs. Johnson",
      room: "Lab 1"
    }, {
      time: "10:30 AM",
      subject: "English",
      teacher: "Ms. Davis",
      room: "203"
    }, {
      time: "11:30 AM",
      subject: "Physical Education",
      teacher: "Mr. Brown",
      room: "Gym"
    }],
    tuesday: [{
      time: "8:00 AM",
      subject: "History",
      teacher: "Mr. Wilson",
      room: "105"
    }, {
      time: "9:00 AM",
      subject: "Art",
      teacher: "Ms. Thompson",
      room: "Art Studio"
    }, {
      time: "10:30 AM",
      subject: "Mathematics",
      teacher: "Mr. Smith",
      room: "101"
    }, {
      time: "11:30 AM",
      subject: "Science",
      teacher: "Mrs. Johnson",
      room: "Lab 1"
    }],
    wednesday: [{
      time: "8:00 AM",
      subject: "Science",
      teacher: "Mrs. Johnson",
      room: "Lab 1"
    }, {
      time: "9:00 AM",
      subject: "English",
      teacher: "Ms. Davis",
      room: "203"
    }, {
      time: "10:30 AM",
      subject: "Art",
      teacher: "Ms. Thompson",
      room: "Art Studio"
    }, {
      time: "11:30 AM",
      subject: "Physical Education",
      teacher: "Mr. Brown",
      room: "Gym"
    }],
    thursday: [{
      time: "8:00 AM",
      subject: "Mathematics",
      teacher: "Mr. Smith",
      room: "101"
    }, {
      time: "9:00 AM",
      subject: "Kiswahili",
      teacher: "Mr. Omondi",
      room: "204"
    }, {
      time: "10:30 AM",
      subject: "Computer Studies",
      teacher: "Mrs. White",
      room: "ICT Lab"
    }, {
      time: "11:30 AM",
      subject: "Music",
      teacher: "Mr. King",
      room: "Music Room"
    }],
    friday: [{
      time: "8:00 AM",
      subject: "Science",
      teacher: "Mrs. Johnson",
      room: "Lab 1"
    }, {
      time: "9:00 AM",
      subject: "Religious Education",
      teacher: "Mr. Ahmed",
      room: "105"
    }, {
      time: "10:30 AM",
      subject: "Mathematics",
      teacher: "Mr. Smith",
      room: "101"
    }, {
      time: "11:30 AM",
      subject: "English",
      teacher: "Ms. Davis",
      room: "203"
    }]
  },
  exams: {
    upcoming: [{
      subject: "Mathematics",
      date: "2024-03-20",
      time: "9:00 AM",
      room: "101",
      type: "Mid-Term",
      topics: ["Quadratic Equations", "Algebraic Expressions", "Geometry", "Statistics"]
    }, {
      subject: "Science",
      date: "2024-03-22",
      time: "10:30 AM",
      room: "Lab 1",
      type: "Unit Test",
      topics: ["Force and Motion", "Energy", "Simple Machines"]
    }, {
      subject: "English",
      date: "2024-03-25",
      time: "9:00 AM",
      room: "203",
      type: "Final",
      topics: ["Comprehension", "Grammar", "Creative Writing", "Literature"]
    }],
    past: [{
      term: "Term 1",
      year: "2024",
      subjects: [{
        subject: "Mathematics",
        score: 85,
        grade: "A",
        teacherRemarks: "Excellent problem-solving skills. Shows strong analytical thinking."
      }, {
        subject: "English",
        score: 78,
        grade: "B+",
        teacherRemarks: "Good communication skills. Need to improve writing structure."
      }, {
        subject: "Science",
        score: 92,
        grade: "A",
        teacherRemarks: "Outstanding performance in experiments and theoretical concepts."
      }, {
        subject: "Social Studies",
        score: 88,
        grade: "A",
        teacherRemarks: "Active participation and good understanding of concepts."
      }, {
        subject: "Kiswahili",
        score: 75,
        grade: "B",
        teacherRemarks: "Good progress in language skills. Need more practice in writing."
      }],
      termAverage: 83.6,
      termGrade: "A",
      classRank: "5/45"
    }, {
      term: "Term 3",
      year: "2023",
      subjects: [{
        subject: "Mathematics",
        score: 82,
        grade: "A-",
        teacherRemarks: "Good understanding of concepts. Need to work on speed."
      }, {
        subject: "English",
        score: 76,
        grade: "B+",
        teacherRemarks: "Improved reading comprehension. Keep practicing writing."
      }, {
        subject: "Science",
        score: 88,
        grade: "A",
        teacherRemarks: "Strong grasp of scientific concepts. Excellent lab work."
      }, {
        subject: "Social Studies",
        score: 85,
        grade: "A-",
        teacherRemarks: "Good understanding of historical concepts."
      }, {
        subject: "Kiswahili",
        score: 72,
        grade: "B",
        teacherRemarks: "Showing improvement in oral communication."
      }],
      termAverage: 80.6,
      termGrade: "A-",
      classRank: "7/45"
    }, {
      term: "Term 2",
      year: "2023",
      subjects: [{
        subject: "Mathematics",
        score: 78,
        grade: "B+",
        teacherRemarks: "Good effort. Need to focus more on geometry."
      }, {
        subject: "English",
        score: 74,
        grade: "B",
        teacherRemarks: "Steady progress in language skills."
      }, {
        subject: "Science",
        score: 85,
        grade: "A-",
        teacherRemarks: "Good understanding of concepts. Active in experiments."
      }, {
        subject: "Social Studies",
        score: 82,
        grade: "A-",
        teacherRemarks: "Shows keen interest in current affairs."
      }, {
        subject: "Kiswahili",
        score: 70,
        grade: "B-",
        teacherRemarks: "Making progress. Need more practice."
      }],
      termAverage: 77.8,
      termGrade: "B+",
      classRank: "9/45"
    }]
  },
  fees: {
    currentTerm: {
      term: "Term 1 2024",
      dueDate: "2024-01-15",
      status: "paid",
      breakdown: [{
        category: "Tuition Fee",
        amount: 45000,
        paid: 45000,
        due: 0
      }, {
        category: "Development Fee",
        amount: 15000,
        paid: 15000,
        due: 0
      }, {
        category: "Activity Fee",
        amount: 10000,
        paid: 10000,
        due: 0
      }, {
        category: "Transport Fee",
        amount: 12000,
        paid: 12000,
        due: 0
      }, {
        category: "Books & Materials",
        amount: 8000,
        paid: 8000,
        due: 0
      }],
      total: 90000,
      totalPaid: 90000,
      balance: 0
    },
    history: [{
      term: "Term 3 2023",
      dueDate: "2023-09-15",
      status: "paid",
      breakdown: [{
        category: "Tuition Fee",
        amount: 45000,
        paid: 45000,
        due: 0
      }, {
        category: "Development Fee",
        amount: 15000,
        paid: 15000,
        due: 0
      }, {
        category: "Activity Fee",
        amount: 10000,
        paid: 10000,
        due: 0
      }, {
        category: "Transport Fee",
        amount: 12000,
        paid: 12000,
        due: 0
      }, {
        category: "Books & Materials",
        amount: 8000,
        paid: 8000,
        due: 0
      }],
      total: 90000,
      totalPaid: 90000,
      balance: 0,
      paymentHistory: [{
        date: "2023-09-10",
        amount: 50000,
        method: "Bank Transfer",
        reference: "BT230910001"
      }, {
        date: "2023-09-15",
        amount: 40000,
        method: "Mobile Money",
        reference: "MM230915003"
      }]
    }],
    nextTerm: {
      term: "Term 2 2024",
      dueDate: "2024-05-15",
      status: "upcoming",
      estimatedFees: 92000
    }
  },
  grades: {
    currentTerm: {
      term: "Term 1 2024",
      gpa: "3.8",
      subjects: [{
        name: "Mathematics",
        grade: "A",
        score: 92,
        teacher: "Mr. Smith"
      }, {
        name: "Science",
        grade: "A-",
        score: 88,
        teacher: "Mrs. Johnson"
      }, {
        name: "English",
        grade: "B+",
        score: 85,
        teacher: "Ms. Davis"
      }, {
        name: "History",
        grade: "A",
        score: 90,
        teacher: "Mr. Wilson"
      }]
    },
    previousTerms: [{
      term: "Term 3 2023",
      gpa: "3.7",
      subjects: [{
        name: "Mathematics",
        grade: "A-",
        score: 89
      }, {
        name: "Science",
        grade: "A",
        score: 91
      }, {
        name: "English",
        grade: "B+",
        score: 86
      }]
    }]
  },
  personalInfo: {
    name: "John Doe",
    grade: "Grade 4",
    studentId: "STD2024001",
    photo: "https://images.unsplash.com/photo-1544717302-de2939b7ef71",
    admissionYear: "2022",
    dateOfBirth: "2014-05-15",
    bloodGroup: "O+",
    address: "123 Student Lane, Nairobi",
    emergencyContact: "+254 789 012 345"
  },
  mealCard: {
    balance: 5000,
    plan : "Full Board",
    lastRecharge: "2024-03-01",
    mealHistory: [{
      date: "2024-03-15",
      meal: "Breakfast",
      cost: 350
    }, {
      date: "2024-03-15",
      meal: "Lunch",
      cost: 250
    }, {
      date: "2024-03-14",
      meal: "Dinner",
      cost: 350
    }],
    weeklyMenu: [{
      day: "Monday",
      breakfast: "Cereals & Milk",
      lunch: "Rice & Stew",
      snack: "Fruit Salad"
    }, {
      day: "Tuesday",
      breakfast: "Toast & Eggs",
      lunch: "Ugali & Fish",
      snack: "Cookies"
    }, {
      day: "Wednesday",
      breakfast: "Pancakes",
      lunch: "Spaghetti",
      snack: "Yogurt"
    }]
  },
  reportCard: {
    term: "Term 1",
    year: "2024",
    studentName: "John Doe",
    grade: "Grade 4",
    subjects: [{
      name: "Mathematics",
      score: 85,
      grade: "A",
      teacherRemarks: "Excellent problem-solving skills"
    }, {
      name: "English",
      score: 78,
      grade: "B",
      teacherRemarks: "Good communication, needs work on writing"
    }, {
      name: "Science",
      score: 92,
      grade: "A",
      teacherRemarks: "Outstanding performance in experiments"
    }, {
      name: "Social Studies",
      score: 88,
      grade: "A",
      teacherRemarks: "Active participation in discussions"
    }],
    attendance: {
      present: 57,
      total: 60
    },
    classTeacherRemarks: "John is a dedicated student who shows great enthusiasm for learning. He participates actively in class and helps his peers.",
    principalRemarks: "Keep up the excellent work. Your consistent performance is commendable.",
    nextTermDate: "May 2, 2024"
  }
};
export const staffMockData = {
  dashboard: {
    totalStudents: 120,
    classestoday: 5,
    pendingTasks: 8,
    upcomingEvents: [{
      title: "Staff Meeting",
      date: "2024-03-18",
      time: "14:00",
      location: "Staff Room"
    }, {
      title: "Parent-Teacher Conference",
      date: "2024-03-20",
      time: "09:00",
      location: "Hall"
    }, {
      title: "Department Meeting",
      date: "2024-03-22",
      time: "15:00",
      location: "Room 101"
    }],
    announcements: [{
      title: "Term Reports Due",
      type: "urgent",
      message: "Please submit all term reports by Friday."
    }, {
      title: "Staff Meeting",
      type: "info",
      message: "General staff meeting on Monday at 8:00 AM."
    }]
  },
  classes: [{
    grade: "Grade 4",
    section: "A",
    students: 30,
    subjects: ["Mathematics", "Science"],
    schedule: [{
      day: "Monday",
      time: "8:00 AM",
      room: "101"
    }, {
      day: "Tuesday",
      time: "10:30 AM",
      room: "101"
    }, {
      day: "Thursday",
      time: "9:00 AM",
      room: "Lab 1"
    }],
    studentList: [{
      id: "ST001",
      name: "John Doe",
      attendance: "95%",
      currentGrade: "A-"
    }, {
      id: "ST002",
      name: "Jane Smith",
      attendance: "98%",
      currentGrade: "A"
    }, {
      id: "ST003",
      name: "Mike Johnson",
      attendance: "92%",
      currentGrade: "B+"
    }, {
      id: "ST004",
      name: "Sarah Williams",
      attendance: "96%",
      currentGrade: "A"
    }]
  }],
  tasks: [{
    id: 1,
    title: "Submit Term Reports",
    deadline: "2024-03-20",
    priority: "high",
    status: "pending",
    description: "Complete and submit end-of-term reports for Grade 4"
  }, {
    id: 2,
    title: "Prepare Lab Materials",
    deadline: "2024-03-19",
    priority: "medium",
    status: "in-progress",
    description: "Set up science lab for next week's experiments"
  }, {
    id: 3,
    title: "Grade Assignments",
    deadline: "2024-03-21",
    priority: "medium",
    status: "pending",
    description: "Grade and provide feedback on Math assignments"
  }],
  gradebook: {
    currentTerm: "Term 1 2024",
    classes: [{
      grade: "Grade 4",
      section: "A",
      subject: "Mathematics",
      assessments: [{
        title: "Quiz 1",
        date: "2024-02-15",
        maxScore: 100,
        scores: [{
          studentId: "ST001",
          score: 85
        }, {
          studentId: "ST002",
          score: 92
        }]
      }]
    }]
  }
};
export const parentMockData = {
  children: [{
    id: 1,
    name: "John Doe",
    grade: "Grade 4",
    attendance: "95%",
    nextFeeDate: "2024-04-01",
    feeStatus: "paid",
    currentGrades: [{
      subject: "Mathematics",
      grade: "A-",
      teacher: "Mr. Smith"
    }, {
      subject: "Science",
      grade: "A",
      teacher: "Mrs. Johnson"
    }, {
      subject: "English",
      grade: "B+",
      teacher: "Ms. Davis"
    }],
    upcomingAssignments: [{
      subject: "Mathematics",
      title: "Quadratic Equations",
      dueDate: "2024-03-20"
    }, {
      subject: "Science",
      title: "Solar System Project",
      dueDate: "2024-03-25"
    }]
  }, {
    id: 2,
    name: "Jane Doe",
    grade: "Grade 2",
    attendance: "98%",
    nextFeeDate: "2024-04-01",
    feeStatus: "pending",
    currentGrades: [{
      subject: "Mathematics",
      grade: "A",
      teacher: "Mrs. White"
    }, {
      subject: "Science",
      grade: "A-",
      teacher: "Mr. Brown"
    }, {
      subject: "English",
      grade: "A",
      teacher: "Ms. Taylor"
    }],
    upcomingAssignments: [{
      subject: "English",
      title: "Reading Assignment",
      dueDate: "2024-03-22"
    }, {
      subject: "Art",
      title: "Color Project",
      dueDate: "2024-03-24"
    }]
  }],
  fees: [{
    id: 1,
    term: "Term 1 2024",
    amount: 150000,
    status: "paid",
    date: "2024-01-15",
    breakdown: [{
      item: "Tuition",
      amount: 120000
    }, {
      item: "Activities",
      amount: 20000
    }, {
      item: "Materials",
      amount: 10000
    }]
  }, {
    id: 2,
    term: "Term 2 2024",
    amount: 150000,
    status: "pending",
    dueDate: "2024-04-01",
    breakdown: [{
      item: "Tuition",
      amount: 120000
    }, {
      item: "Activities",
      amount: 20000
    }, {
      item: "Materials",
      amount: 10000
    }]
  }],
  meetings: [{
    id: 1,
    title: "Parent-Teacher Conference",
    date: "2024-03-20",
    time: "14:00",
    teacher: "Mr. Smith",
    status: "scheduled",
    location: "Room 101"
  }, {
    id: 2,
    title: "Academic Review Meeting",
    date: "2024-03-25",
    time: "15:30",
    teacher: "Mrs. Johnson",
    status: "pending",
    location: "Principal's Office"
  }],
  notifications: [{
    id: 1,
    type: "academic",
    title: "Term Report Available",
    message: "Term 1 2024 report card is now available for download",
    date: "2024-03-15",
    read: false
  }, {
    id: 2,
    type: "fee",
    title: "Fee Payment Reminder",
    message: "Term 2 fees due by April 1st, 2024",
    date: "2024-03-16",
    read: true
  }, {
    id: 3,
    type: "event",
    title: "Sports Day",
    message: "Annual Sports Day scheduled for March 30th, 2024",
    date: "2024-03-17",
    read: false
  }]
};