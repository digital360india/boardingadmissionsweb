import axios from 'axios';
const API_KEY = process.env.NEXT_PUBLIC_PLACES_API;

export default async function handler(req, res) {
  const { schoolName, lat, lng } = req.query;

  if (!schoolName || !lat || !lng) {
    return res.status(400).json({ message: 'Missing required parameters' });
  }

  try {
    const url = `https://maps.googleapis.com/maps/api/place/findplacefromtext/json`;

    const params = {
      input: schoolName,
      inputtype: 'textquery',
      fields: 'place_id,rating',
      locationbias: `point:${lat},${lng}`,
      key: API_KEY,
    };
    const response = await axios.get(url, { params });
    const candidates = response.data.candidates;

    if (candidates.length > 0 && candidates[0].rating) {
      return res.status(200).json({ rating: candidates[0].rating });
    } else {
      return res.status(404).json({ message: 'Rating not found for this school' });
    }
  } catch (error) {
    console.error('Error fetching school rating:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}
