import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

export default function TodoItem() {
    return (
        <>
            <FaCheckCircle />
            <p>할 일 내용</p>
            <MdDeleteForever />
        </>
    )
}