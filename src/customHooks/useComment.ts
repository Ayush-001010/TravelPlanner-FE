import { useState } from "react";
import DummyData from "../component/Learning/NestedComponent/Data/DummyData";
import type ICommentInterface from "../component/Learning/NestedComponent/Interface/ICommentInterface";

const useComment = () => {
  const [comments, setComments] = useState<ICommentInterface[]>(DummyData);

  const addNewComment = (
    comments: Array<ICommentInterface>,
    newComment: ICommentInterface,
    isExistID?: string,
  ) : Array<ICommentInterface> => {
    if (!isExistID) {
      return [newComment , ...comments];
    } else {
      return comments.map((comment : ICommentInterface) => {
        if(comment.ID === isExistID) {
          return {
            ...comment,
            replies: [...comment.replies, newComment],
          };
        } else {
          return {
            ...comment,
            replies: addNewComment(comment.replies, newComment, isExistID),
          };
        }
      });
    }
  };

  const createComment = (newComment: ICommentInterface, isExistID?: string) => {
    setComments( (prevState : Array<ICommentInterface>) => {
      const updatedComments = addNewComment(prevState, newComment, isExistID);
      console.log("Updated Comments:", updatedComments);
      return [...updatedComments];
    });
  };
  console.log("Current Comments:", comments);

  return { comments, createComment };
};

export default useComment;
