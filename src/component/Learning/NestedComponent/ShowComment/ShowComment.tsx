import React from "react";
import type IShowComment from "./IShowComment";
import Comment from "./Comment/Comment";
import { useCommentContext } from "../NestedComponent";




const ShowComment: React.FC<IShowComment> = () => {
  const { comments , windowSize } = useCommentContext();

  const height = windowSize.height;
  const noOfCommentsVisible = Math.floor(height / 200); // Assuming each comment takes approximately 100px in height

  return (
      <div className="max-w-3xl mx-auto px-4 py-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Comments</h2>

        <div className="space-y-4">
          {comments.slice(0, noOfCommentsVisible).map((data) => (
            <Comment key={data.ID} data={data} />
          ))}
        </div>
      </div>
  );
};

export default ShowComment;