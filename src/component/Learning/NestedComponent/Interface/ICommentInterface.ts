export default interface ICommentInterface {
    ID:string;
    createdDate : Date;
    VoteUp : number;
    VoteDown : number;
    content : string;
    replies:Array<ICommentInterface>;
}