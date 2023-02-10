export default house = {
  House: {
    roomName: 'Main_Gate',
    info: `
    RVCE is an autonomous private technical co-educational college established in Bangalore, 
    India in 1963. RVCE is recognized as a center of excellence under Technical Education Quality
    Improvement Program by Government of India.
    `,
    adjacentRooms: ['Entrance'],
  },
  Entrance: {
    roomName: 'Entrance' ,
    info: `
    From the Main Gate, take a left to access the Bank. Go staight to the Civil department.
    Go right to visit the Admin block.
    `,
    img: 'entrance.jpg',
    adjacentRooms: ['Bank','Civil', 'Admin']
  },
  Bank: {
    roomName: 'Bank' ,
    info: `
    Campus has a branch of Kotak Mahindra Bank for the benefits of students. ATM Facility and
    Post Office Parcel Collection facility is also present.`,
    img: 'bank.jpg',
    adjacentRooms: ['Entrance']
  },
  Admin: {
    roomName: 'Admin',
    info:`
    Admin block consists of the Principal's office, Dean's office and Examiner's Office.. Registration for students is done here. `,
    img: 'admin.jpg',
    adjacentRooms: ['Entrance', 'PD', 'DTL']
  },
  DTL: {
    roomName: 'DTL',
    info: `
    Design Thinking Lab Huddle has been built to promote new ideas and technologies. Various clubs have their workshops in this section.`,
    img: 'dtl.jpg',
    adjacentRooms: ['Admin', 'IEM']
  },
  
  PD: {
    roomName: 'PD',
    info: `
    Placement Department deals with the employment of students in multinational companies. 
    RVCE has consistently maintained an excellent recruitment record. `,
    img: 'pd.jpg',
    adjacentRooms: ['IEM','Admin','Kriyakalpa']
  },
  IEM: {
    roomName: 'IEM',
    info: `
    Department of Industrial Engineering and Management was established in the year 1985 and was affiliated to Bangalore University. 
    Teaches students the functional areas of management, Information Systems, Supply Chain Management, 
    Quality Management and Quantitative Models for decision making apart from basic engineering knowledge and skills with emphasis on overall personality development`,
    img: 'iem.jpg',
    adjacentRooms: ['PD','MCA','DTL']
  },
  MCA: {
    roomName: 'MCA',
    info: `
    The Department of Master of Computer Applications was established in year 1997 and is the first PG programme started in RVCE.
    The faculty is diverse, committed, highly qualified with Doctorates in various specializations. Quality education, blended with rich research experience along with hands on teaching is provided to students. 
    `,
    img: 'mca.jpg',
    adjacentRooms: ['Canteen','IEM']
  },
  Canteen: {
    roomName: 'Canteen',
    info: `
    Mingos Canteen is present in the campus which offers food to students. Wide variety of food
    can be taken from the canteen including North Indian, South Indian, Continental, etc.
     `,
    img: 'canteen.jpg',
    adjacentRooms: ['Shop','MCA']
  },
  Shop: {
    roomName: 'Shop',
    info: `
    Stationary shop for students is present. Academic books and manuals can be purchased from here.
    Printing shop is also present for benefit of stduents.`,
    img: 'shop.jpg',
    adjacentRooms: ['Canteen']
  },
  Civil: {
    roomName: 'Civil',
    info: `
    The Department was established in the year 1963 with the UG program (B.E.in Civil Engineering)
    and is one of the oldest branches of RVCE. The department has been imparting quality education to meet the
    technological advancement and industrial requirements`,
    img: 'civil.jpg',
    adjacentRooms: ['Entrance','Kriyakalpa']
  },
  Kriyakalpa: {
    roomName: 'Kriyakalpa',
    info: `
    Kriyakalpa is located right in front of the entrance gate. Flashmobs for events and fests is done here.`,
    img: 'kriyakalpa.jpg',
    adjacentRooms: ['Ground','ECE','PD']
  },
  Ground: {
    roomName: 'Ground',
    info: `
    Play ground is provided for students to play various sports such as cricket, football, volleyball, etc.
    It is adjacent to the Physical Education Department which has badminton court and table tennis tables.`,
    img: 'ground.jpg',
    adjacentRooms: ['Kriyakalpa','CS','EEE']
  },
  CS: {
    roomName: 'CS',
    info: `
    The Department of Computer Science and Engineering was established in year 1984. The Department offers three 
    undergraduate programs, B.E (CSE), B.E (CSE- Data Science), B.E (CSE- Cyber Security) and two postgraduate programs M.Tech(CSE) & M.Tech(CNE).`,
    img: 'cs.jpg',
    adjacentRooms: ['Ground','EEE']
  },
  EEE: {
    roomName: 'EEE',
    info: `
    Electrical and Electronics Engineering Department caters to the needs of the U.G. and P.G students both in terms of Acadamics and Soft skills.
    The knowledge acquired during the courses helps them to be placed both in core and software companies.   `,
    img: 'eee.jpg',
    adjacentRooms: ['CS','Mini_Canteen','Ground']
  },
  Mini_Canteen: {
    roomName: 'Mini_Canteen',
    info: `
    Mingos Mini Canteen is present for students to have snacks along with beverages during their break time.
    It is open in weekend as well which caters to needs of hostel students as well.`,
    img: 'mini.jpg',
    adjacentRooms: ['Aerospace','EEE','Chemical']
  },
  Aerospace: {
    roomName: 'Aerospace',
    info: `
    This Department was started in the year 2015 to offer UG program in Aerospace Engineering with an approved intake of 60.
    Imparting quality education with emphasis on research, sustainability technologies and entrepreneurship for societal symbiosis has been the primary motive.`,
    img: 'aerospace.jpg',
    adjacentRooms: ['Hostel','Library','Mini_Canteen']
  },
  Hostel: {
    roomName: 'Hostel',
    info: `
    Cauvery Hostel is the biggest boys hostel in RVCE. Students of 2nd and 3rd year reside here. 
    Common mess for all the hostels is present in the ground floor of this hostel.`,
    img: 'hostel.jpg',
    adjacentRooms: ['Library','Aerospace','Mini_Canteen']
  },
  Library: {
    roomName: 'Library',
    info: `
    The department of library and information centre was established in the year 1963.
    ibrary has a vast collection of books, reference books, bound volumes, technical national and international journals,
     e- books, e- journals, encyclopedia is 183616`,
    img: 'library.jpg',
    adjacentRooms: ['Aerospace','Chemical','Mini_Canteen']
  },
  Chemical: {
    roomName: 'Chemical',
    info: `
    Established in 1982, the department of Chemical Engineering has evolved from its UG engineering roots to develop into a Research
    center since 2002, and envisions growth to meet the future demands of materials and chemical processes`,
    img: 'chemical.jpg',
    adjacentRooms: ['Library','Mini_Canteen','RVU']
  },
  ECE: {
    roomName: 'ECE',
    info: `
    The Electronics & Communication Engineering Department was started in the year 1972 and now conducts one undergraduate program,
    two postgraduate programs (M. Tech in VLSI Design & Embedded Systems and M. Tech in Communication Systems) with academic autonomy,  and Ph.D. program with affiliation to VTU`,
    img: 'ece.jpg',
    adjacentRooms: ['RVU','Kriyakalpa']
  },
  RVU: {
    roomName: 'RVU',
    info: `
    RV University is a State Private University which has been established in Karnataka State with RSST as the sponsoring body through Act No.34 of 2019, passed by the Karnataka Legislature. 
    The Missions of RSST and RV University is “Excellence in Education with Societal Commitment`,
    img: 'rvu.jpg',
    adjacentRooms: ['ECE','Chemical','MCA']
  }
}
