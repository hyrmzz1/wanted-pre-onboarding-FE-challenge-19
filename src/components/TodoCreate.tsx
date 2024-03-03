import React from "react";

export default function TodoCreate() {
    return(
        <>
        <form>
            <input type="text" placeholder="오늘의 할 일은 무엇인가요?"></input>
            <button>add</button>
        </form>
        </>
    )
}