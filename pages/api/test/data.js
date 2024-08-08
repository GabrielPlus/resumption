import { User, Student } from '../../../models/models';
import { connectToDB } from '../../../utils/utils';
import { getCounts } from '../../../utils/utils';

export const fetchUsers = async (q,page) => {
    const regex = new RegExp(q,"i"); 
    const ITEM_PER_PAGE = 2

    try {
        connectToDB();
        const count = await User.find({username: { $regex: regex }}).count();
        const users = await User.find({username: { $regex: regex }}).limit(ITEM_PER_PAGE).skip(ITEM_PER_PAGE * (page-1));
        return {count,users};
    } catch (err) {
        console.log(err);
        throw new Error('Failed to fetch users');
    }
};

// single user
export const fetchUser = async (id) => { 
    console.log(id);
    try {
        connectToDB();
        const user = await User.findById(id);
        return user;
    } catch (err) {
        console.log(err);
        // throw new Error('Failed to fetch user');
    }
};


export const fetchStudents = async (q, page, all = false) => {
    const regex = new RegExp(q, "i");
    const ITEM_PER_PAGE = 3;

    try {
        connectToDB();
        
        if (all) {
            // Fetch all students without pagination
            const students = await Student.find({ name: { $regex: regex } });
            return { students };
        } else {
            // Fetch students with pagination
            const count = await Student.find({ name: { $regex: regex } }).count();
            const students = await Student.find({ name: { $regex: regex } })
                .limit(ITEM_PER_PAGE)
                .skip(ITEM_PER_PAGE * (page - 1));
            return { count, students };
        }
    } catch (err) {
        console.error('Error in fetchStudents:', err);
        throw new Error(`Failed to fetch students: ${err.message}`);
    }
};



// single student

export const fetchStudent = async (id) => { 
    try {
        connectToDB();
        const student = await Student.findById(id);
        return student;
    } catch (err) {
        console.log(err);
        throw new Error('Failed to fetch student');
    }
};


export default async function handler(req, res) {
    const { q = "", page = 1, all = "false" } = req.query;

    try {
        if (req.query.students) {
            // If the request is for students data
            const { count, students } = await fetchStudents(q, parseInt(page), all === "true");
            res.status(200).json({ count, students });
        } else {
            // Default behavior for fetching counts
            const counts = await getCounts();
            console.log('Fetched student count:', counts.studentCount);
            console.log('Students by exam type:', counts.studentsByExam);
            res.status(200).json({ studentCount: counts.studentCount, studentsByExam: counts.studentsByExam });
        }
    } catch (error) {
        console.error('Error in handler:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}


// export default async function handler(req, res) {
//   try {
//     const counts = await getCounts();
//     console.log('Fetched student count:', counts.studentCount);
//     res.json({ studentCount: counts.studentCount });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// }

// getCounts()
//   .then((counts) => {
//     console.log(`dont worry they are fetched.`);
//   })
//   .catch((error) => {
//     console.error(error);
//   });