import type ICommentInterface from "../Interface/ICommentInterface";

const DummyData : Array<ICommentInterface>=[
    {
        ID:"R1",
        createdDate : new Date(),
        VoteUp : 10,
        VoteDown : 2,
        content : "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        replies: []
    },
    {
        ID:"R2",
        createdDate : new Date("2023-06-01"),
        VoteUp : 5,
        VoteDown : 1,
        content : "This is another comment",
        replies: [
            {
                ID:"R2-1",
                createdDate : new Date("2023-06-02"),
                VoteUp : 2,
                VoteDown : 0,
                content : "This is a reply to the second comment",
                replies: [
                    {
                        ID:"R2-1-1",
                        createdDate : new Date("2023-06-03"),
                        VoteUp : 1,
                        VoteDown : 0,
                        content : "This is a nested reply",
                        replies: []
                    }
                ]
            },
            {
                ID:"R2-2",
                createdDate : new Date("2023-06-04"),
                VoteUp : 3,
                VoteDown : 1,
                content : "This is another reply to the second comment",
                replies: []
            }
        ]
    },
    {
        ID:"R3",
        createdDate : new Date("2023-06-05"),
        VoteUp : 8,
        VoteDown : 0,
        content : "This is the third comment",
        replies: []
    },
    {
        ID:"R4",
        createdDate : new Date("2023-06-06"),
        VoteUp : 4,
        VoteDown : 2,
        content : "This is the fourth comment",
        replies: [
            {
                ID:"R4-1",
                createdDate : new Date("2023-06-07"),
                VoteUp : 1,
                VoteDown : 0,
                content : "This is a reply to the fourth comment",
                replies: [
                    {
                        ID:"R4-1-1",
                        createdDate : new Date("2023-06-08"),
                        VoteUp : 0,
                        VoteDown : 0,
                        content : "This is a nested reply to the fourth comment",
                        replies: [
                            {
                                ID:"R4-1-1-1",
                                createdDate : new Date("2023-06-09"),
                                VoteUp : 0,
                                VoteDown : 0,
                                content : "This is a nested reply to the nested reply of the fourth comment",
                                replies: []
                            },
                            {
                                ID:"R4-1-1-2",
                                createdDate : new Date("2023-06-10"),
                                VoteUp : 0,
                                VoteDown : 0,
                                content : "This is another nested reply to the nested reply of the fourth comment",
                                replies: []
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        ID:"R5",
        createdDate : new Date("2023-06-11"),
        VoteUp : 6,
        VoteDown : 1,
        content : "This is the fifth comment",
        replies: []
    },
    {
        ID:"R6",
        createdDate : new Date("2023-06-12"),
        VoteUp : 2,
        VoteDown : 0,
        content : "This is the sixth comment",
        replies: [
            {
                ID:"R6-1",
                createdDate : new Date("2023-06-13"),
                VoteUp : 1,
                VoteDown : 0,
                content : "This is a reply to the sixth comment",
                replies: []
            }
        ]
    },
    {
        ID:"R7",
        createdDate : new Date("2023-06-14"),
        VoteUp : 3,
        VoteDown : 1,
        content : "This is the seventh comment",
        replies: []
    },
    {
        ID:"R8",
        createdDate : new Date("2023-06-15"),
        VoteUp : 5,
        VoteDown : 2,
        content : "This is the eighth comment",
        replies: [
            {
                ID:"R8-1",
                createdDate : new Date("2023-06-16"),
                VoteUp : 2,
                VoteDown : 0,
                content : "This is a reply to the eighth comment",
                replies: []
            }
        ]
    }
];

export default DummyData;