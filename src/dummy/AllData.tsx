import { LoremIpsum_1Paragraph, LoremIpsum_1Sentence, LoremIpsum_3Paragraph } from "./LoremIpsum"

export const UserData = [
  {
    "id" : 1,
    "username" : "Petir Guntur",
    "image" : undefined,
    "password" : "",
    "linked" : true,
  },
  {
    "id" : 2,
    "username" : "Air Laut",
    "image" : undefined,
    "password" : "",
    "linked" : false,
  },
  {
    "id" : 3,
    "username" : "Awan Gelap",
    "image" : undefined,
    "password" : "",
    "linked" : true,
  }
]

export const ForumData = [
  {
    "id" : 1,
    "title" : "Manusia kalo disamber petir mati ga?",
    "authorID" : 1,
    "created_at" : "2003-04-26",
    "post_count" : 3,
  },
  {
    "id" : 2,
    "title" : "Apah iyah manusia adalah tumbuhan?",
    "authorID" : 1,
    "created_at" : "2003-05-21",
    "post_count" : 5,
  },
  {
    "id" : 3,
    "title" : "Harimau teh maung atawa teu?",
    "authorID" : 2,
    "created_at" : "2005-02-28",
    "post_count" : 1,
  },
  {
    "id" : 4,
    "title" : "Maneh teh indit ka dieu?",
    "authorID" : 3,
    "created_at" : "2002-09-21",
    "post_count" : 4,
  },
]

export const PostData = [
  {
    "forum_id" : 1,
    "post_id" : 1,
    "author_id" : 1,
    "created_at" : "2003-05-12",
    "content" : LoremIpsum_3Paragraph,
  },
  {
    "forum_id" : 1,
    "post_id" : 2,
    "author_id" : 2,
    "created_at" : "2003-06-22",
    "content" : LoremIpsum_1Paragraph,
  },
  {
    "forum_id" : 1,
    "post_id" : 3,
    "author_id" : 1,
    "created_at" : "2006-12-26",
    "content" : LoremIpsum_1Paragraph,
  },
  {
    "forum_id" : 2,
    "post_id" : 1,
    "author_id" : 1,
    "created_at" : "2007-04-26",
    "content" : LoremIpsum_1Paragraph,
  },
  {
    "forum_id" : 3,
    "post_id" : 1,
    "author_id" : 2,
    "created_at" : "2005-11-24",
    "content" : LoremIpsum_3Paragraph,
  },
  {
    "forum_id" : 3,
    "post_id" : 2,
    "author_id" : 3,
    "created_at" : "2008-11-22",
    "content" : LoremIpsum_1Sentence,
  },
  {
    "forum_id" : 4,
    "post_id" : 1,
    "author_id" : 3,
    "created_at" : "2009-10-30",
    "content" : LoremIpsum_3Paragraph,
  }
]