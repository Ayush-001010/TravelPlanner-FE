import React, { createContext, useEffect, useState } from "react";
import type INestedComponent from "./INestedComponent";
import CreateComment from "./CreateComment/CreateComment";
import ShowComment from "./ShowComment/ShowComment";
import type ICommentInterface from "./Interface/ICommentInterface";
import useComment from "../../../customHooks/useComment";

interface ICommentContext {
    onSubmitHandler: (newComment: ICommentInterface, isExistID?: string) => void;
    comments: ICommentInterface[];
    windowSize: {
        width: number;
        height: number;
    }
};

const contextShowComment = createContext<ICommentContext | null>(null);

export const useCommentContext = () => {
    

    const context = React.useContext(contextShowComment);
    if (!context) {
        throw new Error("useCommentContext must be used within a CommentProvider");
    }
    return context;
};

const NestedComponent: React.FC<INestedComponent> = () => {
    const { comments, createComment } = useComment();
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });
    const onSubmitHandler = React.useCallback((newComment: ICommentInterface, isExistID?: string) => {
        createComment(newComment, isExistID);
    }, [createComment]);
    const contextValue = React.useMemo(
        () => ({ onSubmitHandler, comments, windowSize }),
        [onSubmitHandler, comments, windowSize]
    );

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [])

    return (
        <contextShowComment.Provider value={contextValue}>
            <div>
                <h1>Comment System</h1>
                <CreateComment />
                <ShowComment />
            </div>
        </contextShowComment.Provider>
    )
}

export default NestedComponent;