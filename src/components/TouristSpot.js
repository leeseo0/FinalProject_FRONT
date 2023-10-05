import React, {useState} from "react";
import styled from "styled-components";
import { FaHeart } from "react-icons/fa";  // 하트 아이콘
import { FaStar } from "react-icons/fa";   // 별 아이콘

const Container = styled.div`
  margin: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  text-decoration: none;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 10px;
  background-color: #fff;
`;

const HeartIcon = styled(FaHeart)`
  color: ${(props) => (props.isBookmarked ? "#d57358" : "#ccc")}; // 북마크 여부에 따라 아이콘 색상 변경
  cursor: pointer;
`;

const Image = styled.img`
  width: 100%;
  max-height: 200px;
  object-fit: cover;
  border-radius: 5px;
  margin-bottom: 10px;
`;

const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
`;

const Tag = styled.button`
  background-color: #d57358;
  font-size: 12px;
  color: white;
  padding: 5px 10px;
  border: none;
  border-radius: 20px;
  margin-right: 5px;
  margin-bottom: 5px;
  cursor: pointer;
`;

const Rating = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

const StarIcon = styled(FaStar)`
  color: #d57358;
`;

const TouristSpot = ({ name, description, imageUrl, location, tags, rating }) => {
  const [isBookmarked, setIsBookmarked] = useState(false); // 북마크 상태를 관리하는 상태 변수

  const toggleBookmark = () => {
    setIsBookmarked(!isBookmarked); // 북마크 상태를 반전
  };
  return (
    <Container>
      <Image src={imageUrl} alt={name} />
      <h3>
        {name}{" "}
        <HeartIcon
          isBookmarked={isBookmarked}
          onClick={toggleBookmark}
        />{" "}
      </h3>
      {/* <p>{description}</p> */}
      {/* <p>{location}</p> */}
      <TagList>
        {tags.map((tag, index) => (
          <Tag key={index}>{tag}</Tag>
        ))}
      </TagList>
      {/* <Rating>
        {Array.from({ length: 5 }).map((_, index) => (
          <StarIcon key={index} />
        ))}
        <span>{rating}</span>
      </Rating> */}
    </Container>
  );
};

export default TouristSpot;