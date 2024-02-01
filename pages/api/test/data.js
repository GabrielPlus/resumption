import { User, Student } from '../../../models/models';
import { connectToDB } from '../../../utils/utils';

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

export const fetchStudents = async (q, page) => {
    const regex = new RegExp(q, "i");
    const ITEM_PER_PAGE = 2;

    try {
        connectToDB();
        const count = await Student.find({ name: { $regex: regex } }).count();
        const students = await Student.find({ name: { $regex: regex } })
            .limit(ITEM_PER_PAGE)
            .skip(ITEM_PER_PAGE * (page - 1));

        return { count, students };
    } catch (err) {
        console.error('Error in fetchStudents:', err);
        throw new Error(`Failed to fetch students: ${err.message}`);
    }
};
