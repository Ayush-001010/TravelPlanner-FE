import React from "react";
import type ICreateComment from "./ICreateComment";
import { Button, Input } from "antd";
import type ICommentInterface from "../Interface/ICommentInterface";
import { useCommentContext } from "../NestedComponent";

const CreateComment: React.FC<ICreateComment> = ({ isExistID }) => {
  const [value, setValue] = React.useState<string>("");
  const { onSubmitHandler } = useCommentContext();

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  const handleSubmit = () => {
    if (value.trim()) {
      const newComment: ICommentInterface = {
        ID: Date.now().toString(),
        content: value,
        replies: [],
        createdDate: new Date(),
        VoteUp: 0,
        VoteDown: 0,
      };
      onSubmitHandler(newComment, isExistID);
      setValue("");
    }
  }

  return (
    <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
      <Input.TextArea
        value={value}
        onChange={handleChange}
        placeholder="Write a comment..."
        autoSize={{ minRows: 3, maxRows: 6 }}
        className="mb-3"
      />

      <div className="flex gap-2 justify-end">
        <Button onClick={() => setValue("")}>Clear</Button>
        <Button type="primary" disabled={!value.trim()} onClick={handleSubmit}>
          Submit
        </Button>
      </div>
    </div>
  );
};

export default CreateComment;