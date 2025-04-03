import { useState, useCallback, useMemo } from "react";
import { motion } from "framer-motion";
import {
  Facebook,
  Twitter,
  Linkedin,
  Dribbble,
  ChevronLeft,
  ChevronRight,
  Youtube,
} from "lucide-react";
import Feature1 from "@assets/Features/Featured1.webp";
import Feature2 from "@assets/Features/Featured2.webp";
import Feature3 from "@assets/Features/Featured3.webp";
import Feature4 from "@assets/Features/Featured4.webp";

const FEATURED_USERS = [
  { id: "1", name: "Xavier Hernandez", avatar: Feature1 },
  { id: "2", name: "John Obey", avatar: Feature2 },
  { id: "3", name: "Jackob Oram", avatar: Feature3 },
  { id: "4", name: "Manuel Neuer", avatar: Feature4 },
];

const socialLinks = [
  { icon: Facebook, url: "#", label: "Facebook" },
  { icon: Twitter, url: "#", label: "Twitter" },
  { icon: Linkedin, url: "#", label: "LinkedIn" },
  { icon: Dribbble, url: "#", label: "Dribbble" },
  { icon: Youtube, url: "#", label: "YouTube" },
];

interface User {
  id: string;
  name: string;
  avatar: string;
}

interface UserCardProps {
  user: User;
}

const UserCard: React.FC<UserCardProps> = ({ user }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    viewport={{ once: true }}
    className="bg-[#FFF2F2] p-6 rounded-lg  text-center md:w-[255px] w-[350px] flex flex-col items-center relative"
  >
    <div className="w-16 h-16 rounded-full bg-white p-2 flex items-center justify-center absolute -top-5">
      <img
        src={user.avatar}
        alt=""
        className="w-14 h-14 rounded-full object-cover"
      />
    </div>
    <h3 className="mt-8 text-[22px] font-semibold text-[#0C0528]">
      {user.name}
    </h3>
    <div className="flex gap-3 justify-center mt-4 text-[#CC7700]">
      {socialLinks.map(({ icon: Icon, url, label }) => (
        <a
          key={label}
          href={url}
          className="cursor-pointer bg-[#FF6B6B33] rounded-full p-2"
        >
          <Icon size={18} />
        </a>
      ))}
    </div>
    <div className="mt-4 flex gap-3">
      <button className="bg-white border border-[#CC7700] px-4 py-2 rounded-md text-[#CC7700] text-[14px]">
        Website
      </button>
      <button className="bg-[#CC7700] text-white px-4 py-2 rounded-md text-[14px]">
        Follow
      </button>
    </div>
  </motion.div>
);

const FeaturedUsers = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleUsers = 4;
  const totalUsers = FEATURED_USERS.length;

  const handlePrevious = useCallback(() => {
    setCurrentIndex((prev) =>
      prev === 0 ? totalUsers - visibleUsers : prev - 1
    );
  }, [totalUsers]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) =>
      prev >= totalUsers - visibleUsers ? 0 : prev + 1
    );
  }, [totalUsers]);

  const displayedUsers = useMemo(
    () => FEATURED_USERS.slice(currentIndex, currentIndex + visibleUsers),
    [currentIndex]
  );

  return (
    <section className="max-w-6xl mx-auto py-12 px-6 relative">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl md:text-[36px] font-bold text-[#0C0528]">
          Take a Look at The Featured Users
        </h2>
        <div className="flex gap-3">
          <button
            className="bg-[#CC7700] px-2 py-[2px] rounded-[10px] text-white"
            onClick={handlePrevious}
          >
            <ChevronLeft size={20} />
          </button>
          <button
            className="bg-[#CC7700] px-2 py-[2px] rounded-[10px] text-white"
            onClick={handleNext}
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
      <div className="mt-8 flex flex-wrap justify-center gap-6">
        {displayedUsers.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedUsers;
