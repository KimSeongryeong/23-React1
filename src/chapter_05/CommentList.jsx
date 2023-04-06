import { computeHeadingLevel } from "@testing-library/react";
import React from "react";
import Comment from "./CommentList";

const comment = [
    {
        name: "김성령",
        coment: "안녕하세요.",
    
    },
    {
        name: "김성령",
        coment: "안녕하세요.",
    
    },
    {
        name: "김성령",
        coment: "안녕하세요.",
    
    },
];

function CommentList(props) {
    return (
        <div>
            {comment.map((comment) => {
                return (
                    <Comment name={comment.name} comment={comment.comment}/>
                );
            })}
           
        </div>
    );
}

export default CommentList;