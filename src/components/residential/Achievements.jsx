"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import gradImage from "@/assets/grad.png";
import { School, UserCheck, GraduationCap, Users } from "lucide-react";

const Counter = ({ value }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const end = value;
        if (start === end) return;

        const incrementTime = Math.floor(2000 / end);
        const timer = setInterval(() => {
            start += 1;
            setCount(start);
            if (start === end) clearInterval(timer);
        }, incrementTime);

        return () => clearInterval(timer);
    }, [value]);

    return <motion.span>{count}</motion.span>;
};

export default function Achievements() {
    return (
        <div className="bg-gray-800 text-white flex flex-col md:flex-row items-center gap-10 px-4 md:px-10 py-12">
            {/* Image and Text */}
            <div className="w-full md:w-1/2">
                <h2 className="text-3xl font-bold text-center md:text-left">ACHIEVEMENTS</h2>
                <p className="text-gray-300 text-sm mt-2 text-center md:text-left">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac purus et sapien vulputate aliquet.
                </p>
                <div className="w-full mt-4">
                    <Image src={gradImage} alt="Graduation" className="w-full h-96 object-cover rounded-lg" />
                </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full md:w-1/2">
                <StatBox icon={<School className="h-10 w-10 text-yellow-400 mb-2" />} value={5} label="CAMPUSES" />
                <StatBox icon={<UserCheck className="h-10 w-10 text-yellow-400 mb-2" />} value={100} label="CERTIFIED TEACHERS" />
                <StatBox icon={<GraduationCap className="h-10 w-10 text-yellow-400 mb-2" />} value={1000} label="GRADUATES" />
                <StatBox icon={<Users className="h-10 w-10 text-yellow-400 mb-2" />} value={2285} label="STUDENTS" />
            </div>
        </div>
    );
}

function StatBox({ icon, value, label }) {
    return (
        <div className="border border-gray-600 bg-gray-900 py-6 px-6 rounded-lg flex flex-col items-center text-center shadow-md w-full">
            {icon}
            <motion.p className="text-4xl font-bold text-yellow-400">
                <Counter value={value} />
            </motion.p>
            <hr className="w-12 border-yellow-400 my-2" />
            <p className="text-md text-gray-300 font-semibold">{label}</p>
        </div>
    );
}
