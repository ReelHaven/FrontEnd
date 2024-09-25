export class Forum {
  postId: number;
  userId: number;
  contentId: number;
  comment: string;
  score: number;

  constructor(postId: number, userId: number, contentId: number, comment: string, score: number) {
    this.postId = postId;
    this.userId = userId;
    this.contentId = contentId;
    this.comment = comment;
    this.score = score;
  }
}
