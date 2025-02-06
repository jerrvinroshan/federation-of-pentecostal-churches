import img from "../../../assets/image/CouncilImg.png";

const eventDetails = [
  {
    id: 1,
    title: "Event Title",
    image: img,
    alt: "Teach",
    date: "06/02/2025",//Date format DD/MM/YYYY or else it dont work
    time: "9:00 AM",
    place: "Place",
    description: "Details",
  },
  {
    id: 2,
    title: "Tech Conference 2024",
    image: img,
    date: "07/02/2025",
    time: "9:00 AM",
    place: "New York Convention Center",
    description: "A conference about the latest trends in technology.",
  },
  {
    id: 3,
    title: "Tech Conference 2024",
    image: img,
    date: "07/02/2025",
    time: "9:00 AM",
    place: "New York Convention Center",
    description: "A conference about the latest trends in technology.",
  },
  {
    id: 4,
    title: "Event Title",
    image: img,
    alt: "Teach",
    date: "15/02/2025", // Ensure this matches the format "DD/MM/YYYY"
    time: "9:00 AM",
    place: "Place",
    description: "Details",
  },
];

export default eventDetails;
