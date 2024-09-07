import { fetchCourses } from '../../utils/utils'; // Adjust the import path as necessary

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const courses = await fetchCourses(); // Fetch courses from utils
      res.status(200).json(courses); // Return courses as JSON response
    } catch (error) {
      console.error('Error in API route /api/courses:', error);
      res.status(500).json({ message: 'Failed to fetch courses' });
    }
  } else {
    // Handle unsupported HTTP methods
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
