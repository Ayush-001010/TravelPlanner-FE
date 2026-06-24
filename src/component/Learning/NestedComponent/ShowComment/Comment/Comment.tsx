import React from "react";
import type IComment from "./IComment";
import { FaRegThumbsUp, FaRegThumbsDown } from "react-icons/fa";
import { Button } from "antd";
import CreateComment from "../../CreateComment/CreateComment";

const Comment: React.FC<IComment> = ({ data }) => {
  const { ID, content } = data;
  const [hideReplies, setHideReplies] = React.useState<boolean>(true);

  const handleToggleReplies = () => {
    setHideReplies(!hideReplies);
  };

  return (
    <div key={ID + "-Comment"} className="ml-4 border-l-2 border-gray-200 pl-4 my-4">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
        <p className="text-gray-800 text-sm sm:text-base">{content}</p>

        <div className="mt-3 flex flex-wrap gap-2">
          <Button className="flex items-center gap-1">
            <FaRegThumbsUp />
            <span>Like</span>
          </Button>

          <Button className="flex items-center gap-1">
            <FaRegThumbsDown />
            <span>Dislike</span>
          </Button>

          <Button onClick={handleToggleReplies} className="flex items-center gap-1">
            {hideReplies ? "Show Replies" : "Hide Replies"}
          </Button>

          <Button>Edit</Button>
          <Button danger>Delete</Button>
        </div>

        {!hideReplies && (
          <div className="mt-4 space-y-4">
            <div className="pl-2">
              <CreateComment isExistID={ID} />
            </div>

            <div className="space-y-4">
              {data.replies &&
                data.replies.map((reply) => (
                  <Comment key={reply.ID} data={reply} />
                ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default React.memo(Comment);;