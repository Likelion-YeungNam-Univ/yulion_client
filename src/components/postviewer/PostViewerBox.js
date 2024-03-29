import styled from "styled-components";
import CommentBox from "../comment/CommentBox";
import CommentUpdateBox from "../comment/CommentUpdateBox";
import { useEffect, useState } from "react";
import MDEditor from '@uiw/react-md-editor';

const PostViewer = () => {

  const [body, setBody] = useState(`# Hello world
  ### this is test data
  - one
  - two
  `)

  useEffect(() => {
    console.log(body)
  }, [body])

  return (
    <PostContainer>
      <PostTitleContainer>
        <PostHeader>
          <MovePostList href="/post">NOTICE {">"}</MovePostList>
          <PostingButton>글 등록</PostingButton>
        </PostHeader>
        <PostTitle>제목</PostTitle>
        <PostInfo>
          <PostWriter>이름</PostWriter>
          <PostField>분야</PostField>
        </PostInfo>
        <PostInfoEtc>
          <PostDate>날짜</PostDate>
          <PostDate>조회</PostDate>
        </PostInfoEtc>
      </PostTitleContainer>
      <Divider></Divider>
      <MdWrap>
        <MDEditor.Markdown source={body} style={{ whiteSpace: 'pre-wrap' }} />
      </MdWrap>
      <Divider></Divider>
      {/* </PostContext> */}
      <CommentBox />
      <CommentUpdateBox />
    </PostContainer>
  );
};

export default PostViewer;

const PostContainer = styled.div`
  padding: 20px;
  width: 1440px;
  height: 1199px;
  margin: 0 auto;
  border: 1px solid var(--Gray-20, #d1d1d1);
`;
const PostTitleContainer = styled.div`
  width: 1380px;
  // padding-left: 20px;
  padding-left: 20px;
`;
const PostHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;
const PostingButton = styled.button`
  display: inline-flex;
  padding: 10px 12px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 5px;
  background: rgba(255, 119, 16, 0.2);
  color: var(--Primary-color, #ff7710);
  /* Body/14px/140%/semibold */
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 140%;
  border: none;
`;

const MovePostList = styled.a`
  color: var(--Primary-color, #ff7710);
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  text-decoration-line: none;
`;

const PostTitle = styled.h1`
  color: var(--gray-50-black, #1f1f1f);
  font-family: Pretendard;
  font-size: 40px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 56px */
`;

const PostWriter = styled.h1`
  color: var(--gray-50-black, #1f1f1f);
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%;
  margin-right: 16px;
`;

const PostField = styled.h1`
  color: #000;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
`;
const PostInfo = styled.div`
  display: flex;
  margin-top: 10px;
`;
const PostInfoEtc = styled.div`
  display: flex;
  width: 1380px;
  margin-bottom: 32px;
  margin-top: 10px;
`;
const PostDate = styled.h1`
  color: var(--Gray-40, #656565);
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  margin-right: 16px;
`;
// const PostContext = styled.input`
//   height: 543px;
//   //576
//   width: 1380px;
//   border-bottom: 1px solid #a8a8a8;
//   border-top: 1px solid #a8a8a8;
//   outline: none;
//   border-right: none;
//   border-left: none;
// `;
// const PostText = styled.h1`
//   color: #000;
//   font-family: Pretendard;
//   font-size: 16px;
//   font-style: normal;
//   font-weight: 400;
//   line-height: 140%;
//   margin-left: 20px;
//   margin-top: 32px;
// `;


const MdWrap = styled.div`
  padding: 20px;
  
`

const GRAY30 = "#A8A8A8";
const Divider = styled.div`
  margin-top: 5px;
  margin-bottom: 25px;
  height: 1px;
  background-color: ${GRAY30};
`