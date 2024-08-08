import { fetchStudents } from '../../utils/utils';  // Adjust the path to your utils

export default async function handler(req, res) {
  const { method, query } = req;

  if (method === 'GET') {
    const { q = "", page = 1, all = "false" } = query;

    try {
      if (all === "true") {
        // Fetch all students if 'all' is true
        const { students } = await fetchStudents(q, parseInt(page), true);
        res.status(200).json({ students });
      } else {
        // Fetch paginated students
        const { count, students } = await fetchStudents(q, parseInt(page), false);
        res.status(200).json({ count, students });
      }
    } catch (error) {
      console.error('Error in getStudents route:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${method} Not Allowed`);
  }
}
